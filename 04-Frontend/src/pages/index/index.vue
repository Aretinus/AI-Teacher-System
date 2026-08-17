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
          <view class="subject-name">全科提问</view>
          <view class="subject-skill">自动判断学科与课程</view>
        </view>
        <view
          v-for="s in subjects"
          :key="s.id"
          class="subject-card"
          :class="{ active: s.id === selectedSubject }"
          @click="pickSubject(s.id)"
        >
          <view class="subject-name">{{ s.name }}</view>
          <view class="subject-skill">{{ (s.defaultSkill || s.skills[0]) || '' }}</view>
        </view>
      </view>
    </view>

    <view class="section">
      <view class="section-title">选择课程（可选）</view>
      <view class="style-grid">
        <view
          class="style-card"
          :class="{ active: selectedCourse === '' }"
          @click="selectedCourse = ''"
        >
          <view class="style-name">全科问答</view>
          <view class="style-desc">不限课程，直接提问</view>
        </view>
      </view>
      <view class="course-panel">
        <view class="course-panel-head" @click="coursePanelOpen = !coursePanelOpen">
          <text class="course-panel-title">课程分支{{ courses.length ? `（${courses.length} 门）` : '' }}</text>
          <text class="course-panel-toggle">{{ coursePanelOpen ? '收起 ▲' : '展开 ▼' }}</text>
        </view>
        <view v-if="coursePanelOpen" class="style-grid course-panel-body">
          <view
            v-for="c in courses"
            :key="c.id"
            class="style-card"
            :class="{ active: c.id === selectedCourse, disabled: !c.available }"
            @click="selectCourse(c)"
          >
            <view class="style-name">{{ c.name }}</view>
            <view class="style-desc">{{ c.available ? `${c.chapters} 章 / ${c.lessons} 课` : '蒸馏完成后可学' }}</view>
          </view>
          <view v-if="!courses.length" class="style-desc" style="width:100%">该学科暂无已蒸馏课程，去书籍加工页处理书籍后自动出现</view>
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
      <view class="recent-points">
        <view v-for="(kp, key) in topPoints" :key="key" class="point-item">
          <view class="point-name">{{ key }}</view>
          <view class="point-bar">
            <view class="point-fill" :style="{ width: pct(kp.mastery) }"></view>
          </view>
          <text class="point-num">{{ Math.round((kp.mastery || 0) * 100) }}%</text>
        </view>
      </view>
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
            <text class="history-date">{{ s.date }}</text>
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
import { getSubjects, getState, getHistory, deleteSession, getStyles, getCourses } from '@/api'
import TabBar from '@/components/tab-bar.vue'

export default {
  components: { TabBar },
  data() {
    return {
      subjects: [],
      styles: [],
      courses: [],
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
    topPoints() {
      if (!this.state || !this.state.knowledgePoints) return []
      return Object.entries(this.state.knowledgePoints)
        .filter(([, v]) => v.subject === this.selectedSubject)
        .sort((a, b) => (b[1].mastery || 0) - (a[1].mastery || 0))
        .slice(0, 4)
        .reduce((acc, [k, v]) => {
          acc[k] = v
          return acc
        }, {})
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
          this.selectedSubject = (state && state.currentSubject) || ''
        }
        await this.loadCourses(this.selectedSubject)
      } catch (e) {
        uni.showToast({ title: '后端服务不可用：' + e.message, icon: 'none' })
      }
    },
    async loadCourses(subject) {
      if (!subject) {
        this.courses = []
        this.selectedCourse = ''
        return
      }
      try {
        this.courses = await getCourses(subject)
        if (this.selectedCourse && !this.courses.some((c) => c.id === this.selectedCourse)) {
          this.selectedCourse = ''
        }
      } catch (e) {
        this.courses = []
      }
    },
    pickSubject(id) {
      this.subjectTouched = true
      this.selectedSubject = id
    },
    selectCourse(c) {
      if (!c.available) {
        uni.showToast({ title: '该课程尚未蒸馏完成', icon: 'none' })
        return
      }
      this.selectedCourse = c.id
    },
    subjectName(id) {
      const s = this.subjects.find((x) => x.id === id)
      return s ? s.name : (id || '未选择')
    },
    pct(m) {
      return Math.max(4, Math.round((m || 0) * 100)) + '%'
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
    goOverview() {
      uni.redirectTo({ url: '/pages/overview/overview' })
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
.recent-points {
  margin-top: 18rpx;
  background: #ffffff;
  border-radius: 20rpx;
  padding: 20rpx 28rpx;
}
.point-item {
  display: flex;
  align-items: center;
  padding: 10rpx 0;
}
.point-name {
  width: 300rpx;
  font-size: 26rpx;
  color: #4b5563;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.point-bar {
  flex: 1;
  height: 16rpx;
  background: #eef1f5;
  border-radius: 8rpx;
  margin: 0 16rpx;
  overflow: hidden;
}
.point-fill {
  height: 100%;
  background: linear-gradient(90deg, #4f8cff, #7c3aed);
  border-radius: 8rpx;
}
.point-num {
  font-size: 24rpx;
  color: #6b7280;
  width: 90rpx;
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