# AI 教师系统（AI Teacher System）

> 打造具有个人风格的 AI 教师，以费曼式讲解方法教授不同学科。
> 从经典教材自动「蒸馏」出结构化课程（章 → 课 → 练习），Web UI 提供对话式教学与学习进度跟踪。

---

## 一、开展进度（实时更新）

### 2026-08 初始 MVP（已交付）
- **系统骨架**：Express 后端（端口 3000）+ 学科路由 + 模型运行时（agentskills-runtime，端口 8080，本地进程转发 LLM 请求到 agnes-ai 云端 API，模型 `agnes-2.0-flash`）；uni-app H5 前端（vite，端口 5173）
- **对话教学**：流式回复、学科路由（手动选择 / 关键词自动检测）、会话持久化
- **课程模式全链路**：manifest.yaml 课程化、courseService 课程读取、课程意图识别（「学这本书 / 继续学 / 下一课」）
- **学习状态跟踪**：知识点掌握度、学习目标、近期错误、会话历史（主页 / 学习概览）
- **一键启动**：`start-dev.bat` 清理残留进程 → 启动三服务 → 健康等待 → 自动开浏览器

### 2026-08 体验优化轮（Phase 7，25+ 项，已交付）
- LaTeX 公式渲染（KaTeX）、回复复制（LaTeX 原文 / 渲染文本）、选中复制
- 对话附件上传（图片 / 文件，base64 → /uploads）
- 学习概览：知识点按会话历史与学科关联、错误订正、删除会话
- 设置页：AI 提供商配置（本地模型 / OpenAI 兼容 + 测试连接）、底部固定导航（主页 / 学习概览 / 设置）

### 2026-08 书籍加工流水线（已交付）
- **OCR 工具链**（`06-Tools/ocr-toolkit`，全本地、不联网）：
  - `ocr_book.py`：RapidOCR 扫描件逐页识别，产物 `<书名>_OCR.pdf` + 页缓存（支持断点续跑）
  - `djvu_to_pdf.py`：djvu → PDF（保留文字层）
  - `probe_textlayer.py`：探查 PDF 是否有文字层（text / scanned / partial / unknown）
- **产物隔离**：OCR 产物镜像输出到 `02-DATA/books/ocr/`（目录结构镜像 raw），**不污染源数据**；状态记录在 `raw/_ocr_status.json`，只探查新文件
- **人工控制页**（设置 → 书籍加工）：
  - OCR 层：扫描 raw 目录 → 状态徽章（需OCR / OCR中 / 已OCR / 已蒸馏 / 可直接蒸馏 / 无需OCR）+ 状态驱动按钮（开始/继续 OCR、重新 OCR、直接蒸馏、去蒸馏、重新蒸馏），OCR 完成后弹窗一键联动蒸馏
  - 蒸馏层：选 raw/ocr 来源 → 扫描目录 → 选书 → 异步蒸馏（`teach.py` 全本地：ingest → course_gen）→ 产物入 `distilled/` 并按学科镜像分类，同时写入 `books/index.json`
- **课程自动绑定**：蒸馏完成后按所选学科自动绑定到对应技能的 `manifest.yaml`（courseDir）；无学科 / 学科下无技能 / 已有有效课程绑定 → 保持现状，后续蒸馏自动补上
- **全链路验证**：Erdélyi《Asymptotic Expansions》（subject=math）→ 自动绑定「微积分教师」（calculus-tutor）→ 对话「学这本书」返回第 1 课完整教学（Poincaré 展开 + 练习题）✅

### 2026-08 语音交互轮（已交付）
- **语音通话**：对话页 → 语音通话页（Web Speech API 识别 + SSE 流式回复 + TTS 朗读循环）；静音判定（完结标点 650ms / 无标点 1.8s / 未完 3.2s 强制提交）；退出对话页自动挂断，最小化回聊天页通话不中断
- **多音色 TTS**：22 个中文音色（设置页 + 对话页均可选，面板内点击即试听），选择存 localStorage；朗读（对话页喇叭按钮）与语音通话共用所选音色
- **双引擎 TTS**：`03-Backend/tts-config.json`（engine: auto）本地 Qwen3-TTS（`06-Tools/tts`，GPU 机可用，代码零改动）优先、微软 Edge 免费在线 TTS 兜底；Edge 带 rate +8% / pitch +4Hz
- **音色失败兜底**：微软免费服务对部分新音色间歇性拒绝，后端重试 3 次仍失败返回明确 502；前端提示「当前音色不可用」并自动切回默认音色（晓晓），选项同步，不静默冒充
- **会话去重修复**：流式对话用户消息曾双写（预存 + 完成时再存），已修复并清洗历史数据（接口返回前过滤连续重复消息）

