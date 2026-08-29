<template>
  <view v-if="questions.length" class="qb-wrap" :class="{ dark }">
    <view class="qb-scroll">
      <view
        v-for="q in questions"
        :key="q.key"
        class="qb-tick"
        :class="{ active: q.key === activeKey }"
        @mouseenter="showTip($event, q)"
        @mouseleave="hideTip"
        @click="onJump(q.key)"
      ></view>
    </view>
    <view v-if="tip" class="qb-pop" :class="{ dark }" :style="{ top: tipTop + 'px' }">
      <view class="qb-pop-q">{{ tip.text }}</view>
      <view v-if="tip.reply" class="qb-pop-r">{{ tip.reply }}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    // 每项：{ key, text, reply? }  reply 为回答预览（可空）
    questions: { type: Array, default: () => [] },
    activeKey: { type: String, default: '' },
    dark: { type: Boolean, default: false },
  },
  emits: ['jump'],
  data() {
    return {
      tip: null,
      tipTop: 100,
    }
  },
  methods: {
    showTip(e, q) {
      const y = (e && (e.clientY ?? (e.detail && e.detail.clientY))) || 100
      this.tipTop = Math.max(8, y - 50)
      this.tip = q
    },
    hideTip() {
      this.tip = null
    },
    onJump(key) {
      this.tip = null
      this.$emit('jump', key)
    },
  },
}
</script>

<style scoped>
.qb-wrap {
  position: relative;
  flex-shrink: 0;
  width: 52px;
  height: 100%;
  box-sizing: border-box;
  border-right: 1px solid rgba(17, 24, 39, 0.06);
}
.qb-scroll {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none; /* 刻度条不显示滚动条 */
}
.qb-scroll::-webkit-scrollbar {
  display: none;
}
.qb-tick {
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.qb-tick::after {
  content: '';
  width: 22px;
  height: 4px;
  border-radius: 2px;
  background: rgba(150, 160, 180, 0.55);
  transition: background 0.15s ease, transform 0.15s ease;
}
.qb-tick:hover::after,
.qb-tick.active::after {
  background: #4f8cff;
  transform: scaleY(1.6);
}
/* 悬停卡片：固定定位挂在条右侧，避免被滚动容器裁剪 */
.qb-pop {
  position: fixed;
  left: 60px;
  z-index: 999;
  max-width: 420px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #eceef2;
  box-shadow: 0 10px 32px rgba(17, 24, 39, 0.16);
  padding: 12px 16px;
  pointer-events: none;
}
.qb-pop-q {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;
  color: #1f2937;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.qb-pop-r {
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.55;
  color: #9ca3af;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
/* 深色主题（语音通话页） */
.qb-wrap.dark {
  border-right-color: rgba(255, 255, 255, 0.12);
}
.qb-pop.dark {
  background: rgba(30, 34, 48, 0.97);
  border-color: rgba(255, 255, 255, 0.18);
}
.qb-pop.dark .qb-pop-q {
  color: #e5e7eb;
}
.qb-pop.dark .qb-pop-r {
  color: rgba(230, 232, 240, 0.55);
}
</style>
