# DESIGN.md — AI 教师系统 Web 前端设计规范

> 依据 01-Skills/web-design（web-design SKILL）的 DESIGN.md 模板产出。实现载体：`src/styles/theme.css`（设计令牌）+ 各页面 scoped 样式。本文件是 AI 教师系统前端的唯一设计事实源。

## 1. Visual Theme & Atmosphere

**「清风蓝 · Clean Blue」**——干净、专业、有温度的教育产品。克制的品牌渐变（蓝→紫）只出现在品牌触点（Hero 横幅、主按钮、强调条、AI 头像），大面积界面保持安静的中性灰白，让课程内容成为主角。深色主题为"深夜书房"：低对比但不失层次，禁纯黑。

- 场景定位：Dashboard / App UI（教学工具，非 Landing Page）
- 气质关键词：干净、专注、可信赖、教育感
- 动效档位：**L1（克制）**——只做入场淡入、悬停反馈、状态过渡，不做滚动叙事

## 2. Color Palette & Roles

全部通过 `styles/theme.css` 的 CSS 变量引用（浅色默认，`[data-theme="dark"]` 覆盖）。

| 令牌 | 浅色 | 深色 | 角色 |
|---|---|---|---|
| `--bg-page` | #f5f6f8 | #14161c | 页面背景 |
| `--bg-card` | #ffffff | #1e222b | 卡片/面板/头部 |
| `--bg-subtle` | #f3f4f6 | #262b36 | 输入框、未激活 tab、代码块 |
| `--bg-accent-soft` | #f0f5ff | #1b2337 | 选中态、引用块、强调软底 |
| `--text-1` | #1f2937 | #e5e7eb | 主文字/标题 |
| `--text-2` | #4b5563 | #c3c8d4 | 次文字 |
| `--text-3` | #9ca3af | #8b93a3 | 弱文字/占位/时间戳 |
| `--border` / `--border-soft` | #e5e7eb / #f0f1f4 | #2d3340 / #262b36 | 边框 |
| `--accent` | #4f8cff | 同 | 主色：链接、选中、主按钮 |

**品牌渐变**：`linear-gradient(135deg, #4f8cff, #7c3aed)`——仅限品牌触点：Hero 横幅、新建对话主按钮、AI 头像、Section 强调条。深色下 Hero 换 `linear-gradient(135deg, #2b3a67, #4c2b8f)`。

**语义色**（状态，不随主题变）：成功 #10b981 / 警告 #f59e0b / 危险 #ef4444。

**Do**：中性色必须走令牌；强调渐变只用于品牌触点。
**Don't**：硬编码灰阶 hex；纯黑 #000；强调渐变铺正文底；深色下大面积纯白。

## 3. Typography Rules

系统字体栈（中文产品，不引外部字体）：`system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif`。

| 层级 | 字号 | 字重 | 色 |
|---|---|---|---|
| Hero 标题（主页横幅） | 44rpx（桌面 22px） | 700 | 反白 |
| Section 标题 | 30rpx（15px） | 600 | --text-1 |
| 正文/气泡 | 28rpx（14px） | 400 | --text-1 |
| 辅助/说明 | 24~26rpx（12~13px） | 400 | --text-3 |
| 时间戳/元信息 | 20~22rpx（10~11px） | 400 | --text-3 |

行高：正文 1.6~1.7；标题 1.4。Markdown 富文本内 h2/h3 用于课内小节层级（见 md-render）。

## 4. Component Stylings

### Buttons
- **主按钮**（新建对话/发送）：品牌渐变 135deg、反白、600 字重、圆角 32~36rpx；禁用态 #c4d4f5；危险态 #ef4444。
- **次按钮**：`--bg-subtle` 底 + --text-2；**幽灵按钮**：透明底 + accent 边框字色（如综合问答、主题切换）。
- 按压：`:active` 轻微缩放/加深。

### Cards
- `--bg-card` 底 + 1rpx `--border-soft` 边 + 圆角 20rpx + 阴影 `0 4rpx 16rpx rgba(17,24,39,0.05)`。
- 悬停（可点卡片）：`translateY(-2rpx)` + 阴影加深。
- 选中态：`--bg-accent-soft` 底 + accent 边 + 主色文字。

### Navigation
- TabBar：固定底部，`--bg-card` 底 + 顶部投影；激活项 accent 色 700 字重。
- 对话头部：sticky + 毛玻璃（浅 rgba(255,255,255,.86) / 深 rgba(20,22,28,.86) + blur 12px）。
- 语音通话页：恒深色（#1e2a4a 渐变底），不随主题。

### Links
- `var(--accent)`；深色下 #93c5fd。

### Tags / Badges
- 状态徽章：语义色软底 + 同色系边框（成功/警告/危险/需OCR）。
- 课程树元信息：--text-3 小字。

### 输入
- 输入框：`--bg-subtle` 底、圆角 36rpx（胶囊）或 12rpx（表单）、无边框。
- 聚焦：accent 边框或外发光（focus-visible: 2rpx accent ring）。

## 5. Layout Principles

- 页面安全边距 20rpx；区块间距 30rpx；卡片内边距 24~28rpx。
- 主页纵向流：Hero → 学科选择 → 课程分支（树）→ 授课风格 → 新建对话 → 继续学习 → 最近学习。
- 对话页纵向流：毛玻璃头部 → 消息滚动区（flex:1）→ 悬浮输入栏。
- 响应式断点 **700px**：窄屏下学科卡自动换行（min-width 190rpx）、Hero/输入栏收紧、气泡字号 27rpx。rpx 为主要单位（随屏宽缩放），仅必要时用 px 断点。

## 6. Depth & Elevation

| 层级 | 阴影 | 用途 |
|---|---|---|
| E0 | 无 | 页面背景 |
| E1 | 0 4rpx 16rpx rgba(17,24,39,0.05) | 卡片 |
| E2 | 0 6rpx 24rpx rgba(17,24,39,0.08) | 悬浮输入栏/悬停卡片 |
| E3 | 0 8rpx 24rpx accent 色系 | Hero/主按钮（品牌渐变投影） |
| Overlay | 0 10rpx 32rpx rgba(17,24,39,0.16) | 弹窗/浮卡 |

## 7. Animation & Interaction（档位 L1 · 克制）

- **入场**：新消息 `msg-in 0.22s ease`（淡入+10rpx 上滑）。
- **悬停**：卡片 `translateY(-2rpx)` + 阴影加深，0.18s ease；行/按钮背景过渡 0.15s。
- **状态过渡**：主题切换即时生效（CSS 变量），不做过渡动画。
- **确认优先**：语音误识别场景，先确认再行动（见 P45）。

### Dependencies
无外部动画库；全部 CSS 原生。

### Base Setup
```css
html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
:focus-visible { outline: 2rpx solid var(--accent); outline-offset: 2rpx; }
```

### Entrance Animation
仅对话新消息使用 `msg-in`；列表页不做滚动叙事动效。
