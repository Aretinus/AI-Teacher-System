import { API_BASE, DEFAULT_USER } from './config'

export async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

export async function apiPost(path, body) {
  return apiSend(path, 'POST', body)
}

export async function apiPut(path, body) {
  return apiSend(path, 'PUT', body)
}

async function apiSend(path, method, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.message || `HTTP ${res.status}`)
  return data
}

export function getSubjects() {
  return apiGet('/api/subjects').then((d) => d.subjects || [])
}

export function getStyles() {
  return apiGet('/api/styles').then((d) => d.styles || [])
}

export function getTtsVoices() {
  return apiGet('/api/tts/voices').then((d) => d.voices || [])
}

export function getCourses(subject) {
  return apiGet(`/api/courses?subject=${encodeURIComponent(subject)}`).then((d) => d.courses || [])
}

export function getSettings() {
  return apiGet('/api/settings')
}

export function saveSettings(body) {
  return apiPut('/api/settings', body)
}

export function testSettings(body) {
  return apiPost('/api/settings/test', body)
}

export function scanBooks(body) {
  return apiPost('/api/books/scan', body || {})
}

export function distillBook(body) {
  return apiPost('/api/books/distill', body)
}

export function getDistillJob(jobId) {
  return apiGet(`/api/books/distill/${jobId}`)
}

export function scanOcrBooks(body) {
  return apiPost('/api/ocr/scan', body || {})
}

export function startOcr(file, subject) {
  return apiPost('/api/ocr/start', { file, subject })
}

export function getLogList(type, subject) {
  const q = subject ? `?subject=${encodeURIComponent(subject)}` : ''
  return apiGet(`/api/logs/${type}${q}`).then((d) => d.logs || [])
}

export function getLogDetail(type, id) {
  return apiGet(`/api/logs/${type}/${encodeURIComponent(id)}`)
}

export function getOcrJob(jobId) {
  return apiGet(`/api/ocr/job/${jobId}`)
}

export function getState(userId = DEFAULT_USER) {
  return apiGet(`/api/users/${userId}/state`)
}

export function getProfile(userId = DEFAULT_USER) {
  return apiGet(`/api/users/${userId}/profile`)
}

export function getHistory(userId = DEFAULT_USER) {
  return apiGet(`/api/users/${userId}/history`)
}

export function getSession(sessionId) {
  return apiGet(`/api/sessions/${sessionId}`)
}

export function deleteSession(sessionId, userId = DEFAULT_USER) {
  return fetch(`${API_BASE}/api/sessions/${sessionId}?userId=${userId}`, { method: 'DELETE' })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return res.json()
    })
}

export function sendMessage({ subject, style, course, message, conversationId, userId = DEFAULT_USER }) {
  return apiPost('/api/chat', { userId, subject, style, course, message, conversationId })
}

export function uploadFile(name, dataBase64) {
  return apiPost('/api/upload', { name, data: dataBase64 })
}

/**
 * 流式对话：POST /api/chat/stream，解析 SSE 事件。
 * onDelta(deltaText)、onSession({sessionId, subject})、onDone(evaluation)、onError(msg)
 * 空闲超时（idleTimeoutMs，默认 60000）：超过该时长无任何数据 → abort 并返回 { timedOut: true }（不触发 onError）
 */
export async function streamChat({ subject, style, course, message, conversationId, userId = DEFAULT_USER, debug = false, idleTimeoutMs = 60000 }, handlers = {}, signal) {
  const { onSession, onDelta, onDone, onError } = handlers
  const idleCtrl = new AbortController()
  let idleTimer = null
  const resetIdle = () => {
    clearTimeout(idleTimer)
    idleTimer = setTimeout(() => idleCtrl.abort(), idleTimeoutMs)
  }
  if (signal) {
    if (signal.aborted) return { aborted: true }
    signal.addEventListener('abort', () => idleCtrl.abort())
  }
  const resp = await fetch(`${API_BASE}/api/chat/stream`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, subject, style, course, message, conversationId, debug }),
    signal: idleCtrl.signal,
  })
  if (!resp.ok) {
    const data = await resp.json().catch(() => ({}))
    onError && onError(data.message || `HTTP ${resp.status}`)
    return null
  }
  const reader = resp.body.getReader()
  const decoder = new TextDecoder('utf-8')
  let buf = ''
  let full = ''
  let sessionId = null
  let resolvedSubject = null
  let aborted = false
  let timedOut = false
  try {
    while (true) {
      resetIdle()
      const { done, value } = await reader.read()
      if (done) break
      buf += decoder.decode(value, { stream: true })
      const blocks = buf.split('\n\n')
      buf = blocks.pop()
      for (const block of blocks) {
        const evt = parseSSEBlock(block)
        if (!evt) continue
        if (evt.event === 'session') {
          sessionId = evt.data.sessionId
          resolvedSubject = evt.data.subject
          onSession && onSession({ sessionId, subject: resolvedSubject })
        } else if (evt.event === 'delta') {
          full += evt.data.delta || ''
          onDelta && onDelta(evt.data.delta || '', full)
        } else if (evt.event === 'done') {
          onDone && onDone(evt.data.evaluation || null, full, sessionId, resolvedSubject, evt.data.replyContent || null)
        } else if (evt.event === 'error') {
          onError && onError(evt.data.error || '未知错误')
        }
      }
    }
  } catch (e) {
    if (e.name === 'AbortError') {
      if (signal && signal.aborted) {
        aborted = true
        onError && onError('已停止')
      } else {
        timedOut = true
      }
    } else {
      throw e
    }
  }
  clearTimeout(idleTimer)
  if (!sessionId && !aborted && !timedOut) onError && onError('连接已关闭')
  return { sessionId, subject: resolvedSubject, full, aborted, timedOut }
}

function parseSSEBlock(block) {
  let event = 'message'
  const dataLines = []
  for (const line of block.split('\n')) {
    if (line.startsWith('event:')) event = line.slice(6).trim()
    else if (line.startsWith('data:')) dataLines.push(line.slice(5).trim())
  }
  if (!dataLines.length) return null
  const joined = dataLines.join('\n')
  let data = null
  try {
    data = JSON.parse(joined)
  } catch (e) {
    data = { raw: joined }
  }
  return { event, data }
}
