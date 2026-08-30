<template>
  <view class="page">
    <view class="section">
      <view class="section-title">调试</view>
      <view class="card debug-row" @click="toggleDebug">
        <view class="debug-info">
          <view class="debug-name">调试模式</view>
          <view class="debug-sub">对话不写入学习记录（历史/进度/知识点）</view>
        </view>
        <switch :checked="debugMode" color="#4f8cff" @change="onSwitchChange" style="transform: scale(0.8)" />
      </view>
    </view>

    <view class="section">
      <view class="section-title">AI 模型</view>
      <view class="card" @click="goModel">
        <view class="model-row">
          <view class="model-info">
            <view class="model-line">
              <text class="model-label">配置</text>
              <text class="model-value">{{ activeProfileName }}</text>
            </view>
            <view class="model-line">
              <text class="model-label">当前模型</text>
              <text class="model-value">{{ form.modelName || 'agnes-2.0-flash' }}</text>
            </view>
          </view>
          <view class="model-btn">切换 ›</view>
        </view>
      </view>
    </view>

    <view class="section">
      <view class="section-title">语音</view>
      <view class="card" @click="pickVoice">
        <view class="model-row">
          <view class="model-info">
            <view class="model-line">
              <text class="model-label">AI 音色</text>
              <text class="model-value">{{ currentVoiceName }}</text>
            </view>
            <view class="model-line">
              <text class="model-label">特征</text>
              <text class="model-value">{{ currentVoiceDesc }}</text>
            </view>
          </view>
          <view class="model-btn">选择 ›</view>
        </view>
      </view>
      <view class="card" @click="pickEngine">
        <view class="model-row">
          <view class="model-info">
            <view class="model-line">
              <text class="model-label">语音引擎</text>
              <text class="model-value">{{ currentEngineName }}</text>
            </view>
            <view class="model-line">
              <text class="model-label">说明</text>
              <text class="model-value">Edge 云端合成快；Qwen 本地单次要几十秒</text>
            </view>
          </view>
          <view class="model-btn">切换 ›</view>
        </view>
      </view>
      <view class="card" @click="pickBargeIn">
        <view class="model-row">
          <view class="model-info">
            <view class="model-line">
              <text class="model-label">语音打断</text>
              <text class="model-value">{{ bargeInName }}</text>
            </view>
            <view class="model-line">
              <text class="model-label">说明</text>
              <text class="model-value">播报时说话直接打断；外放会收录回声，仅建议戴耳机开启</text>
            </view>
          </view>
          <view class="model-btn">切换 ›</view>
        </view>
      </view>
    </view>

    <view class="section">
      <view class="section-title">书籍加工</view>
      <view class="book-tabs">
        <view class="book-tab" :class="{ active: bookTab === 'ocr' }" @click="switchTab('ocr')">OCR 层</view>
        <view class="book-tab" :class="{ active: bookTab === 'distill' }" @click="switchTab('distill')">蒸馏层</view>
      </view>
      <view class="card">
        <view class="form-row">
          <text class="label">学科</text>
          <text class="value">{{ subjectName(distillSubject) }}</text>
        </view>
        <view class="subject-chips">
          <view v-for="s in subjects" :key="s.id" class="subject-chip" :class="{ active: s.id === distillSubject }" @click="selectSubject(s.id)">{{ s.name }}</view>
          <view v-if="canAddSubject" class="subject-chip add-chip" @click="addDistillSubject">＋ 添加「{{ distillSubject }}」</view>
        </view>
        <view class="log-entry">
          <text class="log-entry-label">历史记录</text>
          <view class="log-entry-btns">
            <text class="log-entry-btn" @click="openLogHistory('ocr')">OCR 日志</text>
            <text class="log-entry-btn" @click="openLogHistory('distill')">蒸馏日志</text>
          </view>
        </view>
      </view>

      <view class="card" v-if="bookTab === 'ocr'">
        <view class="refresh-desc">扫描当前学科 raw 目录中的全部书籍格式（pdf/epub/djvu/mobi/azw/docx/txt/cbz），按状态分类：需OCR（纯扫描件，产物镜像到 02-DATA/books/ocr/）、已OCR、无需OCR（有文字层或 epub/txt 等文本格式，可直接蒸馏）。类型标注保存在 raw/_ocr_status.json，只探查新加入的文件。</view>
        <view class="btn refresh-btn" :class="{ loading: ocrScanning }" @click="doOcrScan">
          {{ ocrScanning ? '扫描中…' : '扫描文件' }}
        </view>
        <view class="sec-tabs">
          <view class="sec-tab" :class="{ active: ocrSection === 'needOcr' }" @click="ocrSection = 'needOcr'">需OCR {{ ocrSectionCounts.needOcr }}</view>
          <view class="sec-tab" :class="{ active: ocrSection === 'ocrDone' }" @click="ocrSection = 'ocrDone'">已OCR {{ ocrSectionCounts.ocrDone }}</view>
          <view class="sec-tab" :class="{ active: ocrSection === 'noOcr' }" @click="ocrSection = 'noOcr'">无需OCR {{ ocrSectionCounts.noOcr }}</view>
        </view>
        <view v-if="ocrGroups.length" class="book-list">
          <view v-for="g in ocrGroups" :key="g.folder" class="folder-group">
            <view class="folder-head" @click="toggleFolder('ocr:' + g.folder)">
              <text class="folder-toggle">{{ isCollapsed('ocr:' + g.folder) ? '▸' : '▾' }}</text>
              <text class="folder-name">{{ g.folder || '（根目录）' }}</text>
              <text class="folder-count">{{ g.books.length }}</text>
            </view>
            <view v-if="!isCollapsed('ocr:' + g.folder)">
              <view
                v-for="b in g.books"
                :key="b.file"
                class="book-item"
                :class="{ selected: selectedOcrBook && selectedOcrBook.file === b.file, multi: isMulti(b.file) }"
                @click="ocrSelectedFile = b.file"
              >
                <view class="book-check" :class="{ on: isMulti(b.file) }" @click.stop="toggleMulti(b.file)"></view>
                <view class="book-name">{{ b.name }}</view>
                <view class="book-badge" :class="badgeCls(b)">{{ badgeText(b) }}</view>
                <view class="book-size">{{ fmtSize(b) }}</view>
              </view>
            </view>
          </view>
        </view>
        <view v-else-if="ocrScanned" class="refresh-line dim">该学科下没有对应状态的文件</view>
        <view v-if="multiCount > 0" class="batch-bar">
          <text class="batch-count">已选 {{ multiCount }} 本</text>
          <view class="btn primary sm" :class="{ loading: busy }" @click="doBatchOcr">批量 OCR</view>
          <view class="btn sm" :class="{ loading: busy }" @click="doBatchDistill">批量蒸馏</view>
        </view>
        <view v-if="selectedOcrBook" class="ocr-detail">
          <view class="ocr-state-line">{{ stateLine(selectedOcrBook) }}</view>
          <view v-if="selectedOcrBook.destPath" class="ocr-state-line dim">蒸馏产物：{{ selectedOcrBook.destPath }}/</view>
          <view class="btn-row">
            <view v-if="primaryBtn(selectedOcrBook)" class="btn primary" :class="{ loading: busy }" @click="onPrimary">
              {{ primaryBtn(selectedOcrBook) }}
            </view>
            <view v-if="secondaryBtn(selectedOcrBook)" class="btn" :class="{ loading: busy }" @click="onSecondary">
              {{ secondaryBtn(selectedOcrBook) }}
            </view>
          </view>
        </view>
        <view v-if="ocrScanError" class="refresh-line fail">{{ ocrScanError }}</view>
        <view v-if="ocrLog.length" class="distill-log">
          <view class="distill-log-head">
            <text class="distill-log-title">日志（{{ ocrLog.length }} 条）</text>
            <view class="log-btns">
              <text class="copy-btn" @click="copySelection">复制选中</text>
              <text class="copy-btn" @click="copyLog(ocrLog)">复制全部</text>
            </view>
          </view>
          <view v-for="(l, i) in ocrLog.slice(-3)" :key="i" class="distill-line">{{ l }}</view>
          <view v-if="ocrLog.length > 3" class="log-more" @click="openLogDetail('OCR', ocrLog)">查看完整日志（{{ ocrLog.length }} 条）›</view>
        </view>
      </view>

      <view class="card" v-if="bookTab === 'distill'">
        <view class="form-row">
          <text class="label">来源</text>
          <view class="src-tabs">
            <view class="src-tab" :class="{ active: distillSrc === 'raw' }" @click="setDistillSrc('raw')">raw</view>
            <view class="src-tab" :class="{ active: distillSrc === 'ocr' }" @click="setDistillSrc('ocr')">ocr</view>
          </view>
        </view>
        <view class="refresh-desc">扫描当前学科 {{ distillSrc }} 目录中的书籍（pdf/epub/djvu/mobi/txt 等），按蒸馏状态分类。选书后异步蒸馏（后台运行，可离开页面）。</view>
        <view class="btn refresh-btn" :class="{ loading: scanning }" @click="doScan">
          {{ scanning ? '扫描中…' : '扫描文件' }}
        </view>
        <view class="sec-tabs">
          <view class="sec-tab" :class="{ active: distillSection === 'undistilled' }" @click="distillSection = 'undistilled'">未蒸馏 {{ distillSectionCounts.undistilled }}</view>
          <view class="sec-tab" :class="{ active: distillSection === 'distilled' }" @click="distillSection = 'distilled'">已蒸馏 {{ distillSectionCounts.distilled }}</view>
        </view>
        <view v-if="distillGroups.length" class="book-list">
          <view v-for="g in distillGroups" :key="g.folder" class="folder-group">
            <view class="folder-head" @click="toggleFolder('d:' + g.folder)">
              <text class="folder-toggle">{{ isCollapsed('d:' + g.folder) ? '▸' : '▾' }}</text>
              <text class="folder-name">{{ g.folder || '（根目录）' }}</text>
              <text class="folder-count">{{ g.books.length }}</text>
            </view>
            <view v-if="!isCollapsed('d:' + g.folder)">
              <view
                v-for="b in g.books"
                :key="b.file"
                class="book-item"
                :class="{ selected: selectedScanBook && selectedScanBook.file === b.file, multi: isMulti(b.file) }"
                @click="selectScanBook(b)"
              >
                <view class="book-check" :class="{ on: isMulti(b.file) }" @click.stop="toggleMulti(b.file)"></view>
                <view class="book-name">{{ b.name }}</view>
                <view v-if="!b.distilledDone && b.needOcr" class="book-badge todo">需OCR</view>
                <view v-if="b.distilledDone" class="book-badge done">已蒸馏</view>
                <view class="book-size">{{ fmtSize(b) }}</view>
              </view>
            </view>
          </view>
        </view>
        <view v-else-if="distillScanned" class="refresh-line dim">该学科下没有对应状态的文件</view>
        <view v-if="scanError" class="refresh-line fail">{{ scanError }}</view>
        <view v-if="multiCount > 0" class="batch-bar">
          <text class="batch-count">已选 {{ multiCount }} 本</text>
          <view class="btn primary sm" :class="{ loading: busy }" @click="doBatchDistill">批量蒸馏</view>
        </view>
        <view v-if="selectedScanBook" class="btn refresh-btn" :class="{ loading: distilling }" @click="doDistill">
          {{ distilling ? '蒸馏中…（可离开页面，任务在后台运行）' : (selectedScanBook.distilledDone ? '重新蒸馏选中的书籍' : '蒸馏选中的书籍') }}
        </view>
        <view v-if="distillLog.length" class="distill-log">
          <view class="distill-log-head">
            <text class="distill-log-title">日志（{{ distillLog.length }} 条）</text>
            <view class="log-btns">
              <text class="copy-btn" @click="copySelection">复制选中</text>
              <text class="copy-btn" @click="copyLog(distillLog)">复制全部</text>
            </view>
          </view>
          <view v-for="(l, i) in distillLog.slice(-3)" :key="i" class="distill-line">{{ l }}</view>
          <view v-if="distillLog.length > 3" class="log-more" @click="openLogDetail('蒸馏', distillLog)">查看完整日志（{{ distillLog.length }} 条）›</view>
        </view>
      </view>
    </view>

    <tab-bar active="settings" />
  </view>
