# Vendor Skills

存放从 GitHub 下载的第三方 Agent Skills，与本项目自研的 `core/` 和 `subjects/` 隔离。

| 目录 | 上游仓库 | 作用 |
|---|---|---|
| `book-learning-tutor/` | https://github.com/fangyuan-3149/book-learning-tutor | 把本地书籍（PDF/EPUB 等）变成个人 AI 教师 |
| `book-to-skill/` | https://github.com/virgiliojr94/book-to-skill | 把技术书籍蒸馏为结构化 Skill（SKILL.md + 章节文件） |
| `feynman-skill/` | https://github.com/alchaincyf/feynman-skill | 理查德·费曼的思维框架与表达风格（教学风格来源） |

用途：本项目的学科 Tutor（如 `feynman-mechanics`）可基于 `book-to-skill` 蒸馏
`02-DATA/books/raw/` 中的教材，参考 `feynman-skill` 确定教师风格，并用
`book-learning-tutor` 提供逐书学习能力。

注意：这些是上游快照（`git clone --depth 1` 后移除了内嵌 `.git`），不随本项目跟踪上游更新。
