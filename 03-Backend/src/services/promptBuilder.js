const fs = require('fs');
const path = require('path');
const { SKILLS_DIR, MAX_CONTEXT_HISTORY } = require('../config');
const { loadStyle } = require('./stylesService');
const { listSubjectCourses, listLessons, chaptersOf } = require('./courseService');

function styleBlock(styleId) {
  const content = loadStyle(styleId);
  if (!content) return '## 授课风格\n（未指定风格，按你惯用的清晰教学方式讲解。）';
  const lines = content.split(/\r?\n/);
  const name = (lines[0] || '').replace(/^#\s*/, '').trim() || styleId;
  const body = lines.slice(1).join('\n').trim();
  return `## 授课风格（${name}）\n${body}`;
}

// 学科书库课程范围：由蒸馏产物实时定义，替代 SKILL.md 写死的教学范围
function courseScopeBlock(subject) {
  const courses = listSubjectCourses(subject);
  if (!courses.length) return null;
  const lines = courses.map((c) => {
    const dir = null;
    const head = `- 《${c.name}》：${c.lessons} 课${c.chapters ? `，${c.chapters} 章` : ''}`;
    return head;
  });
  return [
    '## 本学科书库课程（你的教学范围，按蒸馏产物实时定义）',
    '你在本学科内的教学范围以书库为准：涵盖以下已蒸馏课程，学生可随时指名学习其中任一课程。',
    '回答广泛问题时，基于这些课程覆盖的知识回答；超出以下课程覆盖范围的内容，如实说明书库中没有对应材料，不要编造。',
    ...lines,
    '（课程详情以学生当前指定的课程为准；学生可要求「学《课程名》」切换课程。）',
  ].join('\n');
}

function readSkillFile(subject, tutor, file) {
  const p = path.join(SKILLS_DIR, 'subjects', subject, tutor, file);
  try {
    return fs.readFileSync(p, 'utf8');
  } catch (e) {
    return null;
  }
}

function readCoreSkill(name) {
  const p = path.join(SKILLS_DIR, 'core', name, 'SKILL.md');
  try {
    return fs.readFileSync(p, 'utf8');
  } catch (e) {
    return null;
  }
}

function listKnowledgeFiles(subject, tutor) {
  const kp = path.join(SKILLS_DIR, 'subjects', subject, tutor, 'knowledge');
  const files = [];
  const walk = (d) => {
    fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
      if (e.isDirectory()) walk(path.join(d, e.name));
      else if (e.name.endsWith('.md')) files.push(path.join(d, e.name));
    });
  };
  try {
    walk(kp);
  } catch (e) { /* ignore */ }
  return files;
}

function readKnowledge(skillMd, subject, tutor) {
  const files = listKnowledgeFiles(subject, tutor);
  if (!files.length) return '';
  const contents = files.map((f) => {
    const rel = path.relative(path.join(SKILLS_DIR, 'subjects', subject, tutor, 'knowledge'), f);
    return `### 知识：${rel}\n${fs.readFileSync(f, 'utf8')}`;
  });
  return contents.join('\n\n');
}

function buildSystemPrompt({ subject, tutor, userState, history, message, style }) {
  const tutorSkill = readSkillFile(subject, tutor, 'SKILL.md');
  const engineSkill = readCoreSkill('tutor-engine');
  const evaluatorSkill = readCoreSkill('evaluator');
  const knowledge = readKnowledge(tutorSkill, subject, tutor);

  const recent = (history.sessions || []).slice(0, MAX_CONTEXT_HISTORY)
    .map((s) => `- [${s.date}] ${s.subject}: ${s.summary || ''}`).join('\n') || '（无）';

  return [
    '你是 AI 教师系统的教学引擎，严格遵循以下 Skill 指令。',
    '',
    '## Tutor Engine（编排协议）',
    engineSkill || '（缺失）',
    '',
    '## Evaluator（评估协议）',
    evaluatorSkill || '（缺失）',
    '',
    '## 学科 Tutor 指令',
    tutorSkill || '（缺失）',
    '',
    '## 授课风格',
    styleBlock(style),
    '',
    '## 学科知识目录',
    knowledge || '（暂无知识文件）',
    '',
    courseScopeBlock(subject) || '',
    '',
    '## 用户当前状态',
    JSON.stringify({ currentSubject: userState.currentSubject, currentGoal: userState.currentGoal, knowledgePoints: userState.knowledgePoints, recentErrors: userState.recentErrors }, null, 2),
    '',
    '## 近期会话摘要',
    recent,
    '',
    '## 本轮输入',
    `学科：${subject}｜教师：${tutor}`,
    `学生消息：${message}`,
    '',
    '## 输出要求',
    '按 Tutor Engine 协议输出 teaching-response 结构。若学生消息是对追问/练习的回答，先按 Evaluator 协议评估，再输出教学回复。回复正文用 Markdown，公式用 $...$ / $$...$$。',
    '',
    '## JSON 硬性要求',
    '直接输出 JSON 对象（不要用 ```json 代码块包裹、不要任何前后缀文本）。字符串值内不得出现未转义的英文双引号 "：内容中的引号一律改用中文引号「」或 “”；换行必须写作 \\n；反斜杠必须写作 \\\\。',
    '**response 字段必须是非空字符串**：无论学生消息多短、多模糊（如"继续""嗯""好"），都必须输出有实质内容的引导式教学回复，绝不能输出空字符串、省略该字段、或只输出状态信息。',
  ].join('\n');
}

