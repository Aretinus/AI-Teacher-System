---
name: evaluator
description: Core evaluation skill. Makes structured judgments on student answers to understanding checks: status (correct/partial/wrong/unknown), knowledge point, mastery delta, error type, confidence, and next teaching strategy. Invoked by tutor-engine after every student answer. Use whenever a student response needs assessment in the AI Teacher System.
---

# Evaluator

Evaluator 对学生回答进行结构化判断，输出可写入用户状态的评估结果。

## 输入协议

```json
{
  "knowledgePoint": "derivative-geometric-meaning",
  "studentAnswer": "导数就是切线斜率",
  "expectedConcepts": ["limit", "rate-of-change", "tangent-slope"]
}
```

- `knowledgePoint`：当前考察的知识点 id。
- `studentAnswer`：学生回答原文。
- `expectedConcepts`：该知识点应当包含的核心概念（由学科 Tutor 的 knowledge 目录定义，可缺省）。

## 输出协议

```json
{
  "status": "partial",
  "knowledgePoint": "derivative-geometric-meaning",
  "masteryDelta": 0.05,
  "errorType": "concept-confusion",
  "confidence": 0.82,
  "nextStrategy": "guided-question"
}
```

### 字段规范

| 字段 | 说明 |
|---|---|
| `status` | `correct` 完全正确 / `partial` 部分正确 / `wrong` 错误 / `unknown` 无法判断 |
| `knowledgePoint` | 评估的知识点 id |
| `masteryDelta` | 掌握度增量（-0.2 ~ +0.2），`correct` +0.1~0.2，`partial` +0.0~0.1，`wrong` -0.05~-0.2 |
| `errorType` | `null`（无错）/ `concept-confusion` 概念混淆 / `procedural-error` 运算或步骤错误 / `misapplication` 公式误用 / `incomplete` 回答不完整 |
| `confidence` | 判断置信度 0~1 |
| `nextStrategy` | `explain` / `hint` / `guided-question` / `practice` / `correct-answer` |

### 状态判定标准

- `correct`：覆盖全部 expectedConcepts，表述准确。
- `partial`：触及部分概念，或概念正确但表述不严谨。
- `wrong`：核心概念错误，或答案与问题无关。
- `unknown`：回答过短、答非所问或无法解析，此时 `confidence` 应低（< 0.6）。

### nextStrategy 选择

| status | 默认 nextStrategy |
|---|---|
| `correct` | `practice`（巩固）或 `explain`（进入下一知识点） |
| `partial` | `guided-question`（追问缺失部分） |
| `wrong`（有概念混淆） | `hint`（引导重建概念） |
| `wrong`（明显不会） | `correct-answer`（讲解后给同类练习） |
| `unknown` | `explain`（重新表述问题） |

## 判定规则

1. 只看学生回答本身，不臆测其未表达的内容。
2. `masteryDelta` 与 `status` 必须一致：`wrong` 不允许正增量。
3. 对同一知识点的连续错误（用户状态 `recentErrors` 中已有同知识点错误）应降低 `confidence` 并倾向 `hint`。
4. 输出必须是可合并进 `state.json` 的结构化结果；`errorType` 非空时，同时追加到 `recentErrors`。

## 参考

- 知识点定义：`01-Skills/subjects/<subject>/<tutor>/knowledge/`
- 用户状态写入：`02-DATA/users/<userId>/state.json`