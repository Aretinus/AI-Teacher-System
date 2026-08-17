<template>
  <view class="page">
    <view class="section">
      <view class="section-title">学习目标</view>
      <view class="subject-grid">
        <view
          v-for="s in subjects"
          :key="s.id"
          class="subject-card"
          :class="{ active: s.id === selectedSubject }"
          @click="selectedSubject = s.id"
        >
          <view class="subject-name">{{ s.name }}</view>
          <view class="subject-skill">{{ (s.defaultSkill || s.skills[0]) || '' }}</view>
        </view>
      </view>
      <view class="card">
        <view class="card-row">
          <text class="label">学科</text>
          <text class="value">{{ subjectName(selectedSubject) }}</text>
        </view>
        <view class="card-row">
          <text class="label">当前目标</text>
          <text class="value goal">{{ currentGoal || '未设定' }}</text>
        </view>
        <view v-if="continueCard" class="card-row">
          <text class="label">最近进度</text>
          <text class="value goal">{{ oneLine(continueCard.summary) }}</text>
        </view>
      </view>
    </view>

    <view class="section">
      <view class="section-title history-title" @click="pointsExpanded = !pointsExpanded">
        <text>知识点掌握度（{{ subjectName(selectedSubject) }}）</text>
        <text class="history-toggle">{{ pointsExpanded ? '收起 ▲' : '展开 ▼' }}</text>
      </view>
      <view v-if="pointsExpanded">
        <view v-if="pointsList.length" class="card">
        <view v-for="p in pointsList" :key="p.key" class="point-item">
          <view class="point-head">
            <text class="point-name">{{ p.key }}</text>
            <text class="point-num">{{ Math.round(p.mastery * 100) }}%</text>
          </view>
          <view class="point-bar">
            <view class="point-fill" :style="{ width: pct(p.mastery) }"></view>
          </view>
          <view class="point-meta">
            <text>最近学习：{{ p.lastSeen || '-' }}</text>
            <text>练习 {{ p.attempts || 0 }} 次</text>
          </view>
        </view>
      </view>
      <view v-else class="card empty-card">该学科还没有知识点记录，先去对话吧</view>
      </view>
    </view>

    <view v-if="state && state.recentErrors && state.recentErrors.length" class="section">
      <view class="section-title">近期错误</view>
      <view class="card">
        <view v-for="(err, i) in state.recentErrors" :key="i" class="error-item">
          <view class="error-q">{{ err.question }}</view>
          <view class="error-a">你的回答：{{ err.answer }}</view>
          <view class="error-fix">订正：{{ err.fix }}</view>
        </view>
      </view>
    </view>

    <view class="section">
      <view class="section-title history-title" @click="expanded = !expanded">
        <text>会话记录（{{ subjectName(selectedSubject) }}）</text>
        <text class="history-toggle">{{ expanded ? '收起 ▲' : '展开 ▼' }}</text>
      </view>
      <view v-if="visibleSessions.length" class="card">
        <view v-for="s in visibleSessions" :key="s.sessionId" class="history-item" @click="openSession(s)">
          <view class="history-head">
            <text class="history-subject">{{ subjectName(s.subject) }}</text>
            <view class="history-right">
              <text class="history-date">{{ s.date }}</text>
              <text class="history-del" @click.stop="removeSession(s)">删除</text>
            </view>
          </view>
          <view class="history-summary">{{ s.summary }}</view>
          <view v-if="s.nextGoal" class="history-goal">下一步：{{ s.nextGoal }}</view>
        </view>
      </view>
      <view v-else class="card empty-card">该学科暂无会话记录</view>
    </view>

    <tab-bar active="overview" />
  </view>
</template>

<script>
import { getState, getHistory, getSubjects, deleteSession } from '@/api'
import TabBar from '@/components/tab-bar.vue'

