<template>
  <view class="page">
    <view class="card current-card">
      <view class="current-title">当前配置</view>
      <view class="current-line">
        <text class="current-name">{{ active.name }}</text>
        <text class="current-tag">{{ providerLabel(active.provider) }}</text>
      </view>
      <view class="current-line sub">
        <text>模型：{{ active.modelName }}</text>
      </view>
      <view class="current-line sub" v-if="active.provider !== 'runtime'">
        <text class="break">{{ active.baseUrl }}</text>
      </view>
    </view>

    <view class="section">
      <view class="section-title">配置列表</view>
      <view v-if="!profiles.length" class="card empty-tip">
        <text class="empty-title">尚未配置 AI API</text>
        <text class="empty-desc">点击下方「＋ 新增配置」，默认已预填 Agnes（专业版模型 agnes-2.5-flash），填入 API Key 保存即可使用；也可以按同样格式添加 DeepSeek 等其他 OpenAI 兼容服务。</text>
      </view>
      <view v-for="p in profiles" :key="p.id" class="card profile-card" :class="{ active: p.id === activeProfileId }">
        <view class="profile-head">
          <view class="profile-info">
            <view class="profile-name-row">
              <text class="profile-name">{{ p.name }}</text>
              <text v-if="p.id === activeProfileId" class="profile-active-tag">使用中</text>
            </view>
            <view class="profile-meta">{{ providerLabel(p.provider) }} · {{ p.modelName }}</view>
            <view class="profile-meta break" v-if="p.provider !== 'runtime'">{{ p.baseUrl }}</view>
          </view>
          <view class="profile-ops">
            <view v-if="p.id !== activeProfileId" class="op-btn primary" @click="activate(p)">设为当前</view>
            <view class="op-btn" @click="edit(p)">编辑</view>
            <view class="op-btn danger" @click="remove(p)">删除</view>
          </view>
        </view>
      </view>
      <view class="add-btn" @click="startAdd">＋ 新增配置</view>
    </view>

    <view v-if="editing" class="section">
      <view class="section-title">{{ editingId ? '编辑配置' : '新增配置' }}</view>
      <view class="card">
        <view class="form-row">
          <text class="label">名称</text>
          <input v-model="form.name" class="form-input" placeholder="如：Agnes / DeepSeek 官方" />
        </view>
        <view class="form-row">
          <text class="label">提供商</text>
          <picker :range="providerNames" :value="providerIndex" @change="onProviderChange" class="picker">
            <view class="picker-value">{{ providerName }}</view>
          </picker>
        </view>
        <view class="form-row" v-if="form.provider !== 'runtime'">
          <text class="label">Base URL</text>
          <input v-model="form.baseUrl" class="form-input" placeholder="https://api.openai.com/v1" />
        </view>
        <view class="form-row" v-if="form.provider !== 'runtime'">
          <text class="label">API Key</text>
          <input v-model="form.apiKey" password class="form-input" placeholder="sk-..." />
        </view>
        <view class="form-row">
          <text class="label">模型名</text>
          <input v-model="form.modelName" class="form-input" placeholder="agnes-2.5-flash / gpt-4o-mini / deepseek-chat" />
        </view>
        <view class="btn-row">
          <view class="btn primary" @click="saveForm">保存</view>
          <view class="btn" :class="{ loading: testing }" @click="test">{{ testing ? '测试中…' : '测试连接' }}</view>
          <view class="btn" @click="editing = false">取消</view>
        </view>
        <view v-if="testResult" class="test-result" :class="testResult.ok ? 'ok' : 'fail'">
          {{ testResult.ok ? '✓ ' + testResult.detail : '✗ ' + testResult.error }}
        </view>
      </view>
    </view>

    <view class="card tips-card">
      <view class="tip-line">· 多套配置可并存，点「设为当前」即切换，新对话立即生效</view>
      <view class="tip-line">· OpenAI 兼容：任意 /v1/chat/completions 服务（Agnes / DeepSeek / OpenAI / Qwen 等）</view>
      <view class="tip-line">· Anthropic 兼容：/v1/messages 服务（Claude，填 API key 即可）</view>
      <view class="tip-line">· API Key 仅保存在本机 02-DATA/settings.json</view>
    </view>
  </view>
</template>

<script>
import { getSettings, saveSettings, testSettings } from '@/api'

const EMPTY = { name: 'Agnes', provider: 'openai', baseUrl: 'https://api.agnes-ai.cn/v1', apiKey: '', modelName: 'agnes-2.5-flash' }

