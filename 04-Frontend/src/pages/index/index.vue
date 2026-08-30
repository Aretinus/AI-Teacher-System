<template>
  <view class="page">
    <view class="hero">
      <view class="hero-title">AI 教师</view>
      <view class="hero-sub">按费曼方法，把知识讲到你懂为止</view>
    </view>

    <view class="section">
      <view class="section-title">选择学科</view>
      <view class="subject-grid">
        <view class="subject-card" :class="{ active: selectedSubject === '' }" @click="pickSubject('')">
          <view class="subject-name">综合问答</view>
          <view class="subject-skill">跨学科自由提问</view>
        </view>
        <view
          v-for="s in availableSubjects"
          :key="s.id"
          class="subject-card"
          :class="{ active: s.id === selectedSubject }"
          @click="pickSubject(s.id)"
        >
          <view class="subject-name">{{ s.name }}</view>
          <view class="subject-skill">{{ s.registered === false ? '通用教学' : (s.courseCount ? `${s.courseCount} 门课程可学` : '书库就绪，待加工成课程') }}</view>
        </view>
      </view>
    </view>

    <view v-if="selectedSubject" class="section">
      <view class="section-title">选择课程（可选）</view>
      <view class="style-grid">
        <view
          class="style-card"
          :class="{ active: selectedCourse === '' }"
          @click="selectedCourse = ''"
        >
          <view class="style-name">全科问答</view>
          <view class="style-desc">本学科全知识，不限课程直接提问</view>
        </view>
      </view>
      <view class="course-panel">
        <view class="course-panel-head" @click="coursePanelOpen = !coursePanelOpen">
          <text class="course-panel-title">课程分支{{ courseCount ? `（${courseCount} 门课程）` : '' }}</text>
          <text class="course-panel-toggle">{{ coursePanelOpen ? '收起 ▲' : '展开 ▼' }}</text>
        </view>
        <view v-if="coursePanelOpen" class="course-panel-body">
          <template v-if="courseRows.length">
            <view
              v-for="row in courseRows"
              :key="row.node.id"
              class="course-row"
              :class="{ selected: row.node.type === 'course' && row.node.id === selectedCourse }"
              :style="{ paddingLeft: 12 + row.depth * 30 + 'rpx' }"
            >
              <view class="course-row-main" @click="row.node.type === 'group' ? toggleCourseGroup(row.node) : selectCourseNode(row.node)">
                <text v-if="row.node.type === 'group'" class="course-toggle">{{ courseExpanded[row.node.id] ? '▾' : '▸' }}</text>
                <text v-else class="course-dot">·</text>
                <text class="course-name">{{ row.node.name }}</text>
                <text class="course-meta">{{ row.node.type === 'group' ? `${row.node.courseCount} 门课 / ${row.node.lessons} 课` : `${row.node.chapters} 章 / ${row.node.lessons} 课` }}</text>
              </view>
              <view v-if="row.node.type === 'group'" class="course-row-ops">
                <view class="course-qa-btn" @click.stop="categoryQA(row.node)">综合问答</view>
              </view>
            </view>
          </template>
          <view v-else class="style-desc" style="padding:8rpx 12rpx">该学科暂无已蒸馏课程，去书籍加工页处理书籍后自动出现</view>
        </view>
      </view>
    </view>

    <view class="section">
      <view class="section-title">授课风格</view>
      <view class="style-grid">
        <view
          v-for="st in styles"
          :key="st.id"
          class="style-card"
          :class="{ active: st.id === selectedStyle }"
          @click="selectedStyle = st.id"
        >
          <view class="style-name">{{ st.name }}</view>
          <view v-if="st.desc" class="style-desc">{{ st.desc }}</view>
        </view>
      </view>
    </view>

    <view class="new-chat-btn" @click="goChat()">
      <text class="new-chat-icon">✎</text>
      <text>新建对话（{{ subjectName(selectedSubject) }}）</text>
    </view>

    <view v-if="state" class="section">
      <view class="section-title">继续学习</view>
      <view v-if="continueCard" class="card" @click="goChatBySession(continueCard)">
        <view class="card-row">
          <text class="label">学科</text>
          <text class="value">{{ subjectName(continueCard.subject) }}</text>
        </view>
        <view class="card-row">
          <text class="label">最近进度</text>
          <text class="value goal">{{ oneLine(continueCard.summary) }}</text>
        </view>
        <view v-if="continueCard.nextGoal" class="card-row">
          <text class="label">下一步</text>
          <text class="value goal">{{ continueCard.nextGoal }}</text>
        </view>
      </view>
      <view v-else class="card empty-card">该学科还没有学习记录，去开始第一课吧</view>
    </view>

    <view class="section">
      <view class="section-title history-title" @click="expanded = !expanded">
        <text>最近学习（{{ subjectName(selectedSubject) }}）</text>
        <text class="history-toggle">{{ expanded ? '收起 ▲' : '展开 ▼' }}</text>
      </view>
      <view v-if="sessionsOfSubject.length" v-for="s in visibleSessions" :key="s.sessionId" class="history-item" @click="goChatBySession(s)">
        <view class="history-head">
          <text class="history-subject">{{ subjectName(s.subject) }}</text>
          <view class="history-right">
            <text class="history-date">{{ fmtTime(s.lastAt || s.date) }}</text>
            <text class="history-del" @click.stop="removeSession(s)">删除</text>
          </view>
        </view>
        <view class="history-summary">{{ s.summary }}</view>
      </view>
      <view v-else class="card empty-card">暂无会话记录</view>
    </view>

    <tab-bar active="index" />
  </view>