export default {
  components: { TabBar },
  data() {
    return {
      state: null,
      sessions: [],
      subjects: [],
      selectedSubject: '',
      expanded: false,
      pointsExpanded: true,
    }
  },
  computed: {
    pointsList() {
      if (!this.state || !this.state.knowledgePoints) return []
      return Object.entries(this.state.knowledgePoints)
        .filter(([, v]) => v.subject === this.selectedSubject)
        .map(([key, v]) => ({ key, ...v }))
        .sort((a, b) => (b.mastery || 0) - (a.mastery || 0))
    },
    sessionsOfSubject() {
      return (this.sessions || []).filter((s) => s.subject === this.selectedSubject)
    },
    visibleSessions() {
      return this.expanded ? this.sessionsOfSubject : this.sessionsOfSubject.slice(0, 1)
    },
    continueCard() {
      return this.sessionsOfSubject.length ? this.sessionsOfSubject[0] : null
    },
    currentGoal() {
      const c = this.continueCard
      if (c && c.nextGoal) return c.nextGoal
      if (this.state && this.state.currentSubject === this.selectedSubject && this.state.currentGoal) {
        return this.state.currentGoal
      }
      return ''
    },
  },
  onLoad() {
    this.loadAll()
  },
  onShow() {
    this.loadAll()
    if (!this.subjects.length) this.loadAll()
  },
  methods: {
    async loadAll() {
      try {
        const [state, history, subjects] = await Promise.all([getState(), getHistory(), getSubjects()])
        this.state = state
        this.sessions = history.sessions || []
        this.subjects = subjects
        if (!this.selectedSubject) {
          this.selectedSubject = (state && state.currentSubject) || (subjects[0] && subjects[0].id) || ''
        }
      } catch (e) {
        uni.showToast({ title: '加载失败：' + e.message, icon: 'none' })
      }
    },
    subjectName(id) {
      const s = this.subjects.find((x) => x.id === id)
      return s ? s.name : (id || '-')
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
    openSession(s) {
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
  },
}
</script>

<style scoped>
.page {
  padding: 30rpx 30rpx 140rpx;
  min-height: 100vh;
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
.subject-grid {
  display: flex;
  gap: 20rpx;
  margin-bottom: 20rpx;
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
.point-item {
  padding: 14rpx 0;
  border-bottom: 1rpx solid #f1f2f5;
}
.point-item:last-child {
  border-bottom: none;
}
.point-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.point-name {
  font-size: 28rpx;
  color: #1f2937;
  font-weight: 500;
}
.point-num {
  font-size: 26rpx;
  color: #4f8cff;
  font-weight: 600;
}
.point-bar {
  height: 16rpx;
  background: #eef1f5;
  border-radius: 8rpx;
  margin: 12rpx 0 8rpx;
  overflow: hidden;
}
.point-fill {
  height: 100%;
  background: linear-gradient(90deg, #4f8cff, #7c3aed);
  border-radius: 8rpx;
}
.point-meta {
  display: flex;
  justify-content: space-between;
  font-size: 24rpx;
  color: #9ca3af;
}
.error-item {
  padding: 14rpx 0;
  border-bottom: 1rpx solid #f1f2f5;
}
.error-item:last-child {
  border-bottom: none;
}
.error-q {
  font-size: 28rpx;
  color: #1f2937;
}
.error-a {
  font-size: 26rpx;
  color: #b91c1c;
  margin-top: 6rpx;
}
.error-fix {
  font-size: 26rpx;
  color: #15803d;
  margin-top: 6rpx;
}
.history-item {
  padding: 14rpx 0;
  border-bottom: 1rpx solid #f1f2f5;
}
.history-item:last-child {
  border-bottom: none;
}
.history-head {
  display: flex;
  justify-content: space-between;
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
.history-subject {
  font-size: 26rpx;
  color: #4f8cff;
  font-weight: 600;
}
.history-date {
  font-size: 24rpx;
  color: #9ca3af;
}
.history-summary {
  font-size: 26rpx;
  color: #4b5563;
  margin-top: 8rpx;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.history-goal {
  font-size: 24rpx;
  color: #7c3aed;
  margin-top: 8rpx;
}
.empty-card {
  text-align: center;
  color: #9ca3af;
  font-size: 27rpx;
}
</style>