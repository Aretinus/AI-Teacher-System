# Backend

AI 教师系统后端（Node.js + Express），提供 Runtime 调用、会话管理、书籍加工（OCR/蒸馏）、学科/课程路由与 HTTP/SSE 接口。

## 启动

```bash
cd 03-Backend
npm install
node src/index.js        # 监听 http://127.0.0.1:3000
```

## 目录结构

| 路径 | 内容 |
|---|---|
| `src/index.js` | Express 入口：所有 API 路由（含 SSE 流式对话） |
| `src/services/chatService.js` | 对话编排：学科/课程/风格解析、全才路由（routeAll）、上下文组装、SSE 推送 |
| `src/services/promptBuilder.js` | 提示词拼装：教师技能 + 风格注入（styles/）+ 课程作用域（courseScopeBlock） |
| `src/services/routerService.js` | 学科路由（长词优先匹配，修复「波函数 vs 函数」子串误判） |
| `src/services/signalService.js` | 全才模式信号源：蒸馏课程信号（课程名/章名/课名/英文分词）+ 学科基础词 |
| `src/services/courseService.js` | 课程清单（listSubjectCourses）、课程上下文（loadDistilledCourseContext）、进度读写（`02-DATA/courses/`） |
| `src/services/distillService.js` | 书籍蒸馏：扫描分类、异步 job（teach.py）、产物落位（distilled/）、课程绑定 manifest |
| `src/services/ocrService.js` | OCR 扫描（文字层探测）+ 异步 job（pdf→RapidOCR；djvu→转PDF→RapidOCR） |
| `src/services/stylesService.js` | 授课风格实时扫描（`01-Skills/styles/*.md`） |
| `src/services/refreshService.js` | 学习概览/刷新类数据聚合 |
| `src/services/dataService.js` | 用户状态、会话历史读写（`02-DATA/users|sessions/`） |
| `src/services/settingsService.js` | 本地设置读写（`02-DATA/settings.json`） |
| `src/services/logService.js` | 日志服务（OCR / 蒸馏任务日志，含复制接口） |
| `src/config.js` | 路径常量（SKILLS_DIR / DATA_DIR 等） |

## 语音合成（TTS）

接口：

| 接口 | 说明 |
|---|---|
| `POST /api/tts` | 文本合成语音。body `{ text, voice }`，voice 为简名（如 `xiaoxiao`）；返回 mp3（Edge）或 wav（本地） |
| `GET /api/tts/voices` | 22 个可选音色列表 `[{ key, name, label }]` |

引擎策略（`tts-config.json`，`engine: auto | local | edge`）：

- `local`：固定走本地 Qwen3-TTS（`06-Tools/tts/tts-server.py`，端口 8765，超时 180s）
- `edge`：固定走微软 Edge 在线 TTS（`06-Tools/ocr-toolkit/venv` 内 edge-tts，约 2.5s，走本机代理 10808，rate +8% / pitch +4Hz）
- `auto`（默认）：先本地、失败回落 Edge。本地服务未启动时等效 Edge

健壮性：

- Edge 微软服务对部分新音色（晓辰/晓涵/晓墨/晓睿）**间歇性拒绝**（NoAudioReceived），后端自动重试 3 次（间隔递增）
- 重试仍失败 → 返回 502 明确错误，**前端**提示「当前音色不可用」并自动切回默认音色（晓晓），不再静默用别的声音冒充（见 `04-Frontend/src/services/tts.js`）

## 主要接口

| 接口 | 说明 |
|---|---|
| `GET /api/subjects` | 学科列表（含全才） |
| `GET /api/courses?subject=` | 学科下课程清单（来自蒸馏产物） |
| `GET /api/styles` | 授课风格列表 |
| `POST /api/chat/stream` | SSE 流式对话（body 支持 `subject` / `course` / `style` / 消息） |
| `POST /api/chat` | 非流式对话（同参数，返回 JSON） |
| `GET /api/sessions/:sessionId` | 会话详情（返回前清洗历史遗留的连续重复消息） |
| `POST /api/ocr/scan`、`POST /api/ocr/start`、`GET /api/ocr/job/:id` | OCR 扫描 / 启动 / 轮询 |
| `POST /api/books/scan`、`POST /api/books/distill`、`GET /api/books/distill/:id` | 书籍扫描 / 蒸馏启动 / 轮询 |
| `POST /api/users/default/...` | 用户状态、历史、进度读写 |

## 依赖的外部部件

- 模型运行时：默认 agentskills-runtime（端口 8080，`06-Tools/agentskills-runtime-src/`），OpenAI 兼容接口任意
- OCR：`06-Tools/ocr-toolkit/`（RapidOCR + DjVuLibre 工具，含 venv）
- 蒸馏：`01-Skills/vendor/book-learning-tutor/`（venv_slim 解释器 + djvulibre）
- 本地 TTS：`06-Tools/tts/`（Qwen3-TTS 服务，可选，默认走 Edge）

> 改代码后需重启进程生效；任务（OCR/蒸馏）以内存 job 形式异步运行，重启即丢失。
