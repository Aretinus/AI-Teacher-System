# 本地 AI 教师系统：第一版 MVP 开发方案

> 版本：V1.0  
> 日期：2026-08-13  
> 目标：以最小开发成本验证“AI 教师内核 + AgentSkills Runtime + UniApp”这条技术路线，而不是一开始做完整的多学科 App。

---

## 1. 方案定位

第一版的核心目标不是“做一个完整的 AI 学习 App”，而是验证下面这条最小闭环：

```text
用户问题
   ↓
UniApp H5
   ↓
本地 API / Adapter
   ↓
AgentSkills Runtime
   ↓
Tutor Skill
   ↓
LLM
   ↓
教学判断
   ↓
回答 / 追问 / 纠错
   ↓
简单学习状态更新
```

第一版必须优先证明：

1. Runtime 可以稳定运行。
2. 自定义 Tutor Skill 可以稳定执行。
3. UniApp 能够调用 Runtime。
4. AI 回复能够流式或准实时显示。
5. Markdown + LaTeX 能正常渲染。
6. AI 不只是“回答问题”，而是能够进行基本的诊断、解释、追问和检查理解。
7. 学习状态能够以最小结构保存。

---

# 2. 核心设计原则

## 2.1 先做 AI 老师内核，再做 App

第一版不追求：

- 多平台同时发布；
- 大规模 Skill 编排；
- 复杂 Agent Router；
- 完整用户账号体系；
- 云端部署；
- 大型知识库；
- 完整学习分析系统。

优先实现：

```text
Tutor Core
    +
一个学科 Tutor
    +
简单 Student State
    +
UniApp H5
```

---

## 2.2 “Skill”不能只是一个 Prompt

第一版的 Tutor Skill 至少需要包含一个基础教学流程：

```text
Question
    ↓
Diagnosis
    ↓
Knowledge Point
    ↓
Teaching Strategy
    ↓
Response / Question
    ↓
Check Understanding
    ↓
Update Student State
```

目标是让系统具备“教师行为”，而不是简单改变聊天机器人的语气。

---

# 3. 技术架构

推荐第一版架构：

```text
┌─────────────────────────────────────┐
│              UniApp                 │
│             Vue 3 + H5             │
│                                     │
│  学科选择 / 对话 / Markdown / LaTeX │
└──────────────────┬──────────────────┘
                   │
             HTTP / SSE
                   │
┌──────────────────▼──────────────────┐
│         Local API / Adapter         │
│                                    │
│  会话管理 / 参数转换 / 流式适配     │
└──────────────────┬──────────────────┘
                   │
┌──────────────────▼──────────────────┐
│       AgentSkills Runtime           │
│       127.0.0.1:8080               │
│                                    │
│  Tutor Skill / Domain Skill        │
└──────────────────┬──────────────────┘
                   │
                   ▼
             LLM Provider
        第一版可使用 DeepSeek
```

### 关键修改

原方案直接让 UniApp 调用 Runtime。

第一版更建议增加：

```text
UniApp
   ↓
Local API / Adapter
   ↓
AgentSkills Runtime
```

原因：

- 避免前端直接绑定 Runtime 的内部接口；
- 方便以后替换 Runtime；
- 方便统一处理会话、错误、流式输出；
- 以后可以增加 Student State、Router、日志等业务逻辑；
- 可以避免前端直接暴露模型相关配置。

---

# 4. 技术选型

## 4.1 开发环境

推荐：

```text
OS：Windows 10/11
Node.js：20 LTS 或 22 LTS
IDE：HBuilderX
前端：UniApp + Vue 3
```

不建议继续使用 Node.js 16 作为基础环境。项目会涉及 Vue 3、Vite 和较新的 npm 依赖，使用较新的 LTS 可以降低兼容性问题。

---

# 5. AgentSkills Runtime

目前可以确认 `@opencangjie/skills` 是公开 npm 包，并提供：

- Runtime 安装；
- Runtime 启动/停止；
- Skill 安装；
- Skill 查询；
- Skill 执行；
- JavaScript / TypeScript API；
- REST API；
- MCP streaming；
- Windows/macOS/Linux 支持。

参考：

- npm：<https://www.npmjs.com/package/@opencangjie/skills>
- 项目主页：<https://atomgit.com/uctoo/agentskills-runtime>

当前官方示例包含：

