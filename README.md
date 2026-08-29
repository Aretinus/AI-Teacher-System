# AI 教师系统（AI Teacher System）

> 打造具有个人风格的 AI 教师，以费曼式讲解方法教授不同学科。
> 从经典教材自动「蒸馏」出结构化课程（章 → 课 → 练习），Web UI 提供对话式教学与学习进度跟踪。

- 后端：Node.js + Express（端口 3000） ｜ 前端：uni-app + Vue 3 + Vite（端口 5173） ｜ 模型：agentskills-runtime（端口 8080，转发到云端 agnes 模型 API）
- 书籍加工：OCR 识别（RapidOCR）→ 蒸馏（全本地）→ 结构化课程 → 绑定技能教学，全程可控、不联网、不污染源数据

## 目录导航

| 目录 | 内容 | 说明 |
|------|------|------|
| [`01-Skills/`](01-Skills/README.md) | 技能与课程引擎 | 学科教师（怎么教）、授课风格（怎么讲）、蒸馏课程引擎（教什么） |
| [`02-DATA/`](02-DATA/README.md) | 运行时数据 | 书籍（raw/ocr/distilled 三层镜像）、用户状态、会话、本地配置（多数不入库） |
| [`03-Backend/`](03-Backend/README.md) | 后端服务 | 对话编排、学科/课程路由、书籍加工 API、SSE 流式对话、TTS 合成 |
| [`04-Frontend/`](04-Frontend/README.md) | 前端 H5 | 主页 / 对话 / 语音通话 / 设置（模型、音色、书籍加工、日志） |
| [`05-Docs/`](05-Docs/README.md) | 文档归档 | 需求、环境搭建、接口约定、开发记录 |
| [`06-Tools/`](06-Tools/README.md) | 本地工具链 | OCR 工具、公式书蒸馏管道、本地 TTS、模型运行时源码（参考） |

## 快速开始

```bat
:: 一键启动（推荐）：自动清理残留进程 → 启动 runtime/后端/前端 → 健康检查 → 用 Chrome 打开页面
:: 首次使用请先创建 local-config.bat（gitignored）：内容一行 set DB_PASSWORD=你的数据库密码
start-dev.bat
```

手动启动见 [03-Backend/README.md](03-Backend/README.md) 与 [04-Frontend/README.md](04-Frontend/README.md)；全新机器部署见 [05-Docs/环境搭建与运行时配置.md](05-Docs/环境搭建与运行时配置.md)。

## 文档索引

| 文档 | 用途 |
|------|------|
| `Dev_Plan.md` | 开发计划（Phase 0–9）与逐项进度、里程碑记录 |
| `Dev_Problem.md` | **调试记录**：开发过程中遇到的技术问题、根因与解决方案（P 编号，按时间倒序） |
| `README.md` | 本文件（项目总览与导航） |
| `01-Skills/README.md` | 技能与课程引擎说明 |
| `02-DATA/README.md` | 数据资产与目录约定 |
| `03-Backend/README.md` | 后端接口与 TTS 引擎策略 |
| `04-Frontend/README.md` | 前端页面、架构与流式协议 |
| `05-Docs/README.md` | 需求清单、环境搭建、接口规范等归档文档清单 |
| `06-Tools/README.md` | 工具链（OCR / 公式蒸馏 / 本地 TTS）说明 |