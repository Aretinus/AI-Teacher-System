# 前端 (UniApp H5)

AI 教师系统前端，基于 UniApp + Vue 3 + Vite，以 H5 为首个交付端。

## 页面

| 页面 | 路径 | 功能 |
|---|---|---|
| 首页 | `pages/index/index` | 学科选择（含全科提问）、课程分支树下钻到具体书籍（分组节点可展开 + 发起该分类的综合问答，course 以 group: 前缀走大类综合模式）、授课风格、继续学习、最近知识点、最近会话 |
| 对话页 | `pages/chat/chat` | 消息流、SSE 流式输出、Markdown + KaTeX 渲染、学科/课程回显、消息朗读、音色切换与试听、左侧问题条（刻度 + 悬停卡片预览问答，点击跳转）、语音通话悬浮球（拖动/径向菜单） |
| 语音通话页 | `pages/voice/voice` | 实时语音对话（Web Speech API 识别 + SSE 回复 + TTS 朗读），日志含时间戳与 Markdown 渲染；浏览器返回等非主动离开自动挂断 |
| 设置页 | `pages/settings/settings` | 模型配置（Runtime/OpenAI 兼容）、AI 音色选择、书籍加工（OCR 层/蒸馏层扫描、单选+多选批量、任务日志可复制） |
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
- **通话悬浮球**：通话最小化回对话页时显示 🎙️ 悬浮球（聆听/思考/播报三态变色），可拖动、贴边自动换朝向，悬停/点击展开径向菜单「挂断 / 进入」；通话中对话页输入框提交被拦截
- **问题条**：对话页左侧刻度条，每个刻度对应用户一次提问；悬停弹出卡片（问题 + 回答预览），点击跳转到该消息并高亮刻度
- **通话生命周期**：语音页 `leaving` 标记区分主动/被动离开——「最小化」保持通话，「取消通话」挂断且历史栈为空时兜底 reLaunch 回首页，浏览器返回/手势离开自动挂断（P34）
- **音色 ≠ 对话逻辑**：声音由 TTS 引擎决定（Edge / 本地 Qwen3-TTS），对话逻辑由对话模型决定（设置 → AI 模型）

## 流式协议

对话页使用 `POST /api/chat/stream`，解析 SSE 事件：

- `event: session` → `{ sessionId, subject }`（会话建立，后续消息携带 conversationId）
- `event: delta` → `{ delta }`（增量文本，实时累积渲染）
- `event: done` → `{ evaluation }`（结束）
- `event: error` → `{ error }`

## 公式渲染

`$...$` 行内公式与 `$$...$$` 块公式由 KaTeX 渲染；公式先替换为占位符，Markdown 解析后再替换回 KaTeX HTML，避免 `*`、`_` 等符号相互干扰。