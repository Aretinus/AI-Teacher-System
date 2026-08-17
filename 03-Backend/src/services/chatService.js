const { route } = require('./routerService');
const { buildMessages, buildCourseMessages } = require('./promptBuilder');
const { detectCourseIntent, loadCourseContext, loadDistilledCourseContext, listSubjectCourses } = require('./courseService');
const {
  loadState, saveState, loadProfile, loadHistory, appendHistory,
  saveSessionDetail, newSessionId,
} = require('./dataService');

function mergeStateUpdate(state, update, subject) {
  if (!update) return state;
  const next = { ...state };
  if (update.currentSubject) next.currentSubject = update.currentSubject;
  if (update.currentGoal) next.currentGoal = update.currentGoal;
  if (update.knowledgePoints) {
    next.knowledgePoints = { ...(state.knowledgePoints || {}) };
    for (const [kp, v] of Object.entries(update.knowledgePoints)) {
      const prev = next.knowledgePoints[kp] || { mastery: 0, attempts: 0 };
      next.knowledgePoints[kp] = {
        mastery: typeof v.mastery === 'number' ? Math.max(0, Math.min(1, v.mastery)) : prev.mastery,
        lastSeen: v.lastSeen || new Date().toISOString().slice(0, 10),
        attempts: (prev.attempts || 0) + 1,
        subject: subject || prev.subject || null,
      };
    }
  }
  if (update.recentErrors !== undefined) next.recentErrors = update.recentErrors || [];
  return next;
}

function repairJsonQuotes(s) {
  let out = '';
  let inStr = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (inStr) {
      if (c === '\\') {
        out += c;
        if (i + 1 < s.length) out += s[++i];
        continue;
      }
      if (c === '"') {
        let j = i + 1;
        while (j < s.length && /\s/.test(s[j])) j++;
        const next = j >= s.length ? '' : s[j];
        if (next === ',' || next === '}' || next === ']' || next === '' || next === ':') {
          out += c;
          inStr = false;
        } else {
          out += '\\"';
        }
        continue;
      }
      out += c;
    } else {
      if (c === '"') { inStr = true; out += c; }
      else out += c;
    }
  }
  return out;
}

function parseTeachingResponse(text) {
  const t = (text || '').trim();
  const candidates = [];
  if (t.startsWith('{')) candidates.push(t);
  else if (t.startsWith('```')) {
    const inner = t.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
    if (inner.startsWith('{')) candidates.push(inner);
  }
  const m = t.match(/\{[\s\S]*\}/);
  if (m && m[0] !== t) candidates.push(m[0]);
  for (const candidate of candidates) {
    try { return JSON.parse(candidate); } catch (e) { /* try next */ }
    try { return JSON.parse(repairJsonQuotes(candidate)); } catch (e) { /* try next */ }
  }
  return null;
}

async function handleChat({ userId, subject, message, conversationId, stream, style, course }) {
  const userState = loadState(userId);
  const profile = loadProfile(userId);
  const history = loadHistory(userId);

  const routing = route({ subject, message });
  const namedCourse = (() => {
    if (course) return course;
    const sid = subject || userState.currentSubject;
    if (!sid) return null;
    const hit = listSubjectCourses(sid).find((c) => c.available && message.includes(c.name));
    return hit ? hit.id : null;
  })();
  const wantCourse = detectCourseIntent(message) || !!namedCourse;
  if (!routing.route && wantCourse && userState.currentSubject) {
    routing.route = { subject: userState.currentSubject, tutor: userState.currentSubject, source: 'user-state-fallback' };
    routing.source = 'user-state-fallback';
  }
  if (!routing.route) {
    return { error: true, message: `无法确定学科，请选择：${(routing.candidates || []).join('、')}`, routing };
  }
  const routeInfo = routing.route;
  const effectiveCourse = namedCourse;

  const sessionId = conversationId || newSessionId();
  const tutor = routeInfo.tutor || routeInfo.subject;

  let messages;
  let courseCtx = null;
  if (effectiveCourse) {
    courseCtx = loadDistilledCourseContext(routeInfo.subject, effectiveCourse, message, /继续|下一课|下一节|接着/.test(message));
  } else if (wantCourse) {
    courseCtx = loadCourseContext(routeInfo.subject, tutor, message, /继续|下一课|下一节|接着/.test(message));
  }
  if (courseCtx) {
    messages = buildCourseMessages({ subject: routeInfo.subject, tutor, userState, history, message, courseCtx, style });
  } else {
    messages = buildMessages({ subject: routeInfo.subject, tutor, userState, history, message, style });
  }
  const userMessage = { role: 'user', content: message, at: new Date().toISOString() };

  return { sessionId, routeInfo, messages, userMessage, userState, profile, history, courseCtx };
}

async function persistAfterChat({ userId, sessionId, routeInfo, userMessage, rawResponse }) {
  const parsed = parseTeachingResponse(rawResponse);
  const replyContent = parsed?.response || rawResponse;
  const assistantMessage = { role: 'assistant', content: replyContent, at: new Date().toISOString() };

  let nextState = loadState(userId);
  if (parsed?.stateUpdate) {
    nextState = mergeStateUpdate(nextState, parsed.stateUpdate, routeInfo.subject);
    saveState(userId, nextState);
  }

  const detail = loadSessionDetailSafe(sessionId);
  detail.subject = routeInfo.subject;
  detail.messages.push(userMessage, assistantMessage);
  detail.evaluation = parsed?.evaluation || detail.evaluation;
  saveSessionDetail(sessionId, detail);

  const summary = {
    sessionId,
    date: new Date().toISOString().slice(0, 10),
    subject: routeInfo.subject,
    knowledgePoint: parsed?.knowledgePoint || null,
    summary: replyContent.slice(0, 120),
    nextGoal: parsed?.evaluation?.nextStrategy || null,
  };
  appendHistory(userId, summary);

  return { parsed, replyContent, nextState, summary };
}

function loadSessionDetailSafe(sessionId) {
  try {
    const { loadSessionDetail } = require('./dataService');
    return loadSessionDetail(sessionId) || { sessionId, messages: [] };
  } catch (e) {
    return { sessionId, messages: [] };
  }
}

module.exports = { handleChat, persistAfterChat, mergeStateUpdate, parseTeachingResponse };