### 2026-08 公式书蒸馏管道（已交付，FEM 全本验证）
- **公式书专用识别**（`06-Tools/formula-extraction`）：P2T 初蒸（CPU 本地，30-40s/页）→ 质检打分（阈值 30）→ 可疑页分批 MinerU 云端精修 → `book.md` 合并
- **结构切章**：章/节结构取自 **PDF 文本层 Contents**（无 OCR 乱码），按印刷页码 + offset 校准（FEM 实测 offset=3，短语匹配多数票）切 `book.md` 的页标记；无 Contents 的书自动回退正文标题切章（`## Chapter N` 宽容正则）
- **Web 一键集成**：设置 → 书籍加工 → 蒸馏层选学科 → `POST /api/books/distill {file,name,subject}` → `teach.py --subject` 透传 → 公式书分支（学科信号 + 数学符号密度启发式检测）
- **全本验证**：FEM《Finite Element Method Lecture Notes》83 页 → P2T 约 60 分钟 → 质检 16 可疑页 + 区间聚拢 18 页精修 → **5 章 32 节全部正确切分**（含 3.9/3.10、第 4/5 章，旧管道会丢失）→ course_gen → `distilled/Math/09-计算数学/数值PDE与有限元/<书名>/`（5 章 31 课）→ math hasCourses=True
- **产物清理**：蒸馏成功自动删 `work/`、`参考/`、`书库/` 三处过程产物（失败保留排查）
- **已知限制**（硬件受限，仅用 P2T）：英文公式书部分页 OCR 噪声质检漏检（如 "Weightedrsiul metoi"），章标题行在节首显示为字面文本（内容无损）；决策记录见 `06-Tools/formula-extraction/README.md` 九

### 已入库书籍与课程
| 学科 | 书籍 | 蒸馏产物（distilled/） | 绑定技能 |
|------|------|------------------------|----------|
| math | Finite Element Method Lecture Notes（A. A. Salih） | `Math/09-计算数学/数值PDE与有限元/`（5 章 31 课） | calculus-tutor（微积分教师） |

> 旧蒸馏课程（费恩曼物理学讲义、朗道、量子力学发展史、渐近分析、数学物理方法）已随本次清理从仓库删除；后续可用新公式管道重蒸。

> 完整开发计划与逐项进度见 `Dev_Plan.md`。

---

## 二、系统架构

```
┌─────────────┐    HTTP/SSE    ┌──────────────────┐   OpenAI 兼容协议   ┌────────────────────┐
│  前端 uni-app │ ────────────▶ │  后端 Express      │ ─────────────────▶ │ 模型运行时           │
│  H5 (5173)   │               │  (3000)           │                    │  agentskills-runtime │
└─────────────┘               │  对话/路由/课程/状态 │                    │  (8080, 云端 LLM：    │
                              │  TTS / 语音合成     │                    │   agnes-2.0-flash)   │
                              └──────────┬─────────┘                    └────────────────────┘
                                         │ 音频（本地优先，Edge 兜底）
                              ┌──────────┴─────────┐
                              │ 06-Tools/tts        │
                              │ Qwen3-TTS (8765)    │
                              └────────────────────┘
                                      │ 本地文件
                              ┌──────┴───────────────────────────────┐
                              │ 01-Skills（技能/课程）                 │
                              │ 02-DATA/books（raw → ocr → distilled）│
                              │ 06-Tools/ocr-toolkit（离线 OCR）       │
                              └──────────────────────────────────────┘
```

### 书籍数据流（三层镜像）

```
02-DATA/books/raw/       源数据（PDF/djvu，不动）
        │  OCR（仅扫描件；djvu 直接转文字层）
        ▼
02-DATA/books/ocr/       OCR 产物（镜像 raw 目录结构：<书名>_OCR.pdf / <书名>_转PDF.pdf）
        │  蒸馏（teach.py：ingest → course_gen，全本地）
        ▼
02-DATA/books/distilled/ 课程产物（按学科镜像：Physic/…、Math/01-分析/…）
        │  自动绑定
        ▼
01-Skills/subjects/<学科>/<技能>/manifest.yaml  courseDir → Web 课程教学
```

### 目录结构

