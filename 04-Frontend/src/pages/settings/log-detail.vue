<template>
  <view class="page">
    <view class="log-card">
      <view class="head">
        <text class="title">{{ title }}</text>
        <view class="head-btns">
          <text class="copy-btn" @click="copyAll">复制全部</text>
          <text class="copy-btn" @click="copySelection">复制选中</text>
        </view>
      </view>
      <scroll-view scroll-y class="log-scroll">
        <view v-for="(l, i) in lines" :key="i" class="log-line">{{ l }}</view>
        <view v-if="!lines.length" class="empty">暂无日志</view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import { getLogDetail } from '@/api'

export default {
  data() {
    return {
      title: '日志',
      lines: [],
    }
  },
  onLoad(options) {
    const type = options.type === 'distill' ? 'distill' : options.type === 'ocr' ? 'ocr' : null
    if (type && options.id) {
      this.title = `${type === 'ocr' ? 'OCR' : '蒸馏'}日志详情`
      getLogDetail(type, options.id)
        .then((d) => {
          this.title = (d.book ? `${d.book} · ` : '') + (type === 'ocr' ? 'OCR' : '蒸馏') + '日志'
          this.lines = d.log || []
        })
        .catch((e) => uni.showToast({ title: '加载失败：' + e.message, icon: 'none' }))
      return
    }
    const d = uni.getStorageSync('logDetail') || {}
    this.title = d.title || '日志'
    this.lines = d.lines || []
    uni.removeStorageSync('logDetail')
  },
  methods: {
    copyAll() {
      uni.setClipboardData({
        data: this.lines.join('\n'),
        success: () => uni.showToast({ title: '已复制全部', icon: 'none' }),
      })
    },
    copySelection() {
      const sel = document.getSelection()
      const text = sel ? sel.toString().trim() : ''
      if (!text) {
        uni.showToast({ title: '请先长按选择要复制的文字', icon: 'none' })
        return
      }
      uni.setClipboardData({
        data: text,
        success: () => uni.showToast({ title: '已复制选中内容', icon: 'none' }),
      })
    },
  },
}
</script>

<style scoped>
.page {
  padding: 30rpx 30rpx 60rpx;
  min-height: 100vh;
  box-sizing: border-box;
}
.log-card {
  background: #ffffff;
  border-radius: 20rpx;
  padding: 24rpx 28rpx;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120rpx);
  box-sizing: border-box;
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16rpx;
  padding-bottom: 14rpx;
  border-bottom: 2rpx solid #f1f2f5;
}
.title {
  font-size: 28rpx;
  font-weight: 600;
  color: #374151;
}
.head-btns {
  display: flex;
  gap: 16rpx;
}
.copy-btn {
  font-size: 24rpx;
  color: #4f8cff;
  border: 2rpx solid #cfe0ff;
  border-radius: 12rpx;
  padding: 6rpx 20rpx;
  background: #f0f5ff;
}
.copy-btn:active {
  background: #e0e9ff;
}
.log-scroll {
  flex: 1;
  overflow-y: auto;
  background: #f8fafc;
  border-radius: 12rpx;
  padding: 18rpx 22rpx;
  user-select: text;
  -webkit-user-select: text;
}
.log-line {
  font-size: 25rpx;
  color: #374151;
  line-height: 1.7;
  font-family: Consolas, monospace;
  word-break: break-all;
  user-select: text;
  -webkit-user-select: text;
}
.empty {
  text-align: center;
  color: #9ca3af;
  font-size: 26rpx;
  padding: 60rpx 0;
}
</style>