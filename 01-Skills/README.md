# Skills

可执行的 AI 教学能力层：教师身份（怎么教）+ 授课风格（怎么讲）+ 蒸馏产物消费方（教什么）。由 Backend `skillService` 系列加载，prompt 拼装见 `03-Backend/src/services/promptBuilder.js`。

## 目录结构

| 目录 | 内容 |
|---|---|
| `subjects/` | 学科教师技能，按学科组织（`index.json` 登记学科 → `defaultSkill`）；技能目录内 `manifest.yaml` 声明角色/教法，`courseDir` 绑定该学科蒸馏课程。未在 index.json 登记的书库文件夹也能用：自动出现在学科列表并走「通用教学」模式（无技能/课程上下文，按学科名教学，见 03-Backend 路由 `manual-generic`） |
| `core/` | 跨学科通用能力（知识折叠、讲解规范等） |
| `styles/` | 授课风格定义（Markdown 说明），扫描加载为可选讲法，如 `feynman.md`（费曼：第一性原理）、`standard.md`（默认） |
| `vendor/book-learning-tutor/` | 书籍蒸馏引擎（teach.py：抽取 → 切章/课 → 生成 `书库/` 课程），Backend `distillService` 调用其 venv_slim 解释器 |
| `vendor/book-learning-tutor/vendor/djvulibre/` | DjVu 文本层抽取工具（djvutxt + 依赖 DLL，随仓库迁移），`book_formats._djvu_sections` 的降级路径 |
| `_TEMPLATE/` | 新教师/新技能模板 |

## 关键约定

- 学科列表以书籍目录为准（`02-DATA/books/raw` + `distilled` 顶层目录，有书即显示，无书自动隐藏；`ocr` 不计），技能按学科 id 匹配挂载；学科教师 = 学科默认技能（预置：math → calculus-tutor 微积分教师，economics → economics-tutor 经济学教师，literature → literature-tutor 文学教师，philosophy → philosophy-tutor 哲学教师）；授课风格 = 独立讲法层，与学科/课程正交。
- 课程 = 蒸馏产物（`02-DATA/books/distilled/<学科>/<课程>/`），课程可用性即蒸馏状态；进度独立存 `02-DATA/courses/`（蒸馏目录会被重蒸馏清空，不落进度）。
- 全才模式（全科提问）跨学科路由：蒸馏课程信号 + 学科基础词，见 `03-Backend/src/services/signalService.js` / `routerService.js`。
