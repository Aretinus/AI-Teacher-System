<template>
  <view class="chat-page">
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
      <picker :range="subjectNames" :value="subjectIndex" @change="onSubjectChange" class="subject-picker">
        <view class="subject-tag">{{ selectedSubjectName }}</view>
      </picker>
      <input
        v-model="input"
        class="input"
        placeholder="输入你的问题…"
        confirm-type="send"
        :disabled="streaming"
        @confirm="send"
      />
      <view class="send-btn" :class="{ disabled: !input.trim() || streaming }" @click="send">
        <text v-if="!streaming">发送</text>
        <text v-else>停止</text>
      </view>
    </view>
  </view>
</template>

<script>
import MdRender from '@/components/md-render.vue'
import { getSubjects, getSession, streamChat, uploadFile } from '@/api'
import { renderMarkdown } from '@/utils/md'
import { API_BASE } from '@/config'

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
    }
  },
  computed: {
    subjectIndex() {
      const idx = this.subjects.findIndex((s) => s.id === this.selectedSubject)
      return idx < 0 ? 0 : idx
    },
    subjectNames() {
      return this.subjects.map((s) => s.name)
    },
    selectedSubjectName() {
      const s = this.subjects.find((x) => x.id === this.selectedSubject)
      return s ? s.name : '学科'
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
  onUnload() {
    this.streaming = false
  },
  methods: {
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
    onSubjectChange(e) {
      this.selectedSubject = this.subjects[Number(e.detail.value)].id
      this.conversationId = ''
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
          { subject: this.selectedSubject, style: this.selectedStyle, course: this.selectedCourse || undefined, message: text + attachDesc, conversationId: this.conversationId || undefined },
          {
            onSession: ({ sessionId, subject: resolved }) => {
              this.conversationId = sessionId
              if (!this.selectedSubject && resolved && this.subjects.some((x) => x.id === resolved)) {
                this.selectedSubject = resolved
              }
            },
            onDelta: (delta, full) => {
              cur.content = full
              this.scrollToBottom()
            },
            onDone: () => {
              cur.streaming = false
              if (!cur.content.trim()) cur.content = '（空回复）'
              this.streaming = false
              this.scrollToBottom()
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
  },
}
</script>

<style scoped>
.chat-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.msg-list {
  flex: 1;
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
.subject-tag {
  background: #f0f5ff;
  color: #4f8cff;
  border-radius: 12rpx;
  padding: 10rpx 18rpx;
  font-size: 24rpx;
  font-weight: 600;
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
</style>