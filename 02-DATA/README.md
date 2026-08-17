# 数据资产

系统运行时数据。大部分为本地敏感/大文件数据，不入库（见根 `.gitignore`）。

## 目录结构

| 目录/文件 | 内容 | 入库 |
|---|---|---|
| `books/raw/<学科>/` | 原始书籍（pdf/epub/djvu/mobi 等，按学科书目录结构） | 否（体积大） |
| `books/ocr/` | OCR 产物（镜像 raw 结构：`<书名>_OCR.pdf` / DjVu 转 `_转PDF_OCR.pdf` + 识别缓存） | 否 |
| `books/distilled/` | 蒸馏课程产物（`<学科>/<课程>/`，含 `progress.json`、`00_目录导读.md`、章/课 Markdown） | 蒸馏产物随仓库（小书场景） |
| `books/index.json` | 书库索引（已蒸馏书籍登记表） | 是 |
| `raw/_ocr_status.json` | 文字层探测缓存（text/scanned/partial），OCR/蒸馏扫描复用 | 否（本地生成） |
| `courses/` | 课程学习进度（与蒸馏目录解耦，重蒸馏不丢进度） | 否 |
| `users/` | 用户学习记录（状态、知识点掌握度） | 否 |
| `sessions/` | 会话明细 | 否 |
| `materials/` / `shared/` | 教学材料 / 共享知识资产 | 是 |
| `settings.json` | 本地配置（API Key，可能含敏感信息） | 否 |

## 关键链路

- 书籍加工：`raw`（源）→ OCR（`06-Tools/ocr-toolkit/`，产物进 `ocr/`）→ 蒸馏（`vendor/book-learning-tutor/teach.py`，产物进 `distilled/`）→ 课程消费。
- 蒸馏判据：`distilled/` 目录内有 `progress.json` 或 `^\d{2}_` 编号条目即视为已蒸馏。
- 迁移注意：`books/index.json` 记录蒸馏登记，`raw/`、`ocr/`、`users/`、`sessions/` 不随 git 走，需随数据目录整体备份。
