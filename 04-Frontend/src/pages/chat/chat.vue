<template>
  <view class="chat-page">
    <view class="chat-header">
      <view class="header-info">
        <text class="header-course">{{ headerTitle }}</text>
      </view>
      <view class="header-actions">
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

    <!-- 语音通话悬浮球（最小化时显示，可拖动）：悬停/点击展开「挂断 | 进入」 -->
    <view
      v-if="voiceActive"
      ref="fabRef"
      class="voice-fab"
      :class="{ dragging: fabDragging, hovering: fabHover }"
      :style="fabStyle"
      @touchstart="fabDown"
      @mousedown="fabDown"
      @mouseenter="fabHover = true"
      @mouseleave="fabHover = false"
      @click="fabClick"
    >
      <view v-show="fabHover" class="fab-menu">
        <view class="fab-menu-svg" v-html="fabMenuSvg"></view>
      </view>
      <view ref="fabBallRef" class="fab-ball" :class="callPhase">
        <text class="fab-icon">🎙️</text>
        <text class="fab-label">{{ fabLabel }}</text>
      </view>
    </view>

    <view class="chat-body">
      <question-bar :questions="userMsgs" :active-key="activeQKey" @jump="jumpToMsg" />
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
              <text v-if="m.retrying" class="streaming-text">回复超时，正在重试（{{ m.retrying }}/3）…</text>
              <text v-else class="streaming-text">正在思考…</text>
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
          <view v-if="m.at && !(m.role === 'assistant' && m.streaming)" class="msg-time">{{ fmtTime(m.at) }}</view>
        </view>
      </view>

      <view v-if="errorMsg" class="error-banner">{{ errorMsg }}</view>
      <view id="msg-bottom" class="scroll-pad"></view>
    </scroll-view>
    </view>

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
              <text class="panel-item-date">{{ fmtTime(s.lastAt || s.date) }}</text>
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
import QuestionBar from '@/components/question-bar.vue'
import { getSubjects, getSession, getHistory, deleteSession, streamChat, uploadFile, getTtsVoices, getSettings } from '@/api'
import { renderMarkdown } from '@/utils/md'
import { API_BASE } from '@/config'
import { voiceCall } from '@/services/voice-call.js'
import { onTtsFail, ttsBody } from '@/services/tts'

let msgSeq = 0

