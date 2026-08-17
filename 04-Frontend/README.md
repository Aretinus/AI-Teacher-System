# 前端 (UniApp H5)

AI 教师系统前端，基于 UniApp + Vue 3 + Vite，以 H5 为首个交付端。

## 页面

| 页面 | 路径 | 功能 |
|---|---|---|
| 首页 | `pages/index/index` | 学科选择（含全科提问）、课程选择（折叠面板）、授课风格、继续学习、最近知识点、最近会话 |
| 对话页 | `pages/chat/chat` | 消息流、SSE 流式输出、Markdown + KaTeX 渲染、学科/课程回显 |
| 学习概览 | `pages/overview/overview` | 知识点掌握度、近期错误、会话记录 |
| 设置页 | `pages/settings/settings` | 模型配置（Runtime/OpenAI 兼容）、书籍加工（OCR 层/蒸馏层扫描、单选+多选批量、任务日志可复制） |

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
└── pages/
    ├── index/       # 首页
    ├── chat/        # 对话页
    └── overview/    # 学习概览
```

## 流式协议

对话页使用 `POST /api/chat/stream`，解析 SSE 事件：

- `event: session` → `{ sessionId, subject }`（会话建立，后续消息携带 conversationId）
- `event: delta` → `{ delta }`（增量文本，实时累积渲染）
- `event: done` → `{ evaluation }`（结束）
- `event: error` → `{ error }`

## 公式渲染

`$...$` 行内公式与 `$$...$$` 块公式由 KaTeX 渲染；公式先替换为占位符，Markdown 解析后再替换回 KaTeX HTML，避免 `*`、`_` 等符号相互干扰。