```
AI-Teacher-System/
├── 01-Skills/            技能与课程引擎
│   ├── subjects/         学科定义 + 技能（math/calculus-tutor、physics/feynman-mechanics…）
│   └── vendor/           课程蒸馏引擎（book-learning-tutor 等，全本地）
├── 02-DATA/              数据（不入库）
│   ├── books/            raw/ 源数据、ocr/ 产物、distilled/ 课程、index.json 索引
│   ├── users/            用户状态（知识点掌握度等）
│   ├── sessions/         会话详情
│   └── settings.json     本地设置（API Key 等，仅本机）
├── 03-Backend/           Express 服务（对话、路由、课程、书籍加工、TTS API）
├── 04-Frontend/          uni-app H5（主页 / 对话 / 语音通话 / 设置）
├── 05-Docs/              需求文档与进度记录
├── 06-Tools/ocr-toolkit/ OCR 工具链（RapidOCR、djvu→pdf、文字层探查）
├── 06-Tools/formula-extraction/ 公式书蒸馏管道（P2T→质检→MinerU 精修→切章；work/ 不入库）
├── 06-Tools/tts/         本地 TTS 服务（Qwen3-TTS，可选，默认 Edge 兜底）
├── Dev_Plan.md           开发计划（实时进度）
└── start-dev.bat         一键启动
```

---

## 三、功能说明

### Web UI（页面）
- **主页**：学科选择、新建对话、继续学习卡片、知识点进度条、最近学习（可删除会话）
- **对话**：流式教学回复（SSE）、KaTeX 渲染、附件上传、复制（LaTeX 原文 / 渲染文本）、消息朗读、音色切换与试听
- **语音通话**：实时语音对话（识别 → 回复 → 朗读循环），退出对话页自动挂断
- **设置**：AI 提供商（本地模型默认 / OpenAI 兼容 + 测试连接）、AI 音色（22 音色）、书籍加工（OCR 层 / 蒸馏层）、任务日志（列表/详情/复制）

### 语音合成（TTS）
- 音色选择写入 `localStorage.ttsVoice`，对话页 / 设置页均可选，面板内点击即试听
- 引擎策略见 `03-Backend/tts-config.json`：本地 Qwen3-TTS（可选服务）优先、微软 Edge 免费在线 TTS 兜底
- Edge 服务不稳定时后端重试 3 次，仍失败前端提示并自动切回默认音色（晓晓）

### 书籍加工流水线（设置 → 书籍加工）
1. **OCR 层**：扫描 `raw/` 下 pdf/djvu → 探查文字层 → 纯扫描件跑 RapidOCR（产物入 `ocr/` 镜像目录，可断点续跑）；djvu 直接转换即可蒸馏
2. **蒸馏层**：选择 raw/ocr 来源与学科 → 扫描目录 → 选书 → 异步蒸馏（后台运行，可离开页面）→ 产物按学科落入 `distilled/`，更新 `index.json` 并自动绑定技能 courseDir
3. **教学**：对话中选择学科后说「学这本书 / 继续学 / 下一课」，系统按绑定课程注入章节上下文教学

---

## 四、运行方式

### 一键启动（推荐）
双击 `start-dev.bat`：自动清理残留进程 → 启动 runtime / 后端 / 前端 → 健康检查 → 打开浏览器（http://127.0.0.1:5173）
脚本使用相对路径，克隆到任意目录均可运行；若克隆后 runtime 未装或 .env 未配置，见下文「从零搭建」。

### 手动启动
```bat
:: 1. 模型运行时（npm 包自带，需先配置模型 key，见「从零搭建」第 4 步）
cd 03-Backend\node_modules\@opencangjie\skills\dist\runtime\win-x64\release\bin
agentskills-runtime.exe

:: 2. 后端
cd 03-Backend && node src/index.js

:: 3. 前端
cd 04-Frontend && npm run dev:h5
```

> 新增学科/技能：创建 `01-Skills/subjects/<学科>/subject.yaml` + 技能目录（参考 `_TEMPLATE`），重启后端自动重建索引。

---

## 五、从零搭建（克隆部署）

> 以下说明用于在一台**全新的电脑**上克隆本项目并跑起来。仓库已排除大文件与隐私数据（见 .gitignore），需要按本节补齐。

### 1. 前置依赖
| 依赖 | 版本 | 用途 |
|------|------|------|
| Node.js | 18+（含 npm） | 后端 / 前端 / 模型运行时（npm 包） |
| Python | 3.10–3.12 | OCR 工具链 venv、课程蒸馏 venv |
| PostgreSQL | 可选（本机默认 127.0.0.1:5432） | runtime 的 ORM 数据库；缺失时 runtime 禁用数据库功能，其余正常 |

### 2. 安装 npm 依赖（含约 1GB 的模型运行时）
```bat
cd 03-Backend && npm install
cd ..\04-Frontend && npm install
```
`@opencangjie/skills` 为公开 npm 包，安装后自带 `agentskills-runtime.exe`（含运行时 DLL）。

