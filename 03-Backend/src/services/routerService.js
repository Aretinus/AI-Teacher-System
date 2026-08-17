const fs = require('fs');
const { SUBJECTS_INDEX } = require('../config');
const { BASE_KEYWORDS, matchCourse } = require('./signalService');

function loadSubjects() {
  return JSON.parse(fs.readFileSync(SUBJECTS_INDEX, 'utf8')).subjects || [];
}

function findSubject(id) {
  return loadSubjects().find((s) => s.id === id) || null;
}

// 学科级关键词打分（课程信号优先，已由 matchCourse 处理）；长词优先，避免子串误判（波函数 vs 函数）
function detectSubject(message) {
  const text = String(message || '');
  const scores = {};
  for (const [subject, kws] of Object.entries(BASE_KEYWORDS)) {
    const sorted = [...kws].sort((a, b) => b.length - a.length);
    const matched = [];
    let score = 0;
    for (const kw of sorted) {
      if (!text.includes(kw)) continue;
      if (matched.some((m) => m.includes(kw))) continue;
      score += 1 + Math.min(2, kw.length / 4);
      matched.push(kw);
    }
    scores[subject] = score;
  }
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [best, bestScore] = sorted[0];
  const [second, secondScore] = sorted[1];
  if (bestScore === 0) return { subject: null, mode: 'unknown', candidates: loadSubjects().map((s) => s.id) };
  if (bestScore === secondScore) return { subject: null, mode: 'ambiguous', candidates: [best, second] };
  return { subject: best, mode: 'auto', confidence: bestScore / (bestScore + secondScore) };
}

// 全才两级路由：课程内容命中 → 学科（仅当未显式指定学科时）
function routeAll({ subject, message }) {
  if (!subject) {
    const courseHit = matchCourse(message);
    if (courseHit) {
      const { course, ambiguous } = courseHit;
      if (ambiguous) {
        return { route: null, reason: 'course-ambiguous', candidates: [], hint: `「${course.via}」可能属于多个学科，请指明学科` };
      }
      return { route: { subject: course.subject, tutor: null, course: course.courseId, mode: 'course-auto', confidence: 1 }, via: course.via };
    }
  }
  if (subject) {
    const s = findSubject(subject);
    if (!s) return { route: null, candidates: loadSubjects().map((x) => x.id), reason: 'subject-not-supported' };
    return { route: { subject: s.id, tutor: s.defaultSkill || s.skills[0], mode: 'manual', confidence: 1.0 } };
  }
  const detected = detectSubject(message);
  if (!detected.subject) {
    return { route: null, candidates: detected.candidates || [], reason: detected.mode };
  }
  return { route: { subject: detected.subject, tutor: null, mode: detected.mode, confidence: detected.confidence } };
}

function route({ subject, message }) {
  return routeAll({ subject, message });
}

module.exports = { loadSubjects, findSubject, detectSubject, route, routeAll };