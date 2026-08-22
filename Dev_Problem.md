# AI Teacher System — 开发问题记录

> 本文件记录开发过程中遇到的技术问题、根因与解决方案，避免重复踩坑。

## 问题列表（按时间倒序）

### P30. 未注册学科在网页端"看不见/用不了"（课程不显示、OCR 漏文件、主页学科少）
- **现象**：书库 raw/ 放入新学科文件夹（Economics/Literature/Philosophy/Taoism/TraditionalChineseMedicine）后——主页学科只有数学；蒸馏了文学的书但主页无该课程；OCR 层数量加起来比蒸馏层少（epub/txt 等被直接跳过）；设置页学科中英文混杂
- **根因**：多处功能只认 `01-Skills/subjects/index.json` 已注册学科（bookDirOf 查不到即返回空/报错），而书库新增文件夹不会自动注册技能；OCR 扫描只收 pdf/djvu；主页又按"有课程"过滤
- **解决**：统一兜底——`bookDirOf`（distill/ocr/course 三处）未注册学科直接把学科名当书库目录名；新增 `GET /api/books/subjects` 实时扫描书库三层顶层目录并合并已注册学科（含中文映射表）；`/api/subjects` 合并书库学科，未注册学科走通用教学模式（routerService `manual-generic`，无技能/课程上下文也能对话）；OCR 扫描扩到全部书籍格式，非 OCR 格式归入「无需OCR」
- **状态**：已修复（2026-08-21）

### P29. OCR 文字层探查同步阻塞后端，扫新学科时全站接口挂起（页面数据"全部消失"）
- **现象**：对新学科点「扫描文件」后，整个网页端的书籍/学习记录等内容全部空白，疑似"其他学科干扰了已探查学科"；探查结束后自行恢复
- **根因**：ocrService 用 `spawnSync` 同步运行文字层探查脚本（120s 超时），Node 事件循环被冻结——大书多时（如中医 951 个文件）后端最长停摆 2 分钟，期间所有请求挂起，前端表现为数据全空；状态文件按文件绝对路径存键，学科间本就互不影响
- **解决**：探查改 `execFile` 异步 Promise（事件循环保持响应，实测探查期间 /api/subjects 响应 169ms）；且仅对 pdf/djvu 探查，epub 等格式直接标记 no-ocr 跳过
- **状态**：已修复（2026-08-21）

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

### P17. 一键更新误报"courseDir 不存在"为失效
- **现象**：math/calculus-tutor 无课程书籍（仅问答模式），refresh 校验 courseDir 报 invalid
- **解决**：courseDir 缺失降级为 info 级提示（noCourse："未配置课程书籍（仅问答模式）"），仅缺 SKILL.md 才算失效
- **状态**：已修复（2026-08-14）

### P13. 删除会话报 failed to fetch
- **现象**：点击删除会话，前端报 Failed to fetch
- **根因**：浏览器对 DELETE 请求先发 OPTIONS 预检，后端 CORS `Access-Control-Allow-Methods` 只含 `GET, POST, PUT, OPTIONS`，不含 DELETE → 预检被拒
- **解决**：Allow-Methods 追加 `DELETE`
- **状态**：已修复（2026-08-14）

### P14. 概览页会话记录显示错位（数学问题出现在物理会话）
- **现象**：切到物理后，会话记录前三条显示数学问题、内容是物理相关、带 json 关键词
- **排查**：history.json 数据经核查是干净的（physics 26 条均为物理内容）——错位来自历史遗留：**早期 restoreLatest 会恢复任意学科会话并覆盖学科**，用户曾在数学 tab 下打开过物理会话
- **解决**：会话详情开始记录 subject；进入会话时（loadSession）以详情 subject 校准 selectedSubject；restoreLatest 按当前学科过滤
- **状态**：已修复（2026-08-14）

### P15. 概览页点击会话记录只弹详情小窗
- **现象**：点击会话记录弹出 showModal 详情，无法进入对话
- **解决**：改为直接 `uni.navigateTo` 进入对话页（带 subject + sessionId）
- **状态**：已修复（2026-08-14）

### P16. 同会话连续对话在历史中产生重复记录
- **现象**：一次删除 48→46（同一 sessionId 出现两条记录，persistAfterChat 无条件 unshift）
- **解决**：appendHistory 先过滤掉同 sessionId 旧记录再插入（新进度记录移到最前）
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
### P18. 蒸馏引擎 GBK 管道输出崩溃
- **现象**：spawn teach.py 时 stdout 为管道，Python 默认 GBK 编码，遇到 ▶ 等字符 UnicodeEncodeError 崩溃
- **方案**：spawn env 加 PYTHONUTF8=1 + PYTHONIOENCODING=utf-8`r
- **状态**：已解决

### P19. PDF 提取文本含孤立代理项（surrogates not allowed）
- **现象**：PyMuPDF 提取的文本含孤立代理项，UTF-8 写入 _sections.json 报错
- **方案**：book_formats._clean_book_text 末尾统一 encode('utf-8', errors='replace') 清洗
- **状态**：已解决