---
name: router
description: Core routing skill. Routes a teaching request to the correct subject tutor, in manual mode (user-selected subject) or automatic mode (subject inferred from the message). Reads 01-Skills/subjects/index.json as the registry. Use as the entry point for every inbound message in the AI Teacher System before invoking tutor-engine.
---

# Router

Router 是消息入口：决定一条消息应该交给哪个学科 Tutor，然后转交 Tutor Engine 编排。

## 两种工作方式

```text
手动模式：用户选择学科 → 直接定位对应 Tutor
自动模式：从消息内容识别学科 → 定位对应 Tutor
```

### 手动模式

- 请求携带明确 `subject`（如 `math`），直接使用该学科，不做推断。
- `subject` 不在 `01-Skills/subjects/index.json` 注册时，返回 `subject-not-supported` 错误并列出可用学科。

### 自动模式

- 请求未携带 `subject` 时，从消息关键词识别学科：

| 学科 | 识别线索（示例，不限于） |
|---|---|
| `math` | 导数、积分、极限、函数、微分、equation、derivative、integral、calculus |
| `physics` | 力学、力、运动、牛顿、场、费曼、feynman、force、motion、mechanics |

- 识别置信度低或跨学科（同时命中多个）时，返回候选学科让用户选择，不擅自路由。

## 输入协议

```json
{
  "userId": "default",
  "sessionId": "20260814-001",
  "subject": null,
  "message": "为什么导数表示变化率？"
}
```

`subject` 为 `null` 时启用自动模式。

## 输出协议

```json
{
  "route": {
    "subject": "math",
    "tutor": "calculus-tutor",
    "mode": "auto",
    "confidence": 0.9
  }
}
```

- `mode`：`manual` 或 `auto`。
- 无法路由时：`route` 为 `null`，附 `candidates` 候选学科列表与 `reason`。

```json
{
  "route": null,
  "candidates": ["math", "physics"],
  "reason": "ambiguous"
}
```

## 判定规则

1. 路由结果必须与 `subjects/index.json` 的注册一致：`tutor` 必须在该学科的 `skills` 列表中。
2. 手动模式优先于自动模式，不因消息内容覆盖用户选择。
3. 自动模式置信度 < 0.6 时视为无法确定，返回候选让用户选择。
4. 会话内保持路由稳定：同一 `sessionId` 后续消息沿用首条消息的学科，除非用户明确切换。

## 参考

- 学科注册表：`01-Skills/subjects/index.json`
- 学科 Tutor：`01-Skills/subjects/<subject>/<tutor>/SKILL.md`