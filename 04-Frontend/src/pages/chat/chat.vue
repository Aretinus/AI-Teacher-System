<template>
  <view class="chat-page">
    <view class="chat-header">
      <view class="header-info">
        <text class="header-course">{{ headerTitle }}</text>
      </view>
      <view class="header-actions">
        <view v-if="voiceActive" class="voice-call-tip" @click="openVoice">
          <text class="voice-call-dot"></text>
          <text>通话中</text>
        </view>
        <view class="voice-pick-btn" @click="openVoicePanel">
          <text class="voice-pick-text">{{ currentVoiceName }} ▾</text>
        </view>
        <view class="history-btn" @click="openHistory">
          <text class="history-btn-text">对话记录</text>
        </view>
        <view class="voice-btn" @click="openVoice">
          <text class="voice-btn-text">{{ voiceActive ? '进入通话' : '语音通话' }}</text>
        </view>
      </view>
    </view>

    <scroll-view scroll-y class="msg-list" :scroll-into-view="scrollInto">
      <view v-if="!messages.length" class="empty">
        <view class="empty-title">{{ emptyTitle }}</view>
        <view class="empty-sub">可以问：{{ samplePrompt }}</view>
      </view>

      <view v-for="(m, i) in messages" :key="m.id" :id="'msg-' + m.id" class="msg-row" :class="m.role">
        <view v-if="m.role === 'assistant'" class="avatar">AI</view>
        <view class="msg-col">
          <view class="bubble" :class="m.role">
            <md-render v-if="m.role === 'assistant'" :content="m.content" />
            <view v-else class="user-block">
              <view v-if="m.attachments && m.attachments.length" class="attach-list">
                <image
                  v-for="(a, ai) in m.attachments"
                  v-if="a.type === 'image'"
                  :key="ai"
                  :src="a.url"
                  class="attach-img"
                  mode="widthFix"
                  @click="previewImage(a.url)"
                />
                <view v-for="(a, ai) in m.attachments" v-if="a.type === 'file'" :key="ai" class="attach-file">
                  <text class="attach-name">{{ a.name }}</text>
                </view>
              </view>
              <text v-if="m.content" class="user-text">{{ m.content }}</text>
            </view>
            <view v-if="m.role === 'assistant' && m.streaming" class="streaming">
              <view class="dot"></view><view class="dot"></view><view class="dot"></view>
            </view>
          </view>
          <view v-if="m.role === 'assistant' && !m.streaming && m.content" class="msg-actions">
            <text class="copy-btn" @click="copyLatex(m)">复制 LaTeX</text>
            <text class="copy-btn" @click="copyRendered(m)">复制文本</text>
            <text class="copy-btn speak-btn" :class="{ speaking: ttsMsgId === m.id }" @click="playTTS(m)">
              {{ ttsMsgId === m.id ? '停止' : '朗读' }}
            </text>
          </view>
        </view>
      </view>

      <view v-if="errorMsg" class="error-banner">{{ errorMsg }}</view>
    </scroll-view>

    <view v-if="pendingFiles.length" class="pending-bar">
      <view v-for="(f, i) in pendingFiles" :key="i" class="pending-chip">
        <text class="pending-name">{{ f.name }}</text>
        <text class="pending-x" @click="pendingFiles.splice(i, 1)">×</text>
      </view>
    </view>

    <view class="input-bar">
      <view class="attach-btn" @click="pickFile">＋</view>
      <input
        v-model="input"
        class="input"
        placeholder="输入你的问题…"
        confirm-type="send"
        :disabled="streaming"
        @confirm="send"
      />
      <view class="send-btn" :class="{ disabled: !input.trim() && !streaming, stopping: streaming }" @click="send">
        <text v-if="!streaming">发送</text>
        <text v-else>停止</text>
      </view>
    </view>

    <view v-if="voicePanel" class="panel-mask" @click="voicePanel = false">
      <view class="panel" @click.stop>
        <view class="panel-head">
          <text class="panel-title">AI 音色（点击试听）</text>
          <text class="panel-close" @click="voicePanel = false">关闭</text>
        </view>
        <scroll-view scroll-y class="panel-list">
          <view v-if="!ttsVoices.length" class="panel-empty">音色列表加载中…</view>
          <view
            v-for="v in ttsVoices"
            :key="v.key"
            class="voice-item"
            :class="{ selected: v.key === ttsVoice, previewing: previewKey === v.key }"
            @click="pickVoice(v)"
          >
            <view class="voice-item-info">
              <view class="voice-item-name">
                <text class="voice-item-name-text">{{ v.name }}</text>
                <text v-if="v.key === ttsVoice" class="voice-item-flag">当前</text>
                <text v-if="previewKey === v.key" class="voice-item-flag playing">试听中</text>
              </view>
              <view class="voice-item-label">{{ v.label }}</view>
            </view>
            <view class="voice-item-play">▶</view>
          </view>
        </scroll-view>
      </view>
    </view>

    <view v-if="historyPanel" class="panel-mask" @click="historyPanel = false">
      <view class="panel" @click.stop>
        <view class="panel-head">
          <text class="panel-title">对话记录（{{ subjectName(selectedSubject) }}）</text>
          <text class="panel-close" @click="historyPanel = false">关闭</text>
        </view>
        <scroll-view scroll-y class="panel-list">
          <view v-if="!sessionHistory.length" class="panel-empty">暂无会话记录</view>
          <view v-for="s in sessionHistory" :key="s.sessionId" class="panel-item" @click="loadSessionFromHistory(s)">
            <view class="panel-item-head">
              <text class="panel-item-date">{{ s.date }}</text>
              <text v-if="s.knowledgePoint" class="panel-item-kp">{{ s.knowledgePoint }}</text>
            </view>
            <view class="panel-item-summary">{{ oneLine(s.summary) }}</view>
            <view class="panel-item-foot">
              <text v-if="s.nextGoal" class="panel-item-goal">下一步：{{ s.nextGoal }}</text>
              <text class="panel-item-del" @click.stop="delSession(s)">删除</text>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import MdRender from '@/components/md-render.vue'
