# AI Teacher System — 开发问题记录

> 本文件记录开发过程中遇到的技术问题、根因与解决方案，避免重复踩坑。

## 问题列表（按时间倒序）

### P39. 语音链路修复后对话仍失败：runtime 404（OpenSSL DLL 丢失 + 模型配置随 .env 丢失 + externalRequest 非流式解析 bug）
- **现象**：识别修复后语音回复报「Runtime stream error (404): /api/v1/ai/chat/completions」。
- **根因（三层叠加，全是 node_modules 重装/配置迁移的连锁反应）**：
  ① runtime bin 里缺 **libcrypto-3-x64.dll / libssl-3-x64.dll**（OpenSSL 3，ORM 的 PG md5 认证需要）→ 日志报 `CryptoException: Can not load openssl library or function MD5_Init` → ORM 初始化失败；
  ② runtime 的 `.env` 被 npm 包原始模板覆盖（API Key 全是占位符）→ `ModelManager` 创建 chatModel 失败 → main.cj 按 `if (let Some(chatModel))` 分支**整体跳过 AI 路由注册**（日志 warn "Chat routes skipped"）→ 所有 /api/v1/ai/* 404。关键线索：runtime 自己的日志（bin/logs/）只有 skill/tool 路由注册记录；
  ③ 即使路由通了还有一层：`externalRequest` 非流式分支按 SSE 的 `data:` 行解析响应，而标准 OpenAI 兼容端点（Agnes）`stream:false` 返回普通 JSON → 解析出空内容 →「（空响应）」。此前从未暴露，因为一直走 runtime 通道，直连分支零使用。
- **解决**：① 从 PostgreSQL 17 bin 复制 libcrypto/libssl-3-x64.dll 补入 runtime bin 并入 06-Tools/runtime-dlls 备份，start-dev.bat 自动恢复清单扩为 6 个 DLL；② 模型配置不再放 runtime .env——**迁移到设置页（02-DATA/settings.json）标准 OpenAI 兼容格式**（provider:openai + baseUrl + apiKey + modelName，与 DeepSeek profile 同构），后端 `externalRequest` 直连，runtime 退回健康检查等基础职责；③ 修 externalRequest 非流式解析：JSON 优先、SSE 兜底。
- **经验**：① runtime 的 404 不是路由拼写问题时要看 bin/logs/agentskills-runtime.log 的路由注册段——AI 路由注册是模型配置有效性的**条件分支**，静默跳过；② health 接口不覆盖 AI 路由，「runtime OK」≠「对话可用」，验证必须打一发真实对话；③ node_modules 重装的破坏面 = 手动补的所有 DLL + bin/.env 全部用户配置，重装后按环境文档第 8 节 + local-config.bat 重建。
- **状态**：已修复（2026-08-30，端到端对话验证通过；Agnes key 为用户在设置页重新填入）。

### P38. 问题条 scroll-view 在 keep-alive 页面重进时报 scrollTop null；语音识别"无任何事件"确认为网络依赖
- **现象**：①从语音页返回对话页，控制台刷 `Cannot set properties of null (setting 'scrollTop')`（QuestionBar 的 ScrollView activated 钩子）；②语音通话识别完全无响应——`recog.start()` 每 6 秒循环重启，但没有任何识别事件，也**没有 error 事件**（连 no-speech 都没有）。
- **根因**：①uni-h5 的 scroll-view 在 `v-if` 包裹 + keep-alive 重挂载时内部节点为 null，activated 钩子恢复 scrollTop 崩溃（已知框架问题）；②Chrome 的 Web Speech 依赖 Google 在线服务（强制走 10808 代理），代理/网络断时识别管道整个哑掉，且伴随 Chrome 内部 `reportAllChanges ... startTime undefined` 报错——表现极具迷惑性（start 成功、无错误、纯静默），实为网络。
- **解决**：①question-bar 用普通 view + CSS overflow 滚动替代 scroll-view（顺带隐藏滚动条）；②语音类故障先查代理（`curl -x http://127.0.0.1:10808 https://www.google.com`），再查标签页争抢（Chrome 同一时刻只允许一个标签页占用麦克风识别，两个 5173 标签页会互相干扰）。
- **经验**：排查前端改动是否引入问题时，先核对浏览器实际加载代码的 console 行号与磁盘文件是否一致（P37），再分段排除——本次 voice-call.js 改动均不在识别结果路径上，行号吻合 + 结果路径未动即为清白。
- **状态**：已解决（2026-08-29，确认为网络问题，代理恢复后识别正常）。

### P37. 经验：hash 路由跳转不会重新加载 JS 模块，验证前端改动必须强制刷新
- **现象**：改完 chat.vue 后在浏览器 `goto('...#/pages/chat/chat?...')` 验证，新组件（question-bar）生效了，但同一文件里新加的计算属性（回答预览）不生效，一度误判代码写错。
- **根因**：SPA 内仅 hash 变化的导航不会重载文档；浏览器沿用的还是先前会话里缓存的旧模块（chat.vue 旧版仍在内存中），而 question-bar.vue 是首次加载所以是新的——"一半新一半旧"极易误导排查。
- **经验**：验证前端改动一律先 `tab.reload()` / 强制刷新整页；vite HMR 只对已打开页面的后续改动生效，不保证跨会话缓存一致性。
- **状态**：已确认（2026-08-29）。

### P36. 语音通话请求代际与打断抑制（reqToken / interrupted）
- **现象**：用户在 AI 思考/重试期间挂断或打断后，迟到的流式回调仍会把「语音回复失败/超时」错误消息插进会话，甚至把 TTS 拉起来播报；用户连说两句话时，旧请求的回复可能盖住新请求的结果。
- **根因**：sendFinal 的回调（onSession/onDone/onError）没有任何代际校验，也不感知手动打断；旧请求 abort 后异步回调仍会执行。
- **解决**：模块级 `reqToken` 代际令牌——sendFinal 每次自增并持有快照，所有回调入口先校验 `myToken === reqToken`；提交新问题前 abort 旧请求；`interrupted` 标记在 end()/interrupt() 置位，错误兜底全部跳过。end()/interrupt() 均 `reqToken++` 作废在途回调。interrupt() 同时升级为支持"思考中打断"（abort 请求）与"播报中打断"（停 TTS），打断后提示"已打断，正在聆听…"。
- **甄别结论**：GitHub 版同时让"思考期继续聆听"（用户可补充更正，新问题顶掉旧请求）；本地已有停顿分段/回声防控的精细状态机，两套聆听门控冲突，本轮**不采纳**该行为变更，仅采纳防护逻辑（后续如需可在 P26-28 状态机上叠加）。
- **状态**：已修复（2026-08-29）。

### P35. 语音通话悬浮球并入对话页（与问题条共存）
- **现象**：本地对话页只有页头"通话中"文字入口，点击即跳转通话页，无挂断/状态提示；GitHub 版有可拖动悬浮球（P33-GH）但没有问题条，两者基于不同基线各自演化。
- **解决**：合并共存——悬浮球负责通话控制（拖动 + 径向菜单「挂断/进入」，贴边换朝向、避让 H5 导航栏），问题条负责内容导航；移除页头"通话中"chip。悬浮球状态（聆听/思考/播报变色）从本地 `syncFromVoice` 镜像通道读取 `s.phase`。SVG 扇区交互沿用 GH 的 `document` 自定义事件方案（绕开 uni 对 v-html 内容的事件包装，见 P33-GH）。
- **状态**：已合并（2026-08-29）。

### P34. 语音通话"取消不了"、最小化后状态残留
- **现象**：点「取消通话」像页面刷新且通话重新出现；浏览器返回/手势离开语音页后麦克风仍在收录；退出对话也挂不断。
- **根因**：只有语音页内按钮会调用挂断，浏览器返回/切 Tab 不触发；历史栈为空时 `navigateBack` 失败表现为页面重载，重载又触发 onLoad 重新 start() 把通话拉起来。
- **解决**：`leaving` 标记区分主动/被动离开——「最小化」置位保持通话；「取消通话」置位挂断且 navigateBack 失败兜底 `reLaunch` 回首页；语音页 onUnload 非主动离开自动挂断；对话页 onUnload 也兜底挂断；通话中对话页输入框提交被拦截并提示。
- **状态**：已修复（2026-08-29，自 GitHub P32 同步）。

### P33. 未注册学科"看不见/用不了"（书库新增文件夹不生效）
- **现象**：书库 raw/ 放入新学科文件夹后，主页学科列表不显示、蒸馏/OCR 找不到目录、路由直接拒绝。
- **根因**：多处功能只认 `subjects/index.json` 已注册学科——bookDirOf 查不到返回空、`/api/subjects` 只回注册学科、routeAll 对未知学科返回 subject-not-supported。
- **解决**：三处 `bookDirOf` 未注册时回退"学科名即目录名"；distillService 新增 `listLibrarySubjects()`（注册学科 + raw/ocr/distilled 三层顶层目录实时扫描，含中文映射表）；后端新增 `GET /api/books/subjects`（书籍加工页用）、`/api/subjects` 合并未注册学科（`registered:false`，主页显示"通用教学"）；routerService 对未指定技能的学科返回 `manual-generic` 通用教学模式（无技能/课程上下文，按学科名教学，promptBuilder 对缺失 SKILL.md 本就优雅降级）；设置页书籍加工改用书库学科清单并提供「＋添加」。
- **状态**：已修复（2026-08-29，自 GitHub P30 同步；与本地动态关键词路由共存）。

### P32. OCR 文字层探查同步阻塞后端（全站接口挂起）
- **现象**：对书籍多的学科点「扫描文件」后，后端最长停摆 2 分钟，期间所有请求挂起，前端表现为数据全部消失。
- **根因**：ocrService 用 `spawnSync` 运行探查脚本，Node 事件循环被冻结。
- **解决**：改 `execFile` 异步 Promise（文件列表经 stdin 传入，探查脚本提前退出时忽略 stdin EPIPE）；`/api/ocr/scan` 变 async；实测探查期间其他接口正常响应（扫描接口 61ms 即返回）。
- **状态**：已修复（2026-08-29，自 GitHub P29 同步）。

### P31. 一键启动脚本失效：runtime 8080 起不来（GCC 运行时 DLL 随 node_modules 重装丢失）
- **现象**：`start-dev.bat` 跑完后 backend/frontend 正常，runtime.log 为空、8080 不监听；手动运行 `agentskills-runtime.exe` 报 `error while loading shared libraries: ?`（加载器不报缺失 DLL 名）。
- **根因**：runtime（仓颉/MinGW 编译）依赖 4 个手动补入的 GCC 运行时 DLL（libgcc_s_seh-1 / libstdc++-6 / libwinpthread-1 / libssp-0，见《环境搭建与运行时配置.md》第 8 节）；`npm install` 重装 node_modules 后这些 DLL 被清空（不在 npm 包内），runtime 加载即崩。`libcangjie-runtime.dll` 导入表确认需要 libssp-0.dll。
- **修复**：① 4 个 DLL 重新补入 bin/（来源：MSYS2 gcc-libs 16.2 无 libssp，改用 JuliaBinaryWrappers CompilerSupportLibraries v0.5.4 x86_64-w64-mingw32，经 ghfast.top 加速下载）；② 备份至 `06-Tools/runtime-dlls/`，start-dev.bat 启动前检测缺失自动恢复；③ 顺带修 start-dev.bat 两处隐患：`.env` 检查改为 `(?m)^DATABASE_URL=`（原 `-notmatch 'DATABASE_URL='` 被 .env 自带的 `# DATABASE_URL=` 注释示例行误匹配，DB 配置从未写入）；三个服务改用 `Start-Process -FilePath/-WorkingDirectory/-RedirectStandardOutput` 单引号参数（原嵌套双引号在路径含空格或重定向处易碎），stdout/stderr 分文件（*.err.log）；④ 双机合并补充（2026-08-29）：DB 密码外置到 gitignored 的 `local-config.bat`（`set DB_PASSWORD=...`），脚本全部注释改 ASCII 并强制 CRLF、`.gitattributes` 固化 `*.bat text eol=crlf`——bat 里中文注释/LF 换行会弄崩 cmd 解析（同 GitHub 版 P31 教训）。
- **状态**：已修复（2026-08-29，全链路 health 验证通过）。

### P30. P2T(pix2text) 安装 + 动态学科路由 + 假"添加学科"移除（2026-08-20）
- **现象**：pix2text 原只装在旧机器系统 Python（C:\Users\Randall\AppData\Local\Programs\Python\Python39），新机器无系统 Python → 公式书蒸馏链路断。
- **修复**：CPU 版 torch 装到 06-Tools/python-3.12，再 pip install -i 清华镜像 pix2text（1.1.6，模型首次运行经 HF_ENDPOINT=https://hf-mirror.com 自动下载）；pipeline.py `_check_pix2text()` 改为子进程探测项目 Python（venv_slim 无 pix2text），`_system_python()` 优先返回项目 Python。
- **顺带修复**：① subjects/index.json 中 economics 的 name 曾为乱码（refresh 重写后恢复"经济学"）；② 前端 settings.vue 的"＋添加学科"是假的（只 push 本地数组），已移除；③ routerService.detectSubject 增加动态学科信号（新学科按 name/id/bookDir 自动参与路由，实测"音乐"→"music"）。
- **状态**：已解决。

### P29. 全项目 Python 统一到 06-Tools/python-3.12（2026-08-20）
- **现象**：本机所有 Python venv 均从旧机器（Randall）迁移，pyvenv.cfg 指向旧机 Python，本机无该系统 Python → TTS(edge-tts)/OCR/蒸馏全部失效。
- **修复**：per-user 静默安装 Python 3.12.10 至 06-Tools/python-3.12（未写注册表/PATH）；tts/venv、ocr-toolkit/venv、venv_slim 全部用其重建；edge-tts 直连微软（无需 10808 代理）；pipeline.py `_system_python()` 改为优先返回 06-Tools/python-3.12（公式书蒸馏的 pix2text 需装入项目 Python，缺失时打印安装指引）。
- **状态**：已解决。

### P28. H5 scroll-view 的 padding 失效导致容器贴边不对称
- **现象**：语音通话页文本区域容器左侧距屏幕约 1cm、右侧完全贴进屏幕边缘，左右不对称
- **根因**：uni-app H5 的 scroll-view 内 padding 计算不可靠（margin 生效但 padding 未按预期参与宽度），右侧内容贴边
- **解决**：容器改用 `width: calc(100% - 60rpx)` + `margin: 20rpx auto 0` 显式居中，左右对称；配合消息条目 `margin: 0 20rpx` 统一气泡边距
- **状态**：已修复（2026-08-19）

### P27. 模型偶发输出空回复（teaching-response JSON 的 response 字段为空）
- **现象**：对「继续」「嗯」等超短消息，AI 偶尔返回空内容；后端日志显示模型输出 ```json 包裹的 teaching-response（违反 prompt 硬性要求），`response.completed` 的 content 恒为空，部分请求 response 字段缺失/为空
- **根因**：模型对无上下文短消息只输出状态信息（knowledgePoints/recentErrors），未生成教学文本；后端 `parsed?.response || rawResponse` 逻辑在 parsed 成功但 response 空时会拿整个 JSON 当回复（或全空）
- **解决**：三层兜底——prompt 硬性要求 response 必须非空（无论消息多短）；后端 parsed 无 response 时给引导文案而非 JSON；前端再兜一层（空内容/JSON 开头均拦截）
- **状态**：已修复（2026-08-19）

### P26. Chrome Web Speech 语音识别依赖 Google 服务、国内网络不通时静默失败
- **现象**：语音通话识别器正常启动（recog started）但无任何结果，控制台反复 `recog error: network`，UI 无反馈（原代码静默重启="没反应"）
- **根因**：Chrome 的 Web Speech API 走 Google 在线语音服务（speech-api 端点），国内网络不可达；系统代理（ProxyEnable）对 Chrome 的识别请求不总是生效
- **解决**：开启系统代理（127.0.0.1:10808）+ 一键脚本以 `--proxy-server=http://127.0.0.1:10808` 启动独立 Chrome 实例强制走代理；Edge 的识别走微软服务国内直连可达（备选）
- **状态**：已修复（2026-08-19）

### P25. 蒸馏日志尾部 UnicodeEncodeError（▶ 字符 GBK flush 崩溃）
- **现象**：teach.py 开头 `print("▶ 正在把…")` 在蒸馏日志末尾报 `UnicodeEncodeError: 'gbk' codec can't encode character '\u25b6'`，但退出码 0、产物正常
- **根因**：venv_slim python.exe 是转发 shim，经 shim 创建的 stdout 管道编码回退 GBK；print 输出全缓冲到进程退出才 flush，flush 遇 ▶ 崩溃（stderr traceback 混入日志），此时 main 已 return 0
- **解决**：`teach.py` main() 开头对 `sys.stdout/stderr` 执行 `reconfigure(encoding="utf-8", errors="replace")`；print 加 `flush=True`
- **状态**：已修复（2026-08-19）

### P24. Windows PowerShell 传中文 JSON body 被 GBK 破坏
- **现象**：PowerShell `Invoke-RestMethod` POST 含中文的 JSON 触发蒸馏，teach.py 报"文件不存在"
- **根因**：PowerShell 5.1 管道/参数编码为 GBK，中文路径在请求体中被破坏
- **解决**：改用 Python `urllib.request`（UTF-8 body）发 POST，或脚本内 `os.walk` 按 ASCII 定位真实路径
- **状态**：已修复（2026-08-19）

### P23. venv_slim python.exe 是转发 shim（非真 venv）
- **现象**：每次 python 调用出现 venv_slim + 系统 Python 两个进程（父子链），一度误判为重复蒸馏
- **根因**：`venv_slim\Scripts\python.exe`（599KB）是转发 shim，运行时再启动系统 Python39（103KB stub）实际执行
- **解决**：运维上识别该父子链为同一任务，勿重复触发；环境变量（PYTHONUTF8 等）由 shim 转发继承
- **状态**：已确认（2026-08-19）

### P22. PDF 目录同行编号（3.10）解析失败致章节丢失
- **现象**：`3.10 Rayleigh–Ritz Method` 同行编号拆不出，3.9 之后及第 4/5 章内容全部丢失
- **根因**：目录行只匹配 `编号.标题` 的旧正则，同行编号（无点线分隔）不匹配
- **解决**：增加 `^(\d+(?:\.\d+)*)\s+(.+)$` 拆分；配套修复 `"ontents"` 大小写敏感（全大写 "CONTENTS" 续页被跳过）与 `_clean_heading` 无编号时重复拼接标题
- **状态**：已修复（2026-08-19，FEM 全本验证 5 章 32 节全对）

### P21. 印刷页码与 PDF 页码存在偏移（offset 校准）
- **现象**：目录页码（印刷页）与 PDF 实际页不一致，切章错位
- **根因**：PDF 含封面/前言等非教学页，印刷页码整体后移（FEM 实测 offset=3）
- **解决**：`_pdf_print_offset` 短语匹配校准——取条目标题前两个实质词在 `printed+offset±1` 页文本层出现为候选，多数票决定 offset
- **状态**：已修复（2026-08-19）

### P20. 无 Contents 目录的书无法切章
- **现象**：部分书无文本层 Contents（或有效条目 <3），正文按页码切章失效
- **解决**：`_md_heading_sections` fallback——按正文 `## Chapter/Clapter/…apter N` 宽容正则 `^##\s*[Cc][Hh]?[Aa]?[Pp]?[Tt]?[Ee][Rr]\s*(\d+)` 切章、其余 `## ` 为节；两法共存，Contents 优先
- **状态**：已实现（2026-08-19）

### P19. P2T 对英文公式书 OCR 噪声质检漏检
- **现象**：页 45 等段（如 "Weightedrsiul metoi s geiclss"）英文词内字母错乱，质检 score=0 未命中
- **根因**：质检规则（text_garbage/orphan_chars/long_cjk_run）面向中文书/孤立字符，英文词内乱码不触发现有模式
- **解决**：暂接受（硬件受限只能用 P2T）；后续可加"词内非字母比例 / 词典校验"类规则
- **状态**：已知限制（2026-08-19）

### P18. 蒸馏引擎 GBK 管道输出崩溃
- **现象**：spawn teach.py 时 stdout 为管道，Python 默认 GBK 编码，遇到 ▶ 等字符 UnicodeEncodeError 崩溃
- **解决**：spawn env 加 PYTHONUTF8=1 + PYTHONIOENCODING=utf-8
- **状态**：已解决（后由 P25 的 stdout reconfigure 完善）

### P17. 一键更新误报"courseDir 不存在"为失效
- **现象**：math/calculus-tutor 无课程书籍（仅问答模式），refresh 校验 courseDir 报 invalid
- **解决**：courseDir 缺失降级为 info 级提示（noCourse："未配置课程书籍（仅问答模式）"），仅缺 SKILL.md 才算失效
- **状态**：已修复（2026-08-14）

### P16. 同会话连续对话在历史中产生重复记录
- **现象**：一次删除 48→46（同一 sessionId 出现两条记录，persistAfterChat 无条件 unshift）
- **解决**：appendHistory 先过滤掉同 sessionId 旧记录再插入（新进度记录移到最前）
- **状态**：已修复（2026-08-14）

### P15. 概览页点击会话记录只弹详情小窗
- **现象**：点击会话记录弹出 showModal 详情，无法进入对话
- **解决**：改为直接 `uni.navigateTo` 进入对话页（带 subject + sessionId）
- **状态**：已修复（2026-08-14）

### P14. 概览页会话记录显示错位（数学问题出现在物理会话）
- **现象**：切到物理后，会话记录前三条显示数学问题、内容是物理相关、带 json 关键词
- **排查**：history.json 数据经核查是干净的（physics 26 条均为物理内容）——错位来自历史遗留：**早期 restoreLatest 会恢复任意学科会话并覆盖学科**，用户曾在数学 tab 下打开过物理会话
- **解决**：会话详情开始记录 subject；进入会话时（loadSession）以详情 subject 校准 selectedSubject；restoreLatest 按当前学科过滤
- **状态**：已修复（2026-08-14）

### P13. 删除会话报 failed to fetch
- **现象**：点击删除会话，前端报 Failed to fetch
- **根因**：浏览器对 DELETE 请求先发 OPTIONS 预检，后端 CORS `Access-Control-Allow-Methods` 只含 `GET, POST, PUT, OPTIONS`，不含 DELETE → 预检被拒
- **解决**：Allow-Methods 追加 `DELETE`
- **状态**：已修复（2026-08-14）

### P12. 学科切换后会话"串台"出现在别的学科最近记录
- **现象**：在数学目录打开对话退出后，切换到物理，该对话出现在最近记录中（主页与概览均存在）
- **根因**：
  1. `index.vue` 的 `loadAll()` 在每次 `onShow` 把 `selectedSubject` 强制改回全局 `state.currentSubject`，覆盖用户学科选择
  2. `chat.vue` 的 `restoreLatest()` 无学科过滤：无 sessionId 进入聊天时恢复**最近一条**任意学科的会话，并把学科覆盖为那条的 subject
- **解决**：`selectedSubject` 仅首次初始化（`!this.selectedSubject` 时才赋值）；`restoreLatest()` 改为按当前学科过滤最近会话，且不再覆盖学科
- **状态**：已修复（2026-08-14）

### P11. 知识点进度条科目混在一起
- **现象**：数学/物理的知识点掌握度全部堆在一起显示
- **根因**：`state.knowledgePoints` 无学科字段，前端无从过滤；旧数据 13 条均为 null
- **解决**：
  1. `mergeStateUpdate` 增加 subject 参数，新知识点记录学科归属
  2. 一次性迁移脚本：按 14 条会话历史的 `subject ↔ knowledgePoint` 映射回填旧数据
  3. 前端（主页 topPoints / 概览 pointsList）改为严格 `v.subject === selectedSubject` 过滤
- **状态**：已修复（2026-08-14）

### P10. 三个终端窗口/任务栏残留
- **现象**：start-dev.bat 用 `start /min` 启动，任务栏出现 3 个最小化窗口
- **解决**：改用 PowerShell `Start-Process -WindowStyle Hidden` 全静默启动，日志重定向到 `logs\*.log`，bat 5 秒后自动退出
- **状态**：已修复（2026-08-14）

### P9. 回答背景随机变黑
- **现象**：AI 回答区域背景有时黑色
- **根因**：模型回答含 raw HTML（如 `<style>body{background:#000}</style>`），marked 放行后经 `v-html` 注入污染全局样式
- **解决**：`md.js` 增加 SAFE_TAGS 白名单消毒（仅保留文本类标签与 href/src/alt/colspan/rowspan，URL 协议校验）
- **状态**：已修复（2026-08-14）

### P8. LaTeX 公式不渲染
- **现象**：AI 回答输出 LaTeX 原码
- **根因**：KaTeX 渲染逻辑本身正常（node 实测渲染成功），疑似 CSS 加载缺失导致公式溢出/异常
- **解决**：`main.js` 全局 `import 'katex/dist/katex.min.css'` 双保险
- **状态**：已修复（2026-08-14）

### P7. 前端页面 JS 崩溃 → 请求"超时"假象
- **现象**：页面白屏/无响应，反复"连接服务器超时"，后端日志无 `[req]` 记录
- **根因**（两个叠加）：
  1. vite 预构建 `@dcloudio/uni-stat` 失败：`/node_modules/.vite/deps/uni-stat-public.es.js` 404（vite 日志建议 exclude）
  2. `api.js` 的 `streamChat` 函数参数 `subject` 与函数体内 `let subject` 同名，ESM 严格模式直接 SyntaxError（`Identifier 'subject' has already been declared`）
- **解决**：`vite.config.js` 加 `optimizeDeps.exclude: ['@dcloudio/uni-stat']`；`streamChat` 变量改名 `resolvedSubject`
- **状态**：已修复（2026-08-14）

### P6. runtime 约 2 分钟后整机假死（连接超时）
- **现象**：8080 端口 LISTENING 但握手超时；后端 `/api/health`（依赖 runtime）连坐超时；日志 `Invalid unicode scalar value`
- **根因**：agentskills-runtime 启动即连 PostgreSQL，`bin\.env` 缺少 `DATABASE_URL` 等配置 → ORM 初始化失败 → 定时器任务循环崩溃 → 事件循环阻塞
- **解决**：在 `03-Backend\node_modules\@opencangjie\skills\dist\runtime\win-x64\release\bin\.env` 追加 `DATABASE_URL=postgresql://postgres:uctoo123@127.0.0.1:5432/uctoo`、`orm_connectionUrl`、`opengauss_orm_connectionUrl`；start-dev.bat 内含幂等补写逻辑。修复后 5 分钟 10/10 健康
- **状态**：已修复（2026-08-14）

### P5. 模型"继续学"讲错课（E2E 发现）
- **现象**：学这本书 → 继续学，模型讲的不是下一课
- **根因**：测试时后端进程未重启，跑的是旧代码（stale process）
- **解决**：杀净 node 进程重启后端后 E2E 通过（第03章第01课 → 第02课）
- **状态**：已修复，注意：**改后端必须重启进程**（P10 后由 bat 自动处理）

### P4. 课程回答漏"第"字、措辞重复
- **现象**：prompt 中出现"第第03章"
- **解决**：promptBuilder 章节措辞修正为 `所属章节：${courseCtx.chapter || '未知'}`
- **状态**：已修复

### P3. courseService 正则 `/g` 丢失捕获组
- **现象**：`m[1]` undefined
- **根因**：`String.match` 加 `g` 标志返回全部匹配串数组，不再返回捕获组
- **解决**：改用 `/m`（仅多行），`/^### /` 同理
- **状态**：已修复（课程 18/18 测试全绿）

### P2. 中文参数在 PowerShell 变 `?`
- **根因**：PowerShell 5.1 默认 GBK 编码下中文参数传递乱码
- **规避**：脚本避免传中文参数；文件内容用 UTF-8；bat 中如需中文用 ANSI/短横线兼容写法
- **状态**：已规避（约束记录）

### P1. uni-app 页面中文路由/静态资源 404
- **现象**：历史问题，页面加载部分资源 404
- **解决**：vite `server.host = '127.0.0.1'`、端口 5173 固定；配合 P7 的 optimizeDeps 修复
- **状态**：已解决

## 常见操作须知（避坑）
1. 后端/前端改代码必须重启对应进程（旧进程不会热加载）
2. `logs\backend.log`、`logs\vite.log`、`logs\runtime.log` 是排障第一入口
3. runtime 必须在 `...\release\bin` 目录下启动（依赖相对路径）
4. 会话内启动的服务会被 opencode 会话回收，验收请用 `start-dev.bat`
5. PostgreSQL 服务名 `postgresql-x64-17`，库：postgres / uctoo（无 nuanshou）
6. 知识点旧数据无 subject 字段时，前端按"全学科显示"兼容（迁移后已无此数据）
7. PDF 提取文本含孤立代理项（surrogates not allowed）时，`book_formats._clean_book_text` 末尾统一 `encode('utf-8', errors='replace')` 清洗