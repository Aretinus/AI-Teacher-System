<template>
  <view class="ct-panel">
    <view class="ct-head" @click="panelOpen = !panelOpen">
      <text class="ct-title">课程分支{{ count ? `（${count} 门课程）` : '' }}</text>
      <text class="ct-toggle">{{ panelOpen ? '收起 ▲' : '展开 ▼' }}</text>
    </view>
    <view v-if="panelOpen" class="ct-body">
      <template v-if="rows.length">
        <view
          v-for="row in rows"
          :key="row.node.id"
          class="ct-row"
          :class="{ selected: row.node.type === 'course' && row.node.id === selectedId }"
          :style="{ paddingLeft: 12 + row.depth * 30 + 'rpx' }"
        >
          <view class="ct-row-main" @click="row.node.type === 'group' ? toggleGroup(row.node) : selectCourse(row.node)">
            <text v-if="row.node.type === 'group'" class="ct-toggle">{{ expanded[row.node.id] ? '▾' : '▸' }}</text>
            <text v-else class="ct-dot">·</text>
            <text class="ct-name">{{ row.node.name }}</text>
            <text class="ct-meta">{{ row.node.type === 'group' ? `${row.node.courseCount} 门课 / ${row.node.lessons} 课` : `${row.node.chapters} 章 / ${row.node.lessons} 课` }}</text>
          </view>
          <view v-if="row.node.type === 'group'" class="ct-row-ops">
            <view class="ct-qa-btn" @click.stop="$emit('qa', row.node)">综合问答</view>
          </view>
        </view>
      </template>
      <view v-else class="ct-empty">该学科暂无已蒸馏课程，去书籍加工页处理书籍后自动出现</view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'CourseTree',
  props: {
    // 课程树：[{ id, name, type: 'group'|'course', lessons, courseCount?, chapters?, children? }]
    tree: { type: Array, default: () => [] },
    selectedId: { type: String, default: '' },
  },
  emits: ['select', 'qa'],
  data() {
    return {
      panelOpen: true,
      expanded: {},
    }
  },
  computed: {
    rows() {
      const rows = []
      const walk = (nodes, depth) => {
        for (const n of nodes) {
          rows.push({ node: n, depth })
          if (n.type === 'group' && this.expanded[n.id] && n.children) walk(n.children, depth + 1)
        }
      }
      walk(this.tree, 0)
      return rows
    },
    count() {
      const count = (nodes) => nodes.reduce((n, x) => n + (x.type === 'course' ? 1 : count(x.children || [])), 0)
      return count(this.tree)
    },
  },
  watch: {
    tree: {
      immediate: true,
      handler(nodes) {
        // 默认展开第一层分组
        for (const n of nodes || []) if (n.type === 'group') this.expanded[n.id] = true
      },
    },
  },
  methods: {
    toggleGroup(node) {
      this.expanded[node.id] = !this.expanded[node.id]
    },
    selectCourse(node) {
      this.$emit('select', node)
    },
  },
}
</script>

<style scoped>
.ct-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18rpx 4rpx;
}
.ct-title {
  font-size: 26rpx;
  font-weight: 600;
  color: var(--text-2);
}
.ct-toggle {
  font-size: 24rpx;
  color: var(--text-3);
}
.ct-body {
  margin-top: 4rpx;
}
.ct-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12rpx 12rpx;
  border-radius: 12rpx;
  transition: background 0.15s ease;
}
.ct-row.selected {
  background: var(--bg-accent-soft);
}
.ct-row-main {
  display: flex;
  align-items: center;
  min-width: 0;
  flex: 1;
}
.ct-toggle {
  color: var(--text-3);
  font-size: 24rpx;
  margin-right: 8rpx;
}
.ct-dot {
  color: #4f8cff;
  margin-right: 10rpx;
  font-weight: 700;
}
.ct-name {
  font-size: 27rpx;
  color: var(--text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ct-row.selected .ct-name {
  color: #4f46e5;
  font-weight: 600;
}
.ct-meta {
  margin-left: 12rpx;
  font-size: 22rpx;
  color: var(--text-3);
  flex-shrink: 0;
}
.ct-qa-btn {
  flex-shrink: 0;
  margin-left: 12rpx;
  font-size: 22rpx;
  color: #4f8cff;
  border: 1rpx solid #bfdbfe;
  background: var(--bg-accent-soft);
  border-radius: 999rpx;
  padding: 4rpx 16rpx;
}
.ct-empty {
  font-size: 26rpx;
  color: var(--text-3);
  padding: 8rpx 12rpx;
}
</style>
