import { streamChat, getSession } from '@/api'
import { API_BASE } from '@/config'
import { onTtsFail } from '@/services/tts'

let active = false
let phase = 'idle' // idle | listening | thinking | speaking
let sessionId = ''
let subject = ''
let course = ''
let messages = [] // [{role, content}]
let lastError = ''

let recog = null
let finalText = ''
let interimText = ''
let lastResultAt = 0
let silenceTimer = null
let restarting = false
let recogState = 'idle' // idle | starting | recognizing | stopped | error
let notice = '' // 用户可见的识别状态提示（无声音/网络异常等）
let stopAutoRestart = false // 权限被拒等不可恢复错误：停止自动重启
let recogRetries = 0 // 网络类错误连续重试计数

let ttsQueue = []
let ttsIndex = 0
let ttsAudio = null
let ttsToken = 0

let abortController = null
let interrupted = false // 用户手动打断：抑制后续错误兜底消息
let reqToken = 0 // 请求代际：新问题提交后旧请求的回调全部失效

const SILENCE_BASE_MS = 650 // 明确完结（标点/语气词）的基础静音判定
const SILENCE_PLAIN_MS = 1800 // 无标点长句：给足思考时间
const SILENCE_REFRESH_MS = 250 // 静音复查间隔
const SILENCE_SHORT_MS = 1200 // 短句（≤5字）静音判定
const SILENCE_HARD_MS = 3200 // 未完信号结尾的强制提交上限
const SILENCE_ABSOLUTE_MS = 6000 // 绝对静音：重置识别器

function emit() {
  uni.$emit('voiceCall', {
    active,
    phase,
    sessionId,
    subject,
    course,
    messages: messages.slice(),
    listeningText: (finalText + interimText).trim(),
    recogState,
    notice,
    error: lastError,
  })
}

function setRecogState(s, note) {
  recogState = s
  if (note !== undefined) notice = note
  emit()
}

function setPhase(p) {
  phase = p
  emit()
}

