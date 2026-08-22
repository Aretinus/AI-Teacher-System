<template>
  <view class="voice-page">
    <view class="v-header">
      <view class="v-title">
        <text class="v-dot" :class="phase"></text>
        <text>{{ statusText }}</text>
      </view>
      <view class="v-actions">
        <view v-if="phase === 'speaking' || phase === 'thinking'" class="v-btn v-btn-warn" @click="interrupt">打断</view>
        <view class="v-btn" @click="minimize">最小化</view>
        <view class="v-btn v-btn-danger" @click="hangUp">取消通话</view>
      </view>
    </view>

    <view class="v-avatar-wrap">
      <view class="v-ring" :class="phase"></view>
      <view class="v-avatar">
        <text class="v-emoji">🤖</text>
      </view>
      <view class="v-phase">{{ phaseText }}</view>
    </view>

    <scroll-view scroll-y class="v-log" :scroll-into-view="logAnchor">
      <view v-if="!messages.length && !listeningText" class="v-log-empty">
        <text>我在听，请开始说话，说完停顿一下即可</text>
      </view>
      <view v-for="(m, i) in messages" :key="i" :id="'log-' + i" class="v-log-item" :class="m.role">
        <view class="v-log-label">{{ m.role === 'user' ? '你' : 'AI 老师' }} <text v-if="m.at" class="v-log-time">{{ fmtTime(m.at) }}</text></view>
        <view class="v-log-text">{{ m.content }}</view>
      </view>
      <view v-if="phase === 'thinking'" :id="'log-' + messages.length" class="v-log-item assistant">
        <view class="v-log-label">AI 老师</view>
        <view class="v-log-text v-log-live v-thinking">正在思考<span class="v-tdot">·</span><span class="v-tdot">·</span><span class="v-tdot">·</span></view>
      </view>
      <view v-if="listeningText" :id="'log-' + messages.length" class="v-log-item user">
        <view class="v-log-label">你 <text v-if="phaseLabel" class="v-live-flag">{{ phaseLabel }}</text></view>
        <view class="v-log-text v-log-live">{{ listeningText }}<text v-if="phase === 'listening'" class="v-cursor">▌</text></view>
      </view>
      <view v-if="notice" class="v-notice">{{ notice }}</view>
    </scroll-view>

    <view v-if="error" class="v-error">{{ error }}</view>
  </view>
</template>

<script>
import { voiceCall } from '@/services/voice-call.js'

const PHASE_TEXT = {
  idle: '',
  listening: '聆听中…',
  thinking: '正在思考…',
  speaking: '正在回答…',
}