### 3. 配置模型 key（必需，否则对话无回复）
编辑 `03-Backend\node_modules\@opencangjie\skills\dist\runtime\win-x64\release\bin\.env`：
```ini
MODEL_CONFIG=openai:agnes-2.0-flash
OPENAI_BASE_URL=https://apihub.agnes-ai.com/v1
OPENAI_API_KEY=你的API密钥
```
> key 仅存在于本机 .env，不入库、不上传。若改用其他 OpenAI 兼容端点，改上述三行即可。运行时初始化（PostgreSQL、JWT、认证协议、Windows DLL 补齐等）详见 `05-Docs/环境搭建与运行时配置.md`。

### 4. 课程蒸馏 Python 环境（book-learning-tutor）
```bat
cd 01-Skills\vendor\book-learning-tutor
python setup_env.py          :: 或直接拷贝原机器的 venv_slim\ 目录
```

### 5. OCR 工具链环境（可选：不做 OCR 可跳过）
```bat
cd 06-Tools\ocr-toolkit
python -m venv venv
venv\Scripts\pip install -r requirements.txt
```
> `requirements.txt` 已入库（RapidOCR / PyMuPDF / onnxruntime 等）。最快的方式是从原机器直接拷贝 `06-Tools\ocr-toolkit\venv\` 和 `bin\`（含 OCR 模型二进制）。`.py` 脚本已入库，OCR 全本地运行、不联网。

### 6. 本地 TTS 环境（可选：不做本地音色可跳过）
```bat
cd 06-Tools\tts
py -3.12 -m venv venv
venv\Scripts\pip install -i https://pypi.tuna.tsinghua.edu.cn/simple torch torchaudio --index-url https://download.pytorch.org/whl/cpu
venv\Scripts\pip install -i https://pypi.tuna.tsinghua.edu.cn/simple qwen-tts modelscope fastapi uvicorn
venv\Scripts\python -m modelscope download --model Qwen/Qwen3-TTS-12Hz-0.6B-CustomVoice --local_dir models\Qwen3-TTS-12Hz-0.6B-CustomVoice
venv\Scripts\python tts-server.py   :: 监听 8765；不启动则后端自动走 Edge
```
> 完整说明见 `06-Tools/tts/README.md`。有 GPU 的机器（如 R7000）装好后启动服务即自动启用本地音色，后端代码零改动。

### 7. 启动
双击 `start-dev.bat`（相对路径，任意位置可运行），或按上文「手动启动」。

### 常见问题
- **runtime 健康检查通过但对话无回复**：检查第 3 步的 `OPENAI_API_KEY` / `MODEL_CONFIG` / `OPENAI_BASE_URL` 是否与云端账号匹配。
- **runtime 启动慢（约 2 分钟无响应）**：缺少 `DATABASE_URL` 配置，`start-dev.bat` 会自动补写（默认连本机 PostgreSQL 127.0.0.1:5432/uctoo，未装 PG 时 runtime 会自动禁用数据库功能）。
- **首次 npm install 慢**：`@opencangjie/skills` 约 1GB，属正常。

---

## 六、开发约定

- **本地优先**：OCR（RapidOCR）、蒸馏（teach.py）为本地脚本、全程不联网；对话模型经本地 runtime 进程转发到 agnes-ai 云端 API（按 token 计费）
- **目录镜像**：raw / ocr / distilled 三层目录结构一致，产物按学科分类
- **不污染源数据**：OCR 产物只写入 `02-DATA/books/ocr/`，源书不动
- **Git 不入库**：node_modules、raw/、ocr/、uploads/、users/、sessions/、settings.json、jwt_token.txt、Python venv（`01-Skills/vendor/*/venv_slim/`、`06-Tools/ocr-toolkit/venv/`、`06-Tools/tts/venv/`）、本地 TTS 模型（`06-Tools/tts/models/`）、OCR 模型二进制（`06-Tools/ocr-toolkit/bin/`）、公式蒸馏过程产物（`06-Tools/formula-extraction/work/`，蒸馏成功自动清理）、运行时源码（`06-Tools/agentskills-runtime-src/`，实际运行用的 runtime 在 npm 包内，该源码目录仅为开发参考）等（见 .gitignore）

## 七、文档索引

| 文档 | 说明 |
|------|------|
| `Dev_Plan.md` | 开发计划（Phase 0–9）与逐项进度 |
| `05-Docs/需求清单与实时进度.md` | 需求清单与实时进度 |
| `05-Docs/环境搭建与运行时配置.md` | 运行时初始化（PostgreSQL / JWT / DLL）与 .env 配置 |
| `01-Skills/README.md` | 技能与课程引擎说明 |
| `03-Backend/README.md` | 后端说明 |
| `04-Frontend/README.md` | 前端说明 |
| `06-Tools/README.md` | OCR 工具链说明 |