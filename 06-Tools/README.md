# 工具

数据导入、教材处理（OCR/蒸馏）、索引生成、质量检查和本地开发辅助工具。

## 目录结构

| 目录/文件 | 内容 | 入库 |
|---|---|---|
| `ocr-toolkit/` | OCR 工具链：`ocr_book.py`（RapidOCR 识别）、`djvu_to_pdf.py`（DjVu 转 PDF）、`probe_textlayer.py`（文字层探测）、`bin/`（DjVuLibre 3.5.29 命令行工具 + 依赖 DLL，随仓库迁移） | 脚本与 bin 入库；`venv/`、`downloads/` 不入库 |
| `agentskills-runtime-src/` | 模型运行时源码（云端 API 网关），不入库（本地部署或 clone） | 否 |
| `uctoov4InitData_nofk.sql` | 初始化数据脚本 | 是 |
| `jwt_token.txt` | 运行时密钥（本地敏感文件） | 否 |

## OCR 链路速览

- 纯扫描 PDF → `ocr_book.py`（逐页 RapidOCR）→ `<书名>_OCR.pdf`
- 无文本层 DjVu → `djvu_to_pdf.py`（ddjvu 转换）→ `ocr_book.py` → `<书名>_转PDF_OCR.pdf`
- 带文本层 DjVu → 直接蒸馏（经 `01-Skills/vendor/book-learning-tutor/vendor/djvulibre/djvutxt.exe` 抽取）

详见 `ocr-toolkit/README.md`。