</template>

<script>
import { getSettings, scanBooks, distillBook, getDistillJob, getBookSubjects, scanOcrBooks, startOcr, getOcrJob, getTtsVoices } from '@/api'
import TabBar from '@/components/tab-bar.vue'
import { API_BASE } from '@/config'

export default {
  components: { TabBar },
  data() {
    return {
      form: { provider: 'runtime', baseUrl: '', apiKey: '', modelName: '' },
      providers: [
        { id: 'runtime', name: '模型运行时（默认）' },
        { id: 'openai', name: 'OpenAI 兼容' },
      ],
      scanBooks: [],
      scanError: '',
      scanning: false,
      distillScanned: false,
      selectedScanFile: '',
      pendingOcrFile: '',
      distilling: false,
      distillLog: [],
      distillSubject: '',
      distillSrc: 'raw',
      distillSection: 'undistilled',
      bookTab: 'ocr',
      ocrBooks: [],
      ocrScanError: '',
      ocrScanned: false,
      ocrSection: 'needOcr',
      ocrSelectedFile: '',
      ocrScanning: false,
      ocrRunning: false,
      ocrLog: [],
      multiSelected: {},
      collapsed: {},
      pollTimer: null,
      subjects: [],
      debugMode: uni.getStorageSync('debugMode') === '1',
      ttsVoices: [],
      ttsVoice: uni.getStorageSync('ttsVoice') || 'xiaoxiao',
      ttsEngine: uni.getStorageSync('ttsEngine') || 'edge',
      voiceBargeIn: uni.getStorageSync('voiceBargeIn') || 'off',
      previewAudio: null,
    }
  },
  computed: {
    canAddSubject() {
      const name = (this.distillSubject || '').trim()
      if (!name) return false
      return !this.subjects.some((s) => s.id === name || s.name === name)
    },
    currentVoiceName() {
      const v = this.ttsVoices.find((x) => x.key === this.ttsVoice)
      return v ? v.name : (this.ttsVoice || '晓晓')
    },
    currentVoiceDesc() {
      const v = this.ttsVoices.find((x) => x.key === this.ttsVoice)
      return v ? v.label : '女声 · 温柔甜美'
    },
    currentEngineName() {
      return this.ttsEngine === 'local' ? 'Qwen 本地（音质好 · 较慢）' : 'Edge 云端（快速）'
    },
    bargeInName() {
      return this.voiceBargeIn === 'on' ? '已开启（请戴耳机）' : '关闭（默认 · 防回声）'
    },
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
    activeProfileName() {
      const profiles = this.form.profiles || []
      const active = profiles.find((p) => p.id === this.form.activeProfileId) || profiles[0]
      return active ? active.name : '模型运行时'
    },
    selectedOcrBook() {
      return this.ocrBooks.find((b) => b.file === this.ocrSelectedFile) || null
    },
    selectedScanBook() {
      return this.scanBooks.find((b) => b.file === this.selectedScanFile) || null
    },
    currentBooks() {
      return this.bookTab === 'ocr' ? this.ocrBooks : this.scanBooks
    },
    multiCount() {
      return this.currentBooks.filter((b) => this.isMulti(b.file)).length
    },
    ocrSectionCounts() {
      const counts = { needOcr: 0, ocrDone: 0, noOcr: 0 }
      for (const b of this.ocrBooks) {
        if (b.ocrDone) counts.ocrDone++
        else if (b.needOcr) counts.needOcr++
        else counts.noOcr++
      }
      return counts
    },
    distillSectionCounts() {
      const counts = { undistilled: 0, distilled: 0 }
      for (const b of this.scanBooks) {
        if (b.distilledDone) counts.distilled++
        else counts.undistilled++
      }
      return counts
    },
    ocrGroups() {
      return this.groupBooks(this.ocrBooks.filter((b) => {
        if (this.ocrSection === 'ocrDone') return b.ocrDone
        if (this.ocrSection === 'noOcr') return !b.ocrDone && !b.needOcr
        return !b.ocrDone && b.needOcr
      }))
    },
    distillGroups() {
      return this.groupBooks(this.scanBooks.filter((b) => this.distillSection === 'distilled' ? b.distilledDone : !b.distilledDone))
    },
    busy() {
      return this.ocrRunning || this.distilling
    },
  },
  onLoad() {
    this.load().then(() => this.rescan())
    this.loadTtsVoices()
  },
  onShow() {
    this.ttsVoice = uni.getStorageSync('ttsVoice') || 'xiaoxiao'
    this.ttsEngine = uni.getStorageSync('ttsEngine') || 'edge'
    this.refreshSettings()
  },
  onHide() {
    if (this.previewAudio) {
      try { this.previewAudio.pause() } catch (e) {}
      this.previewAudio = null
    }
  },
  onUnload() {
    if (this.pollTimer) clearTimeout(this.pollTimer)
    if (this.previewAudio) {
      try { this.previewAudio.pause() } catch (e) {}
      this.previewAudio = null
    }
  },
  methods: {
    setDebug(v) {
      this.debugMode = v
      uni.setStorageSync('debugMode', v ? '1' : '0')
      uni.showToast({ title: v ? '调试模式已开启' : '调试模式已关闭', icon: 'none' })
    },
    onSwitchChange(e) {
      if (e && e.stopPropagation) e.stopPropagation()
      this.setDebug(!!(e.detail && e.detail.value))
    },
    toggleDebug() {
      this.setDebug(!this.debugMode)
    },
    async loadTtsVoices() {
      try {
        this.ttsVoices = await getTtsVoices()
      } catch (e) {
        this.ttsVoices = []
      }
    },
    pickVoice() {
      const names = this.ttsVoices.map((v) => v.name + '（' + v.label + '）')
      if (!names.length) {
        uni.showToast({ title: '音色列表加载失败', icon: 'none' })
        return
      }
      uni.showActionSheet({
        itemList: names,
        success: (r) => {
          const v = this.ttsVoices[r.tapIndex]
          if (!v) return
          this.ttsVoice = v.key
          uni.setStorageSync('ttsVoice', v.key)
          uni.showToast({ title: '音色已切换：' + v.name, icon: 'none' })
          this.previewVoice(v)
        },
      })
    },
    pickEngine() {
      const names = ['Edge 云端（快速）', 'Qwen 本地（音质好 · 较慢）']
      uni.showActionSheet({
        itemList: names,
        success: (r) => {
          const engine = r.tapIndex === 1 ? 'local' : 'edge'
          this.ttsEngine = engine
          uni.setStorageSync('ttsEngine', engine)
          uni.showToast({ title: engine === 'local' ? '已切换 Qwen 本地引擎（合成较慢）' : '已切换 Edge 云端引擎（快速）', icon: 'none' })
        },
      })
    },
    pickBargeIn() {
      const names = ['关闭（默认 · 外放防回声）', '开启（播报时说话即打断 · 请戴耳机）']
      uni.showActionSheet({
        itemList: names,
        success: (r) => {
          const val = r.tapIndex === 1 ? 'on' : 'off'
          this.voiceBargeIn = val
          uni.setStorageSync('voiceBargeIn', val)
          uni.showToast({ title: val === 'on' ? '语音打断已开启（请戴耳机使用）' : '语音打断已关闭', icon: 'none' })
        },
      })
    },
    fmtSize(b) {
      if (!b) return ''
      if (b.sizeMB >= 1) return b.sizeMB + ' MB'
      const kb = b.sizeKB || Math.max(1, Math.round(b.sizeMB * 1024))
      return kb + ' KB'
    },
    async previewVoice(v) {
      try {
        const controller = new AbortController()
        const timer = setTimeout(() => controller.abort(), 180000)
        const r = await fetch(API_BASE + '/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
          body: JSON.stringify({ text: '你好，我是你的 AI 教师。这是「' + v.name + '」音色的试听，你觉得怎么样？', voice: v.key, engine: this.ttsEngine }),
        })
        clearTimeout(timer)
        if (!r.ok) throw new Error('HTTP ' + r.status)
        const blob = await r.blob()
        const url = URL.createObjectURL(blob)
        if (this.previewAudio) { try { this.previewAudio.pause() } catch (e) {} }
        const a = new Audio(url)
        this.previewAudio = a
        a.onended = () => { URL.revokeObjectURL(url); if (this.previewAudio === a) this.previewAudio = null }
        a.onerror = () => { URL.revokeObjectURL(url); if (this.previewAudio === a) this.previewAudio = null }
        a.play().catch(() => { URL.revokeObjectURL(url) })
      } catch (e) {
        uni.showToast({ title: '试听失败：' + e.message, icon: 'none' })
      }
    },
    async refreshSettings() {
      try {
        const settings = await getSettings()
        this.form = { ...this.form, ...settings }
      } catch (e) { /* 静默，onLoad 已兜底 */ }
    },
    async load() {
      try {
        const [settings, subjects] = await Promise.all([getSettings(), getBookSubjects()])
        this.form = { ...this.form, ...settings }
        this.subjects = subjects
        this.distillSubject = subjects[0] && subjects[0].id
      } catch (e) {
        uni.showToast({ title: '加载设置失败：' + e.message, icon: 'none' })
      }
    },
    goModel() {
      uni.navigateTo({ url: '/pages/settings/model' })
    },
    switchTab(tab) {
      this.bookTab = tab
      this.rescan()
    },
    subjectName(id) {
      const s = this.subjects.find((x) => x.id === id)
      return s ? s.name : (id || '未选择')
    },
    selectSubject(id) {
      if (id === this.distillSubject) return
      this.distillSubject = id
      this.rescan()
    },
    // 未注册学科可直接添加：后端对未注册学科按书库目录名兜底（蒸馏/OCR/通用教学均可走通）
    addDistillSubject() {
      const name = (this.distillSubject || '').trim()
      if (!name) return
      this.subjects.push({ id: name, name, skills: [], defaultSkill: '' })
      uni.showToast({ title: `已添加学科：${name}`, icon: 'none' })
    },
    rescan() {
      if (!this.distillSubject) return
      if (this.bookTab === 'ocr') this.doOcrScan()
      else this.doScan()
    },
    groupBooks(books) {
      const groups = new Map()
      for (const b of books) {
        const key = b.folder || ''
        if (!groups.has(key)) groups.set(key, [])
        groups.get(key).push(b)
      }
      const arr = []
      for (const [folder, list] of groups) arr.push({ folder, books: list })
      return arr
    },
    toggleFolder(key) {
      this.collapsed[key] = !this.collapsed[key]
    },
    isCollapsed(key) {
      return !!this.collapsed[key]
    },
    setDistillSrc(src) {
      this.distillSrc = src
      this.scanBooks = []
      this.selectedScanFile = ''
      this.scanError = ''
      this.doScan()
    },
    async doOcrScan() {
      this.ocrScanning = true
      this.ocrScanError = ''
      this.ocrBooks = []
      this.ocrSelectedFile = ''
      try {
        const r = await scanOcrBooks({ subject: this.distillSubject })
        this.ocrBooks = r.books || []
        this.ocrScanned = true
        if (this.pendingOcrFile) {
          this.ocrSelectedFile = this.pendingOcrFile
          this.pendingOcrFile = ''
        }
        if (!this.ocrBooks.length) this.ocrScanError = '该学科 raw 目录下未找到书籍文件'
      } catch (e) {
        this.ocrScanError = e.message
      } finally {
        this.ocrScanning = false
      }
    },
    selectScanBook(b) {
      this.selectedScanFile = b.file
      if (!b.distilledDone && b.needOcr) {
        uni.showModal({
          title: '需先 OCR',
          content: '《' + b.name + '》是纯扫描件（无文字层），直接蒸馏效果差，需先 OCR 生成文字层。是否前往 OCR 层处理？',
          confirmText: '去 OCR',
          cancelText: '仍然蒸馏',
          success: (r) => {
            if (r.confirm) {
              this.pendingOcrFile = b.file
              this.switchTab('ocr')
            }
          },
        })
      }
    },
    isMulti(file) {
      return !!this.multiSelected[file]
    },
    copySelection() {
      const sel = document.getSelection()
      const text = sel ? sel.toString().trim() : ''
      if (!text) {
        uni.showToast({ title: '请先长按选择要复制的文字', icon: 'none' })
        return
      }
      uni.setClipboardData({
        data: text,
        success: () => uni.showToast({ title: '已复制选中内容', icon: 'none' }),
      })
    },
    copyLog(lines) {
      uni.setClipboardData({
        data: lines.join('\n'),
        success: () => uni.showToast({ title: '已复制日志', icon: 'none' }),
      })
    },
    openLogDetail(title, lines) {
      uni.setStorageSync('logDetail', { title, lines })
      uni.navigateTo({ url: '/pages/settings/log-detail' })
    },
    openLogHistory(type) {
      uni.navigateTo({ url: `/pages/settings/log-history?type=${type}&subject=${encodeURIComponent(this.distillSubject)}` })
    },
    toggleMulti(file) {
      if (this.multiSelected[file]) delete this.multiSelected[file]
      else this.multiSelected[file] = true
    },
    async doBatchOcr() {
      const books = this.currentBooks.filter((b) => this.isMulti(b.file) && (b.needOcr || (b.ocrCachePages || 0) > 0))
      const skipped = this.currentBooks.filter((b) => this.isMulti(b.file) && !books.includes(b))
      if (!books.length) {
        uni.showToast({ title: '所选均无需 OCR', icon: 'none' })
        return
      }
      this.ocrRunning = true
      this.ocrLog = []
      let done = 0
      let okCount = 0
      let failCount = 0
      for (const b of books) {
        done++
        this.ocrLog.push('[' + done + '/' + books.length + '] ' + b.name)
        try {
          const { jobId } = await startOcr({ file: b.file })
          const st = await this.pollOcrJob(jobId)
          if (st === 'done') { okCount++; this.ocrLog.push('✓ ' + b.name + ' OCR 完成') }
          else { failCount++; this.ocrLog.push('✗ ' + b.name + ' OCR 失败') }
        } catch (e) {
          failCount++
          this.ocrLog.push('✗ ' + b.name + '：' + e.message)
        }
      }
      if (skipped.length) this.ocrLog.push('跳过无需 OCR：' + skipped.map((x) => x.name).join('、'))
      this.ocrRunning = false
      this.multiSelected = {} // 批量完成后清空选中
      await this.doOcrScan()
      uni.showToast({
        title: failCount ? `批量 OCR 完成：成功 ${okCount} 个，失败 ${failCount} 个` : `批量 OCR 完成：成功 ${okCount} 个`,
        icon: failCount ? 'none' : 'success',
        duration: 2500,
      })
    },
    async doBatchDistill() {
      const all = this.currentBooks.filter((b) => this.isMulti(b.file))
      if (!all.length) return
      const needOcr = all.filter((b) => b.needOcr && !b.ocrDone && !b.distilledDone)
      const redo = all.filter((b) => b.distilledDone)
      const notes = []
      if (needOcr.length) notes.push(needOcr.length + ' 本无文字层将直接蒸馏（结果可能不完整）')
      if (redo.length) notes.push(redo.length + ' 本将覆盖旧产物')
      if (notes.length) {
        const ok = await new Promise((resolve) => {
          uni.showModal({
            title: '批量蒸馏确认',
            content: notes.join('；') + '，是否继续？',
            confirmText: '继续',
            cancelText: '取消',
            success: (r) => resolve(r.confirm),
          })
        })
        if (!ok) return
      }
      this.distilling = true
      this.distillLog = []
      let done = 0
      let okCount = 0
      let failCount = 0
      for (const b of all) {
        done++
        const file = (b.ocrDone && b.ocrProductFile) || b.file
        this.distillLog.push('[' + done + '/' + all.length + '] ' + b.name)
        try {
          const { jobId } = await distillBook({ file, name: this.stemOf(b), subject: this.distillSubject })
          const st = await this.pollJob(jobId)
          if (st === 'done') { okCount++; this.distillLog.push('✓ ' + b.name + ' 蒸馏完成') }
          else { failCount++; this.distillLog.push('✗ ' + b.name + ' 蒸馏失败') }
        } catch (e) {
          failCount++
          this.distillLog.push('✗ ' + b.name + '：' + e.message)
        }
      }
      this.distilling = false
      this.multiSelected = {} // 批量完成后清空选中，避免下次误带旧选择
      await this.doScan()
      uni.showToast({
        title: failCount ? `批量蒸馏完成：成功 ${okCount} 本，失败 ${failCount} 本` : `批量蒸馏完成：成功 ${okCount} 本`,
        icon: failCount ? 'none' : 'success',
        duration: 2500,
      })
    },
    async doOcr() {
      const book = this.selectedOcrBook
      if (!book || this.busy) return
      this.ocrRunning = true
      this.ocrLog = []
      try {
        const { jobId } = await startOcr({ file: book.file })
        const st = await this.pollOcrJob(jobId)
        if (st === 'done') {
          await this.doOcrScan()
          const fresh = this.ocrBooks.find((b) => b.relPath === book.relPath)
          uni.showModal({
            title: 'OCR 完成',
            content: '文字层已生成，是否继续蒸馏？',
            confirmText: '去蒸馏',
            cancelText: '取消',
            success: (r) => {
              if (r.confirm && fresh) this.goDistill(fresh)
            },
          })
        }
      } catch (e) {
        this.ocrLog.push('✗ ' + e.message)
      } finally {
        this.ocrRunning = false
      }
    },
    async pollOcrJob(jobId) {
      return new Promise((resolve) => {
        let seen = 0
        const tick = async () => {
          try {
            const j = await getOcrJob(jobId)
            if (j && Array.isArray(j.log) && j.log.length > seen) {
              this.ocrLog = this.ocrLog.concat(j.log.slice(seen))
              seen = j.log.length
            }
            if (!j || j.status !== 'running') {
              if (j && j.status === 'error') {
                this.ocrLog.push('✗ OCR 失败')
                if (j.error) this.ocrLog.push('✗ ' + j.error)
              }
              resolve(j ? j.status : 'error')
              return
            }
            this.pollTimer = setTimeout(tick, 3000)
          } catch (e) {
            this.ocrLog.push('✗ ' + e.message)
            resolve('error')
          }
        }
        tick()
      })
    },
    bookState(b) {
      if (b.distilledDone) return 'distilled'
      if (b.ocrDone) return 'ocrDone'
      if (b.ocrCachePages > 0) return 'ocrRunning'
      if (b.textLayer === 'text' || b.textLayer === 'djvu') return 'noOcr'
      return 'needOcr'
    },
    badgeText(b) {
      const st = this.bookState(b)
      if (st === 'distilled') return b.ocrDone ? '已OCR · 已蒸馏' : '已蒸馏'
      if (st === 'ocrDone') return '已OCR'
      if (st === 'ocrRunning') return 'OCR 中 ' + b.ocrCachePages + ' 页'
      if (st === 'noOcr') return b.textLayer === 'djvu' ? '可直接蒸馏' : '无需OCR'
      return '需OCR'
    },
    badgeCls(b) {
      const st = this.bookState(b)
      if (st === 'noOcr') return 'skip'
      return st === 'needOcr' || st === 'ocrRunning' ? 'todo' : 'done'
    },
    stateLine(b) {
      const st = this.bookState(b)
      if (st === 'distilled') return '✓ 已蒸馏过，可重新蒸馏以覆盖旧产物'
      if (st === 'ocrDone') return '✓ 已有文字层，可直接蒸馏'
      if (st === 'ocrRunning') return '⏳ OCR 进行中（已识别 ' + b.ocrCachePages + ' 页），可继续或直接蒸馏'
      if (st === 'noOcr') return '该文件有文字层，无需 OCR，可直接蒸馏'
      return '纯扫描件，需要 OCR 生成文字层后再蒸馏'
    },
    primaryBtn(b) {
      const st = this.bookState(b)
      if (st === 'needOcr') return '开始 OCR'
      if (st === 'ocrRunning') return '继续 OCR'
      if (st === 'distilled') return '重新蒸馏'
      return '去蒸馏'
    },
    secondaryBtn(b) {
      const st = this.bookState(b)
      if (st === 'needOcr' || st === 'ocrRunning') return '直接蒸馏（跳过 OCR）'
      if (st === 'ocrDone') return '重新 OCR'
      return ''
    },
    onPrimary() {
      const b = this.selectedOcrBook
      if (!b || this.busy) return
      const st = this.bookState(b)
      if (st === 'needOcr' || st === 'ocrRunning') this.doOcr()
      else this.goDistill(b)
    },
    onSecondary() {
      const b = this.selectedOcrBook
      if (!b || this.busy) return
      const st = this.bookState(b)
      if (st === 'needOcr' || st === 'ocrRunning') this.directDistill(b)
      else if (st === 'ocrDone') this.redoOcr(b)
    },
    redoOcr(b) {
      uni.showModal({
        title: '重新 OCR',
        content: '将重新生成文字层并覆盖现有产物，是否继续？',
        confirmText: '重新 OCR',
        cancelText: '取消',
        success: (r) => {
          if (r.confirm) {
            this.ocrSelectedFile = b.file
            this.doOcr()
          }
        },
      })
    },
    directDistill(b) {
      uni.showModal({
        title: '直接蒸馏',
        content: '此文件无文字层，直接蒸馏结果可能为空（只能靠图片或空文本），建议先 OCR。仍要继续吗？',
        confirmText: '继续蒸馏',
        cancelText: '取消',
        success: (r) => {
          if (r.confirm) this.doDistillFile(b.file, this.stemOf(b))
        },
      })
    },
    goDistill(b) {
      if (!b || this.busy) return
      const file = (b.ocrDone && b.ocrProductFile) || b.file
      const stem = this.stemOf(b)
      if (b.distilledDone) {
        uni.showModal({
          title: '重新蒸馏',
          content: '此书已蒸馏过，重新蒸馏将覆盖旧产物，是否继续？',
          confirmText: '重新蒸馏',
          cancelText: '取消',
          success: (r) => {
            if (r.confirm) this.doDistillFile(file, stem)
          },
        })
      } else {
        this.doDistillFile(file, stem)
      }
    },
    stemOf(b) {
      return b.name.replace(/\.(pdf|epub|djvu|mobi|azw|azw3|docx|txt|cbz)$/i, '')
    },
    async doDistillFile(file, name) {
      if (this.distilling) return
      this.distilling = true
      this.distillLog = []
      try {
        const { jobId } = await distillBook({ file, name, subject: this.distillSubject })
        const st = await this.pollJob(jobId)
        if (st === 'done') {
          this.rescan()
          uni.showToast({ title: '蒸馏完成', icon: 'success' })
        }
      } catch (e) {
        this.distillLog.push('✗ ' + e.message)
      } finally {
        this.distilling = false
      }
    },
    async doScan() {
      if (!this.distillSubject) return
      this.scanning = true
      this.scanError = ''
      this.scanBooks = []
      this.selectedScanFile = ''
      try {
        const r = await scanBooks({ subject: this.distillSubject, src: this.distillSrc })
        this.scanBooks = r.books || []
        this.distillScanned = true
        if (!this.scanBooks.length) this.scanError = '该学科 ' + this.distillSrc + ' 目录下未找到书籍文件'
      } catch (e) {
        this.scanError = e.message
      } finally {
        this.scanning = false
      }
    },
    async doDistill() {
      const book = this.selectedScanBook
      if (!book || this.distilling) return
      if (book.distilledDone) {
        uni.showModal({
          title: '重新蒸馏',
          content: '此书已蒸馏过，重新蒸馏将覆盖旧产物，是否继续？',
          confirmText: '重新蒸馏',
          cancelText: '取消',
          success: (r) => {
            if (r.confirm) this.doDistillFile(book.file, this.stemOf(book))
          },
        })
        return
      }
      this.doDistillFile(book.file, this.stemOf(book))
    },
    async pollJob(jobId) {
      return new Promise((resolve) => {
        let seen = 0
        const tick = async () => {
          try {
            const j = await getDistillJob(jobId)
            // 只追加新增行：不整表替换，避免批量时上一本书的进度/结果被当前书的日志冲掉
            if (j && Array.isArray(j.log) && j.log.length > seen) {
              this.distillLog = this.distillLog.concat(j.log.slice(seen))
              seen = j.log.length
            }
            if (!j || j.status !== 'running') {
              if (j && j.status === 'error') this.distillLog.push('✗ 蒸馏失败')
              if (j && j.error) this.distillLog.push('✗ ' + j.error)
              resolve(j ? j.status : 'error')
              return
            }
            this.pollTimer = setTimeout(tick, 2000)
          } catch (e) {
            this.distillLog.push('✗ ' + e.message)
            resolve('error')
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
.model-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.debug-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.debug-info {
  display: flex;
  flex-direction: column;
}
.debug-name {
  font-size: 30rpx;
  font-weight: 600;
}
.debug-sub {
  font-size: 24rpx;
  color: #8a8f99;
  margin-top: 6rpx;
}
.model-info {
  flex: 1;
}
.model-line {
  display: flex;
  align-items: center;
  padding: 6rpx 0;
}
.model-label {
  width: 160rpx;
  flex-shrink: 0;
  color: #9ca3af;
  font-size: 26rpx;
}
.model-value {
  color: #1f2937;
  font-size: 27rpx;
  word-break: break-all;
}
.model-btn {
  flex-shrink: 0;
  margin-left: 20rpx;
  font-size: 26rpx;
  color: #4f8cff;
  border: 2rpx solid #cfe0ff;
  border-radius: 12rpx;
  padding: 8rpx 24rpx;
  background: #f0f5ff;
}
.model-btn:active {
  background: #e0e9ff;
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
.btn.sm {
  flex: 0 0 auto;
  padding: 10rpx 26rpx;
  font-size: 24rpx;
}
.batch-bar {
  display: flex;
  align-items: center;
  gap: 16rpx;
  padding: 18rpx 4rpx;
  border-top: 2rpx solid #f3f4f6;
  margin-top: 16rpx;
}
.batch-count {
  flex: 1;
  font-size: 26rpx;
  color: #4b5563;
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
.book-tabs {
  display: flex;
  gap: 16rpx;
  margin-bottom: 20rpx;
}
.book-tab {
  flex: 1;
  text-align: center;
  padding: 18rpx 0;
  border-radius: 16rpx;
  background: #e5e7eb;
  color: #6b7280;
  font-size: 29rpx;
  font-weight: 600;
}
.book-tab.active {
  background: #4f8cff;
  color: #ffffff;
}
.src-tabs {
  display: flex;
  gap: 12rpx;
  flex: 1;
}
.src-tab {
  flex: 1;
  text-align: center;
  padding: 12rpx 0;
  border-radius: 12rpx;
  background: #f3f4f6;
  color: #6b7280;
  font-size: 26rpx;
  border: 2rpx solid #e5e7eb;
}
.src-tab.active {
  background: #e0e7ff;
  color: #4f46e5;
  border-color: #4f46e5;
}
.sec-tabs {
  display: flex;
  gap: 12rpx;
  margin-top: 20rpx;
}
.sec-tab {
  flex: 1;
  text-align: center;
  padding: 12rpx 0;
  border-radius: 12rpx;
  background: #f3f4f6;
  color: #6b7280;
  font-size: 26rpx;
  border: 2rpx solid #e5e7eb;
}
.sec-tab.active {
  background: #e0e7ff;
  color: #4f46e5;
  border-color: #4f46e5;
}
.folder-group {
  margin-top: 14rpx;
}
.folder-head {
  display: flex;
  align-items: center;
  gap: 10rpx;
  padding: 12rpx 8rpx;
  background: #f8fafc;
  border-radius: 12rpx;
}
.folder-toggle {
  font-size: 24rpx;
  color: #9ca3af;
  width: 30rpx;
}
.folder-name {
  flex: 1;
  font-size: 26rpx;
  font-weight: 600;
  color: #374151;
  word-break: break-all;
}
.folder-count {
  font-size: 24rpx;
  color: #9ca3af;
  background: #eef1f5;
  border-radius: 999rpx;
  padding: 2rpx 16rpx;
}
.book-badge {
  flex-shrink: 0;
  margin-left: 12rpx;
  font-size: 22rpx;
  padding: 4rpx 14rpx;
  border-radius: 999rpx;
}
.book-badge.done {
  background: #f0fdf4;
  color: #15803d;
}
.book-badge.skip {
  background: #f3f4f6;
  color: #9ca3af;
}
.book-badge.todo {
  background: #fef3c7;
  color: #b45309;
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
.refresh-line {
  font-size: 26rpx;
  color: #374151;
  padding: 4rpx 0;
  line-height: 1.6;
}
.refresh-line.fail {
  color: #b91c1c;
}
.refresh-line.dim {
  color: #9ca3af;
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
.subject-chip.add-chip {
  border-style: dashed;
  color: #4f46e5;
  background: #eef2ff;
}
.subject-chip.active {
  background: #e0e7ff;
  color: #4f46e5;
  border-color: #4f46e5;
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
.log-entry {
  display: flex;
  align-items: center;
  gap: 16rpx;
  margin-top: 20rpx;
  padding-top: 18rpx;
  border-top: 2rpx solid #f3f4f6;
}
.log-entry-label {
  font-size: 24rpx;
  color: #9ca3af;
}
.log-entry-btns {
  display: flex;
  gap: 12rpx;
  flex: 1;
  justify-content: flex-end;
}
.log-entry-btn {
  font-size: 24rpx;
  color: #4f8cff;
  border: 2rpx solid #cfe0ff;
  border-radius: 12rpx;
  padding: 6rpx 20rpx;
  background: #f0f5ff;
}
.log-entry-btn:active {
  background: #e0e9ff;
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
.book-item.multi {
  border-color: #34d399;
  background: #ecfdf5;
}
.book-check {
  flex: 0 0 auto;
  width: 34rpx;
  height: 34rpx;
  border: 3rpx solid #d1d5db;
  border-radius: 50%;
  margin-right: 16rpx;
  box-sizing: border-box;
  position: relative;
}
.book-check.on {
  border-color: #34d399;
  background: #34d399;
}
.book-check.on::after {
  content: '';
  position: absolute;
  left: 8rpx;
  top: 3rpx;
  width: 12rpx;
  height: 18rpx;
  border: solid #ffffff;
  border-width: 0 4rpx 4rpx 0;
  transform: rotate(45deg);
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
.ocr-detail {
  margin-top: 20rpx;
  border: 2rpx solid #e0e7ff;
  background: #f8faff;
  border-radius: 14rpx;
  padding: 18rpx 22rpx;
}
.ocr-state-line {
  font-size: 25rpx;
  color: #374151;
  padding: 4rpx 0;
  line-height: 1.6;
}
.ocr-state-line.dim {
  color: #6b7280;
  word-break: break-all;
}
.distill-log {
  margin-top: 20rpx;
  background: #f8fafc;
  border: 2rpx solid #eef1f5;
  border-radius: 14rpx;
  padding: 18rpx 22rpx;
}
.distill-log-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12rpx;
  padding-bottom: 10rpx;
  border-bottom: 2rpx solid #eef1f5;
}
.distill-log-title {
  font-size: 24rpx;
  color: #9ca3af;
}
.log-btns {
  display: flex;
  gap: 12rpx;
}
.copy-btn {
  font-size: 22rpx;
  color: #4f8cff;
  border: 2rpx solid #cfe0ff;
  border-radius: 10rpx;
  padding: 4rpx 16rpx;
  background: #f0f5ff;
}
.copy-btn:active {
  background: #e0e9ff;
}
.distill-line {
  font-size: 24rpx;
  color: #374151;
  line-height: 1.6;
  font-family: Consolas, monospace;
  word-break: break-all;
  user-select: text;
  -webkit-user-select: text;
}
.log-more {
  margin-top: 10rpx;
  font-size: 24rpx;
  color: #4f8cff;
  text-align: right;
  padding: 8rpx 4rpx;
}
.tip-line {
  font-size: 26rpx;
  color: #6b7280;
  padding: 8rpx 0;
  line-height: 1.6;
}
</style>