# OCR 工具链

扫描版书籍的文字层提取与识别工具集，供 Backend 的 `ocrService` 调用（`03-Backend/src/services/ocrService.js`）。

## 工作流程

| 输入格式 | 处理链路 | 产物 |
|---|---|---|
| PDF（纯扫描/部分文字层） | 逐页渲染 → RapidOCR 识别 → 写入隐形文字层 | `<书名>_OCR.pdf` + `<书名>_ocr_cache.json`（断点缓存） |
| DjVu（纯扫描，无文本层） | ddjvu 转 PDF → RapidOCR 识别 → 写文字层 | `<书名>_转PDF_OCR.pdf` |
| DjVu（带文本层） | 无需 OCR，直接走蒸馏（`teach.py` 经 `djvutxt` 抽取） | — |

产物镜像 `02-DATA/books/raw/` 目录结构，落位于 `02-DATA/books/ocr/`，不污染源数据。

## 脚本

| 脚本 | 作用 |
|---|---|
| `ocr_book.py` | 扫描版 PDF OCR：渲染 + RapidOCR（onnxruntime）逐页识别，按检测框坐标写隐形文字层（render_mode=3），支持 `--pages` 限定页范围与断点续跑 |
| `djvu_to_pdf.py` | DjVu → PDF 转换（ddjvu），并用 djvutxt 抽取文本层组装隐形文字层；无文本层的 DjVu 产物交由 ocr_book.py 识别 |
| `probe_textlayer.py` | 文字层探测：PDF 用 PyMuPDF 抽样 12 页分类（text/scanned/partial）；DjVu 用 `djvudump` 检查 TXTz 块（秒级，优于 djvutxt 全量抽取），结果缓存于 `02-DATA/books/raw/_ocr_status.json` |

## bin/（DjVuLibre 3.5.29，随仓库迁移）

DjVu 处理依赖的第三方命令行工具，已强制入库，克隆后直接可用：

| 工具 | 用途 |
|---|---|
| `ddjvu.exe` | DjVu → PDF/图像 转换（OCR 链路第一步） |
| `djvutxt.exe` | 提取 DjVu 隐藏文本层 |
| `djvudump.exe` | 列出页/块结构（快速探测文本层是否存在） |
| 其余 `cjb2/c44/bzz/djvm/djvused...` | DjVuLibre 编码/重组工具集（同版本附带） |
| `lib*.dll` | 运行时依赖（djvutxt/ddjvu 需要，随目录一并入库） |

### 更新/重建

如需替换版本：从 https://sourceforge.net/projects/djvu/ 下载 DjVuLibre Windows 安装包（如 `DjVuLibre-3.5.29_DjView-4.12_Setup.exe`），用 7-Zip 解包后提取 `*.exe` 与依赖 DLL 放入 `bin/`。同版本 `djvutxt.exe` 也需同步到 `01-Skills/vendor/book-learning-tutor/vendor/djvulibre/`（蒸馏侧抽取入口）。

> 注意：`bin/` 与 `downloads/`、`venv/`（Python 虚拟环境，体积大）不同——后者不入库，需在目标机器自行 `pip install`（见 `requirements*.txt` / 部署文档）。

## 验证

```bash
# 探测一条 PDF/DjVu 的文字层分类（stdin 逐行输入绝对路径）
venv\Scripts\python.exe probe_textlayer.py

# 单本 DjVu 转 PDF（含文字层组装）
venv\Scripts\python.exe djvu_to_pdf.py "path\to\book.djvu"

# 单本扫描 PDF OCR
venv\Scripts\python.exe ocr_book.py "path\to\book.pdf"
```