export default {
  data() {
    return {
      state: voiceCall.state,
      logAnchor: '',
    }
  },
  computed: {
    phase() {
      return this.state.phase
    },
    messages() {
      return this.state.messages
    },
    error() {
      return this.state.error
    },
    listeningText() {
      return this.state.listeningText
    },
    phaseLabel() {
      const p = this.state.phase
      if (p === 'listening') return '聆听中'
      if (p === 'thinking') return '思考中'
      if (p === 'speaking') return '播报中'
      return ''
    },
    notice() {
      return this.state.notice
    },
    phaseText() {
      return PHASE_TEXT[this.state.phase] || ''
    },
    statusText() {
      if (this.state.phase === 'idle') return '通话已结束'
      return '语音通话中'
    },
  },
  onLoad(options) {
    const res = voiceCall.start({
      subject: options.subject || '',
      course: options.course ? decodeURIComponent(options.course) : '',
      conversationId: options.conversationId || '',
    })
    if (!res.ok) {
      uni.showToast({ title: res.error, icon: 'none' })
      setTimeout(() => uni.navigateBack(), 600)
    }
  },
  onShow() {
    voiceCall.offEvent(this.onEvent)
    this.state = voiceCall.state
    voiceCall.onEvent(this.onEvent)
  },
  onUnload() {
    voiceCall.offEvent(this.onEvent)
  },
  watch: {
    messages() {
      this.$nextTick(() => {
        const last = this.messages.length - 1
        this.logAnchor = last >= 0 ? 'log-' + last : ''
      })
    },
  },
  methods: {
    onEvent(s) {
      this.state = s
    },
    minimize() {
      uni.navigateBack()
    },
    hangUp() {
      voiceCall.end()
      uni.showToast({ title: '语音通话已取消', icon: 'none' })
      setTimeout(() => uni.navigateBack(), 400)
    },
    interrupt() {
      voiceCall.interrupt()
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
  },
}
</script>

<style scoped>
.voice-page {
  height: calc(100vh - var(--window-top, 0px));
  background: linear-gradient(160deg, #1e2a4a 0%, #2b2f77 55%, #4a2b77 100%);
  display: flex;
  flex-direction: column;
  color: #ffffff;
  box-sizing: border-box;
}
.v-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22rpx 30rpx;
  flex-shrink: 0;
}
.v-title {
  display: flex;
  align-items: center;
  font-size: 29rpx;
  font-weight: 600;
}
.v-dot {
  width: 16rpx;
  height: 16rpx;
  border-radius: 50%;
  background: #9ca3af;
  margin-right: 14rpx;
}
.v-dot.listening {
  background: #34d399;
  animation: blink 1.2s infinite;
}
.v-dot.speaking {
  background: #f59e0b;
  animation: blink 0.8s infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
.v-actions {
  display: flex;
  gap: 16rpx;
}
.v-btn {
  background: rgba(255, 255, 255, 0.16);
  border: 1rpx solid rgba(255, 255, 255, 0.35);
  border-radius: 30rpx;
  padding: 10rpx 28rpx;
  font-size: 25rpx;
  color: #ffffff;
}
.v-btn-danger {
  background: rgba(239, 68, 68, 0.35);
  border-color: rgba(239, 68, 68, 0.6);
}
.v-btn-warn {
  background: rgba(245, 158, 11, 0.4);
  border-color: rgba(245, 158, 11, 0.75);
}
.v-log-time {
  font-size: 20rpx;
  color: rgba(255, 255, 255, 0.4);
  margin-left: 8rpx;
}
.v-avatar-wrap {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40rpx 0 30rpx;
  position: relative;
}
.v-ring {
  position: absolute;
  width: 300rpx;
  height: 300rpx;
  border-radius: 50%;
  border: 3rpx solid rgba(255, 255, 255, 0.25);
  top: 40rpx;
}
.v-ring.listening {
  animation: pulse 1.6s infinite;
  border-color: rgba(52, 211, 153, 0.55);
}
.v-ring.speaking {
  animation: pulse 0.7s infinite;
  border-color: rgba(245, 158, 11, 0.6);
}
@keyframes pulse {
  0% { transform: scale(0.9); opacity: 0.9; }
  100% { transform: scale(1.25); opacity: 0.2; }
}
.v-avatar {
  width: 210rpx;
  height: 210rpx;
  border-radius: 50%;
  background: linear-gradient(135deg, #4f8cff, #7c3aed);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12rpx 40rpx rgba(79, 140, 255, 0.45);
  margin-top: 30rpx;
}
.v-emoji {
  font-size: 100rpx;
}
.v-phase {
  margin-top: 36rpx;
  font-size: 30rpx;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 4rpx;
}
.v-log {
  flex: 1;
  min-height: 0;
  width: calc(100% - 60rpx);
  margin: 20rpx auto 0;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 24rpx;
  padding: 10rpx 0;
  box-sizing: border-box;
}
.v-log-empty {
  text-align: center;
  color: rgba(255, 255, 255, 0.55);
  font-size: 26rpx;
  padding: 40rpx 0;
}
.v-notice {
  text-align: center;
  color: #fcd34d;
  font-size: 24rpx;
  padding: 12rpx 0 4rpx;
}
.v-log-item {
  margin: 0 20rpx 18rpx;
}
.v-log-item.user {
  text-align: right;
}
.v-log-item.assistant {
  text-align: left;
}
.v-log-label {
  font-size: 22rpx;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 6rpx;
}
.v-log-text {
  display: inline-block;
  max-width: 85%;
  text-align: left;
  font-size: 27rpx;
  line-height: 1.6;
  background: rgba(255, 255, 255, 0.14);
  border-radius: 16rpx;
  padding: 12rpx 20rpx;
  color: #f3f4f6;
  box-sizing: border-box;
  word-break: break-all;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}
.v-log-live {
  background: rgba(52, 211, 153, 0.22);
  border: 1rpx solid rgba(52, 211, 153, 0.5);
  color: #d1fae5;
}
.v-live-flag {
  font-size: 20rpx;
  color: #6ee7b7;
  margin-left: 8rpx;
}
.v-cursor {
  display: inline-block;
  margin-left: 2rpx;
  color: #6ee7b7;
  animation: blinkCursor 1s infinite;
}
@keyframes blinkCursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.v-thinking {
  color: #bfdbfe;
}
.v-tdot {
  display: inline-block;
  margin-left: 6rpx;
  animation: tdance 1.2s infinite;
}
.v-tdot:nth-child(2) {
  animation-delay: 0.2s;
}
.v-tdot:nth-child(3) {
  animation-delay: 0.4s;
}
@keyframes tdance {
  0%, 100% { opacity: 0.25; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-4rpx); }
}
.v-error {
  flex-shrink: 0;
  margin: 10rpx 30rpx 30rpx;
  background: rgba(239, 68, 68, 0.25);
  border-radius: 16rpx;
  padding: 14rpx 22rpx;
  font-size: 24rpx;
  color: #fecaca;
}
</style>