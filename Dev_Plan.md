# AI Teacher System — 开发计划与进度

> 本文件持续维护：每个功能/修复完成后更新状态。记录开发计划与进度。

## 项目概述

按费曼教学法打造的 AI 教师系统。前后端分离：
- 前端：uni-app (Vue2) H5，vite 构建，端口 5173
- 后端：Express，端口 3000（对话编排、路由、课程、会话/状态持久化）
- 运行时：agentskills-runtime（本地模型 agnes-2.0-flash），端口 8080
- 数据：PostgreSQL（uctoo 库）+ 本地 JSON（02-DATA/users）

## 项目约束

1. **依赖就地安装**：本项目所需安装的软件/依赖（node_modules、Python venv、runtime 等）必须全部装在本项目目录 `E:\Projects\AI-Teacher-System` 内，禁止安装到系统全局环境（npm -g、系统 Python 全局包等）。PostgreSQL 等系统级基础设施除外。
2. （后续限制在此追加）

## 总体计划（Phase 0–9）

| Phase | 内容 | 状态 |
|------|------|------|
| 0 | 项目初始化、目录结构、技术选型 | ✅ 完成 |
| 1 | 后端骨架：Express + 学科路由 + 运行时桥接 | ✅ 完成 |
| 2 | 前端骨架：uni-app H5、三页（主页/对话/概览） | ✅ 完成 |
| 3 | 基础对话：流式输出、学科路由、会话持久化 | ✅ 完成 |
| 4 | 知识状态：知识点掌握度、学习目标、错误追踪 | ✅ 完成 |
| 5 | 课程模式：manifest 课程化、学这本书/继续学、进度注入 | ✅ 完成 |
| 6a | 一键启动 start-dev.bat、runtime 稳定性修复 | ✅ 完成 |
| 6b | 前端 JS 崩溃修复（vite 预构建 + 变量遮蔽） | ✅ 完成 |
| 7 | 前端体验优化轮（进行中） | 🔄 进行中 |
| 8 | Web UI 设计 Skills 引入，页面重新设计优化 | ⏳ 计划中 |
| 9 | 验收、部署打包 | ⏳ 计划中 |

## 近期工作项（Phase 7 体验优化）

| # | 内容 | 状态 | 日期 |
|---|------|------|------|
| 7.1 | LaTeX 公式渲染（KaTeX CSS 全局注入） | ✅ 完成 | 2026-08-14 |
| 7.2 | 回答黑/白背景修复（raw HTML 白名单消毒） | ✅ 完成 | 2026-08-14 |
| 7.3 | 对话文本可选中复制 | ✅ 完成 | 2026-08-14 |
| 7.4 | 退出对话后恢复上次会话（按学科） | ✅ 完成 | 2026-08-14 |
| 7.5 | 主页/概览按学科切换联动（继续学习/最近学习/知识点） | ✅ 完成 | 2026-08-14 |
| 7.6 | 旧知识点按会话历史回填学科归属（数据迁移） | ✅ 完成 | 2026-08-14 |
| 7.7 | 会话记录删除按钮（主页 + 概览） | ✅ 完成 | 2026-08-14 |
| 7.8 | 学科切换不串台（保留用户选择 + 按学科恢复会话） | ✅ 完成 | 2026-08-14 |
| 7.9 | 聊天页复制按钮：LaTeX 原文 / 渲染后文本 | ✅ 完成 | 2026-08-14 |
| 7.10 | 聊天页上传文件/图片（base64 上传 + 附件预览） | ✅ 完成 | 2026-08-14 |
| 7.11 | 对话界面紧凑化（字号/气泡/间距） | ✅ 完成 | 2026-08-14 |
| 7.12 | start-dev.bat 全静默启动（任务栏无终端，日志落盘） | ✅ 完成 | 2026-08-14 |
| 7.13 | AI 提供商设置页（本地模型 / OpenAI 兼容 + 测试连接） | ✅ 完成 | 2026-08-14 |
| 7.14 | 概览页点击会话记录直接进入对话 | ✅ 完成 | 2026-08-14 |
| 7.15 | 会话删除 failed to fetch（CORS 缺 DELETE 方法） | ✅ 完成 | 2026-08-14 |
| 7.16 | 会话详情记录 subject，进入会话时按详情校准学科 | ✅ 完成 | 2026-08-14 |
| 7.17 | 主页/概览会话记录重复（appendHistory 同 sessionId 去重） | ✅ 完成 | 2026-08-14 |
| 7.18 | 点"对话"默认新建（不再自动恢复旧会话） | ✅ 完成 | 2026-08-14 |
| 7.19 | 最近学习按科目收拢，点击标题展开全部会话 | ✅ 完成 | 2026-08-14 |
| 7.20 | "新建对话"按钮置于继续学习上方，按当前科目新建 | ✅ 完成 | 2026-08-14 |
| 7.21 | 底部原生 tabBar 常驻：主页/学习概览/设置 | ✅ 完成 | 2026-08-14 |
| 7.22 | 自定义 TabBar 组件（字号放大至 32rpx，三页常驻） | ✅ 完成 | 2026-08-14 |
| 7.23 | 概览页会话记录仿主页展开/折叠（含标识） | ✅ 完成 | 2026-08-14 |
| 7.24 | 概览页学科选择改大卡片（与主页一致） | ✅ 完成 | 2026-08-14 |
| 7.25 | 一键更新技能与书籍：扫描重建学科索引 + 变更报告 | ✅ 完成 | 2026-08-14 |
| 7.27 | 蒸馏书籍：设置页选目录扫描→选书→异步蒸馏（teach.py 全本地）→产物入 distilled + index.json | ✔ 完成 | 2026-08-14 |
| 7.28 | 蒸馏后端：scan/distill/job 轮询 API + 引擎修复（PYTHONUTF8 + 代理项清理） | ✔ 完成 | 2026-08-14 |
| 7.26 | 新增学科约定：学科目录 + subject.yaml + 技能 manifest | ✅ 完成 | 2026-08-14 |
| 8.1 | 引入 Web UI 设计 Skills，重设计三页面 | ⏳ 待排期 | — |
| 8.2 | 组件化重构（md-render、附件、会话卡片抽取） | ⏳ 待排期 | — |
| 8.3 | 主题/暗色模式、动效、响应式适配 | ⏳ 待排期 | — |

