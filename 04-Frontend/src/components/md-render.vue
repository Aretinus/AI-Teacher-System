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
  color: var(--text-1);
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
  background: var(--bg-subtle);
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
  border-left: 6rpx solid var(--accent);
  background: var(--bg-accent-soft);
  margin: 16rpx 0;
  padding: 12rpx 20rpx;
  border-radius: 0 10rpx 10rpx 0;
  color: var(--text-2);
}
.md-body :deep(table) {
  border-collapse: collapse;
  margin: 16rpx 0;
  width: 100%;
}
.md-body :deep(th), .md-body :deep(td) {
  border: 1rpx solid var(--border);
  padding: 8rpx 14rpx;
  font-size: 27rpx;
}
.md-body :deep(th) { background: var(--bg-subtle); }
.md-body :deep(strong) { font-weight: 600; }
.md-body :deep(a) { color: var(--accent); }
.md-body :deep(.katex-block) { margin: 16rpx 0; overflow-x: auto; text-align: center; }
.md-body :deep(.katex-display) { margin: 16rpx 0; overflow-x: auto; overflow-y: hidden; }
.md-body :deep(img) { max-width: 100%; border-radius: 10rpx; }

/* 深色：标题/行内代码/引用/表格适配（正文继承气泡反白） */
[data-theme="dark"] .md-body :deep(h1),
[data-theme="dark"] .md-body :deep(h2),
[data-theme="dark"] .md-body :deep(h3),
[data-theme="dark"] .md-body :deep(h4) {
  color: var(--text-1);
}
[data-theme="dark"] .md-body :deep(code) {
  background: #2a2f3a;
  color: #f9a8d4;
}
[data-theme="dark"] .md-body :deep(blockquote) {
  background: var(--bg-accent-soft);
  color: var(--text-2);
}
[data-theme="dark"] .md-body :deep(th) { background: var(--bg-subtle); }
[data-theme="dark"] .md-body :deep(a) { color: #93c5fd; }
</style>