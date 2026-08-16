<template>
  <view class="page">
    <view class="section">
      <view class="section-title">AI 提供商</view>
      <view class="card">
        <view class="form-row">
          <text class="label">提供商</text>
          <picker :range="providerNames" :value="providerIndex" @change="onProviderChange" class="picker">
            <view class="picker-value">{{ providerName }}</view>
          </picker>
        </view>
        <view class="form-row" v-if="form.provider === 'runtime'">
          <text class="label">当前模型</text>
          <text class="value">{{ form.modelName || 'agnes-2.0-flash' }}（本地运行时）</text>
        </view>
        <template v-if="form.provider !== 'runtime'">
          <view class="form-row">
            <text class="label">Base URL</text>
            <input v-model="form.baseUrl" class="form-input" placeholder="https://api.openai.com/v1 或 https://api.deepseek.com/v1" />
          </view>
          <view class="form-row">
            <text class="label">API Key</text>
            <input v-model="form.apiKey" password class="form-input" placeholder="sk-..." />
          </view>
          <view class="form-row">
            <text class="label">模型名</text>
            <input v-model="form.modelName" class="form-input" placeholder="gpt-4o-mini / deepseek-chat / qwen-plus" />
          </view>
        </template>
      </view>
      <view class="btn-row">
        <view class="btn primary" @click="save">保存</view>
        <view class="btn" :class="{ loading: testing }" @click="test">{{ testing ? '测试中…' : '测试连接' }}</view>
      </view>
      <view v-if="testResult" class="test-result" :class="testResult.ok ? 'ok' : 'fail'">
        {{ testResult.ok ? '✓ ' + testResult.detail : '✗ ' + testResult.error }}
      </view>
    </view>

    <view class="section">
      <view class="section-title">技能与书籍</view>
      <view class="card">
        <view class="refresh-desc">扫描 01-Skills/subjects 与书籍蒸馏目录，更新学科索引。新增学科/技能后无需重启。</view>
        <view class="btn refresh-btn" :class="{ loading: refreshing }" @click="doRefresh">
          {{ refreshing ? '更新中…' : '一键更新技能与书籍' }}
        </view>
        <view v-if="refreshResult" class="refresh-result">
          <view class="refresh-line ok">✓ 已更新，共 {{ refreshResult.totalSubjects }} 个学科</view>
          <view v-if="refreshResult.addedSubjects.length" class="refresh-line">+ 新增学科：{{ refreshResult.addedSubjects.join('、') }}</view>
          <view v-if="refreshResult.addedSkills.length" class="refresh-line">
            + 新增技能：
            <text v-for="(a, i) in refreshResult.addedSkills" :key="i">{{ a.subject }}（{{ a.skills.join('、') }}）{{ i < refreshResult.addedSkills.length - 1 ? '；' : '' }}</text>
          </view>
          <view v-if="refreshResult.changedSubjects.length" class="refresh-line">~ 变化学科：{{ refreshResult.changedSubjects.join('、') }}</view>
          <view v-if="refreshResult.removedSubjects.length" class="refresh-line">- 移除学科：{{ refreshResult.removedSubjects.join('、') }}</view>
          <view v-if="refreshResult.invalidSkills.length" class="refresh-line fail">
            <text v-for="(iv, i) in refreshResult.invalidSkills" :key="i">⚠ {{ iv }}<text v-if="i < refreshResult.invalidSkills.length - 1">；</text></text>
          </view>
          <view v-if="refreshResult.noCourse.length" class="refresh-line warn">
            <text v-for="(nc, i) in refreshResult.noCourse" :key="i">· {{ nc }}<text v-if="i < refreshResult.noCourse.length - 1">；</text></text>
          </view>
        </view>
      </view>
    </view>

        <view class="section">
      <view class="section-title">蒸馏书籍</view>
      <view class="card">
        <view class="form-row">
          <text class="label">学科</text>
          <input v-model="distillSubject" class="form-input" placeholder="例如：physics 或 物理" />
        </view>
        <view class="subject-chips">
          <view v-for="s in subjects" :key="s.id" class="subject-chip" @click="distillSubject = s.id">{{ s.name }}</view>
          <view v-if="canAddSubject" class="subject-chip add-chip" @click="addDistillSubject">＋ 添加「{{ distillSubject }}」</view>
        </view>
        <view class="form-row">
          <text class="label">书籍目录</text>
          <input v-model="distillFolder" class="form-input" placeholder="E:\Projects\AI-Teacher-System\02-DATA\books\raw\Physic\物理十书（英文版）" />
          <view class="btn mini-btn" @click="chooseFolder">选择目录</view>
        </view>
        <view class="btn refresh-btn" @click="doScan">扫描目录</view>
        <view v-if="scanBooks.length" class="book-list">
          <view
            v-for="(b, i) in scanBooks"
            :key="b.file"
            class="book-item"
            :class="{ selected: i === selectedBookIdx }"
            @click="selectedBookIdx = i"
          >
            <view class="book-name">{{ b.name }}</view>
            <view class="book-size">{{ b.sizeMB }} MB</view>
          </view>
        </view>
        <view v-if="scanError" class="refresh-line fail">{{ scanError }}</view>
        <view v-if="scanBooks.length" class="btn refresh-btn" :class="{ loading: distilling }" @click="doDistill">
          {{ distilling ? '蒸馏中…（可离开页面，任务在后台运行）' : '蒸馏选中的书籍' }}
        </view>
        <view v-if="distillLog.length" class="distill-log">
          <view v-for="(l, i) in distillLog" :key="i" class="distill-line">{{ l }}</view>
        </view>
      </view>
    </view>

    <view class="section tips">
      <view class="section-title">说明</view>
      <view class="card">
        <view class="tip-line">· 本地模型（默认）：无需配置，由 agentskills-runtime 提供（agnes-2.0-flash）</view>
        <view class="tip-line">· OpenAI 兼容：支持任意提供 /v1/chat/completions 接口的服务</view>
        <view class="tip-line">· 切换提供商后新对话立即生效，历史对话可继续查看</view>
        <view class="tip-line">· API Key 保存在本地 02-DATA/settings.json，仅本机使用</view>
      </view>
    </view>

    <tab-bar active="settings" />
  </view>