## 里程碑记录

### M1：课程模式全链路（Phase 5）✅
- courseService：manifest.yaml 课程化、findCourse/loadCourseContext/advanceCourse
- promptBuilder：课程系统提示（课程名/章节/课/进度注入），修复"第第"措辞
- chatService：课程意图检测（学这本书/继续学/下一课）
- 回归：course.js 18 测试、smoke 9、integration 5 全绿；E2E 验证模型严格教注入课

### M2：一键启动 + 稳定性（Phase 6）✅
- start-dev.bat：清理残留 → 启动三服务 → 健康等待 → 开浏览器（v2 全静默）
- runtime 假死修复（.env 缺 DB 配置导致 ORM 失败，2 分钟整机假死）
- 前端崩溃双根因修复（vite optimizeDeps 404 + streamChat 变量遮蔽 SyntaxError）

### M3：体验优化轮（Phase 7）✅ 见上表 7.1–7.12

## 进行中/下一步
1. 用户验收 Phase 7 改动（复制、上传、删除、学科联动）
2. 排期 Phase 8：Web UI 设计 Skills 引入与页面重设计

## 当前状态摘要（2026-08 实测环境）

### 功能全景（已交付）
- 对话教学：流式回复（SSE）、学科路由（手动/关键词自动）、会话持久化、LaTeX 公式渲染、附件上传、消息朗读
- 课程模式：manifest 课程化、课程意图识别（学这本书/继续学/下一课）、知识点/进度跟踪
- 语音交互：语音通话（Web Speech 识别 + 流式回复 + TTS 朗读循环）、22 音色、双引擎 TTS（本地 Qwen3-TTS 优先 / 微软 Edge 兜底）、实时听写（识别文本实时显示 + 识别状态提示）
- 书籍加工：OCR（RapidOCR，全本地）→ 蒸馏（teach.py）→ 结构化课程 → 自动绑定技能；公式书专用管道（P2T + 质检 + MinerU 精修 + 切章）

### 架构速览
```
前端 uni-app H5 (5173) ──SSE/HTTP──▶ 后端 Express (3000) ──OpenAI 兼容──▶ agentskills-runtime (8080, 云端 LLM)
                                          │ 音频
                                          ▼
                                  06-Tools/tts（本地 Qwen3-TTS, 8765）优先 / 微软 Edge 在线 TTS 兜底
                                          │ 本地文件
                                          ▼
                          01-Skills（技能/课程） 02-DATA（books 三层镜像 / users / sessions / settings）
```

### 语音交互调优（2026-08-19 已提交）
- 实时听写：语音通话页实时显示识别文本（绿色气泡 + 聆听中/思考中/播报中标记 + 闪烁光标），发送后自动清空不残留；识别器状态可见（启动中 / 没有听清 / 识别服务连接失败），不再静默失败
- Chrome 语音识别网络依赖：Chrome 的 Web Speech API 走 Google 在线服务，国内网络不通时静默报 `network` 错误；解决：开启系统代理（ProxyEnable=1）+ 一键脚本以 `--proxy-server=http://127.0.0.1:10808` 强制 Chrome 走代理（独立 user-data-dir 不干扰日常浏览器）；Edge 的识别走微软服务、国内直连可达（备选）
- 空回复兜底：模型偶发对超短消息（「继续」「嗯」）只输出状态 JSON、response 字段为空 → 前端显示空白；三层修复：prompt 硬性要求 response 必须非空 + 后端兜底文案（JSON 当回复/全空均拦截）+ 前端再兜一层
- 播报期间可打断（部分实现）：AI 朗读时同步监听麦克风，评估内容（有实质内容、≥3 字、与播报文本不高度相似防回声误触）才打断并立即回答；当前反馈仍偏僵硬，后续可继续调优（阈值/回声抑制）
- UI 细节：长文本/公式溢出修复（word-break）、对话容器 width calc + auto margin 居中（两侧对称）、favicon 404 抑制、TTS 后端重试 3 次缩为 2 次缩短失败等待

