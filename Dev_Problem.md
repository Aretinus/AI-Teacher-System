# AI Teacher System — 开发问题记录

> 本文件记录开发过程中遇到的技术问题、根因与解决方案，避免重复踩坑。

## 问题列表（按时间倒序）

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