```bash
npm install @opencangjie/skills

npx skills install-runtime

npx skills start

npx skills list

npx skills run my-skill -p '{"input":"data"}'
```

默认 Runtime：

```text
http://127.0.0.1:8080
```

官方 JS API 也提供类似：

```javascript
import { createClient } from '@opencangjie/skills';

const client = createClient({
  baseUrl: 'http://127.0.0.1:8080'
});

const result = await client.executeSkill('my-skill', {
  input: 'data'
});
```

因此，AgentSkills Runtime 可以作为第一版的核心后端运行时。

---

# 6. 第一次技术验证：不要先做 App

第一阶段只验证 Runtime。

## 6.1 安装

```bash
npm install @opencangjie/skills
npx skills install-runtime
```

## 6.2 配置模型

例如：

```ini
MODEL_PROVIDER=deepseek
MODEL_NAME=deepseek-chat
DEEPSEEK_API_KEY=你的API_KEY
```

## 6.3 启动

```bash
npx skills start --foreground
```

## 6.4 健康检查

```bash
curl http://127.0.0.1:8080/hello
```

期望得到正常响应。

然后：

```bash
curl http://127.0.0.1:8080/skills
```

确认 Skill API 可用。

---

# 7. 第一版 Skill 重新设计

原方案中的：

```text
book-learning-tutor
router-skill
feynman-skill
```

不建议全部直接作为第一版依赖。

第一版只建立三个逻辑模块：

```text
skills/
├── tutor-core/
├── math-tutor/
└── evaluator/
```

后续再增加：

```text
physics-tutor/
chemistry-tutor/
...
```

---

# 8. Tutor Core

`Tutor Core` 是第一版最重要的 Skill。

职责：

```text
理解学生问题
    ↓
判断问题类型
    ↓
识别可能的知识缺口
    ↓
选择教学策略
    ↓
回答 / 提问
    ↓
检查理解
```

最小行为：

### 学生直接问答案

AI 不应始终直接给最终答案，而应根据问题难度决定：

```text
直接讲解
或
给提示
或
反问一步
或
要求学生解释
```

### 学生回答错误

AI 至少完成：

```text
判断错误类型
    ↓
指出错误位置
    ↓
给最小必要提示
    ↓
再次让学生尝试
```

### 学生回答正确

AI 不应仅说“正确”，而可以：

```text
确认
    ↓
要求解释原因
    ↓
检查是否真正理解
```

---

# 9. Math Tutor

第一版建议先选一个学科。

推荐优先选择：

> 数学

原因：

- 结构清晰；
- 公式渲染需求明确；
- 容易验证；
- 能快速检验 Tutor Core；
- 后续迁移到物理较自然。

目录：

```text
math-tutor/
├── SKILL.md
└── knowledge/
    ├── algebra.md
    ├── function.md
    ├── calculus.md
    └── common-errors.md
```

第一版不需要覆盖全部数学。

建议只做：

```text
代数
函数
基础微积分
```

---

# 10. Evaluator

第一版可以把 Evaluator 作为第二个逻辑模块，而不是复杂 Agent。

职责：

```text
评估学生答案
    ↓
判断：
correct
partial
wrong
unknown
    ↓
确定下一步教学策略
```

例如：

```json
{
  "status": "partial",
  "knowledge_point": "导数几何意义",
  "error_type": "概念混淆",
  "confidence": 0.82
}
```

这一步非常重要，因为它把：

```text
聊天
```

逐渐转化成：

```text
教学状态
```

---

# 11. Student State

第一版不需要数据库。

可以采用：

```json
{
  "subject": "math",
  "knowledge_points": {
    "derivative": {
      "mastery": 0.65,
      "last_seen": "2026-08-13"
    }
  },
  "recent_errors": [
    {
      "type": "concept_confusion",
      "topic": "derivative"
    }
  ],
  "current_goal": "理解导数的几何意义"
}
```

第一阶段甚至可以使用：

```text
student-state.json
```

保存。

以后再迁移：

```text
SQLite
→ PostgreSQL
```

---

# 12. 为什么第一版不做 Router Skill

不要一开始构建：

```text
用户
 ↓
router-skill
 ↓
数学 Skill / 物理 Skill / 化学 Skill
```

第一版直接使用简单业务路由：

```text
用户明确选择学科
    ↓
对应 Tutor

用户选择“自动”
    ↓
LLM 判断学科
    ↓
对应 Tutor
```

