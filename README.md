# AI 教师系统（AI Teacher System）

> 打造具有个人风格的 AI 教师，以费曼式讲解方法教授不同学科。
> 从经典教材自动「蒸馏」出结构化课程（章 → 课 → 练习），Web UI 提供对话式教学与学习进度跟踪。

---

## 一、开展进度（实时更新）

### 2026-08 初始 MVP（已交付）
- **系统骨架**：Express 后端（端口 3000）+ 学科路由 + 本地模型运行时（agentskills-runtime，端口 8080，agnes-2.0-flash）；uni-app H5 前端（vite，端口 5173）
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

### 已入库书籍与课程
| 学科 | 书籍 | 蒸馏产物（distilled/） | 绑定技能 |
|------|------|------------------------|----------|
| physics | 费恩曼物理学讲义（第 1 卷） | `Physic/费恩曼物理学讲义（英文版）/`（55 章） | feynman-mechanics（费曼式力学教师） |
| physics | Landau Vol. 1. Mechanics. 3rd Ed | `Physic/朗道十卷（英文版）/Landau Vol. 1. Mechanics.3rd.Ed/` | —（暂空，物理默认走费恩曼课程） |
| math | Asymptotic Expansions（Erdélyi） | `Math/01-分析/渐近分析（奇异摄动）/`（6 章） | calculus-tutor（微积分教师） |

> 完整开发计划与逐项进度见 `Dev_Plan.md`。

---

## 二、系统架构

```
┌─────────────┐    HTTP/SSE    ┌──────────────────┐   OpenAI 兼容协议   ┌────────────────────┐
│  前端 uni-app │ ────────────▶ │  后端 Express      │ ─────────────────▶ │ 本地模型运行时        │
│  H5 (5173)   │               │  (3000)           │                    │  agentskills-runtime │
└─────────────┘               │  对话/路由/课程/状态 │                    │  (8080, agnes-2.0)   │
                              └──────────────────┘                    └────────────────────┘
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
├── 03-Backend/           Express 服务（对话、路由、课程、书籍加工 API）
├── 04-Frontend/          uni-app H5（主页 / 对话 / 学习概览 / 设置）
├── 05-Docs/              需求文档与进度记录
├── 06-Tools/ocr-toolkit/ OCR 工具链（RapidOCR、djvu→pdf、文字层探查）
├── Dev_Plan.md           开发计划（实时进度）
└── start-dev.bat         一键启动
```

---

## 三、功能说明

### Web UI（四个页面）
- **主页**：学科选择、新建对话、继续学习卡片、知识点进度条、最近学习（可删除会话）
- **对话**：流式教学回复（SSE）、KaTeX 渲染、附件上传、复制（LaTeX 原文 / 渲染文本）
- **学习概览**：知识点掌握度、近期错误与订正、会话记录
- **设置**：AI 提供商（本地模型默认 / OpenAI 兼容 + 测试连接）、书籍加工（OCR 层 / 蒸馏层）

### 书籍加工流水线（设置 → 书籍加工）
1. **OCR 层**：扫描 `raw/` 下 pdf/djvu → 探查文字层 → 纯扫描件跑 RapidOCR（产物入 `ocr/` 镜像目录，可断点续跑）；djvu 直接转换即可蒸馏
2. **蒸馏层**：选择 raw/ocr 来源与学科 → 扫描目录 → 选书 → 异步蒸馏（后台运行，可离开页面）→ 产物按学科落入 `distilled/`，更新 `index.json` 并自动绑定技能 courseDir
3. **教学**：对话中选择学科后说「学这本书 / 继续学 / 下一课」，系统按绑定课程注入章节上下文教学

---

## 四、运行方式

### 一键启动（推荐）
双击 `start-dev.bat`：自动清理残留进程 → 启动 runtime / 后端 / 前端 → 健康检查 → 打开浏览器（http://127.0.0.1:5173）

### 手动启动
```bat
:: 1. 本地模型运行时（若已安装）
cd 03-Backend\node_modules\@opencangjie\skills\dist\runtime\win-x64\release\bin
agentskills-runtime.exe

:: 2. 后端
cd 03-Backend && node src/index.js

:: 3. 前端
cd 04-Frontend && npm run dev:h5
```

> 新增学科/技能：创建 `01-Skills/subjects/<学科>/subject.yaml` + 技能目录（参考 `_TEMPLATE`），重启后端自动重建索引。

---

## 五、开发约定

- **本地优先**：运行期全程离线——对话走本地运行时；OCR（RapidOCR）、蒸馏（teach.py）均为本地脚本，不调用任何在线服务
- **目录镜像**：raw / ocr / distilled 三层目录结构一致，产物按学科分类
- **不污染源数据**：OCR 产物只写入 `02-DATA/books/ocr/`，源书不动
- **Git 不入库**：node_modules、raw/、ocr/、venv、模型文件、settings.json、jwt_token.txt 等（见 .gitignore）

## 六、文档索引

| 文档 | 说明 |
|------|------|
| `Dev_Plan.md` | 开发计划（Phase 0–9）与逐项进度 |
| `05-Docs/需求清单与实时进度.md` | 需求清单与实时进度 |
| `01-Skills/README.md` | 技能与课程引擎说明 |
| `03-Backend/README.md` | 后端说明 |
| `04-Frontend/README.md` | 前端说明 |
| `06-Tools/README.md` | OCR 工具链说明 |