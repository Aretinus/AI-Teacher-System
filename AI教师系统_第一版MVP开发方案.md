# 本地 AI 教师系统：MVP 开发方案

> 版本：V1.1<br>
> 日期：2026-08-14<br>
> 目标：建立可扩展的 AI 教师系统基础，完成“诊断、教学、评估、学习状态更新”的闭环。

---

## 1. 产品定位

系统提供具有明确教学风格和学科能力的 AI 教师。第一阶段以数学微积分验证教学闭环，并建立理论物理（费曼力学）接入路径。

系统交付的核心价值：

```text
学生提问
  ↓
识别学科与知识点
  ↓
诊断理解状态
  ↓
选择教学策略
  ↓
解释、提示、追问
  ↓
评估学生回答
  ↓
更新学习状态
```

教学风格采用费曼式原则：从直觉和具体情境出发，鼓励学生用自己的语言解释概念，并通过追问确认理解。

---

## 2. MVP 目标

1. AgentSkills Runtime 稳定运行并执行自定义 Skill。
2. Tutor Engine 完成教学流程编排。
3. Calculus Tutor 支持函数、导数和基础积分教学。
4. Evaluator 输出结构化学习评估。
5. Router 根据学科选择或自动识别调用相应 Tutor。
6. 学习状态、历史摘要和用户档案保存在本地数据目录。
7. UniApp H5 提供对话、Markdown、LaTeX 与流式输出体验。
8. Physics Tutor 具备费曼力学内容的技能目录与数据关联能力。

---

## 3. 系统架构

```text
UniApp H5
  ↓ HTTP / SSE
Backend Adapter
  ↓
AgentSkills Runtime
  ↓
Router → Tutor Engine → Subject Tutor → Evaluator
  ↓                                      ↓
知识数据 ─────────────────────────────→ User State / Session History
```

### 模块职责

| 模块 | 职责 |
|---|---|
| Frontend | 学科选择、对话、流式渲染、Markdown 与 LaTeX 显示 |
| Backend | 会话管理、输入校验、Skill 调用、流式协议适配、数据读写 |
| Router | 根据用户选择或问题内容确定学科与 Tutor |
| Tutor Engine | 编排诊断、教学策略、追问和状态更新 |
| Subject Tutor | 提供学科知识、例题、常见错误与教学表达 |
| Evaluator | 评估学生回答并输出掌握度、错误类型和下一步策略 |
| DATA | 管理教材、教学材料、用户状态、会话明细与共享知识 |

---

## 4. 项目目录

```text
E:/AI-Teacher-System/
│
├── 01-Skills/
│   ├── core/
│   │   ├── tutor-engine/
│   │   ├── evaluator/
│   │   └── router/
│   ├── subjects/
│   │   ├── index.json
│   │   ├── math/
│   │   │   ├── calculus-tutor/
│   │   │   │   ├── manifest.yaml
│   │   │   │   ├── SKILL.md
│   │   │   │   └── knowledge/
│   │   │   └── _TEMPLATE/
│   │   ├── physics/
│   │   │   └── feynman-mechanics/
│   │   └── _TEMPLATE/
│   └── _TEMPLATE/
│
├── 02-DATA/
│   ├── books/
│   │   ├── index.json
│   │   ├── raw/
│   │   └── distilled/
│   ├── materials/
│   │   ├── exercises/
│   │   ├── lecture-notes/
│   │   └── reference/
│   ├── users/
│   │   ├── default/
│   │   │   ├── state.json
│   │   │   ├── history.json
│   │   │   └── profile.json
│   │   └── _TEMPLATE/
│   ├── sessions/
│   │   └── 2026/08/
│   └── shared/
│       └── knowledge-graph/
│
├── 03-Backend/
├── 04-Frontend/
├── 05-Docs/
└── 06-Tools/
```

### 目录设计原则

- `01-Skills` 保存可执行的教学能力；`02-DATA` 保存可复用、可追踪的数据资产。
- `core` 提供跨学科通用能力；`subjects` 按学科隔离知识和教学策略。
- 每个学科 Tutor 通过 `manifest.yaml` 声明其教材、练习、知识目录和适用范围。
- `index.json` 作为程序可读取的注册表，支持学科发现、路由和配置校验。
- 用户摘要保存在 `users`，完整会话按年月保存在 `sessions`，兼顾快速读取和审计追踪。
- `_TEMPLATE` 为新建 Skill、学科和用户提供统一起点。

---

## 5. 索引与清单规范

### 学科索引：`01-Skills/subjects/index.json`

```json
{
  "version": "1.0",
  "subjects": [
    {
      "id": "math",
      "name": "数学",
      "skills": ["calculus-tutor"],
      "defaultSkill": "calculus-tutor"
    },
    {
      "id": "physics",
      "name": "理论物理",
      "skills": ["feynman-mechanics"],
      "defaultSkill": "feynman-mechanics"
    }
  ]
}
```

### 教材索引：`02-DATA/books/index.json`

```json
{
  "version": "1.0",
  "books": [
    {
      "id": "feynman-lectures-vol-1",
      "title": "费曼物理学讲义（第一卷）",
      "subject": "physics",
      "rawPath": "raw/feynman-lectures-vol-1",
      "distilledPath": "distilled/feynman-lectures-vol-1"
    }
  ]
}
```

### Tutor 清单：`manifest.yaml`