</template>

<script>
import { getSettings, saveSettings, testSettings, refreshSkills, scanBooks, distillBook, getDistillJob, getSubjects } from '@/api'
import TabBar from '@/components/tab-bar.vue'

export default {
  components: { TabBar },
  data() {
    return {
      form: { provider: 'runtime', baseUrl: '', apiKey: '', modelName: '' },
      testing: false,
      testResult: null,
      refreshing: false,
      refreshResult: null,
      distillFolder: '',
      scanBooks: [],
      scanError: '',
      selectedBookIdx: -1,
      distilling: false,
      distillLog: [],
      distillSubject: '',
      pollTimer: null,
      subjects: [],
      providers: [
        { id: 'runtime', name: '本地模型（默认）' },
        { id: 'openai', name: 'OpenAI 兼容' },
      ],
    }
  },
  computed: {
    providerIndex() {
      const i = this.providers.findIndex((p) => p.id === this.form.provider)
      return i < 0 ? 0 : i
    },
    providerName() {
      return this.providers[this.providerIndex].name
    },
    providerNames() {
      return this.providers.map((p) => p.name)
    },
    canAddSubject() {
      const name = (this.distillSubject || '').trim()
      if (!name) return false
      return !this.subjects.some((s) => s.id === name || s.name === name)
    },
  },
  onLoad() {
    this.load()
  },
  onUnload() {
    if (this.pollTimer) clearTimeout(this.pollTimer)
  },
  methods: {
    async load() {
      try {
        const [settings, subjects] = await Promise.all([getSettings(), getSubjects()])
        this.form = { ...this.form, ...settings }
        this.subjects = subjects
        this.distillSubject = subjects[0] && subjects[0].id
      } catch (e) {
        uni.showToast({ title: '加载设置失败：' + e.message, icon: 'none' })
      }
    },
    onProviderChange(e) {
      this.form.provider = this.providers[Number(e.detail.value)].id
      this.testResult = null
    },
    async save() {
      try {
        await saveSettings(this.form)
        uni.showToast({ title: '已保存', icon: 'success' })
      } catch (e) {
        uni.showToast({ title: '保存失败：' + e.message, icon: 'none' })
      }
    },
    async test() {
      this.testing = true
      this.testResult = null
      try {
        this.testResult = await testSettings(this.form)
      } catch (e) {
        this.testResult = { ok: false, error: e.message }
      } finally {
        this.testing = false
      }
    },
    async doRefresh() {
      this.refreshing = true
      this.refreshResult = null
      try {
        this.refreshResult = await refreshSkills()
      } catch (e) {
        this.refreshResult = { ok: false, error: e.message, addedSubjects: [], addedSkills: [], changedSubjects: [], removedSubjects: [], invalidSkills: [], noCourse: [] }
      } finally {
        this.refreshing = false
      }
    },
    addDistillSubject() {
      const name = (this.distillSubject || '').trim()
      if (!name) return
      this.subjects.push({ id: name, name, skills: [], defaultSkill: '' })
      uni.showToast({ title: `已添加学科：${name}`, icon: 'none' })
    },
    chooseFolder() {
      if (typeof document === 'undefined') {
        uni.showToast({ title: '仅 H5 支持目录选择，请手动输入路径', icon: 'none' })
        return
      }
      const input = document.createElement('input')
      input.type = 'file'
      input.webkitdirectory = true
      input.onchange = () => {
        const files = Array.from(input.files || [])
        if (!files.length) return
        const first = files[0]
        const abs = first.path || first.webkitRelativePath
        if (!abs || !first.path) {
          uni.showToast({ title: '浏览器未暴露绝对路径，请手动输入目录', icon: 'none' })
          return
        }
        const sep = abs.lastIndexOf('\\') >= 0 ? '\\' : '/'
        this.distillFolder = abs.slice(0, abs.lastIndexOf(sep))
        this.doScan()
      }
      input.click()
    },
    async doScan() {
      this.scanError = ''
      this.scanBooks = []
      this.selectedBookIdx = -1
      try {
        const r = await scanBooks(this.distillFolder.trim())
        this.scanBooks = r.books || []
        if (!this.scanBooks.length) this.scanError = '该目录下未找到书籍文件（pdf/epub/mobi/txt/md 等）'
      } catch (e) {
        this.scanError = e.message
      }
    },
    async doDistill() {
      const book = this.scanBooks[this.selectedBookIdx]
      if (!book || this.distilling) return
      this.distilling = true
      this.distillLog = []
      try {
        const name = book.name.replace(/\.(pdf|epub|djvu|mobi|azw|azw3|docx|txt|md|cbz)$/i, '')
        const { jobId } = await distillBook({ file: book.file, name, subject: this.distillSubject })
        await this.pollJob(jobId)
      } catch (e) {
        this.distillLog.push('✗ ' + e.message)
      } finally {
        this.distilling = false
      }
    },
    async pollJob(jobId) {
      return new Promise((resolve) => {
        const tick = async () => {
          try {
            const j = await getDistillJob(jobId)
            this.distillLog = j.log
            if (j.status === 'running') {
              this.pollTimer = setTimeout(tick, 2000)
            } else {
              if (j.status === 'error') this.distillLog.push('✗ 蒸馏失败')
              if (j.error) this.distillLog.push('✗ ' + j.error)
              resolve()
            }
          } catch (e) {
            this.distillLog.push('✗ ' + e.message)
            resolve()
          }
        }
        tick()
      })
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
.card {
  background: #ffffff;
  border-radius: 20rpx;
  padding: 24rpx 28rpx;
}
.form-row {
  display: flex;
  align-items: center;
  padding: 14rpx 0;
}
.label {
  width: 180rpx;
  flex-shrink: 0;
  color: #6b7280;
  font-size: 28rpx;
}
.value {
  color: #1f2937;
  font-size: 28rpx;
}
.picker {
  flex: 1;
}
.picker-value {
  background: #f3f4f6;
  border-radius: 12rpx;
  padding: 14rpx 22rpx;
  font-size: 28rpx;
  color: #1f2937;
}
.form-input {
  flex: 1;
  background: #f3f4f6;
  border-radius: 12rpx;
  padding: 14rpx 22rpx;
  font-size: 28rpx;
}
.btn-row {
  display: flex;
  gap: 20rpx;
  margin-top: 24rpx;
}
.btn {
  flex: 1;
  text-align: center;
  border-radius: 16rpx;
  padding: 20rpx 0;
  font-size: 29rpx;
  font-weight: 600;
}
.btn.primary {
  background: #4f8cff;
  color: #ffffff;
}
.btn:not(.primary) {
  background: #f3f4f6;
  color: #374151;
}
.btn.loading {
  opacity: 0.6;
}
.test-result {
  margin-top: 20rpx;
  border-radius: 14rpx;
  padding: 18rpx 24rpx;
  font-size: 27rpx;
}
.test-result.ok {
  background: #f0fdf4;
  color: #15803d;
}
.test-result.fail {
  background: #fef2f2;
  color: #b91c1c;
}
.tips {
  margin-top: 40rpx;
}
.refresh-desc {
  font-size: 26rpx;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 20rpx;
}
.refresh-btn {
  background: #4f8cff;
  color: #ffffff;
}
.refresh-btn.loading {
  opacity: 0.6;
}
.refresh-result {
  margin-top: 20rpx;
  border-radius: 14rpx;
  background: #f8fafc;
  padding: 18rpx 24rpx;
}
.refresh-line {
  font-size: 26rpx;
  color: #374151;
  padding: 4rpx 0;
  line-height: 1.6;
}
.refresh-line.ok {
  color: #15803d;
  font-weight: 600;
}
.refresh-line.fail {
  color: #b91c1c;
}
.refresh-line.warn {
  color: #b45309;
}
.subject-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 12rpx;
  margin-top: 14rpx;
}
.subject-chip {
  padding: 6rpx 22rpx;
  border-radius: 999rpx;
  background: #f3f4f6;
  color: #4b5563;
  font-size: 24rpx;
  border: 2rpx solid #e5e7eb;
}
.subject-chip:active {
  background: #e0e7ff;
  color: #4f46e5;
}
.subject-chip.add-chip {
  border-style: dashed;
  color: #4f46e5;
  background: #eef2ff;
}
.btn.mini-btn {
  flex: 0 0 auto;
  width: auto;
  flex-shrink: 0;
  margin-left: 16rpx;
  padding: 10rpx 16rpx;
  font-size: 24rpx;
  border-radius: 12rpx;
  font-weight: 500;
}
.book-list {
  margin-top: 20rpx;
  max-height: 400rpx;
  overflow-y: auto;
}
.book-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2rpx solid #e5e7eb;
  border-radius: 12rpx;
  padding: 14rpx 20rpx;
  margin-bottom: 12rpx;
}
.book-item.selected {
  border-color: #4f8cff;
  background: #f0f5ff;
}
.book-name {
  font-size: 26rpx;
  color: #374151;
  flex: 1;
  word-break: break-all;
}
.book-size {
  font-size: 24rpx;
  color: #9ca3af;
  margin-left: 16rpx;
}
.distill-log {
  margin-top: 20rpx;
  background: #1f2937;
  border-radius: 14rpx;
  padding: 18rpx 22rpx;
  max-height: 480rpx;
  overflow-y: auto;
}
.distill-line {
  font-size: 24rpx;
  color: #d1d5db;
  line-height: 1.6;
  font-family: Consolas, monospace;
  word-break: break-all;
}
.tip-line {
  font-size: 26rpx;
  color: #6b7280;
  padding: 8rpx 0;
  line-height: 1.6;
}
</style>