export default {
  data() {
    return {
      active: { name: '', provider: 'openai', modelName: '' },
      activeProfileId: '',
      profiles: [],
      form: { ...EMPTY },
      editing: false,
      editingId: null,
      testing: false,
      testResult: null,
      providers: [
        { id: 'openai', name: 'OpenAI 兼容' },
        { id: 'anthropic', name: 'Anthropic 兼容' },
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
    providerLabel(id) {
      const p = this.providers.find((x) => x.id === id)
      return p ? p.name : String(id || '')
    },
  },
  onLoad() {
    this.load()
  },
  methods: {
    async load() {
      try {
        const settings = await getSettings()
        this.profiles = settings.profiles || []
        this.activeProfileId = settings.activeProfileId || (this.profiles[0] && this.profiles[0].id) || ''
        const active = this.profiles.find((p) => p.id === this.activeProfileId)
        this.active = active || { name: '（无）', provider: 'openai', modelName: '-' }
      } catch (e) {
        uni.showToast({ title: '加载设置失败：' + e.message, icon: 'none' })
      }
    },
    async saveAll(nextProfiles, nextActiveId) {
      try {
        await saveSettings({ profiles: nextProfiles, activeProfileId: nextActiveId })
        await this.load()
        return true
      } catch (e) {
        uni.showToast({ title: '保存失败：' + e.message, icon: 'none' })
        return false
      }
    },
    async activate(p) {
      const ok = await this.saveAll(this.profiles, p.id)
      if (ok) uni.showToast({ title: '已切换到：' + p.name, icon: 'none', duration: 2000 })
    },
    edit(p) {
      this.editing = true
      this.editingId = p.id
      this.form = { name: p.name, provider: p.provider, baseUrl: p.baseUrl, apiKey: p.apiKey, modelName: p.modelName }
      this.testResult = null
    },
    startAdd() {
      this.editing = true
      this.editingId = null
      this.form = { ...EMPTY }
      this.testResult = null
    },
    async remove(p) {
      const res = await uni.showModal({ title: '删除配置', content: `确定删除「${p.name}」？`, confirmColor: '#ef4444' })
      if (!res.confirm) return
      const rest = this.profiles.filter((x) => x.id !== p.id)
      let activeId = this.activeProfileId
      if (activeId === p.id) activeId = rest[0] ? rest[0].id : ''
      const ok = await this.saveAll(rest, activeId)
      if (ok) {
        uni.showToast({ title: '已删除', icon: 'success' })
        this.editing = false
      }
    },
    onProviderChange(e) {
      this.form.provider = this.providers[Number(e.detail.value)].id
      this.testResult = null
    },
    async saveForm() {
      const name = (this.form.name || '').trim()
      if (!name) {
        uni.showToast({ title: '请填写配置名称', icon: 'none' })
        return
      }
      const next = [...this.profiles]
      if (this.editingId) {
        const idx = next.findIndex((p) => p.id === this.editingId)
        if (idx >= 0) next[idx] = { ...next[idx], ...this.form, name }
      } else {
        next.push({ ...this.form, name })
      }
      const ok = await this.saveAll(next, this.activeProfileId)
      if (ok) {
        uni.showToast({ title: '已保存', icon: 'success' })
        this.editing = false
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
  },
}
</script>

<style scoped>
.page {
  padding: 30rpx 30rpx 60rpx;
  min-height: 100vh;
  box-sizing: border-box;
}
.card {
  background: #ffffff;
  border-radius: 20rpx;
  padding: 24rpx 28rpx;
}
.current-card {
  border: 2rpx solid #cfe0ff;
  background: #f7faff;
}
.current-title {
  font-size: 24rpx;
  color: #9ca3af;
  margin-bottom: 12rpx;
}
.current-line {
  display: flex;
  align-items: center;
  gap: 14rpx;
  padding: 6rpx 0;
}
.current-line.sub {
  font-size: 26rpx;
  color: #6b7280;
}
.current-name {
  font-size: 32rpx;
  font-weight: 700;
  color: #1f2937;
}
.current-tag {
  font-size: 22rpx;
  color: #4f8cff;
  background: #e4edff;
  border-radius: 999rpx;
  padding: 4rpx 16rpx;
}
.section {
  margin-top: 28rpx;
}
.section-title {
  font-size: 30rpx;
  font-weight: 700;
  color: #374151;
  margin-bottom: 14rpx;
  padding-left: 6rpx;
}
.profile-card {
  margin-bottom: 14rpx;
  border: 2rpx solid #eef1f5;
}
.profile-card.active {
  border-color: #cfe0ff;
  background: #fafcff;
}
.profile-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16rpx;
}
.profile-info {
  flex: 1;
  min-width: 0;
}
.profile-name-row {
  display: flex;
  align-items: center;
  gap: 12rpx;
}
.profile-name {
  font-size: 29rpx;
  font-weight: 600;
  color: #1f2937;
}
.profile-active-tag {
  font-size: 20rpx;
  color: #15803d;
  background: #f0fdf4;
  border-radius: 999rpx;
  padding: 2rpx 14rpx;
}
.profile-meta {
  font-size: 24rpx;
  color: #9ca3af;
  margin-top: 6rpx;
}
.profile-ops {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
  flex-shrink: 0;
}
.op-btn {
  font-size: 24rpx;
  text-align: center;
  border-radius: 12rpx;
  padding: 8rpx 24rpx;
  border: 2rpx solid #e5e7eb;
  color: #374151;
  background: #f9fafb;
}
.op-btn.primary {
  color: #4f8cff;
  border-color: #cfe0ff;
  background: #f0f5ff;
}
.op-btn.danger {
  color: #ef4444;
  border-color: #fecaca;
  background: #fef2f2;
}
.op-btn:active {
  opacity: 0.7;
}
.add-btn {
  text-align: center;
  border: 2rpx dashed #c7d7f5;
  border-radius: 18rpx;
  padding: 24rpx 0;
  color: #4f8cff;
  font-size: 28rpx;
  background: #fafcff;
}
.add-btn:active {
  background: #f0f5ff;
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
.tips-card {
  margin-top: 28rpx;
}
.empty-tip {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
  border: 2rpx dashed #c7d2fe;
  background: #eef2ff;
}
.empty-title {
  font-size: 28rpx;
  font-weight: 600;
  color: #4338ca;
}
.empty-desc {
  font-size: 24rpx;
  color: #6b7280;
  line-height: 1.6;
}
.tip-line {
  font-size: 26rpx;
  color: #6b7280;
  padding: 8rpx 0;
  line-height: 1.6;
}
.break {
  word-break: break-all;
}
</style>