function cleanForTTS(text) {
  return String(text)
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\$[^$]*\$|\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_`>#~|]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function splitSentences(text) {
  const cleaned = cleanForTTS(text)
  if (!cleaned) return []
  const parts = cleaned.match(/[^。！？!?；;\n]+[。！？!?；;]?/g) || [cleaned]
  const segs = []
  let cur = ''
  for (const p of parts) {
    if ((cur + p).length > 300 && cur) {
      segs.push(cur)
      cur = p
    } else {
      cur += p
    }
  }
  if (cur) segs.push(cur)
  return segs
}

function restartListening(silent) {
  if (!active || (phase !== 'listening' && phase !== 'thinking')) return
  if (restarting) return
  restarting = true
  clearSilenceTimer()
  try {
    if (recog) {
      try { recog.stop() } catch (e) {}
    }
    recog = createRecog()
    stopAutoRestart = false
    if (!silent) setRecogState('starting', '正在启动语音识别…')
    recog.start()
    finalText = ''
    interimText = ''
    console.log('[voiceCall] recog.start() @', new Date().toLocaleTimeString())
  } catch (e) {
    restarting = false
    lastError = '语音引擎启动失败：' + e.message
    setRecogState('error', lastError)
  }
}

function clearSilenceTimer() {
  if (silenceTimer) {
    clearTimeout(silenceTimer)
    silenceTimer = null
  }
}

// 停止语音识别并丢弃半截内容（AI 播报期间不收录麦克风，避免把 AI 声音当作用户输入）
function stopRecog() {
  clearSilenceTimer()
  try {
    if (recog) recog.stop()
  } catch (e) {}
  finalText = ''
  interimText = ''
}

function stripFillers(text) {
  return String(text)
    .replace(/(嗯|呃|啊|哦|额|em+|那个|这个|就是说|就是|然后|那么|那|反正|其实)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function hasContent(text) {
  return stripFillers(text)
    .replace(/[\s,，。.！!？?；;、…：:]+/g, '')
    .trim().length > 0
}

// 根据内容判断一句话的完结程度（而不是只靠静音时长）
// done: 明确完结（句号/问号/感叹号/语气词/A不A问句）
// plain: 较长的完整句但无完结标点
// short: 过短，可能是应答或还没组织好
// unfinished: 句尾是逗号类标点或连接词，明显还要继续说
function completionLevel(text) {
  const t = stripFillers(text)
  if (!t) return 'unfinished'
  const tail = t.slice(-3)
  if (/[。！？!?]/.test(t.slice(-2))) return 'done'
  const unfinishedTail = /[,，、;；…：]$/.test(tail) ||
    /(而且|但是|不过|所以|因为|如果|要是|然后|就是说|比如说|比如|还有|另外|其实|那|那么|反正|总之|对了|顺便|等一下|然后呢)$/.test(tail)
  if (unfinishedTail) return 'unfinished'
  if (/(吗|呢|吧|啊|呀|哦|唉|行不行|好不好|对不对|可不可以|能不能|要不要)$/.test(tail)) return 'done'
  return t.length >= 6 ? 'plain' : 'short'
}

function scheduleSilenceCheck() {
  clearSilenceTimer()
  const tick = () => {
    if (!active || (phase !== 'listening' && phase !== 'thinking')) return
    const silentMs = Date.now() - lastResultAt
    const t = (finalText + interimText).trim()
    const hasTxt = hasContent(t)
    if (silentMs >= SILENCE_ABSOLUTE_MS) {
      if (hasTxt) finalizeUtterance()
      else restartListening()
      return
    }
    if (!hasTxt) {
      silenceTimer = setTimeout(tick, SILENCE_REFRESH_MS)
      return
    }
    const level = completionLevel(t)
    const needMs = level === 'done' ? SILENCE_BASE_MS
      : level === 'plain' ? SILENCE_PLAIN_MS
      : level === 'short' ? SILENCE_SHORT_MS
      : SILENCE_HARD_MS
    if (silentMs >= needMs) {
      finalizeUtterance()
      return
    }
    silenceTimer = setTimeout(tick, SILENCE_REFRESH_MS)
  }
  silenceTimer = setTimeout(tick, SILENCE_REFRESH_MS)
}

function createRecog() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition
  const r = new SR()
  r.lang = 'zh-CN'
  r.continuous = true
  r.interimResults = true

  r.onresult = (e) => {
    lastResultAt = Date.now()
    if (recogState !== 'recognizing') setRecogState('recognizing', '')
    // interim 结果是累积快照（同一段话每次事件都会携带最新完整文本），必须重算而非 +=
    let interim = ''
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) finalText += e.results[i][0].transcript
      else interim += e.results[i][0].transcript
    }
    interimText = interim
    emit()
    scheduleSilenceCheck()
  }

  r.onstart = () => {
    restarting = false
    lastResultAt = Date.now()
    setRecogState('recognizing', '')
    scheduleSilenceCheck()
    console.log('[voiceCall] recog started, waiting for speech…')
  }

  r.onspeechstart = () => {
    lastResultAt = Date.now()
    scheduleSilenceCheck()
  }

  r.onspeechend = () => {
    lastResultAt = Date.now()
    scheduleSilenceCheck()
  }

  r.onerror = (e) => {
    console.warn('[voiceCall] recog error:', e.error)
    if (!active) return
    if (e.error === 'no-speech') {
      // 没听到声音：给用户可见提示，短暂后重启识别器
      restarting = false
      setRecogState('stopped', '没有听清，请再试一次')
      setTimeout(restartListening, 600)
      return
    }
    if (e.error === 'network' || e.error === 'service-not-allowed') {
      // Chrome 语音识别走 Google 在线服务，网络不可达时静默失败——必须提示
      restarting = false
      recogRetries++
      if (recogRetries >= 3) {
        stopAutoRestart = true
        setRecogState('error', '语音识别服务连接失败（浏览器依赖在线语音服务，请检查网络/代理后重新进入通话）')
        return
      }
      setRecogState('error', '语音识别服务连接失败（' + recogRetries + '/3），自动重试中…')
      setTimeout(restartListening, 2000)
      return
    }
    if (e.error === 'aborted') {
      restarting = false
      if (phase === 'listening') setTimeout(restartListening, 400)
      return
    }
    if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
      lastError = '麦克风权限被拒绝，请在浏览器地址栏允许麦克风后重试'
      stopAutoRestart = true
      setRecogState('error', lastError)
      emit()
      return
    }
    lastError = '语音识别错误：' + (e.error || 'unknown')
    setRecogState('error', lastError)
  }

  r.onend = () => {
    restarting = false
    if (!active) return
    if (stopAutoRestart) return
    if (phase === 'listening' || phase === 'thinking') {
      const t = finalText.trim()
      if (t) {
        // Chrome 提前断句：立即提交（新问题会顶掉进行中的旧请求）
        setPhase('thinking')
        sendFinal(t)
        setTimeout(() => restartListening(), 250)
      } else {
        setTimeout(restartListening, 300)
      }
    }
  }

  return r
}

function finalizeUtterance() {
  clearSilenceTimer()
  if (!active || (phase !== 'listening' && phase !== 'thinking')) return
  const t = (finalText + interimText).trim()
  if (!hasContent(t)) return
  try { recog.stop() } catch (e) {}
  setPhase('thinking')
  sendFinal(t)
  // 思考/回答生成期间继续聆听：用户补充或更正时，新问题会顶掉当前请求（只答最新一次）
  setTimeout(() => restartListening(), 250)
}

async function sendFinal(text) {
  const myToken = ++reqToken
  // 新问题顶掉进行中的旧请求：中止流式回复，只回答最新一次
  if (abortController) {
    try { abortController.abort() } catch (e) {}
    abortController = null
  }
  interrupted = false
  finalText = ''
  interimText = ''
  messages.push({ role: 'user', content: text, at: new Date().toISOString() })
  emit()
  try {
    abortController = new AbortController()
    const MAX_ATTEMPTS = 4
    let result = null
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      if (attempt > 1) {
        if (myToken !== reqToken) return
        uni.showToast({ title: `回复超时，正在重试（${attempt - 1}/3）…`, icon: 'none' })
        setPhase('thinking')
      }
      result = await streamChat(
        { subject, style: 'standard', course: course || undefined, message: text, conversationId: sessionId || undefined },
        {
          onSession: ({ sessionId: sid, subject: resolved }) => {
            if (myToken !== reqToken) return
            sessionId = sid
            if (!subject && resolved) subject = resolved
            emit()
          },
          onDelta: () => {},
          onDone: (evaluation, full, sid, resolvedSubject, replyContent) => {
            if (myToken !== reqToken) return
            let content = replyContent || full || ''
            if (!content.trim()) content = '（老师刚才没有回应，请再说一遍，或换个问题～）'
            // 模型偶发把 teaching-response JSON 当回复输出（response 字段为空时后端兜底，
            // 此处再兜一层：内容看起来是 JSON 对象时提示重说）
            if (content.trim().startsWith('{') || content.trim().startsWith('```json')) {
              content = '（老师正在组织回复，请再说一遍或换个问法～）'
            }
            messages.push({ role: 'assistant', content, at: new Date().toISOString() })
            emit()
            playReply(content)
          },
          onError: (msg) => {
            if (myToken !== reqToken || interrupted) return
            lastError = msg
            messages.push({ role: 'assistant', content: '（语音回复失败：' + msg + '）', at: new Date().toISOString() })
            emit()
            resumeListeningAfterError()
          },
        },
        abortController.signal
      )
      if (myToken !== reqToken) return
      if (!result || !result.timedOut || attempt >= MAX_ATTEMPTS) break
    }
    abortController = null
    if (!interrupted && result && result.timedOut) {
      lastError = '回复超时'
      if (active) {
        messages.push({ role: 'assistant', content: '（语音回复失败：回复超时，请再说一次）', at: new Date().toISOString() })
        emit()
        resumeListeningAfterError()
      }
    }
  } catch (e) {
    abortController = null
    if (active && !interrupted && myToken === reqToken) {
      lastError = e.message
      messages.push({ role: 'assistant', content: '（语音回复失败：' + e.message + '）', at: new Date().toISOString() })
      emit()
      resumeListeningAfterError()
    }
  }
}

