<template>
  <view class="page">
    <view v-if="logs.length" class="log-list">
      <view v-for="l in logs" :key="l.file" class="log-item" @click="openDetail(l)">
        <view class="log-item-head">
          <text class="log-book">{{ l.book || '（未知书籍）' }}</text>
          <text class="log-status" :class="l.status">{{ l.status === 'done' ? '成功' : (l.status === 'error' ? '失败' : l.status) }}</text>
        </view>
        <view class="log-item-meta">
          <text>{{ fmtTime(l.startedAt) }}</text>
          <text>{{ l.lines }} 行</text>
        </view>
        <view v-if="l.error" class="log-item-error">{{ l.error }}</view>
      </view>
    </view>
    <view v-else class="empty">该学科还没有{{ typeName }}日志记录</view>
  </view>
</template>

<script>
import { getLogList } from '@/api'

export default {
  data() {
    return {
      type: 'ocr',
      subject: '',
      logs: [],
    }
  },
  computed: {
    typeName() {
      return this.type === 'ocr' ? 'OCR' : '蒸馏'
    },
  },
  onLoad(options) {
    this.type = options.type === 'distill' ? 'distill' : 'ocr'
    this.subject = options.subject ? decodeURIComponent(options.subject) : ''
    uni.setNavigationBarTitle({ title: `${this.typeName}日志历史` })
    this.load()
  },
  methods: {
    async load() {
      try {
        this.logs = await getLogList(this.type, this.subject || undefined)
      } catch (e) {
        uni.showToast({ title: '加载失败：' + e.message, icon: 'none' })
      }
    },
    fmtTime(t) {
      if (!t) return '-'
      return String(t).replace('T', ' ').slice(0, 16)
    },
    openDetail(l) {
      uni.navigateTo({ url: `/pages/settings/log-detail?type=${this.type}&id=${encodeURIComponent(l.id)}` })
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
.log-list {
  display: flex;
  flex-direction: column;
  gap: 18rpx;
}
.log-item {
  background: #ffffff;
  border-radius: 18rpx;
  padding: 22rpx 26rpx;
  border: 2rpx solid #eef1f5;
}
.log-item:active {
  background: #f8faff;
}
.log-item-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.log-book {
  font-size: 29rpx;
  font-weight: 600;
  color: #1f2937;
  flex: 1;
  word-break: break-all;
  margin-right: 16rpx;
}
.log-status {
  flex-shrink: 0;
  font-size: 22rpx;
  border-radius: 999rpx;
  padding: 4rpx 18rpx;
}
.log-status.done {
  background: #f0fdf4;
  color: #15803d;
}
.log-status.error {
  background: #fef2f2;
  color: #b91c1c;
}
.log-status.running {
  background: #fef3c7;
  color: #b45309;
}
.log-item-meta {
  display: flex;
  justify-content: space-between;
  font-size: 24rpx;
  color: #9ca3af;
  margin-top: 10rpx;
}
.log-item-error {
  font-size: 24rpx;
  color: #b91c1c;
  margin-top: 8rpx;
  word-break: break-all;
}
.empty {
  text-align: center;
  color: #9ca3af;
  font-size: 27rpx;
  padding: 100rpx 0;
}
</style>