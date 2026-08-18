<template>
  <view class="tab-bar">
    <view class="tab-item" :class="{ active: active === 'index' }" @click="go('index')">
      <view class="tab-label">主页</view>
    </view>
    <view class="tab-item" :class="{ active: active === 'settings' }" @click="go('settings')">
      <view class="tab-label">设置</view>
    </view>
  </view>
</template>

<script>
const MAP = {
  index: '/pages/index/index',
  settings: '/pages/settings/settings',
}

export default {
  name: 'TabBar',
  props: {
    active: { type: String, default: 'index' },
  },
  methods: {
    go(page) {
      if (page === this.active) return
      uni.redirectTo({ url: MAP[page] })
    },
  },
}
</script>

<style scoped>
.tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  display: flex;
  padding: 18rpx 0 calc(18rpx + env(safe-area-inset-bottom));
  box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.06);
  z-index: 100;
}
.tab-item {
  flex: 1;
  text-align: center;
}
.tab-label {
  font-size: 32rpx;
  color: #9ca3af;
  font-weight: 500;
}
.tab-item.active .tab-label {
  color: #4f8cff;
  font-weight: 700;
}
</style>