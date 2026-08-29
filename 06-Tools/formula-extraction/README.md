# 公式蒸馏质量提升：调研报告与执行方案

带公式书籍（数学/物理/工程）蒸馏为课程 md 后，公式显示效果差、md 质量低。本报告定位根因、对比业界成熟解法，并记录已定案落地的双后端调度方案。

> **状态：已定案并落地**（2026-08-19）。采用「P2T 本地初蒸 → 质检 → MinerU 云端精修」三阶段调度，详见[第七章](#七执行方案双后端调度管道已定案)。

## 一、根因定位（代码实证）

问题不在渲染层，而在**提取层**。前端 `04-Frontend/src/utils/md.js` 已支持 KaTeX 渲染 `$...$` 行内与 `$$...$$` 块级公式，只要蒸馏产物里是 LaTeX，显示就没问题。真正的退化发生在两处：

| 输入类型 | 当前路径 | 公式退化原因 |
|---|---|---|
| 文本层 PDF（无需 OCR） | `book_formats._pdf_sections` 用 PyMuPDF `get_text("text")` 提取 | 数学字体是自定义 CID 编码，映射回 Unicode 时字符错位。实测 Erdélyi《Asymptotic Expansions》：`φ → cf>`、`→ → -?`、`≤ → ?x`、`x₀ → xQ`，上下标/分数/积分排版信息全丢 |
| 扫描版 PDF（需 OCR） | `ocr.py` 默认 tesseract（`chi_sim+eng`）逐页识别 | tesseract 面向印刷文本，公式输出基本是垃圾；MinerU/Nougat 后端有预留钩子但未安装 |

且 `_clean_book_text` 的 `errors="replace"` 会把字体映射残留的孤立代理项替换为 `�`，进一步加重乱码。

## 二、业界方案对比（2026-08 调研）

| 方案 | 公式→LaTeX | 扫描版 OCR | 表格 | 中文 | 部署成本 | 开源 | 备注 |
|---|---|---|---|---|---|---|---|
| **MinerU**（opendatalab/magic-pdf） | ✅ 内置 UniMERNet | ✅ 自动（PaddleOCR） | ✅ RapidTable | ✅ 中文第一 | 本地需 GPU 8G+ 或 CPU 慢速；**云端免费 flash 模式零部署** | ✅ Apache-2.0 | PDF→MD 开源最强，OmniDocBench 90.67，布局 97.5 mAP；自动检测乱码 PDF；版本迭代活跃（2026 已到 3.x/2.5-1.2B） |
| **Pix2Text**（breezedeus） | ✅ | ✅ | ✅ | ✅ 80+ 语言 | 轻量，CPU 可跑 | ✅ | 开源 Mathpix 替代，模型小 |
| **pdf-craft**（oomol-lab） | ✅（DeepSeek OCR） | ✅ 扫描书专精 | — | ✅ | 中 | ✅ | 公式可输出 MathML/SVG/图片裁剪，可出 EPUB |
| **Marker**（VikParuchuri） | ✅ | ✅（Surya） | ✅ | ✅ | 中 | ✅ | 管道式，速度快，可 LLM 增强 |
| **Nougat**（Meta） | ✅ | 端到端 | ⚠️ | ⚠️ 偏英文 | 重 | ✅ | 学术论文专精，输出 .mmd |
| **UniMERNet 单模型**（opendatalab） | ✅ | —（只认公式图） | — | — | 重（torch） | ✅ | 公式识别 SOTA，CDM 与 Mathpix 持平；MinerU 已内置，一般无需单独接 |
| **Mathpix**（商业） | ✅ 业界最强 | ✅ | ✅ | ✅ | API 收费 | ❌ | 准确率天花板，适合预算充足的商用 |

## 三、推荐方案

**首选：MinerU**。理由：

1. **全覆盖两类输入**：文本层 PDF（渲染页面 + 公式区识别）和扫描版 PDF（内置 OCR）都处理，乱码 PDF 自动走 OCR——正好覆盖本次问题的两条退化路径。
2. **输出即目标格式**：整书输出 Markdown，公式自动为 `$$LaTeX$$` 或 `$...$`，前端 KaTeX 直接渲染，课程化管道可跳过纯文本中间层。
3. **接入成本低**：`01-Skills/vendor/book-learning-tutor/tools/acquire/ocr.py` 已预留 `mineru` 后端钩子（`available_backends()` / `_ocr_with_mineru()`），只需安装并保证 `mineru` 命令在 PATH 即可被自动发现。

### 落地形态二选一

**A. MinerU 本地部署**（离线，数据不出本机）
- 安装：`pip install "magic-pdf[full]"` + 模型权重（PDF-Extract-Kit，约数 GB，ModelScope 国内快）+ `~/magic-pdf.json` 配置。
- 硬件：GPU 8G+ 显存最佳；无 GPU 用 `device-mode: cpu`（慢，数学书几百页需数小时）。
- 优点：完全离线、可批量、免费。

**B. MinerU 云端免费 API**（mineru.net）
- CLI 一行安装（`irm https://cdn-mineru.openxlab.org.cn/open-api-cli/install.ps1 | iex`），`flash-extract` 免 Token 免配置；精准模式免费申请 Token，支持批量、可输出 DOCX/HTML/LaTeX。
- 优点：零 GPU 零部署零环境坑；缺点：文件需上传云端（隐私权衡），批量有速率限制。

### 管道接入方案（后续落地时）

```
带公式 PDF（数学/物理类）
  └→ MinerU（本地 mineru 命令 或 云端 CLI）→ 整书 .md（含 $$LaTeX$$）
       └→ 按 md 标题（# 章 / ## 节）切分 → 参考/<书名>/NNNN_title.md + _sections.json
            └→ course_gen 直读生成 第NN章/第NN课.md（公式原样保留）
                 └→ 前端 KaTeX 渲染 ✅
```

改动点（预估）：
- `tools/acquire/book_formats.py`：新增 `_pdf_sections_math` 分支（检测公式乱码特征 / 学科标记为 Math/Physic 时启用 MinerU 路径，产出 md 而非 txt）。
- `tools/acquire/ocr.py`：`_ocr_with_mineru` 返回 md 文本而非纯文本（现有实现只拼 .md/.txt 文本，可直接用）。
- `course_gen.py`：确认对 md 正文透明（只做章节包裹，不改公式行）。
- 前端无需改动（KaTeX 已就绪）。

## 六、实测验证（2026-08-19）

测试对象：Zorich《Mathematical Analysis》中译本（**纯扫描版**，510 页无文本层，最严苛场景），截 14 页样章，同页对比两条路线。

### 6.1 验证过程要点

- **MinerU 云端（免费 Agent API）**：`POST /api/v1/agent/parse/file` 签名上传 → `GET /api/v1/agent/parse/{task_id}` 轮询 → 下载 `full.md`。免 Token，IP 限频，单文件 ≤10MB / ≤20 页。14 页 **49 秒**（约 3.5 秒/页）。
- **Pix2Text 本地**：`pip install pix2text`（Python 3.9 兼容，模型约 1GB 自动下载，HF 国内需 `HF_ENDPOINT=https://hf-mirror.com`）。整页识别必须用 `p2t.recognize(img, file_type="page")` → `page.to_markdown(out_dir)`；**默认 `text_formula` 模式会退化为逐字符输出（v1.1.6 行为，勿用）**。单页 **99.7 秒**（i5-8250U CPU）。

### 6.2 同页质量对比（P13：映射/逆映射/复合函数节）

| 维度 | Pix2Text 本地（CPU） | MinerU 云端（免费 Agent API） |
|---|---|---|
| 公式→LaTeX | ✅ 正确：`(f(x₁)=f(x₂)) \Rightarrow (x₁=x₂)`、`f^{-1}:Y \to X`、`(g \circ f)(x):=g(f(x))`、`h \circ (g \circ f)=(h \circ g) \circ f` | ✅ 同样正确（另测洛伦兹变换方程组、`f^{-1}(B):=\{x \in X \mid f(x) \in B\}` 等均正确） |
| 中文可读性 | ~90%，有噪声段：「金用监下公鞋客上国团」「￠路饰热购压」「元索」（素→索） | ~95%+，行文流畅，仅个别 `\to` 箭头漏识别（`X₁×X₂ X₁`） |
| 行内公式包裹 | ✅ `$...$` / `$$...$$` 标准 | ✅ 标准，前端 KaTeX 可直接渲染 |
| 速度 | 99.7 秒/页 | ~3.5 秒/页（约 28 倍差距） |
| 部署/费用 | 本地离线、免费、无限量 | 零部署免费，≤10MB/≤20页/单文件/IP限频 |
| 必配参数 | `languages=("en","ch_sim")` | `language="ch"`（中文书；`en` 模式中文全乱） |

### 6.3 关键结论

1. **公式识别两者旗鼓相当**，数学书场景均可用；中文文本 MinerU 略胜。
2. **速度是决定性差距**：300 页书 P2T 本地约 8 小时（可挂机），MinerU 云端约 17 分钟（按章切分提交）。
3. **P2T 本地噪声特征可检测**：实测噪声段（「金用监下公鞋客上国团」「￠路饰热购压」、孤立字符 `t t`、`s $f$`）形成明显的文本模式 → 可被质检器规则捕获（见第七章）。
4. **页面级对齐天然成立**：两条路线都按页输出，替换合并按页码即可，与管道 `_pdf_sections` 的页级切分一致。

## 七、执行方案：双后端调度管道（已定案）

### 7.1 调度策略

> **先用 P2T 本地初步蒸馏（免费无限量跑大头）→ 质检器检查蒸馏文本 → 不合理/错误页再走 MinerU 云端精修（额度花在刀刃上）。**

```
阶段1  p2t_batch.py      P2T 本地全量蒸馏（挂机，PDF → 页级 md）
         ↓
阶段2  quality_scanner   逐页打分 → suspicious.json（可疑页清单 + 原因）
         ↓
阶段3  mineru_refine.py  仅可疑页提交 MinerU 云端（page_ranges=单页）→ 替换合并 → 整书 md
```

### 7.2 质检规则（基于实测噪声特征）

| 规则 | 检测特征 | 权重 |
|---|---|---|
| 替换符 | `�`（U+FFFD）出现 | 高 |
| 罕见噪声符号 | `￠`（U+FFE0）、`⊥` 误识别等非白名单字符（白名单：ASCII/CJK/全角标点/数学常用符） | 高 |
| 公式合法性 | `$` 不成对；公式内 `\ Y`、`^ { }` 空组、`Y]` 错位（单反斜杠模式，排除合法换行 `\\`） | 高 |
| 孤立字符残渣 | 公式间孤立字母（`$g \circ f$ t t $f$`）或行首孤立字母（`s $f$`） | 中 |
| 拼音残渣 | 连续汉字夹 1-2 个异常字母 | 中 |
| 超长无标点汉字串 | ≥10 字连续汉字（如「金用监下公鞋客上国团」） | 低 |
| 图注错位 | 「图 N」独立行夹在正文中间 | 低 |
| 中文占比异常 | 中文字符占比 < 5%（**语言感知**：全书 CJK ≥ latin×10% 即中文/混排书才启用，英文书自动禁用避免全页误报） | 低 |

页评分超阈值 → 标记为可疑页；清单输出 `suspicious.json`（页码 + 命中规则 + 分数）。

### 7.3 管道文件

| 文件 | 作用 |
|---|---|
| `p2t_batch.py` | P2T 批量蒸馏：PDF → `<out>/page_001.md ...`（页级） |
| `quality_scanner.py` | 质检器：页 md 目录 → `suspicious.json` |
| `mineru_refine.py` | MinerU 云端精修：可疑页 → 替换合并 → 整书 md |
| `run_pipeline.py` | 三阶段编排（支持 `--skip-p2t` / `--dry-run`） |

### 7.4 接入现有管道

```
带公式 PDF（Web 设置页「蒸馏层」选学科 → POST /api/books/distill {file,name,subject}）
  └→ distillService → teach.py --subject math/physics
       └→ pipeline.py all-local --subject → 公式书检测（学科信号优先，缺省启发式数学符号密度）
            └→ run_pipeline.py（P2T 初蒸 → 质检 → MinerU 精修）→ work/<书名>/refined/book.md
                 └→ 切章：章/节结构取自 PDF 文本层 Contents（干净无 OCR 乱码），
                      正文按 Contents 印刷页码 + 偏移校准切 book.md 的 <!-- page N --> 页标记
                    → 参考/<书名>/NNNN_title.txt + _sections.json + _meta.json + figures/
                         └→ course_gen 直读生成 书库/<书名>/ 第NN章/第NN课.md（公式原样保留）
                              └→ finalize 拷入 distilled/<学科>/<书名>/（前端唯一事实源）
                                   └→ 前端 KaTeX 渲染 ✅
```

- `ocr.py` 的 `mineru` 后端钩子保留（离线精修/整书处理备用）；本方案以独立管道脚本为主路径。
  （注：P2T 单页约 100 秒，不符合 `ocr_document` 同步调用契约，不接入 ocr.py；公式书统一走本管道。）
- `book_formats.py` 的 `_pdf_sections` 仍处理无公式普通书（速度优先）；公式书（Math/Physic 学科标记）走本管道。
- 运行环境说明（2026-08-20 更新）：`pipeline.py` 由 `teach.py` 的 venv_slim 解释器运行；`run_pipeline.py` 由 `_system_python()` 启动，现已改为**优先返回项目统一 Python `06-Tools/python-3.12/python.exe`**（pix2text 已装入该项目 Python，清华镜像 `pip install pix2text`），不再依赖旧机器系统 Python；未装 pix2text 时管道打印安装指引后中止（`_check_pix2text()`）。
- 产物生命周期：`work/<书名>/`（P2T 页 md、suspicious.json、refined/book.md）→ `参考/<书名>/`（切章）→ `书库/<书名>/`（课程）→ `distilled/`（最终）。成功蒸馏后过程产物清理策略见决策记录 12。

## 八、参考链接

- MinerU: https://github.com/opendatalab/MinerU （PyPI: magic-pdf / mineru）
- MinerU 云端生态: https://mineru.net/ecosystem
- UniMERNet: https://github.com/opendatalab/UniMERNet （公式识别，MinerU 内置）
- Pix2Text: https://github.com/breezedeus/Pix2Text
- pdf-craft: https://github.com/oomol-lab/pdf-craft
- LaTeX-OCR (pix2tex): https://github.com/lukas-blecher/LaTeX-OCR
- Marker: https://github.com/VikParuchuri/marker
- 对比文章（8 款 PDF→MD 工具）: https://polly.wang/pdf-to-markdown-tools-comparison-2025

## 九、决策记录

1. ✅ **落地形态**：双后端调度——P2T 本地初蒸 + MinerU 云端精修（本机 MX150 2GB 不满足 MinerU GPU 要求，云端 Agent API 免 Token 免费，实测可用）。
2. ✅ **触发策略**：公式书（Math/Physic 学科）走新管道；普通书保持现有路径。
3. ✅ **效果验证**：已完成（第七章 6.2 实测对比）。
4. ✅ **端到端验证（2026-08-19，FEM 讲义前 30 页）**：P2T 初蒸 30 页约 35 分钟（0 失败）→ 质检 6 页可疑（页 14 最差 120 分：正文错拼 + 标题乱码）→ MinerU 精修 6 页/3 区间约 80 秒，页 14 正文、标题、矩阵公式全部恢复正确。区间合并会顺带精修相邻良页（间隔 ≤2 聚拢），属可接受取舍。
5. ✅ **质检器语言感知**：`cjk_ratio_low` 原按中文书设计，英文书每页全命中（17 页误报）；改为全书统计 CJK vs latin 自动判定书语种，英文书禁用该规则。
6. ✅ **公式合法性误报修复**：P2T 矩阵/分段公式的合法换行 `\\` 被误判为 `\ + 空白` 错误模式（页 12 误报 9 处）；改为单反斜杠匹配（负向断言排除 `\\`）。
7. ✅ **精修产物残留修复**：`mineru_refine.py` 合并时「有精修文件就用」，旧区间产物残留会污染本次合并（页 15 错位显示变分内容）；合并前清理输出目录历史 `page_*.md`。
8. ✅ **Web 一键蒸馏集成（2026-08-19）**：`pipeline.py` 新增公式书分支（`--subject math/physics` 学科信号，缺省启发式检测数学符号密度）；调 `run_pipeline.py`（系统 Python）→ 切章 → `参考/<书名>/` → course_gen。章/节结构取自 **PDF 文本层 Contents**（干净无 OCR 乱码），正文按 Contents 印刷页码 + 偏移校准切 `refined/book.md` 的 `<!-- page N -->` 页标记。30 页产物实测：3 章 11 节全部正确归属（第 1/2/3 章分开，点线标题剥净）。前端设置页「蒸馏层」选学科 → `POST /api/books/distill {file,name,subject}` → teach.py `--subject` 透传。
9. ✅ **Contents 目录解析两处修复（2026-08-19，FEM 全本 83 页发现）**：
   - **大小写敏感 bug**：`"ontents" in t` 对全大写 `CONTENTS` 页（Contents 续页）不匹配 → 该页整页被跳过，第 3.9/3.10/4/5 章 + Bibliography 全部丢失（FEM 修复前只解析到 3.8.3 共 29 条）。改为 `"ontents" in t.lower()` 后 49 条全解析。
   - **同行编号 bug**：个别条目（`3.10 Rayleigh–Ritz Method . . .`）编号与标题在同一文本行，按行解析时拆不出编号 → 被当标题、num=None 丢弃。增加 `^\d+(?:\.\d+)*\s+` 行首编号拆分。
10. ✅ **切章细节（FEM 实测校准）**：印刷页码 → PDF 页偏移 **offset=3**（多数票短语匹配校准：条目标题前两个实质词在 `printed+offset±1` 页文本层出现）。章条目与首节同页（空 body）时也先更新章上下文，避免后续节挂错章；`_strip_dots` 剥目录点线、`_clean_heading` 对 OCR 乱码标题降级为数字前缀。空 body 节（如 3.4 与 3.5 同页）内容并入相邻节，不丢正文。
11. ✅ **venv_slim python.exe 转发机制（运维须知）**：`venv_slim\Scripts\python.exe`（599KB）是转发 shim——运行时再启动系统 Python39 实际执行，故进程列表里每个 python 调用显示为 venv_slim + 系统 python 两个进程（父子链），**是同一任务不是并行执行**，勿误判为重复蒸馏而重复触发。
12. ✅ **过程产物清理策略（2026-08-19 决策，已实施）**：蒸馏成功（finalize 拷入 distilled 后）删除三处过程产物——`work/<书名>/`（P2T/质检/精修，最占空间）、`参考/<书名>/`（切章）、`书库/<书名>/`（课程，已拷入 distilled）；失败保留便于排查。清理失败仅记日志不阻塞。实施于 `distillService.js` 的 `finalize()` 末尾 `cleanupDistillArtifacts(job, destName)`（`FEX_DIR = ROOT/06-Tools/formula-extraction`，三个目标目录按 `destName` 匹配逐个 `fs.rmSync`）。

13. ✅ **FEM 全本 83 页端到端验证（2026-08-19）**：Web 蒸馏链路全流程跑通（API 触发 = 网页端同路径）。P2T 83 页约 60 分钟（30-40s/页，缓存预热后）；质检 16 个可疑页（阈值 30）+ 区间聚拢共 18 页 MinerU 精修；Contents 切章 **5 章 32 节全部正确**（含此前会丢失的第 4/5 章、3.9/3.10）；course_gen → finalize 落位 `distilled/Math/09-计算数学/数值PDE与有限元/<书名>/`（5 章 31 课，`/api/subjects` math hasCourses=True）。已知质量局限（硬件受限，暂用 P2T）：页 45 等 OCR 噪声段（如 "Weightedrsiul metoi"）质检漏检——英文词内字母错乱不触发现有规则，后续可调优质检器；章标题行（`## Clapter 5`）在节首显示为字面文本（内容无损）。teach.py 管道下 stdout 编码回退 GBK 致 ▶ 字符 flush 崩溃（退出码 0 无影响），已加 `stream.reconfigure(utf-8, errors=replace)` 兜底。