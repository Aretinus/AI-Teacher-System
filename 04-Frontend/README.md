# 前端 (UniApp H5)

AI 教师系统前端，基于 UniApp + Vue 3 + Vite，以 H5 为首个交付端。

## 页面

| 页面 | 路径 | 功能 |
|---|---|---|
| 首页 | `pages/index/index` | 学科选择（全部书库学科，未注册走通用教学）、课程选择（折叠面板，实时来自蒸馏产物）、授课风格、继续学习、最近会话（显示最近对话时间） |
| 对话页 | `pages/chat/chat` | 消息流、SSE 流式输出、Markdown + KaTeX 渲染、消息时间戳、按学科的示例提示词、学科/课程回显、消息朗读、音色切换与试听、语音通话入口（与语音页文本实时同步） |
| 语音通话页 | `pages/voice/voice` | 实时语音对话（识别 → 回复 → 朗读循环）、消息带时间戳、"正在思考"动画提示、手动「打断」按钮（中止思考请求或停止播报）、播报期间不收录麦克风、进入通话自动载入会话已有文本 |
| 设置页 | `pages/settings/settings` | 模型配置（Runtime/OpenAI 兼容）、AI 音色选择、书籍加工（学科实时反映书库目录；OCR 层扫描全部书籍格式并归类无需OCR；蒸馏层；单选+多选批量；任务日志可复制） |
| 设置-模型 | `pages/settings/model` | 对话模型配置（runtime 模型 / OpenAI 兼容端点 + 测试连接） |
| 设置-日志 | `pages/settings/log-history`、`log-detail` | OCR / 蒸馏任务日志（列表 + 详情，可复制整段/单行） |

## 启动

```bash
npm install
npm run dev:h5        # 开发模式 http://127.0.0.1:5173
npm run build:h5      # 发行构建
```

## 依赖后端

前端直连 Backend (`http://127.0.0.1:3000`，可在 `src/config.js` 修改)，需先启动：

```bash
# 1. 启动 AgentSkills Runtime (端口 8080)
# 2. 启动 Backend (端口 3000)
cd ../03-Backend && npm start
```

## 架构

```
src/
├── main.js          # createSSRApp 入口
├── App.vue          # 全局样式
├── pages.json       # 页面路由
├── manifest.json    # uni-app 配置
├── config.js        # API 地址
├── api.js           # HTTP + SSE 流式封装
├── utils/md.js      # Markdown + KaTeX 渲染（占位符防冲突）
├── components/
│   └── md-render.vue
├── services/
│   ├── voice-call.js  # 语音通话状态机（识别/朗读/静音判定/挂断）
│   └── tts.js         # 音色存取 + 失败自动切默认音色
└── pages/
    ├── index/       # 首页
    ├── chat/        # 对话页
    ├── voice/       # 语音通话页
    └── settings/    # 设置页（含 model / log-history / log-detail）
```

## 语音与音色

- **音色选择**：对话页顶部音色按钮（「晓晓 ▾」）与设置页「语音 → AI 音色」，选择写入 `localStorage.ttsVoice`；对话页面板内点击音色即试听（合成固定试听句）
- **音色不可用兜底**：`POST /api/tts` 返回失败时提示「当前音色不可用，已切换为默认音色」，自动切回晓晓并同步选项（试听自动用默认音色重播、朗读/通话从当前句继续），见 `services/tts.js`
- **消息朗读**：对话页消息操作栏喇叭按钮，逐句朗读（`/api/tts`，分段 ≤300 字）
- **语音通话**：`pages/voice/voice` 全双工式对话（识别 → 回复 → 朗读循环）；退出对话页（返回/切换 Tab）自动挂断并 toast「语音通话已挂断」；回到对话页若通话仍在（最小化到聊天页场景）自动同步消息
- **音色 ≠ 对话逻辑**：声音由 TTS 引擎决定（Edge / 本地 Qwen3-TTS），对话逻辑由对话模型决定（设置 → AI 模型）

## 流式协议

对话页使用 `POST /api/chat/stream`，解析 SSE 事件：

- `event: session` → `{ sessionId, subject }`（会话建立，后续消息携带 conversationId）
- `event: delta` → `{ delta }`（增量文本，实时累积渲染）
- `event: done` → `{ evaluation }`（结束）
- `event: error` → `{ error }`

## 公式渲染

`$...$` 行内公式与 `$$...$$` 块公式由 KaTeX 渲染；公式先替换为占位符，Markdown 解析后再替换回 KaTeX HTML，避免 `*`、`_` 等符号相互干扰。