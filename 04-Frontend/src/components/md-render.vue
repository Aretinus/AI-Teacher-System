<template>
  <view class="md-body" v-html="html"></view>
</template>

<script>
import { renderMarkdown } from '@/utils/md'

export default {
  name: 'MdRender',
  props: {
    content: { type: String, default: '' },
  },
  computed: {
    html() {
      return renderMarkdown(this.content)
    },
  },
}
</script>

<style scoped>
.md-body {
  word-break: break-word;
  line-height: 1.7;
  font-size: 30rpx;
}
.md-body :deep(h1), .md-body :deep(h2), .md-body :deep(h3), .md-body :deep(h4) {
  margin: 24rpx 0 12rpx;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.4;
}
.md-body :deep(h1) { font-size: 40rpx; }
.md-body :deep(h2) { font-size: 36rpx; }
.md-body :deep(h3) { font-size: 33rpx; }
.md-body :deep(h4) { font-size: 31rpx; }
.md-body :deep(p) { margin: 12rpx 0; }
.md-body :deep(ul), .md-body :deep(ol) { margin: 12rpx 0; padding-left: 40rpx; }
.md-body :deep(li) { margin: 6rpx 0; }
.md-body :deep(code) {
  background: #eef1f5;
  border-radius: 6rpx;
  padding: 2rpx 8rpx;
  font-size: 26rpx;
  color: #d6336c;
}
.md-body :deep(pre) {
  background: #1e293b;
  color: #e2e8f0;
  border-radius: 12rpx;
  padding: 20rpx;
  overflow-x: auto;
  margin: 16rpx 0;
}
.md-body :deep(pre code) {
  background: transparent;
  color: inherit;
  padding: 0;
  font-size: 26rpx;
}
.md-body :deep(blockquote) {
  border-left: 6rpx solid #4f8cff;
  background: #f0f5ff;
  margin: 16rpx 0;
  padding: 12rpx 20rpx;
  border-radius: 0 10rpx 10rpx 0;
  color: #3a4a63;
}
.md-body :deep(table) {
  border-collapse: collapse;
  margin: 16rpx 0;
  width: 100%;
}
.md-body :deep(th), .md-body :deep(td) {
  border: 1rpx solid #d4dae2;
  padding: 8rpx 14rpx;
  font-size: 27rpx;
}
.md-body :deep(th) { background: #f0f3f7; }
.md-body :deep(strong) { font-weight: 600; }
.md-body :deep(a) { color: #2f6fed; }
.md-body :deep(.katex-block) { margin: 16rpx 0; overflow-x: auto; text-align: center; }
.md-body :deep(.katex-display) { margin: 16rpx 0; overflow-x: auto; overflow-y: hidden; }
.md-body :deep(img) { max-width: 100%; border-radius: 10rpx; }
</style>