```yaml
id: calculus-tutor
name: 微积分教师
subject: math
entry: SKILL.md
knowledgePath: knowledge
data:
  books: []
  exercises: ../../../../02-DATA/materials/exercises/math
  references: ../../../../02-DATA/materials/reference/math
capabilities:
  - diagnose
  - explain
  - hint
  - question
  - evaluate
topics:
  - function
  - derivative
  - integral
```

---

## 6. 核心教学能力

### Tutor Engine

`tutor-engine` 接收统一教学请求，并输出下一轮教学响应。

```json
{
  "userId": "default",
  "sessionId": "20260814-001",
  "subject": "math",
  "message": "为什么导数表示变化率？"
}
```

处理流程：

```text
识别意图与知识点
  ↓
读取用户状态与近期对话
  ↓
选择解释、提示、追问或练习策略
  ↓
调用学科 Tutor
  ↓
调用 Evaluator
  ↓
生成教学回复与状态更新
```

### Evaluator

Evaluator 对学生回答进行结构化判断：

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

状态值包括：`correct`、`partial`、`wrong`、`unknown`。

### Router

Router 支持两种工作方式：

```text
手动模式：用户选择学科 → 对应 Tutor
自动模式：识别问题学科 → 对应 Tutor
```

---

## 7. 数据模型

### 用户状态：`state.json`

```json
{
  "userId": "default",
  "currentSubject": "math",
  "currentGoal": "理解导数的几何意义",
  "knowledgePoints": {
    "derivative-geometric-meaning": {
      "mastery": 0.65,
      "lastSeen": "2026-08-14",
      "attempts": 3
    }
  },
  "recentErrors": [
    {
      "type": "concept-confusion",
      "knowledgePoint": "derivative-geometric-meaning"
    }
  ]
}
```

### 用户档案：`profile.json`

保存显示名称、偏好教学语言、当前学习计划和学习偏好。

### 历史摘要：`history.json`

保存会话标识、日期、学科、核心知识点、学习结论和下一步目标。

### 会话明细：`sessions/YYYY/MM/`

保存消息、教学决策、评估结果和状态变更，用于回顾和质量分析。

---

## 8. 前端与交互

技术栈：UniApp + Vue 3，以 H5 为首个交付端。

核心页面：

| 页面 | 内容 |
|---|---|
| 首页 | 学科选择、继续学习、当前目标、最近知识点 |
| 对话页 | 消息流、输入区、流式状态、Markdown 与 LaTeX 渲染 |
| 学习概览 | 掌握度、近期错误、会话摘要、下一步目标 |

前端通过统一接口调用 Backend：

```javascript
sendMessage({
  subject,
  message,
  conversationId
})
```

Backend 负责适配 Runtime、模型供应商和流式协议，使前端保持稳定的调用方式。

---

## 9. 技术环境

```text
操作系统：Windows 10/11
Node.js：20 LTS 或 22 LTS
前端：UniApp + Vue 3
Runtime：@opencangjie/skills
模型：DeepSeek API
数据：本地 JSON 文件
通信：HTTP + SSE
```

本地运行范围：前端、Backend、Skill、教材索引和用户学习数据；模型推理由云端 API 提供。

---

## 10. 实施阶段

### Phase 0：运行时验证

安装并启动 AgentSkills Runtime，完成健康检查、Skill 列表查询和测试 Skill 执行。

### Phase 1：项目骨架与索引

创建六层目录、学科索引、教材索引、模板目录和默认用户数据。

### Phase 2：核心 Skill

实现 `tutor-engine`、`evaluator` 与 `router`，定义统一输入输出协议。

### Phase 3：数学 Tutor

实现 `calculus-tutor`，覆盖函数、导数、基础积分、例题和常见错误。

### Phase 4：Backend

实现 Runtime 客户端、会话服务、状态服务、路由服务与 SSE 输出。

### Phase 5：UniApp H5

实现首页、对话页、学习概览、Markdown、LaTeX 与流式展示。

### Phase 6：物理 Tutor

实现 `feynman-mechanics` 的清单、知识目录和费曼式力学教学内容。

---

## 11. 验收标准

以下场景可稳定完成：

```text
学生：为什么导数表示变化率？
  ↓
系统：识别数学 / 导数，读取学习状态
  ↓
教师：以具体运动情境解释，并提出一个可回答的追问
  ↓
学生：提交解释
  ↓
系统：评估理解程度，记录错误或掌握度，给出下一步教学内容
```

验收项目：

- Runtime、核心 Skill 和学科 Tutor 可以被 Backend 调用。
- 自动和手动模式可以定位到正确的学科 Tutor。
- 教学回复包含诊断、解释或提示，以及理解检查。
- Evaluator 可以生成结构化结果并写入用户状态。
- 会话摘要与完整会话明细能够保存和读取。
- H5 可流式显示 Markdown、行内公式、块公式、矩阵、分式、积分和代码块。
- 新增学科可通过学科索引、Tutor 清单和数据目录完成注册。

---

## 12. 演进路径

```text
V1：数学微积分教学闭环
  ↓
V1.1：费曼力学 Tutor
  ↓
V1.2：多学科 Router 与知识图谱
  ↓
V2：学习路径规划与长期学习画像
  ↓
V3：多学科 AI 教师系统
```

## 13. 一句话版本

> 以统一的 Tutor Engine、可注册的学科 Skill 和可追踪的学习数据，构建能够持续教学与持续学习的 AI 教师系统。
