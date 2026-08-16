---
name: tutor-engine
description: Core teaching orchestration skill. Receives a unified teaching request (userId, sessionId, subject, message), orchestrates the teaching loop: intent/knowledge-point recognition, user state retrieval, teaching strategy selection, subject tutor invocation, evaluator invocation, and produces the next teaching response plus state update. Use for every teaching interaction in the AI Teacher System.
---

# Tutor Engine

Tutor Engine 是 AI 教师系统的核心编排 Skill：接收统一教学请求，输出下一轮教学响应与状态更新。

## 输入协议

```json
{
  "userId": "default",
  "sessionId": "20260814-001",
  "subject": "math",
  "message": "为什么导数表示变化率？"
}
```

- `userId`：学习者标识，对应 `02-DATA/users/<userId>/`。
- `sessionId`：会话标识，格式 `YYYYMMDD-NNN`。
- `subject`：学科 id（`math`、`physics`），与 `01-Skills/subjects/index.json` 注册一致。
- `message`：学生本轮输入（问题或回答）。

## 处理流程（严格按序执行）

```text
1. 识别意图与知识点
2. 读取用户状态与近期对话
3. 选择教学策略（解释 / 提示 / 追问 / 练习）
4. 调用学科 Tutor（subjects/<subject>/<tutor>/SKILL.md）
5. 调用 Evaluator（core/evaluator）
6. 生成教学回复与状态更新
```

### 1. 识别意图与知识点

- 从 `message` 判断学生意图：`question`（提问）、`answer`（回答追问）、`request-help`（求助）、`meta`（闲聊/元对话）。
- 映射到学科知识目录中的知识点 id（如 `derivative-geometric-meaning`）；无法映射时标记 `unknown` 并向学生澄清。

### 2. 读取用户状态

- 读取 `02-DATA/users/<userId>/state.json`（当前学科、当前目标、知识点掌握度、近期错误）。
- 读取 `02-DATA/users/<userId>/history.json` 的最近 1-3 条会话摘要，保持教学连续性。
- 完整会话明细在 `02-DATA/sessions/YYYY/MM/`，仅需要审计追溯时读取。

### 3. 选择教学策略

| 学生状态 | 默认策略 |
|---|---|
| 首次接触知识点 | `explain`（具体情境优先） |
| 曾答错该知识点 | `hint`（引导性提示，不直接给答案） |
| 理解但未巩固 | `question`（一个可回答的追问） |
| 掌握度 ≥ 0.8 | `practice`（小练习巩固） |

### 4. 调用学科 Tutor

- 按 `subject` 定位学科 Tutor（`subjects/math/calculus-tutor` 等），遵循其 SKILL.md 的学科知识、讲解风格与例题。
- 学科 Tutor 未实现时，用系统通用教学能力兜底，并注明学科内容待补充。

### 5. 调用 Evaluator

- 仅在 `message` 是对追问/练习的回答时调用 Evaluator 做结构化判断；对提问型消息跳过，直接给讲解。
- 按 Evaluator 协议输出 `status / knowledgePoint / masteryDelta / errorType / confidence / nextStrategy`。

### 6. 生成回复与状态更新

输出格式：

```json
{
  "type": "teaching-response",
  "sessionId": "20260814-001",
  "intent": "question",
  "knowledgePoint": "derivative-geometric-meaning",
  "strategy": "explain",
  "response": "（Markdown + LaTeX 教学回复，含理解检查）",
  "understandingCheck": "（给学生的追问或练习）",
  "evaluation": {
    "status": "correct",
    "knowledgePoint": "derivative-geometric-meaning",
    "masteryDelta": 0.05,
    "errorType": null,
    "confidence": 0.85,
    "nextStrategy": "question"
  },
  "stateUpdate": {
    "knowledgePoints": { "derivative-geometric-meaning": { "mastery": 0.7 } },
    "recentErrors": []
  }
}
```

- `response` 使用 Markdown，行内公式用 `$...$`，块公式用 `$$...$$`（前端按此渲染）。
- 回复结尾必须包含一个 `understandingCheck`（追问或练习），除非学生明确结束会话。
- `stateUpdate` 需与现有 `state.json` 合并后写回，不要整体覆盖。

## 教学原则

1. **具体情境优先**：先用运动、几何等具体情境建立直觉，再给形式化定义。
2. **一次只讲一个点**：回复聚焦单一知识点，不堆砌。
3. **引导而非灌输**：学生答错时给提示链（hint → 再提示 → 答案），不直接给答案。
4. **理解检查必达**：每轮结束给出一个可回答的追问，驱动教学闭环。
5. **诚实边界**：不确定的知识点如实说明，不编造。

## 参考

- 学科注册：`01-Skills/subjects/index.json`
- 用户数据：`02-DATA/users/default/`
- 会话明细：`02-DATA/sessions/YYYY/MM/`