import { getSubjects, getSession, getHistory, deleteSession, streamChat, uploadFile, getTtsVoices } from '@/api'
import { renderMarkdown } from '@/utils/md'
import { API_BASE } from '@/config'
import { voiceCall } from '@/services/voice-call.js'
import { onTtsFail } from '@/services/tts'

let msgSeq = 0

export default {
  components: { MdRender },
  data() {
    return {
      subjects: [],
      selectedSubject: '',
      selectedStyle: 'standard',
      selectedCourse: '',
      input: '',
      messages: [],
      conversationId: '',
      streaming: false,
      errorMsg: '',
      scrollInto: '',
      abortController: null,
      pendingFiles: [],
      ttsMsgId: '',
      ttsQueue: [],
      ttsIndex: 0,
      ttsAudio: null,
      historyPanel: false,
      sessionHistory: [],
      voiceActive: false,
      voicePanel: false,
      ttsVoices: [],
      ttsVoice: uni.getStorageSync('ttsVoice') || 'xiaoxiao',
      previewKey: '',
      previewAudio: null,
    }
  },
  computed: {
    currentVoiceName() {
      const v = this.ttsVoices.find((x) => x.key === this.ttsVoice)
      return v ? v.name : (this.ttsVoice === 'yunjian' ? '云健' : '晓晓')
    },
    headerTitle() {
      const s = this.subjects.find((x) => x.id === this.selectedSubject)
      if (this.selectedCourse) return `${s ? s.name : '学科'} · 《${this.selectedCourse}》`
      return s ? s.name : '全科提问'
    },
    emptyTitle() {
      if (!this.selectedSubject && !this.selectedCourse) return '全科提问（自动判断学科与课程）'
      const s = this.subjects.find((x) => x.id === this.selectedSubject)
      if (this.selectedCourse) return `${s ? s.name : ''} · 课程《${this.selectedCourse}》`
      return `向 ${s ? s.name : ''}教师提问`
    },
    samplePrompt() {
      return this.selectedSubject === 'physics'
        ? '卫星为什么不会掉下来？'
        : '为什么导数表示变化率？'
    },
  },
onLoad(options) {
      this.loadSubjects().then(() => {
        this.selectedSubject = options.subject || ''
        this.selectedStyle = options.style || 'standard'
        this.selectedCourse = options.course ? decodeURIComponent(options.course) : ''
        if (options.sessionId) {
          this.conversationId = options.sessionId
          this.loadSession(options.sessionId)
        }
      })
    },
  onShow() {
    const vs = voiceCall.state
    this.voiceActive = vs.active
    if (vs.active && vs.sessionId && vs.sessionId === this.conversationId && vs.messages.length > this.messages.length) {
      this.messages = []
      this.loadSession(vs.sessionId)
    }
    this.ttsVoice = uni.getStorageSync('ttsVoice') || 'xiaoxiao'
    if (!this.ttsVoices.length) this.loadTtsVoices()
  },
  onUnload() {
    this.streaming = false
    this.stopTTS()
    this.stopPreview()
    if (voiceCall.state.active) {
      voiceCall.end()
      uni.showToast({ title: '语音通话已挂断', icon: 'none' })
    }
  },
  methods: {
    async loadTtsVoices() {
      try {
        this.ttsVoices = await getTtsVoices()
      } catch (e) {
        this.ttsVoices = []
      }
    },
    openVoicePanel() {
      this.voicePanel = true
      if (!this.ttsVoices.length) this.loadTtsVoices()
    },
    pickVoice(v) {
      this.ttsVoice = v.key
      uni.setStorageSync('ttsVoice', v.key)
      this.previewVoice(v)
    },
    async previewVoice(v) {
      this.stopPreview()
      this.previewKey = v.key
      try {
        const r = await fetch(API_BASE + '/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: '你好，我是你的 AI 教师。这是「' + v.name + '」音色的试听，你觉得怎么样？',
            voice: v.key,
          }),
        })
        if (!r.ok) throw new Error('HTTP ' + r.status)
        const blob = await r.blob()
        const url = URL.createObjectURL(blob)
        const a = new Audio(url)
        this.previewAudio = a
        a.onended = () => {
          URL.revokeObjectURL(url)
          if (this.previewKey === v.key) this.previewKey = ''
        }
        a.onerror = () => {
          URL.revokeObjectURL(url)
          this.previewKey = ''
        }
        a.play().catch(() => {
          this.previewKey = ''
        })
      } catch (e) {
        this.previewKey = ''
        if (onTtsFail()) {
          this.ttsVoice = uni.getStorageSync('ttsVoice') || 'xiaoxiao'
          const def = this.ttsVoices.find((x) => x.key === this.ttsVoice)
          if (def) this.previewVoice(def)
          return
        }
        uni.showToast({ title: '试听失败：' + e.message, icon: 'none' })
      }
    },
    stopPreview() {
      if (this.previewAudio) {
        try { this.previewAudio.pause() } catch (e) {}
        this.previewAudio = null
      }
      this.previewKey = ''
    },
    async loadSubjects() {
      try {
        this.subjects = await getSubjects()
      } catch (e) {
        uni.showToast({ title: '无法加载学科：' + e.message, icon: 'none' })
      }
    },
    async loadSession(sessionId) {
      try {
        const detail = await getSession(sessionId)
        if (detail && detail.subject && this.subjects.some((x) => x.id === detail.subject)) {
          this.selectedSubject = detail.subject
        }
        if (detail && detail.messages && detail.messages.length) {
          for (const m of detail.messages) {
            if (m.role === 'user' || m.role === 'assistant') {
              this.pushMessage(m.role, m.content || '')
            }
          }
        }
      } catch (e) {
        uni.showToast({ title: '会话恢复失败', icon: 'none' })
      }
    },
    async restoreLatest() {
      /* 停用：进入对话默认新建，不自动恢复旧会话 */
    },
    subjectName(id) {
      const s = this.subjects.find((x) => x.id === id)
      return s ? s.name : (id || '-')
    },
    openVoice() {
      uni.navigateTo({
        url: `/pages/voice/voice?subject=${this.selectedSubject || ''}&course=${encodeURIComponent(this.selectedCourse || '')}&conversationId=${this.conversationId || ''}`,
      })
    },
    oneLine(s) {
      if (!s) return ''
      return String(s)
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/[#*`>|~_$\-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 42)
    },
    async openHistory() {
      this.historyPanel = true
      try {
        const history = await getHistory()
        this.sessionHistory = (history.sessions || []).filter(
          (s) => !this.selectedSubject || s.subject === this.selectedSubject
        )
      } catch (e) {
        this.sessionHistory = []
        uni.showToast({ title: '加载对话记录失败', icon: 'none' })
      }
    },
    loadSessionFromHistory(s) {
      this.historyPanel = false
      this.conversationId = s.sessionId
      this.messages = []
      if (!this.selectedSubject && s.subject) this.selectedSubject = s.subject
      this.loadSession(s.sessionId)
    },
    async delSession(s) {
      const confirm = await new Promise((resolve) => {
        uni.showModal({
          title: '删除会话',
          content: '确定删除这条会话记录吗？删除后不可恢复。',
          success: (r) => resolve(r.confirm),
        })
      })
      if (!confirm) return
      try {
        await deleteSession(s.sessionId)
        this.openHistory()
      } catch (e) {
        uni.showToast({ title: '删除失败：' + e.message, icon: 'none' })
      }
    },
    pushMessage(role, content, extra = {}) {
      const msg = { id: ++msgSeq, role, content, ...extra }
      this.messages.push(msg)
      return msg
    },
    pickFile() {
      uni.chooseFile({
        count: 1,
        success: (res) => {
          const f = res.tempFiles && res.tempFiles[0]
          if (!f) return
          const fileObj = typeof File !== 'undefined' && f instanceof File ? f : null
          const name = fileObj ? fileObj.name : (f.name || 'file')
          const readAsBase64 = (blob) => {
            const reader = new FileReader()
            reader.onload = () => {
              const base64 = String(reader.result).split(',')[1] || ''
              if (!base64) return uni.showToast({ title: '读取文件失败', icon: 'none' })
              uni.showLoading({ title: '上传中…' })
              uploadFile(name, base64)
                .then((r) => {
                  uni.hideLoading()
                  this.pendingFiles.push({
                    name: r.name,
                    url: API_BASE + r.url,
                    type: (fileObj && fileObj.type && fileObj.type.indexOf('image/') === 0) ? 'image' : 'file',
                  })
                })
                .catch((e) => {
                  uni.hideLoading()
                  uni.showToast({ title: '上传失败：' + e.message, icon: 'none' })
                })
            }
            reader.onerror = () => uni.showToast({ title: '读取文件失败', icon: 'none' })
            reader.readAsDataURL(blob)
          }
          if (fileObj) {
            readAsBase64(fileObj)
          } else {
            fetch(f.path).then((r) => r.blob()).then(readAsBase64)
          }
        },
        fail: () => {},
      })
    },
    previewImage(url) {
      uni.previewImage({ urls: [url], current: url })
    },
    copyText(text, tip) {
      const done = () => uni.showToast({ title: tip || '已复制', icon: 'none' })
      const fallback = () => {
        const ta = document.createElement('textarea')
        ta.value = text
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        try { document.execCommand('copy') } catch (e) {}
        document.body.removeChild(ta)
        done()
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(fallback)
      } else {
        fallback()
      }
    },
    copyLatex(m) {
      this.copyText(m.content, 'LaTeX 原文已复制')
    },
    copyRendered(m) {
      const html = renderMarkdown(m.content)
      const doc = new DOMParser().parseFromString(html, 'text/html')
      const txt = (doc.body.innerText || '').replace(/\n{3,}/g, '\n\n').trim()
      this.copyText(txt, '渲染文本已复制')
    },
    async send() {
      if (this.streaming) {
        this.stopStream()
        return
      }
      const text = this.input.trim()
      if (!text && !this.pendingFiles.length) return
      if (!this.selectedSubject) return
      const attachments = this.pendingFiles.slice()
      this.pendingFiles = []
      this.input = ''
      this.errorMsg = ''
      this.pushMessage('user', text, attachments.length ? { attachments } : {})
      const attachDesc = attachments.map((a) => `（附文件：${a.name}）`).join(' ')
      this.pushMessage('assistant', '', { streaming: true })
      this.streaming = true
      this.scrollToBottom()

      try {
        const cur = this.messages[this.messages.length - 1]
        this.abortController = new AbortController()
        await streamChat(
          { subject: this.selectedSubject, style: this.selectedStyle, course: this.selectedCourse || undefined, message: text + attachDesc, conversationId: this.conversationId || undefined, debug: uni.getStorageSync('debugMode') === '1' },
          {
            onSession: ({ sessionId, subject: resolved }) => {
              this.conversationId = sessionId
              if (!this.selectedSubject && resolved && this.subjects.some((x) => x.id === resolved)) {
                this.selectedSubject = resolved
              }
            },
            onDelta: (delta, full) => {
              const isJsonReply = /^\s*\{/.test(full.trimStart())
              if (!isJsonReply) cur.content = full
              this.scrollToBottom()
            },
            onDone: (evaluation, full, sessionId, subject, replyContent) => {
              cur.streaming = false
              if (replyContent) cur.content = replyContent
              else if (!cur.content.trim()) cur.content = full || '（空回复）'
              this.streaming = false
              this.scrollToBottom()
              if (voiceCall.state.active) voiceCall.speakReply(replyContent || cur.content)
            },
            onError: (msg) => {
              cur.streaming = false
              this.errorMsg = msg
              this.streaming = false
              if (!cur.content.trim()) cur.content = ''
            },
          },
          this.abortController.signal
        )
        this.abortController = null
      } catch (e) {
        const cur = this.messages[this.messages.length - 1]
        cur.streaming = false
        this.errorMsg = e.message
        this.streaming = false
        this.abortController = null
      }
    },
    stopStream() {
      if (this.abortController) this.abortController.abort()
      this.abortController = null
      this.streaming = false
      const cur = this.messages[this.messages.length - 1]
      if (cur && cur.streaming) {
        cur.streaming = false
        if (!cur.content.trim()) cur.content = '（已停止）'
      }
    },
    scrollToBottom() {
      const last = this.messages[this.messages.length - 1]
      this.scrollInto = last ? `msg-${last.id}` : ''
    },
    // ---------- 语音输出（后端 Edge TTS） ----------
    cleanForTTS(text) {
      return String(text)
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/\$[^$]*\$|\$\$[\s\S]*?\$\$/g, ' ')
        .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
        .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
        .replace(/^#{1,6}\s+/gm, '')
        .replace(/[*_`>#~|]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
    },
    splitSentences(text) {
      const cleaned = this.cleanForTTS(text)
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
    },
    playTTS(m) {
      if (this.ttsMsgId === m.id) {
        this.stopTTS()
        return
      }
      this.stopTTS()
      this.ttsMsgId = m.id
      this.ttsQueue = this.splitSentences(m.content)
      this.ttsIndex = 0
      this.speakNext()
    },
    async speakNext() {
      if (!this.ttsMsgId) return
      if (this.ttsIndex >= this.ttsQueue.length) {
        this.stopTTS()
        return
      }
      const seg = this.ttsQueue[this.ttsIndex++]
      try {
        const r = await fetch(API_BASE + '/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: seg, voice: uni.getStorageSync('ttsVoice') || 'xiaoxiao' }),
        })
        if (!r.ok) throw new Error('HTTP ' + r.status)
        const blob = await r.blob()
        if (!this.ttsMsgId) return
        const url = URL.createObjectURL(blob)
        const a = new Audio(url)
        this.ttsAudio = a
        a.onended = () => {
          URL.revokeObjectURL(url)
          this.speakNext()
        }
        a.onerror = () => {
          URL.revokeObjectURL(url)
          this.speakNext()
        }
        a.play().catch(() => this.speakNext())
      } catch (e) {
        if (onTtsFail()) {
          this.ttsVoice = uni.getStorageSync('ttsVoice') || 'xiaoxiao'
          this.ttsIndex--
          this.speakNext()
          return
        }
        this.stopTTS()
        uni.showToast({ title: '朗读失败：' + e.message, icon: 'none' })
      }
    },
    stopTTS() {
      this.ttsMsgId = ''
      this.ttsQueue = []
      this.ttsIndex = 0
      if (this.ttsAudio) {
        this.ttsAudio.pause()
        this.ttsAudio = null
      }
    },
  },
}
</script>

<style scoped>
.chat-page {
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--window-top, 0px));
}
.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16rpx 26rpx;
  background: #ffffff;
  border-bottom: 1rpx solid #f0f1f4;
  flex-shrink: 0;
}
.header-info {
  flex: 1;
  overflow: hidden;
}
.header-course {
  font-size: 29rpx;
  font-weight: 600;
  color: #1f2937;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.history-btn {
  flex-shrink: 0;
  background: #f0f5ff;
  border: 1rpx solid #cfe0ff;
  border-radius: 26rpx;
  padding: 8rpx 26rpx;
}
.voice-pick-btn {
  flex-shrink: 0;
  background: #eef2ff;
  border: 1rpx solid #c7d2fe;
  border-radius: 26rpx;
  padding: 8rpx 20rpx;
}
.voice-pick-text {
  font-size: 24rpx;
  color: #4f46e5;
  font-weight: 600;
}
.voice-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8f9fb;
  border: 2rpx solid transparent;
  border-radius: 18rpx;
  padding: 18rpx 24rpx;
  margin-bottom: 14rpx;
}
.voice-item.selected {
  border-color: #4f8cff;
  background: #f0f5ff;
}
.voice-item.previewing {
  border-color: #10b981;
  background: #ecfdf5;
}
.voice-item-info {
  flex: 1;
}
.voice-item-name {
  display: flex;
  align-items: center;
  gap: 12rpx;
}
.voice-item-name-text {
  font-size: 29rpx;
  font-weight: 600;
  color: #1f2937;
}
.voice-item-flag {
  font-size: 20rpx;
  color: #4f8cff;
  background: #dbeafe;
  border-radius: 10rpx;
  padding: 2rpx 12rpx;
}
.voice-item-flag.playing {
  color: #059669;
  background: #d1fae5;
}
.voice-item-label {
  margin-top: 6rpx;
  font-size: 24rpx;
  color: #8a8f99;
}
.voice-item-play {
  flex-shrink: 0;
  margin-left: 20rpx;
  font-size: 30rpx;
  color: #4f8cff;
}
.history-btn-text {
  font-size: 25rpx;
  color: #4f8cff;
  font-weight: 600;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 14rpx;
  flex-shrink: 0;
  margin-left: 20rpx;
}
.voice-btn {
  background: linear-gradient(135deg, #34d399, #10b981);
  border-radius: 26rpx;
  padding: 8rpx 26rpx;
}
.voice-btn-text {
  font-size: 25rpx;
  color: #ffffff;
  font-weight: 600;
}
.voice-call-tip {
  display: flex;
  align-items: center;
  background: rgba(16, 185, 129, 0.12);
  border: 1rpx solid rgba(16, 185, 129, 0.5);
  border-radius: 26rpx;
  padding: 8rpx 20rpx;
}
.voice-call-tip text {
  font-size: 23rpx;
  color: #059669;
  font-weight: 600;
}
.voice-call-dot {
  width: 14rpx;
  height: 14rpx;
  border-radius: 50%;
  background: #10b981;
  margin-right: 10rpx;
  animation: vcBlink 1.2s infinite;
}
@keyframes vcBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
.panel-mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 300;
  display: flex;
  align-items: flex-end;
}
.panel {
  width: 100%;
  max-height: 72vh;
  background: #ffffff;
  border-radius: 28rpx 28rpx 0 0;
  display: flex;
  flex-direction: column;
  padding: 26rpx 28rpx calc(30rpx + env(safe-area-inset-bottom));
  box-sizing: border-box;
}
.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18rpx;
}
.panel-title {
  font-size: 31rpx;
  font-weight: 600;
  color: #1f2937;
}
.panel-close {
  font-size: 26rpx;
  color: #9ca3af;
  padding: 6rpx 20rpx;
}
.panel-list {
  max-height: 56vh;
  min-height: 0;
}
.panel-empty {
  text-align: center;
  color: #9ca3af;
  font-size: 27rpx;
  padding: 60rpx 0;
}
.panel-item {
  background: #f8f9fb;
  border-radius: 18rpx;
  padding: 20rpx 24rpx;
  margin-bottom: 16rpx;
}
.panel-item-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.panel-item-date {
  font-size: 24rpx;
  color: #9ca3af;
}
.panel-item-kp {
  font-size: 22rpx;
  color: #7c3aed;
  background: #f3eefc;
  border-radius: 16rpx;
  padding: 2rpx 14rpx;
}
.panel-item-summary {
  margin-top: 10rpx;
  font-size: 26rpx;
  color: #4b5563;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.panel-item-foot {
  margin-top: 10rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.panel-item-goal {
  font-size: 23rpx;
  color: #7c3aed;
}
.panel-item-del {
  font-size: 23rpx;
  color: #ef4444;
  border: 1rpx solid #fecaca;
  border-radius: 18rpx;
  padding: 2rpx 16rpx;
}
.msg-list {
  flex: 1;
  min-height: 0;
  padding: 20rpx 22rpx 0;
  box-sizing: border-box;
}
.empty {
  padding: 100rpx 40rpx;
  text-align: center;
}
.empty-title {
  font-size: 34rpx;
  font-weight: 600;
  color: #374151;
}
.empty-sub {
  margin-top: 14rpx;
  font-size: 26rpx;
  color: #9ca3af;
}
.msg-row {
  display: flex;
  margin-bottom: 18rpx;
  align-items: flex-start;
  user-select: text;
  -webkit-user-select: text;
}
.md-body,
.user-text {
  user-select: text;
  -webkit-user-select: text;
}
.msg-row.user {
  justify-content: flex-end;
}
.msg-col {
  max-width: 80%;
  display: flex;
  flex-direction: column;
}
.msg-row.user .msg-col {
  align-items: flex-end;
}
.avatar {
  width: 56rpx;
  height: 56rpx;
  border-radius: 50%;
  background: linear-gradient(135deg, #4f8cff, #7c3aed);
  color: #fff;
  font-size: 24rpx;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 14rpx;
}
.bubble {
  border-radius: 18rpx;
  padding: 16rpx 20rpx;
  font-size: 28rpx;
  line-height: 1.6;
  max-width: 100%;
  box-sizing: border-box;
}
.bubble.assistant {
  background: #ffffff;
  border: 1rpx solid #eef1f5;
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.04);
}
.bubble.user {
  background: #4f8cff;
  color: #ffffff;
  align-self: flex-end;
}
.user-text {
  word-break: break-word;
}
.attach-list {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
  margin-bottom: 10rpx;
}
.attach-img {
  width: 100%;
  max-width: 420rpx;
  border-radius: 12rpx;
  display: block;
}
.attach-file {
  background: rgba(255, 255, 255, 0.18);
  border-radius: 10rpx;
  padding: 10rpx 16rpx;
  max-width: 420rpx;
}
.attach-name {
  font-size: 26rpx;
  color: #ffffff;
  word-break: break-all;
}
.msg-actions {
  display: flex;
  gap: 24rpx;
  margin-top: 6rpx;
  padding-left: 6rpx;
}
.copy-btn {
  font-size: 24rpx;
  color: #9ca3af;
  border: 1rpx solid #e5e7eb;
  border-radius: 24rpx;
  padding: 4rpx 18rpx;
}
.copy-btn:active {
  color: #4f8cff;
  border-color: #4f8cff;
}
.streaming {
  display: inline-flex;
  gap: 8rpx;
  margin-top: 10rpx;
}
.dot {
  width: 12rpx;
  height: 12rpx;
  border-radius: 50%;
  background: #9ca3af;
  animation: blink 1.2s infinite;
}
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }
@keyframes blink {
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
}
.error-banner {
  background: #fef2f2;
  color: #b91c1c;
  border-radius: 14rpx;
  padding: 16rpx 22rpx;
  font-size: 26rpx;
  margin-bottom: 20rpx;
}
.pending-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 12rpx;
  padding: 10rpx 24rpx 0;
  background: #ffffff;
}
.pending-chip {
  display: flex;
  align-items: center;
  gap: 10rpx;
  background: #f0f5ff;
  color: #4f8cff;
  border-radius: 10rpx;
  padding: 8rpx 16rpx;
  font-size: 24rpx;
}
.pending-name {
  max-width: 260rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pending-x {
  font-size: 28rpx;
  color: #93b4f5;
  padding: 0 4rpx;
}
.input-bar {
  display: flex;
  align-items: center;
  padding: 14rpx 22rpx calc(14rpx + env(safe-area-inset-bottom));
  background: #ffffff;
  box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.06);
  gap: 14rpx;
}
.attach-btn {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  background: #f3f4f6;
  color: #6b7280;
  font-size: 36rpx;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.attach-btn:active {
  background: #e5e7eb;
}
.speak-btn.speaking {
  color: #4f8cff;
  border-color: #4f8cff;
  background: #f0f5ff;
}
.input {
  flex: 1;
  background: #f3f4f6;
  border-radius: 36rpx;
  padding: 12rpx 26rpx;
  font-size: 28rpx;
  min-height: 46rpx;
}
.send-btn {
  background: #4f8cff;
  color: #fff;
  border-radius: 36rpx;
  padding: 12rpx 30rpx;
  font-size: 26rpx;
  font-weight: 600;
  flex-shrink: 0;
}
.send-btn.disabled {
  background: #c4d4f5;
}
.send-btn.stopping {
  background: #ef4444;
}
</style>