### 公式书蒸馏管道（2026-08-19 已提交，FEM 全本验证）
- 公式书专用识别：P2T 初蒸（CPU 本地，30-40s/页）→ 质检打分（阈值 30）→ 可疑页分批 MinerU 云端精修 → `book.md` 合并
- 结构切章：章/节结构取自 PDF 文本层 Contents（无 OCR 乱码），按印刷页码 + offset 校准（FEM 实测 offset=3）切 `book.md` 页标记；无 Contents 的书自动回退正文标题切章
- 全本验证：FEM《Finite Element Method Lecture Notes》83 页 → P2T 约 60 分钟 → 质检 16 可疑页 + 区间聚拢 18 页精修 → **5 章 32 节全部正确切分** → course_gen → `distilled/Math/09-计算数学/数值PDE与有限元/<书名>/`（5 章 31 课）→ math hasCourses=True
- 产物清理：蒸馏成功自动删 work/、参考/、书库/ 三处过程产物（失败保留排查）

### 已入库书籍与课程
| 学科 | 书籍 | 蒸馏产物（distilled/） | 绑定技能 |
|------|------|------------------------|----------|
| math | Finite Element Method Lecture Notes（A. A. Salih） | `Math/09-计算数学/数值PDE与有限元/`（5 章 31 课） | calculus-tutor（微积分教师） |

> 旧蒸馏课程（费恩曼物理学讲义、朗道、量子力学发展史、渐近分析、数学物理方法）已随清理从仓库删除；后续可用新公式管道重蒸。
### 双机同步合并（2026-08-29 已提交，推送至 origin/branch-4060）

> 分支说明：branch-4060 = 本机（RTX 4060）的开发线，基于 9792f9c（含全部本地功能与双机合并成果）。
> 另一台机器（MX150）同步方式：git fetch 后 Your branch is up to date with 'origin/branch-4060'.（或自行 merge 到其工作分支）；
> 机器差异不需要分叉代码——GPU 相关能力已配置化：本地 TTS 引擎在设置页切换（低配用 Edge 云端）、
> 公式蒸馏的 P2T/MinerU 策略在 06-Tools/formula-extraction、环境依赖（Python/DLL/模型）按
> 《05-Docs/环境搭建与运行时配置.md》重建，私密配置放 local-config.bat（gitignored）。
与另一台机器的开发（github.com/Aretinus/AI-Teacher-System，P29-P33-GH）完成双向对齐，本机采纳：
- **OCR 探查异步化**：spawnSync → execFile 异步 Promise，大书探查不再冻结后端（P32 本地）
- **未注册学科全链路兜底**：bookDirOf 回退目录名（蒸馏/OCR/课程三处）、`GET /api/books/subjects`、`/api/subjects` 合并书库学科（registered:false，主页"通用教学"）、路由 `manual-generic` 通用教学模式、设置页「＋添加学科」（P33 本地）
- **语音通话生命周期**：leaving 标记 + onUnload 自动挂断 + navigateBack 失败兜底 reLaunch + 通话中对话页输入禁用（P34 本地）
- **悬浮球**：对话页可拖动通话悬浮球（径向菜单挂断/进入、贴边换朝向），与本地问题条共存，替代"通话中"chip（P35 本地）
- **voice-call 防护**：reqToken 请求代际 + interrupted 打断抑制，interrupt 支持思考中/播报中打断（P36 本地；GH 的"思考期继续聆听"未采纳，与本地停顿分段/回声防控状态机冲突）
- **界面细节**：语音日志时间戳 + Markdown 渲染、思考中条目前置、历史记录相对时间（今天显示时分）、示例提问按学科动态生成 + 通用兜底、设置页学科选择改用书库实时清单
- **启动脚本**：DB 密码外置 local-config.bat（gitignored）、全 ASCII 注释 + CRLF + `.gitattributes` 固化（P31 本地④）

### 语音链路修复轮（2026-08-30，P38-P41 已本地提交）
- P38 语音识别无事件 = 网络依赖（Chrome 走 Google 需代理）；P39 runtime 404 三层根因（OpenSSL DLL → ORM → AI 路由条件注册）+ externalRequest 非流式解析修复 + 模型配置迁移设置页；P40 默认 Agnes + 空配置引导 + dbPassword 并入 settings.json；P41 beginCall 根级定义修复（语音页进入即"通话已结束"的真凶）；TTS venv 重建后 edge-tts.exe 入口丢失的再生方法（force-reinstall）。
- 端到端验证：识别 → Agnes 回复 → Edge 播报全链路正常；语音页正确渲染 30 条历史（Markdown 表格含公式均正常）。

本机独有（GitHub 尚无，反向同步待办）：问题条（刻度+悬停卡片）、runtime DLL 自愈、语音识别质量优化（停顿分段/final 去重/代际防残留/barge-in）、TTS 引擎切换与语音打断设置、economics/literature/philosophy 注册学科与蒸馏产物、动态学科关键词路由、refreshService 书籍驱动扫描与 books 目录重构。
