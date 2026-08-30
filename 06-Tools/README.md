# 工具

数据导入、教材处理（OCR/蒸馏）、索引生成、质量检查和本地开发辅助工具。

## 目录结构

| 目录/文件 | 内容 | 入库 |
|---|---|---|
| `ocr-toolkit/` | OCR 工具链：`ocr_book.py`（RapidOCR 识别）、`djvu_to_pdf.py`（DjVu 转 PDF）、`probe_textlayer.py`（文字层探测）、`bin/`（DjVuLibre 3.5.29 命令行工具 + 依赖 DLL，随仓库迁移） | 脚本与 bin 入库；`venv/`、`downloads/` 不入库 |
| `tts/` | 本地 TTS（Qwen3-TTS-0.6B）：`tts-server.py`（FastAPI，端口 8765） | 脚本入库；`venv/`、`models/` 不入库（详见 `tts/README.md`） |
| `python-3.12/` | 项目统一 Python 3.12.10（per-user 安装，未写注册表/PATH）；所有 venv（tts/ocr-toolkit/venv_slim）均由它派生 | 否 |
| `sql/` | 运行时数据库脚本（uctooDB.sql 建表、uctoov4InitData.sql 初始数据、init_tool_permissions.sql） | 是 |
| `runtime-dlls/` | runtime 手动补丁 DLL 备份（GCC 运行时 ×3 + libssp + OpenSSL ×2），start-dev.bat 自动恢复 | 是 |
| `uctoov4InitData_nofk.sql` | 初始化数据脚本（已禁外键检查版） | 是 |
| `jwt_token.txt` | 运行时密钥（本地敏感文件） | 否 |

> 运行时完整源码（atomgit UCToo/agentskills-runtime）已从本地清理（169M 纯参考材料，SQL 已保留在 `sql/`），需要时重新 clone。

## OCR 链路速览

- 纯扫描 PDF → `ocr_book.py`（逐页 RapidOCR）→ `<书名>_OCR.pdf`
- 无文本层 DjVu → `djvu_to_pdf.py`（ddjvu 转换）→ `ocr_book.py` → `<书名>_转PDF_OCR.pdf`
- 带文本层 DjVu → 直接蒸馏（经 `01-Skills/vendor/book-learning-tutor/vendor/djvulibre/djvutxt.exe` 抽取）

详见 `ocr-toolkit/README.md`。
