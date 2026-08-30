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
      <course-tree :tree="courseTree" :selected-id="selectedCourse" @select="onCourseSelect" @qa="categoryQA" />
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
import CourseTree from '@/components/course-tree.vue'
import TabBar from '@/components/tab-bar.vue'

export default {
  components: {
    CourseTree, TabBar },
  data() {
    return {
      subjects: [],
      styles: [],
      courses: [],
      courseTree: [],
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
      } catch (e) {
        this.courseTree = []
      }
    },
    onCourseSelect(node) {
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
  margin: 20rpx 20rpx 0;
  padding: 40rpx 36rpx;
  border-radius: 16rpx;
  background: linear-gradient(135deg, #4f8cff 0%, #7c3aed 100%);
  box-shadow: var(--shadow-hero);
}
.hero-title {
  font-size: 44rpx;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #ffffff;
}
.hero-sub {
  margin-top: 10rpx;
  font-size: 26rpx;
  color: rgba(255, 255, 255, 0.85);
}
.section {
  margin-top: 30rpx;
}
.section-title {
  display: flex;
  align-items: center;
  font-size: 30rpx;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-1);
  margin-bottom: 18rpx;
}
.section-title::before {
  content: '';
  width: 8rpx;
  height: 28rpx;
  border-radius: 4rpx;
  background: linear-gradient(180deg, #4f8cff, #7c3aed);
  margin-right: 12rpx;
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
  background: var(--bg-accent-soft);
  border: 1rpx solid #cfe0ff;
  border-radius: 16rpx;
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
  flex-wrap: wrap;
  gap: 20rpx;
}
.subject-card {
  min-width: 190rpx;
}
.subject-card {
  flex: 1;
  background: var(--bg-card);
  border: 2rpx solid var(--border);
  border-radius: 16rpx;
  padding: 28rpx 24rpx;
  text-align: center;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}
.subject-card:hover {
  transform: translateY(-2rpx);
  box-shadow: var(--shadow-2);
}
.subject-card.active {
  border-color: #4f8cff;
  background: var(--bg-accent-soft);
}
.subject-name {
  font-size: 34rpx;
  font-weight: 600;
  color: var(--text-1);
}
.subject-skill {
  margin-top: 8rpx;
  font-size: 24rpx;
  color: var(--text-3);
}
.style-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
}
.style-card {
  flex: 1;
  min-width: 40%;
  background: var(--bg-card);
  border: 2rpx solid var(--border);
  border-radius: 16rpx;
  padding: 22rpx 24rpx;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}
.style-card:hover {
  transform: translateY(-2rpx);
  box-shadow: var(--shadow-2);
}
.style-card.active {
  border-color: #4f8cff;
  background: var(--bg-accent-soft);
}
.style-name {
  font-size: 30rpx;
  font-weight: 600;
  color: var(--text-1);
}
.style-desc {
  margin-top: 6rpx;
  font-size: 23rpx;
  color: var(--text-3);
  line-height: 1.5;
}
.style-card.disabled {
  opacity: 0.55;
}
.card {
  background: var(--bg-card);
  border-radius: 16rpx;
  padding: 24rpx 28rpx;
}
.card-row {
  display: flex;
  justify-content: space-between;
  padding: 8rpx 0;
}
.label {
  color: var(--text-3);
  font-size: 28rpx;
}
.value {
  color: var(--text-1);
  font-size: 28rpx;
}
.goal {
  max-width: 70%;
  text-align: right;
}
.history-item {
  background: var(--bg-card);
  border-radius: 16rpx;
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
  color: var(--text-3);
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
  border-radius: 16rpx;
  padding: 2rpx 16rpx;
}
.history-del:active {
  background: #fef2f2;
}
.history-summary {
  font-size: 26rpx;
  color: var(--text-3);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
[data-theme="dark"] .hero {
  background: linear-gradient(135deg, #2b3a67 0%, #4c2b8f 100%);
  box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.35);
}


/* ===== 响应式（窄屏） ===== */
@media (max-width: 700px) {
  .hero {
    margin: 12rpx 12rpx 0;
    padding: 30rpx 28rpx;
  }
  .hero-title {
    font-size: 38rpx;
  }
  .section {
    margin-top: 22rpx;
  }
  .style-card {
    min-width: 46%;
  }
}
</style>