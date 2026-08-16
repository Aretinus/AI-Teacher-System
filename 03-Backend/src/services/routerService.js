const fs = require('fs');
const { SUBJECTS_INDEX } = require('../config');

const KEYWORDS = {
  math: ['导数', '积分', '极限', '函数', '微分', '微积分', '切线', '斜率', 'derivative', 'integral', 'limit', 'calculus', 'function', '链式法则', '不定积分', '定积分', '求导'],
  physics: ['力学', '力', '运动', '牛顿', '引力', '加速度', '动量', '能量守恒', '转动', '卫星', '轨道', '物理', 'feynman', 'force', 'motion', 'mechanics', 'gravity', 'momentum', 'velocity', '加速度', '速度', '路程', '质量'],
};

function loadSubjects() {
  return JSON.parse(fs.readFileSync(SUBJECTS_INDEX, 'utf8')).subjects || [];
}

function findSubject(id) {
  return loadSubjects().find((s) => s.id === id) || null;
}

function detectSubject(message) {
  const text = String(message || '');
  const scores = {};
  for (const [subject, kws] of Object.entries(KEYWORDS)) {
    scores[subject] = kws.reduce((acc, kw) => acc + (text.includes(kw) ? 1 : 0), 0);
  }
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [best, bestScore] = sorted[0];
  const [second, secondScore] = sorted[1];
  if (bestScore === 0) return { subject: null, mode: 'unknown', candidates: loadSubjects().map((s) => s.id) };
  if (bestScore === secondScore) return { subject: null, mode: 'ambiguous', candidates: [best, second] };
  return { subject: best, mode: 'auto', confidence: bestScore / (bestScore + secondScore) };
}

function route({ subject, message }) {
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

module.exports = { loadSubjects, findSubject, detectSubject, route };