function resumeListeningAfterError() {
  if (!active) return
  setPhase('listening')
  setTimeout(restartListening, 500)
}

async function playReply(text) {
  if (!active) return
  stopTTS()
  setPhase('speaking')
  stopRecog() // 播报期间停止收录麦克风，避免 AI 声音被识别成用户输入
  const token = ++ttsToken
  ttsQueue = splitSentences(text)
  ttsIndex = 0
  while (active && token === ttsToken && ttsIndex < ttsQueue.length) {
    const seg = ttsQueue[ttsIndex++]
    try {
      const r = await fetch(API_BASE + '/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: seg, voice: uni.getStorageSync('ttsVoice') || 'xiaoxiao' }),
      })
      if (!r.ok) {
        if (token !== ttsToken) break
        if (onTtsFail()) { ttsIndex--; continue }
        break
      }
      if (token !== ttsToken) break
      const blob = await r.blob()
      if (token !== ttsToken) break
      await new Promise((resolve) => {
        const url = URL.createObjectURL(blob)
        const a = new Audio(url)
        ttsAudio = a
        a.onended = () => { URL.revokeObjectURL(url); resolve() }
        a.onerror = () => { URL.revokeObjectURL(url); resolve() }
        a.play().catch(() => resolve())
      })
    } catch (e) {
      if (token !== ttsToken) break
      if (onTtsFail()) { ttsIndex--; continue }
      break
    }
  }
  if (token !== ttsToken || !active) return
  ttsAudio = null
  if (active) {
    setPhase('listening')
    setTimeout(restartListening, 300)
  }
}