甚至可以先只支持：

```text
数学
自动
```

当真正有 2~3 个成熟学科 Skill 后，再把 Router 独立出来。

---

# 13. 为什么第一版不做 Feynman Skill

费曼学习法更适合成为：

```text
Tutor Behavior
```

而不是独立 Skill。

例如：

```text
学生：
我理解导数就是变化率。

AI：
很好。现在不要看公式。
假设位移 s(t) = t²，
你解释一下 t=2 时导数代表什么？
```

这本质上是教学策略，不需要拆成独立 Agent。

---

# 14. UniApp 前端

第一版：

```text
UniApp + Vue 3
```

但只发布：

```text
H5
```

不要一开始同时做：

```text
Android
iOS
微信小程序
```

先把 H5 跑通。

目录可以设计成：

```text
src/
├── pages/
│   ├── index/
│   └── chat/
├── components/
│   ├── ChatMessage.vue
│   ├── SubjectSelector.vue
│   └── MarkdownRenderer.vue
├── services/
│   └── ai.js
├── stores/
│   └── learning.js
└── utils/
```

---

# 15. 前端核心页面

第一版只需要两个页面。

## 首页

```text
┌─────────────────────────┐
│       AI 学习助手        │
│                         │
│  [数学] [自动]           │
│                         │
│  继续学习                │
│  最近知识点：导数        │
│                         │
│  [开始学习]              │
└─────────────────────────┘
```

## 对话页

```text
┌─────────────────────────┐
│ 数学 AI Tutor            │
├─────────────────────────┤
│                         │
│ AI：你认为……             │
│                         │
│ 用户：我觉得……           │
│                         │
│ AI：很好，但这里……       │
│                         │
├─────────────────────────┤
│ 输入问题……         [发送]│
└─────────────────────────┘
```

---

# 16. Markdown + LaTeX

数学/物理场景下公式渲染属于刚需。

可优先验证：

- wtto-markdown
- 其他支持 KaTeX 的 UniApp Markdown 组件

参考：

<https://ext.dcloud.net.cn/plugin?id=21259>

需要测试：

```text
行内公式
块公式
上下标
矩阵
分式
积分
极限
代码块
Markdown 表格
```

验收标准：

> 同一条 AI 回复在 H5 中显示时，不应破坏数学公式和 Markdown 结构。

---

# 17. Streaming

这里不能直接假定 SDK 一定提供你需要的前端 WebSocket 流式接口。

Runtime 当前资料明确存在：

```text
REST API
MCP / stream
```

但第一版必须实际验证前端所需的流式协议。

验证顺序：

```text
executeSkill
    ↓
确认普通调用可用
    ↓
确认 streaming API
    ↓
确定 WebSocket / SSE / MCP stream
    ↓
写 Adapter
    ↓
UniApp 接入
```

不要在未验证接口之前把 WebSocket 写死在前端。

---

# 18. Adapter 层

推荐建立：

```text
src/services/ai/
├── runtime.js
├── adapter.js
└── stream.js
```

统一暴露：

```javascript
sendMessage({
  subject,
  message,
  conversationId
})
```

以后前端不关心：

```text
AgentSkills
DeepSeek
SSE
WebSocket
MCP
```

这样未来可以替换后端而无需重写 UI。

---

# 19. 第一版完整数据流

```text
用户输入
   ↓
UniApp
   ↓
ai.sendMessage()
   ↓
Local Adapter
   ↓
判断 subject
   ├── math
   │    ↓
   │  math-tutor
   │
   └── auto
        ↓
      简单 LLM Router
        ↓
      math-tutor
   ↓
Tutor Core
   ↓
Evaluator
   ↓
更新 Student State
   ↓
生成回答
   ↓
Streaming Adapter
   ↓
UniApp
   ↓
Markdown + LaTeX
```

---

# 20. 第一版 MVP 开发阶段

## Phase 0：Runtime 验证

目标：

```text
Runtime 能启动
Skill 能安装
Skill 能执行
模型能正常返回
```

成功标准：

```text
curl /hello
curl /skills
skills run test-skill
```

全部正常。

---

## Phase 1：最小 Tutor Skill

创建：

```bash
npx skills init tutor-core
```

实现一个最小 Skill。

输入：

```json
{
  "question": "什么是导数？"
}
```

输出：

```text
结构化教学回答
```

目标不是知识覆盖，而是验证：