function buildCourseSystemPrompt({ subject, tutor, userState, history, message, courseCtx, style }) {
  const tutorSkill = readSkillFile(subject, tutor, 'SKILL.md');
  const engineSkill = readCoreSkill('tutor-engine');
  const evaluatorSkill = readCoreSkill('evaluator');

  const recent = (history.sessions || []).slice(0, MAX_CONTEXT_HISTORY)
    .map((s) => `- [${s.date}] ${s.subject}: ${s.summary || ''}`).join('\n') || '（无）';

  return [
    '你是 AI 教师系统的教学引擎，严格遵循以下 Skill 指令。',
    '',
    '## Tutor Engine（编排协议）',
    engineSkill || '（缺失）',
    '',
    '## Evaluator（评估协议）',
    evaluatorSkill || '（缺失）',
    '',
    '## 学科 Tutor 指令（含课程模式教学流程）',
    tutorSkill || '（缺失）',
    '',
    '## 授课风格',
    styleBlock(style),
    '',
    '## 课程模式 · 本轮任务',
    `学生要求按《${courseCtx.courseName}》课程逐课学习。学生此前已完成 ${courseCtx.learnedCount} 课（不含当前课）。`,
    `**当前正在上的课：《${courseCtx.lessonTitle}》（文件：${courseCtx.currentLesson}，所属章节：${courseCtx.chapter || '未知'}）。**`,
    '本次教学必须严格围绕当前这一课：先备课（目标层级/核心概念/必背清单），再费曼式逐段讲解，',
    '最后给练习闸门（≥80% 才推进）与课后作业。**只教下方"当前课正文"里这一课的内容，不得教其他课、不得提前讲后续课、不得跳章。**',
    '',
    '## 本轮要教的课（唯一，重申）',
    `《${courseCtx.lessonTitle}》——这是学生现在正在上的课，正文见下。教学必须从这一课的第一段开始完整讲解。`,
    '',
    '## 当前课正文',
    `《${courseCtx.lessonTitle}》`,
    courseCtx.lessonContent,
    '',
    '## 课程导航（仅结构）',
    `本章：${courseCtx.chapter || '（未知）'}；本章各课：${courseCtx.tocSection || '（无）'}`,
    `全书章列表：${courseCtx.chapterList}`,
    '（导航仅供定位课程位置，不得作为教学内容。）',
    '',
    '## 用户当前状态',
    JSON.stringify({ currentSubject: userState.currentSubject, currentGoal: userState.currentGoal, knowledgePoints: userState.knowledgePoints, recentErrors: userState.recentErrors }, null, 2),
    '',
    '## 近期会话摘要',
    recent,
    '',
    '## 本轮输入',
    `学科：${subject}｜教师：${tutor}｜课程：${courseCtx.courseName}｜当前课：${courseCtx.currentLesson}`,
    `学生消息：${message}`,
    '',
    '## 输出要求',
    '按 Tutor Engine 协议输出 teaching-response 结构。回复正文用 Markdown，公式用 $...$ / $$...$$。',
    '',
    '## JSON 硬性要求',
    '直接输出 JSON 对象（不要用 ```json 代码块包裹、不要任何前后缀文本）。字符串值内不得出现未转义的英文双引号 "：内容中的引号一律改用中文引号「」或 “”；换行必须写作 \\n；反斜杠必须写作 \\\\。',
    '**response 字段必须是非空字符串**：无论学生消息多短、多模糊（如"继续""嗯""好"），都必须输出有实质内容的引导式教学回复，绝不能输出空字符串、省略该字段、或只输出状态信息。',
  ].join('\n');
}

function buildCourseMessages({ subject, tutor, userState, history, message, courseCtx, style }) {
  return [
    { role: 'system', content: buildCourseSystemPrompt({ subject, tutor, userState, history, message, courseCtx, style }) },
    ...(history.messages || []).slice(-2).map((m) => ({ role: m.role, content: m.content })),
    { role: 'user', content: message },
  ];
}

function buildMessages({ subject, tutor, userState, history, message, style }) {
  return [
    { role: 'system', content: buildSystemPrompt({ subject, tutor, userState, history, message, style }) },
    ...(history.messages || []).slice(-6).map((m) => ({ role: m.role, content: m.content })),
    { role: 'user', content: message },
  ];
}

module.exports = { buildSystemPrompt, buildMessages, buildCourseSystemPrompt, buildCourseMessages, readSkillFile, readCoreSkill, readKnowledge };