function stopTTS() {
  ttsToken++
  ttsQueue = []
  ttsIndex = 0
  if (ttsAudio) {
    try { ttsAudio.pause() } catch (e) {}
    ttsAudio = null
  }
}

export const voiceCall = {
  get state() {
    return { active, phase, sessionId, subject, course, messages: messages.slice(), listeningText: (finalText + interimText).trim(), recogState, notice, error: lastError }
  },
  start({ subject: s, course: c, conversationId }) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SR) return { ok: false, error: '当前浏览器不支持语音通话，请用 Chrome/Edge 打开' }
    if (active) return { ok: true }
    active = true
    subject = s || ''
    course = c || ''
    sessionId = conversationId || ''
    messages = []
    lastError = ''
    notice = ''
    recogState = 'idle'
    stopAutoRestart = false
    recogRetries = 0
    abortController = null
    interrupted = false
    setPhase('listening')
    setTimeout(restartListening, 200)
    emit()
    // 载入当前会话已有文本，与对话页同步显示
    if (sessionId) {
      getSession(sessionId)
        .then((d) => {
          if (!active || !d || !Array.isArray(d.messages)) return
          messages = d.messages
            .filter((m) => m.role === 'user' || m.role === 'assistant')
            .map((m) => ({ role: m.role, content: m.content || '', at: m.at }))
          emit()
        })
        .catch(() => { /* 会话加载失败不阻塞通话 */ })
    }
    return { ok: true }
  },
  end() {
    active = false
    interrupted = true
    reqToken++ // 挂断后所有在途回调失效
    clearSilenceTimer()
    if (recog) {
      try { recog.stop() } catch (e) {}
      recog = null
    }
    finalText = ''
    interimText = ''
    if (abortController) {
      try { abortController.abort() } catch (e) {}
      abortController = null
    }
    stopTTS()
    setPhase('idle')
  },
  speakReply(text) {
    if (!active) return false
    playReply(text)
    return true
  },
  // 手动打断：思考中 → 中止请求；播报中 → 停止声音；随后重新聆听
  interrupt() {
    if (!active || (phase !== 'speaking' && phase !== 'thinking')) return false
    interrupted = true
    reqToken++ // 作废所有在途请求回调
    if (phase === 'speaking') stopTTS()
    stopRecog()
    if (abortController) {
      try { abortController.abort() } catch (e) {}
      abortController = null
    }
    setPhase('listening')
    setRecogState('starting', '已打断，正在聆听…')
    setTimeout(() => restartListening(), 100)
    emit()
    return true
  },
  onEvent(cb) {
    uni.$on('voiceCall', cb)
  },
  offEvent(cb) {
    uni.$off('voiceCall', cb)
  },
}