export default {
  components: { MdRender, QuestionBar },
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
      activeQKey: '',
      abortController: null,
      pendingFiles: [],
      ttsMsgId: '',
      ttsQueue: [],
      ttsIndex: 0,
      ttsAudio: null,
      historyPanel: false,
      sessionHistory: [],
      voiceActive: false,
      callPhase: '',
      providerReady: true,
      fabHover: false,
      fabDragging: false,
      fabPos: { x: null, y: null }, // null 时使用默认右下角定位
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
      return s ? s.name : '综合问答'
    },
    emptyTitle() {
      if (!this.selectedSubject && !this.selectedCourse) return '综合问答（跨学科自由提问）'
      const s = this.subjects.find((x) => x.id === this.selectedSubject)
      if (this.selectedCourse) return `${s ? s.name : ''} · 课程《${this.selectedCourse}》`
      return `向 ${s ? s.name : ''}教师提问`
    },
    samplePrompt() {
      const map = {
        math: '为什么导数表示变化率？',
        physics: '卫星为什么不会掉下来？',
        literature: '如何分析一部小说的主题？',
        economics: '供需关系如何影响价格？',
        philosophy: '什么是自由意志？',
        taoism: '道家说的“无为”是不作为吗？',
        traditionalchinesemedicine: '中医的阴阳五行是什么？',
      }
      if (map[this.selectedSubject]) return map[this.selectedSubject]
      const s = this.subjects.find((x) => x.id === this.selectedSubject)
      return s && s.name ? `我想入门${s.name}，应该从哪里学起？` : '帮我制定一个学习计划'
    },
    fabLabel() {
      const m = { listening: '聆听中', thinking: '思考中', speaking: '回答中' }
      return m[this.callPhase] || '通话中'
    },
    fabStyle() {
      const p = this.fabPos
      if (p.x == null) return ''
      return `left:${p.x}px;top:${p.y}px;right:auto;bottom:auto;`
    },
    // 悬浮球径向菜单：扇区沿圆边分布；贴边时自动换朝向，未来加新功能只需在 fabMenuSvg 的列表里追加
    fabMenuArc() {
      let start = -150
      let end = -30
      const p = this.fabPos
      if (p.x != null && typeof window !== 'undefined') {
        if (p.x > window.innerWidth - 190) {
          start = -195 // 贴右边缘：朝左展开
          end = -105
        } else if (p.x < 250) {
          start = -75 // 贴左边缘：朝右展开
          end = 15
        }
      }
      if (p.y != null && p.y < 150) return [-end, -start] // 贴上边缘：翻转到下方
      return [start, end]
    },
    fabMenuSvg() {
      const items = [
        { key: 'hangup', label: '挂断', color: '#ef4444' },
        { key: 'enter', label: '进入', color: '#4f8cff' },
      ]
      const cx = 85
      const cy = 85
      const r1 = 30
      const r2 = 76
      const [start, end] = this.fabMenuArc
      const n = items.length
      const seg = (end - start) / n
      const gap = 3
      let html = `<svg viewBox="0 0 170 170" width="170" height="170">`
      items.forEach((a, i) => {
        const a0 = start + i * seg + gap / 2
        const a1 = start + (i + 1) * seg - gap / 2
        const mid = ((a0 + a1) / 2) * Math.PI / 180
        const lx = cx + Math.cos(mid) * (r1 + r2) / 2
        const ly = cy + Math.sin(mid) * (r1 + r2) / 2
        html += `<g data-key="${a.key}" onclick="document.dispatchEvent(new CustomEvent('fab-action',{detail:'${a.key}'}))" style="cursor:pointer">
          <path d="${this.sectorPath(cx, cy, r1, r2, a0, a1)}" fill="${a.color}" style="pointer-events:auto"/>
          <text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-size="13" font-weight="600" style="pointer-events:none">${a.label}</text>
        </g>`
      })
      html += `</svg>`
      return html
    },
    userMsgs() {
      const strip = (s) =>
        String(s || '')
          .replace(/```[\s\S]*?```/g, ' ')
          .replace(/\$[^$]*\$/g, ' ')
          .replace(/[#*`>\-]+/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
      const msgs = this.messages
      return msgs
        .map((m, i) => ({ m, i }))
        .filter((x) => x.m.role === 'user' && x.m.content)
        .map((x) => {
          let reply = ''
          for (let j = x.i + 1; j < msgs.length; j++) {
            if (msgs[j].role === 'assistant' && msgs[j].content) {
              reply = strip(msgs[j].content).slice(0, 120)
              break
            }
          }
          return { key: 'msg-' + x.m.id, text: strip(x.m.content).slice(0, 120), reply }
        })
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
      // AI API 未配置（无 profile 或 openai/anthropic 缺 Key）时引导用户去设置页新建
      getSettings().then((s) => {
        this.providerReady = s.provider === 'runtime' || !!(s.apiKey && String(s.apiKey).trim())
      }).catch(() => {})
      // 悬浮球 SVG 扇区通过内联 onclick 派发自定义事件，此处统一接收（绕开 uni 事件包装）
      this._fabActionListener = (ev) => this.onFabAction(ev.detail)
      document.addEventListener('fab-action', this._fabActionListener)
    },
  onShow() {
    const vs = voiceCall.state
    this.voiceActive = vs.active
    // 通话中或刚结束：语音产生的用户/回复消息同步回对话页。
    // sessionId 与本页会话一致，或本页尚无会话（新对话页直接语音通话）时，接管语音会话并重载
    if (vs.sessionId && (!this.conversationId || vs.sessionId === this.conversationId)) {
      this.conversationId = vs.sessionId
      if (vs.messages.length || !this.messages.length) {
        this.messages = []
        this.loadSession(vs.sessionId)
      }
    }
    // 通话期间实时镜像语音消息到聊天页
    uni.$off('voiceCall', this.voiceEventHandler)
    this.voiceEventHandler = (s) => this.syncFromVoice(s)
    uni.$on('voiceCall', this.voiceEventHandler)
    this.ttsVoice = uni.getStorageSync('ttsVoice') || 'xiaoxiao'
    if (!this.ttsVoices.length) this.loadTtsVoices()
  },
  onHide() {
    uni.$off('voiceCall', this.voiceEventHandler)
  },
  onUnload() {
    this.streaming = false
    this.stopTTS()
    this.stopPreview()
    uni.$off('voiceCall', this.voiceEventHandler)
    if (this._fabActionListener) document.removeEventListener('fab-action', this._fabActionListener)
    window.removeEventListener('mousemove', this.fabMove)
    window.removeEventListener('mouseup', this.fabUp)
    window.removeEventListener('touchmove', this.fabMove)
    window.removeEventListener('touchend', this.fabUp)
    if (voiceCall.state.active) {
      voiceCall.end()
      uni.showToast({ title: '语音通话已挂断', icon: 'none' })
    }
  },
  methods: {
    syncFromVoice(s) {
      if (!s || !s.sessionId) return
      if (this.conversationId && s.sessionId !== this.conversationId) return
      this.voiceActive = s.active
      this.callPhase = s.active ? (s.phase || '') : ''
      if (!s.active) this.fabHover = false
      if (!this.conversationId) this.conversationId = s.sessionId
      // 语音通话是当前会话的消息权威来源：全量镜像（含实时聆听中的最终文本）
      const incoming = (s.messages || []).filter((m) => m.role === 'user' || m.role === 'assistant')
      if (s.listeningText) incoming.push({ role: 'user', content: s.listeningText, pending: true })
      let changed = incoming.length !== this.messages.length
      if (!changed) {
        for (let i = 0; i < incoming.length; i++) {
          if (incoming[i].content !== this.messages[i].content) { changed = true; break }
        }
      }
      if (!changed) return
      this.messages = incoming.map((m) => ({ id: ++msgSeq, role: m.role, content: m.content, at: m.at || new Date().toISOString() }))
      if (this.messages.length) {
        this.$nextTick(() => { this.scrollInto = 'msg-' + this.messages[this.messages.length - 1].id })
      }
    },
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
          body: ttsBody('你好，我是你的 AI 教师。这是「' + v.name + '」音色的试听，你觉得怎么样？', v.key),
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
              this.pushMessage(m.role, m.content || '', { at: m.at || new Date().toISOString() })
            }
          }
          this.$nextTick(() => this.scrollToBottom())
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
    // ---------- 语音通话悬浮球 ----------
    fabHangup() {
      voiceCall.end()
      this.fabHover = false
      uni.showToast({ title: '语音通话已挂断', icon: 'none' })
    },
    fabBallEl() {
      let el = this.$refs.fabBallRef
      if (el && el.$el) el = el.$el
      return el && el.getBoundingClientRect ? el : null
    },
    fabDown(e) {
      // 只测球体本身（不含展开的操作按钮），并保持抓取点相对位置，指针在哪球就跟到哪
      const el = this.fabBallEl()
      if (!el) return
      const r = el.getBoundingClientRect()
      const t = (e && e.touches && e.touches[0]) || e
      if (!t || typeof t.clientX !== 'number') return
      if (e.type === 'mousedown' && e.preventDefault) e.preventDefault() // 防止拖动时选中文字
      if (this._winTop == null) {
        try { this._winTop = uni.getSystemInfoSync().windowTop || 0 } catch (err) { this._winTop = 0 }
      }
      this._drag = {
        w: r.width,
        h: r.height,
        grabDX: t.clientX - r.left,
        grabDY: t.clientY - r.top,
        startClientX: t.clientX,
        startClientY: t.clientY,
        moved: false,
      }
      this.fabDragging = true
      window.addEventListener('mousemove', this.fabMove)
      window.addEventListener('mouseup', this.fabUp)
      window.addEventListener('touchmove', this.fabMove, { passive: false })
      window.addEventListener('touchend', this.fabUp)
    },
    fabMove(e) {
      if (!this._drag) return
      const t = (e && e.touches && e.touches[0]) || e
      if (!t || typeof t.clientX !== 'number') return
      const dx = t.clientX - this._drag.startClientX
      const dy = t.clientY - this._drag.startClientY
      if (!this._drag.moved && Math.hypot(dx, dy) > 5) {
        this._drag.moved = true
        this.fabHover = false
      }
      const { w, h, grabDX, grabDY } = this._drag
      let x = t.clientX - grabDX
      let y = t.clientY - grabDY
      const winTop = this._winTop || 0
      x = Math.max(8, Math.min(window.innerWidth - w - 8, x))
      y = Math.max(winTop + 4, Math.min(window.innerHeight - h - 8, y)) // 顶部避让 H5 导航栏
      this.fabPos = { x, y }
      if (e.type === 'touchmove' && e.cancelable) e.preventDefault()
    },
    fabUp() {
      const moved = !!(this._drag && this._drag.moved)
      this._drag = null
      this.fabDragging = false
      window.removeEventListener('mousemove', this.fabMove)
      window.removeEventListener('mouseup', this.fabUp)
      window.removeEventListener('touchmove', this.fabMove)
      window.removeEventListener('touchend', this.fabUp)
      // 拖动结束抑制紧接着的 click，避免误触发展开/收起
      this._suppressFabClick = moved
    },
    fabClick() {
      if (this._suppressFabClick) {
        this._suppressFabClick = false
        return
      }
      this.fabHover = !this.fabHover
    },
    onFabAction(key) {
      if (!key) return
      this.fabHover = false
      if (key === 'hangup') this.fabHangup()
      else if (key === 'enter') this.openVoice()
    },
    polar(cx, cy, r, deg) {
      const rad = (deg * Math.PI) / 180
      return [cx + Math.cos(rad) * r, cy + Math.sin(rad) * r]
    },
    // 环形扇区路径：外弧 a0→a1 + 内弧 a1→a0
    sectorPath(cx, cy, r1, r2, a0, a1) {
      const p1 = this.polar(cx, cy, r2, a0)
      const p2 = this.polar(cx, cy, r2, a1)
      const p3 = this.polar(cx, cy, r1, a1)
      const p4 = this.polar(cx, cy, r1, a0)
      const f = (v) => v.toFixed(1)
      const large = Math.abs(a1 - a0) > 180 ? 1 : 0
      return `M${f(p1[0])} ${f(p1[1])} A${r2} ${r2} 0 ${large} 1 ${f(p2[0])} ${f(p2[1])} L${f(p3[0])} ${f(p3[1])} A${r1} ${r1} 0 ${large} 0 ${f(p4[0])} ${f(p4[1])} Z`
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
      const msg = { id: ++msgSeq, role, content, at: new Date().toISOString(), ...extra }
      this.messages.push(msg)
      return msg
    },
    fmtTime(iso) {
      if (!iso) return ''
      const d = new Date(iso)
      if (isNaN(d.getTime())) return String(iso)
      const pad = (n) => String(n).padStart(2, '0')
      const hm = pad(d.getHours()) + ':' + pad(d.getMinutes())
      const now = new Date()
      if (d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate()) return hm
      const md = pad(d.getMonth() + 1) + '-' + pad(d.getDate())
      return (d.getFullYear() === now.getFullYear() ? '' : d.getFullYear() + '-') + md + ' ' + hm
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
      if (!this.providerReady) {
        uni.showModal({
          title: '尚未配置 AI API',
          content: '还没有可用的模型配置。到「设置 → AI 模型」新增配置即可（默认预填 Agnes，填入 API Key 保存）。',
          confirmText: '去设置',
          success: (r) => { if (r.confirm) uni.navigateTo({ url: '/pages/settings/model' }) },
        })
        return
      }
      if (this.voiceActive) {
        uni.showToast({ title: '语音通话进行中，请先在通话页点「取消通话」', icon: 'none' })
        return
      }
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
        const MAX_ATTEMPTS = 4
        for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
          if (attempt > 1) {
            cur.content = ''
            cur.retrying = attempt - 1
          }
          const result = await streamChat(
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
          if (result && result.timedOut && attempt < MAX_ATTEMPTS) continue
          if (result && result.timedOut) {
            cur.streaming = false
            this.errorMsg = '回复超时，请稍后重试'
            this.streaming = false
          }
          break
        }
        cur.retrying = 0
        this.abortController = null
      } catch (e) {
        const cur = this.messages[this.messages.length - 1]
        cur.retrying = 0
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
      const target = last ? `msg-${last.id}` : ''
      // 先清空再赋值：目标未变化时 scroll-into-view 不会重新滚动
      this.scrollInto = ''
      this.$nextTick(() => { this.scrollInto = target })
    },
    jumpToMsg(key) {
      this.activeQKey = key
      this.scrollInto = ''
      this.$nextTick(() => { this.scrollInto = key })
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
          body: ttsBody(seg, uni.getStorageSync('ttsVoice') || 'xiaoxiao'),
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
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16rpx 26rpx;
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1rpx solid var(--border-soft);
  flex-shrink: 0;
}
.header-info {
  flex: 1;
  overflow: hidden;
}
.header-course {
  font-size: 29rpx;
  font-weight: 600;
  color: var(--text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.history-btn {
  flex-shrink: 0;
  background: var(--bg-accent-soft);
  border: 1rpx solid #cfe0ff;
  border-radius: 26rpx;
  padding: 8rpx 26rpx;
}
.voice-pick-btn {
  flex-shrink: 0;
  background: var(--bg-accent-soft);
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
  background: var(--bg-subtle);
  border: 2rpx solid transparent;
  border-radius: 18rpx;
  padding: 18rpx 24rpx;
  margin-bottom: 14rpx;
}
.voice-item.selected {
  border-color: #4f8cff;
  background: var(--bg-accent-soft);
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
  color: var(--text-1);
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
/* ---------- 语音通话悬浮球 ---------- */
.voice-fab {
  position: fixed;
  right: 22rpx;
  bottom: 170rpx;
  z-index: 1500; /* 高于头部导航与面板，避免拖到顶端被遮挡 */
  display: flex;
  align-items: center;
  user-select: none;
  -webkit-user-select: none;
}
.voice-fab.dragging {
  opacity: 0.85;
}
/* 菜单展开时的隐形热区（::before 绘制在菜单下层，不挡按钮点击）：光标移向扇区途中不丢失 hover */
.voice-fab.hovering::before {
  content: '';
  position: absolute;
  inset: -96rpx;
}
.fab-ball {
  width: 92rpx;
  height: 92rpx;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #059669);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8rpx 24rpx rgba(16, 185, 129, 0.45);
  animation: fabPulse 1.6s infinite;
  cursor: pointer;
}
.fab-ball.thinking {
  background: linear-gradient(135deg, #38bdf8, #6366f1);
  box-shadow: 0 8rpx 24rpx rgba(56, 189, 248, 0.45);
}
.fab-ball.speaking {
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  box-shadow: 0 8rpx 24rpx rgba(245, 158, 11, 0.5);
}
.fab-icon {
  font-size: 34rpx;
  line-height: 1;
}
.fab-label {
  font-size: 17rpx;
  color: #ffffff;
  margin-top: 4rpx;
  font-weight: 600;
}
@keyframes fabPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.07); }
}
.fab-menu {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 170px;
  height: 170px;
  margin: -85px 0 0 -85px;
  pointer-events: none;
}
.fab-menu-svg svg {
  pointer-events: none;
}
.fab-menu path {
  pointer-events: auto;
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
  background: var(--bg-card);
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
  color: var(--text-1);
}
.panel-close {
  font-size: 26rpx;
  color: var(--text-3);
  padding: 6rpx 20rpx;
}
.panel-list {
  max-height: 56vh;
  min-height: 0;
}
.panel-empty {
  text-align: center;
  color: var(--text-3);
  font-size: 27rpx;
  padding: 60rpx 0;
}
.panel-item {
  background: var(--bg-subtle);
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
  color: var(--text-3);
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
  color: var(--text-2);
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
.chat-body {
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
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
  color: var(--text-2);
}
.empty-sub {
  margin-top: 14rpx;
  font-size: 26rpx;
  color: var(--text-3);
}
.msg-row {
  display: flex;
  margin-bottom: 18rpx;
  align-items: flex-start;
  user-select: text;
  animation: msg-in 0.22s ease;
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
  background: var(--bg-card);
  border: 1rpx solid var(--border);
  border-radius: 4rpx 20rpx 20rpx 20rpx;
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.04);
}
.bubble.user {
  background: linear-gradient(135deg, #4f8cff, #6f5bf5);
  color: #ffffff;
  border-radius: 20rpx 4rpx 20rpx 20rpx;
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
  color: var(--text-3);
  border: 1rpx solid var(--border);
  border-radius: 24rpx;
  padding: 4rpx 18rpx;
}
.copy-btn:active {
  color: #4f8cff;
  border-color: #4f8cff;
}
.msg-time {
  display: block;
  font-size: 20rpx;
  color: #b0b7c3;
  margin-top: 6rpx;
  padding-left: 6rpx;
}
.msg-row.user .msg-time {
  text-align: right;
  padding-right: 6rpx;
}
.scroll-pad {
  height: 40rpx;
}
.streaming {
  display: inline-flex;
  align-items: center;
  gap: 8rpx;
  margin-top: 10rpx;
}
.streaming-text {
  font-size: 24rpx;
  color: var(--text-3);
  margin-right: 4rpx;
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
  background: var(--bg-card);
}
.pending-chip {
  display: flex;
  align-items: center;
  gap: 10rpx;
  background: var(--bg-accent-soft);
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
  margin: 12rpx 20rpx calc(12rpx + env(safe-area-inset-bottom));
  padding: 12rpx 18rpx;
  background: var(--bg-card);
  border: 1rpx solid var(--border);
  border-radius: 32rpx;
  box-shadow: 0 6rpx 24rpx rgba(17, 24, 39, 0.08);
  gap: 14rpx;
}
.attach-btn {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  background: var(--bg-subtle);
  color: var(--text-3);
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
  background: var(--bg-accent-soft);
}
.input {
  flex: 1;
  background: var(--bg-subtle);
  border-radius: 36rpx;
  padding: 12rpx 26rpx;
  font-size: 28rpx;
  min-height: 46rpx;
}
.send-btn {
  background: linear-gradient(135deg, #4f8cff, #6f5bf5);
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
[data-theme="dark"] .chat-header {
  background: rgba(20, 22, 28, 0.86);
}


/* 消息入场动效 */
@keyframes msg-in {
  from {
    opacity: 0;
    transform: translateY(10rpx);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* ===== 响应式（窄屏） ===== */
@media (max-width: 700px) {
  .chat-header {
    padding: 12rpx 18rpx;
  }
  .bubble {
    padding: 14rpx 18rpx;
    font-size: 27rpx;
  }
  .input-bar {
    margin: 10rpx 12rpx calc(10rpx + env(safe-area-inset-bottom));
    padding: 10rpx 14rpx;
  }
}
</style>