> AI 是否能够按照“诊断 → 解释 → 提问”的教学流程工作。

---

## Phase 2：Math Tutor

增加：

```text
math-tutor
```

先支持：

```text
函数
导数
基础微积分
```

---

## Phase 3：Student State

建立最小状态：

```text
知识点
掌握度
近期错误
当前学习目标
```

先使用 JSON。

---

## Phase 4：UniApp H5

接入：

```text
首页
学科选择
聊天页
Markdown
KaTeX
```

---

## Phase 5：Streaming

完成：

```text
Runtime
 ↓
Adapter
 ↓
UniApp
```

的流式输出。

---

## Phase 6：简单 Router

只支持：

```text
数学
自动
```

自动模式下判断：

```text
math
general
```

---

## Phase 7：第二学科

加入：

```text
physics-tutor
```

验证 Skill 化架构是否能够扩展。

---

# 21. 第一版功能边界

## 必须实现

- [ ] AgentSkills Runtime 正常运行
- [ ] 自定义 Tutor Skill 可执行
- [ ] 数学 Tutor
- [ ] UniApp H5
- [ ] 对话
- [ ] Markdown
- [ ] LaTeX
- [ ] 基本流式输出
- [ ] 简单 Student State
- [ ] 手动选择数学
- [ ] 自动模式
- [ ] 错误处理

## 第一版明确不做

- [ ] iOS 正式发布
- [ ] Android 正式发布
- [ ] 微信小程序
- [ ] 多用户账号系统
- [ ] 云端数据库
- [ ] 完整知识图谱
- [ ] 大型 RAG 系统
- [ ] 多 Agent 自主协作
- [ ] 独立 Feynman Skill
- [ ] 复杂 Router Skill
- [ ] 完整学习报告系统
- [ ] 商业化支付

---

# 22. 技术风险与处理方式

| 风险 | 等级 | 处理 |
|---|---|---|
| Runtime 安装/启动问题 | 中 | Phase 0 优先解决 |
| Skill 接口与预期不同 | 中 | 先用官方 SDK/CLI 验证 |
| UniApp SDK 不成熟 | 高 | 自己建立 Adapter |
| 流式 API 不确定 | 高 | 先验证协议，不锁死 WebSocket |
| Markdown/LaTeX 兼容性 | 中 | 单独测试组件 |
| Tutor 教学质量不足 | 高 | 优先优化 Tutor Core |
| Router 判断错误 | 中 | 第一版限制学科数量 |
| Student State 设计不合理 | 中 | 先 JSON，后数据库 |
| 本地 Runtime + 云端 LLM | 低 | 第一版接受，产品文案明确说明 |

---

# 23. “本地运行”的定义

第一版推荐采用：

```text
前端：本地
Runtime：本地
Skill：本地
Student State：本地
LLM：云端 API
```

因此严格定义应该是：

> **本地 AI 教师系统，而不是完全离线 AI。**

如果未来要求：

```text
数据完全不离开本机
```

再把：

```text
DeepSeek API
```

替换为本地模型，例如：

```text
Ollama
llama.cpp
vLLM
```

不作为第一版目标。

---

# 24. 推荐项目目录

```text
ai-learning-app/
│
├── backend/
│   ├── adapter/
│   │   ├── runtime.js
│   │   ├── stream.js
│   │   └── router.js
│   │
│   ├── student/
│   │   └── student-state.json
│   │
│   └── skills/
│       ├── tutor-core/
│       │   └── SKILL.md
│       │
│       ├── math-tutor/
│       │   ├── SKILL.md
│       │   └── knowledge/
│       │
│       └── evaluator/
│           └── SKILL.md
│
├── frontend/
│   └── uniapp/
│       ├── pages/
│       ├── components/
│       ├── services/
│       ├── stores/
│       └── utils/
│
├── docs/
│   └── architecture.md
│
└── README.md
```

---

# 25. 第一版最小可行路径

如果希望最快得到可运行成果，严格按照：

```text
1. 安装 Node.js 20/22 LTS
        ↓
2. 安装 @opencangjie/skills
        ↓
3. 安装 Runtime
        ↓
4. 配置 DeepSeek
        ↓
5. 启动 Runtime
        ↓
6. 创建 tutor-core
        ↓
7. CLI 执行 tutor-core
        ↓
8. 创建 math-tutor
        ↓
9. CLI 验证 math-tutor
        ↓
10. 建立 Local Adapter
        ↓
11. 创建 UniApp Vue3 项目
        ↓
12. H5 接入 Adapter
        ↓
13. Markdown + LaTeX
        ↓
14. Streaming
        ↓
15. Student State
        ↓
16. Auto Router
        ↓
17. Physics Tutor
```