</template>

<script>
import { getSubjects, getState, getHistory, deleteSession, getStyles, getCoursesTree } from '@/api'
import TabBar from '@/components/tab-bar.vue'

export default {
  components: { TabBar },
  data() {
    return {
      subjects: [],
      styles: [],
      courses: [],
      courseTree: [],
      courseExpanded: {},
      selectedSubject: '',
      subjectTouched: false,
      selectedStyle: 'standard',
      selectedCourse: '',
      coursePanelOpen: false,
      state: null,
      history: { sessions: [] },
      expanded: false,
    }
  },
  computed: {
    courseRows() {
      const rows = []
      const walk = (nodes, depth) => {
        for (const n of nodes) {
          rows.push({ node: n, depth })
          if (n.type === 'group' && this.courseExpanded[n.id] && n.children) walk(n.children, depth + 1)
        }
      }
      walk(this.courseTree, 0)
      return rows
    },
    courseCount() {
      const count = (nodes) => nodes.reduce((n, x) => n + (x.type === 'course' ? 1 : count(x.children || [])), 0)
      return count(this.courseTree)
    },
    availableSubjects() {
      return this.subjects || []
    },
    sessionsOfSubject() {
      return (this.history.sessions || []).filter((s) => s.subject === this.selectedSubject)
    },
    visibleSessions() {
      return this.expanded ? this.sessionsOfSubject : this.sessionsOfSubject.slice(0, 1)
    },
    continueCard() {
      return this.sessionsOfSubject.length ? this.sessionsOfSubject[0] : null
    },
  },
  onLoad() {
    this.loadAll()
  },
  onShow() {
    this.loadAll()
  },
  watch: {
    selectedSubject(subject) {
      this.selectedCourse = ''
      this.loadCourses(subject)
    },
  },
  methods: {
    async loadAll() {
      try {
        const [subjects, state, history, styles] = await Promise.all([
          getSubjects(),
          getState(),
          getHistory(),
          getStyles(),
        ])
        this.subjects = subjects
        this.state = state
        this.history = history
        this.styles = styles
        if (styles.length && !styles.some((x) => x.id === this.selectedStyle)) {
          this.selectedStyle = styles[0].id
        }
        if (!this.subjectTouched) {
          const cur = (state && state.currentSubject) || ''
          this.selectedSubject = this.availableSubjects.some((x) => x.id === cur) ? cur : ''
        }
        await this.loadCourses(this.selectedSubject)
      } catch (e) {
        uni.showToast({ title: '后端服务不可用：' + e.message, icon: 'none' })
      }
    },
    async loadCourses(subject) {
      if (!subject) {
        this.courseTree = []
        this.selectedCourse = ''
        return
      }
      try {
        this.courseTree = await getCoursesTree(subject)
        const ids = []
        const walk = (nodes) => nodes.forEach((n) => { ids.push(n.id); if (n.children) walk(n.children) })
        walk(this.courseTree)
        if (this.selectedCourse && !ids.includes(this.selectedCourse)) this.selectedCourse = ''
        // 默认展开第一层分组
        for (const n of this.courseTree) if (n.type === 'group') this.courseExpanded[n.id] = true
      } catch (e) {
        this.courseTree = []
      }
    },
    toggleCourseGroup(node) {
      this.courseExpanded[node.id] = !this.courseExpanded[node.id]
    },
    selectCourseNode(node) {
      if (node.type !== 'course') return
      this.selectedCourse = node.id
    },
    // 大类综合问答：course 以 group: 前缀传递，后端综合该分类全部课程回答
    categoryQA(node) {
      if (!this.selectedSubject) return
      const course = 'group:' + node.id
      uni.navigateTo({ url: `/pages/chat/chat?subject=${this.selectedSubject}&style=${this.selectedStyle}&course=${encodeURIComponent(course)}` })
    },
    pickSubject(id) {
      this.subjectTouched = true
      this.selectedSubject = id
    },
    subjectName(id) {
      if (!id) return '综合问答'
      const s = this.subjects.find((x) => x.id === id)
      return s ? s.name : (id || '未选择')
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
    oneLine(s) {
      if (!s) return ''
      return String(s)
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/[#*`>|~_$\-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 42)
    },
    goChat() {
      uni.navigateTo({ url: `/pages/chat/chat?subject=${this.selectedSubject}&style=${this.selectedStyle}&course=${encodeURIComponent(this.selectedCourse || '')}` })
    },
    goChatBySession(s) {
      uni.navigateTo({ url: `/pages/chat/chat?subject=${s.subject || ''}&sessionId=${s.sessionId}` })
    },
    async removeSession(s) {
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
        this.loadAll()
      } catch (e) {
        uni.showToast({ title: '删除失败：' + e.message, icon: 'none' })
      }
    },
    goSettings() {
      uni.redirectTo({ url: '/pages/settings/settings' })
    },
  },
}
</script>

<style scoped>
.page {
  padding: 30rpx 30rpx 140rpx;
  min-height: 100vh;
}
.hero {
  padding: 60rpx 20rpx 40rpx;
}
.hero-title {
  font-size: 56rpx;
  font-weight: 700;
  color: #1f2937;
}
.hero-sub {
  margin-top: 12rpx;
  font-size: 28rpx;
  color: #6b7280;
}
.section {
  margin-top: 30rpx;
}
.section-title {
  font-size: 32rpx;
  font-weight: 600;
  color: #374151;
  margin-bottom: 18rpx;
}
.history-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.history-toggle {
  font-size: 26rpx;
  color: #4f8cff;
  font-weight: 600;
  background: #f0f5ff;
  border: 1rpx solid #cfe0ff;
  border-radius: 24rpx;
  padding: 4rpx 20rpx;
}
.new-chat-btn {
  margin-top: 30rpx;
  background: linear-gradient(135deg, #4f8cff, #7c3aed);
  color: #ffffff;
  border-radius: 18rpx;
  padding: 26rpx 0;
  text-align: center;
  font-size: 31rpx;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12rpx;
  box-shadow: 0 6rpx 20rpx rgba(79, 140, 255, 0.3);
}
.new-chat-btn:active {
  opacity: 0.85;
}
.new-chat-icon {
  font-size: 32rpx;
}
.subject-grid {
  display: flex;
  gap: 20rpx;
}
.subject-card {
  flex: 1;
  background: #ffffff;
  border: 3rpx solid #e5e7eb;
  border-radius: 20rpx;
  padding: 28rpx 24rpx;
  text-align: center;
}
.subject-card.active {
  border-color: #4f8cff;
  background: #f0f5ff;
}
.subject-name {
  font-size: 34rpx;
  font-weight: 600;
  color: #1f2937;
}
.subject-skill {
  margin-top: 8rpx;
  font-size: 24rpx;
  color: #9ca3af;
}
.style-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
}
.style-card {
  flex: 1;
  min-width: 40%;
  background: #ffffff;
  border: 3rpx solid #e5e7eb;
  border-radius: 20rpx;
  padding: 22rpx 24rpx;
}
.style-card.active {
  border-color: #4f8cff;
  background: #f0f5ff;
}
.style-name {
  font-size: 30rpx;
  font-weight: 600;
  color: #1f2937;
}
.style-desc {
  margin-top: 6rpx;
  font-size: 23rpx;
  color: #9ca3af;
  line-height: 1.5;
}
.style-card.disabled {
  opacity: 0.55;
}
.course-panel {
  margin-top: 18rpx;
}
.course-panel-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18rpx 4rpx;
}
.course-panel-title {
  font-size: 26rpx;
  font-weight: 600;
  color: #4b5563;
}
.course-panel-toggle {
  font-size: 24rpx;
  color: #9ca3af;
}
.course-panel-body {
  margin-top: 4rpx;
}
.course-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12rpx 12rpx;
  border-radius: 14rpx;
}
.course-row.selected {
  background: #eef2ff;
}
.course-row-main {
  display: flex;
  align-items: center;
  min-width: 0;
  flex: 1;
}
.course-toggle {
  color: #9ca3af;
  font-size: 24rpx;
  margin-right: 8rpx;
}
.course-dot {
  color: #4f8cff;
  margin-right: 10rpx;
  font-weight: 700;
}
.course-name {
  font-size: 27rpx;
  color: #1f2937;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.course-row.selected .course-name {
  color: #4f46e5;
  font-weight: 600;
}
.course-meta {
  margin-left: 12rpx;
  font-size: 22rpx;
  color: #9ca3af;
  flex-shrink: 0;
}
.course-qa-btn {
  flex-shrink: 0;
  margin-left: 12rpx;
  font-size: 22rpx;
  color: #4f8cff;
  border: 1rpx solid #bfdbfe;
  background: #eff6ff;
  border-radius: 999rpx;
  padding: 4rpx 16rpx;
}
.card {
  background: #ffffff;
  border-radius: 20rpx;
  padding: 24rpx 28rpx;
}
.card-row {
  display: flex;
  justify-content: space-between;
  padding: 8rpx 0;
}
.label {
  color: #9ca3af;
  font-size: 28rpx;
}
.value {
  color: #1f2937;
  font-size: 28rpx;
}
.goal {
  max-width: 70%;
  text-align: right;
}
.history-item {
  background: #ffffff;
  border-radius: 20rpx;
  padding: 22rpx 28rpx;
  margin-bottom: 16rpx;
}
.history-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8rpx;
}
.history-subject {
  font-size: 26rpx;
  color: #4f8cff;
  font-weight: 600;
}
.history-date {
  font-size: 24rpx;
  color: #9ca3af;
}
.history-right {
  display: flex;
  align-items: center;
  gap: 20rpx;
}
.history-del {
  font-size: 24rpx;
  color: #ef4444;
  border: 1rpx solid #fecaca;
  border-radius: 20rpx;
  padding: 2rpx 16rpx;
}
.history-del:active {
  background: #fef2f2;
}
.history-summary {
  font-size: 26rpx;
  color: #6b7280;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>