---

# 26. 第一版的真正验收标准

不是：

> “App 能聊天。”

而是下面这个场景能够稳定完成：

### 示例

用户：

```text
为什么导数表示变化率？
```

系统首先判断：

```text
学科：数学
知识点：导数
学习状态：未知
```

AI：

```text
不直接背定义。

假设汽车在 t=2s 时的速度是 4m/s，
你觉得“变化率”描述的是什么？
```

用户回答。

系统：

```text
Evaluator
 ↓
判断学生理解程度
 ↓
更新 Student State
 ↓
继续追问/解释
```

最终形成：

```text
一次对话
    ↓
一次教学过程
    ↓
一次状态更新
```

而不是：

```text
一次问题
    ↓
一次答案
```

---

# 27. 后续演进路线

完成 MVP 后：

```text
V1
数学 Tutor
    ↓
V1.1
物理 Tutor
    ↓
V1.2
Router
    ↓
V1.3
Student Model
    ↓
V2
Knowledge Graph / RAG
    ↓
V2.1
学习路径规划
    ↓
V2.2
长期学习画像
    ↓
V3
多学科 AI 教师系统
```

如果最终目标是“真正的 AI 学习系统”，长期核心应逐渐转向：

```text
LLM
 ↓
Tutor Engine
 ↓
Student Model
 ↓
Learning State
 ↓
Learning Strategy
```

而不是不断堆叠更多聊天 Skill。

---

# 28. 最终架构判断

原方案最值得保留的是：

```text
AgentSkills Runtime
+
UniApp
+
Skill 化教师能力
```

需要修改的是：

```text
❌ 先做 Router
❌ 先做多个 Skill
❌ 先做完整 App
❌ 假设 SDK 已经解决所有流式通信问题

✅ 先做 Tutor Core
✅ 先做一个学科
✅ 先做 H5
✅ 建立 Adapter
✅ 加入最小 Student State
✅ 最后再做 Router 和多学科
```

最终目标架构：

```text
                    AI Learning System
                            │
                   ┌────────┴────────┐
                   │   Tutor Core    │
                   └────────┬────────┘
                            │
          ┌─────────────────┼─────────────────┐
          ↓                 ↓                 ↓
       Math Tutor       Physics Tutor     Chemistry Tutor
          │                 │                 │
          └─────────────────┼─────────────────┘
                            ↓
                        Evaluator
                            ↓
                       Student Model
                            ↓
                      Learning Strategy
                            ↓
                         UniApp
```

**第一版的核心任务只有一个：证明“Skill 可以稳定承担一个真正的教学闭环”。**

只要这个闭环成立，后面的 Router、更多学科、学习画像、App 化都属于扩展问题；如果这个闭环不成立，继续堆前端和 Agent 反而是在放大问题。

---

# 29. 当前已核验的外部组件

### AgentSkills Runtime

- npm：<https://www.npmjs.com/package/@opencangjie/skills>
- 项目主页：<https://atomgit.com/uctoo/agentskills-runtime>

根据当前公开 npm 页面，`@opencangjie/skills` 已提供 Runtime 管理、Skill 管理、Skill 执行以及 JS/TS API；默认 Runtime 地址为 `127.0.0.1:8080`。

### Markdown / KaTeX

- wtto-markdown：<https://ext.dcloud.net.cn/plugin?id=21259>

### UniApp AI UI

- vm-openai-ui：<https://ext.dcloud.net.cn/plugin?id=27748>
- vm-openai：<https://ext.dcloud.net.cn/plugin?id=27747>

> 注：以上 UniApp 插件应在实际开发时再次验证当前版本、平台兼容性及流式接口能力。不要仅依据插件页面假设其与 AgentSkills Runtime 直接兼容。

---

# 30. 一句话版本

> **第一版不要做“很多 Agent 组成的 AI App”，而要做“一个真正会教人的 Tutor Skill”，然后用 AgentSkills Runtime 承载它，用 UniApp H5 把它变成可用产品。**

这将是当前方案成本最低、技术风险最低、同时最有机会验证核心价值的路径。
