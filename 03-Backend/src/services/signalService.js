const fs = require('fs');
const path = require('path');
const { SUBJECTS_INDEX, DATA_DIR } = require('../config');

const DISTILLED_ROOT = path.join(DATA_DIR, 'Books', 'distilled');

// 学科级基础信号（手写兜底，覆盖未蒸馏内容与通用概念）
const BASE_KEYWORDS = {
  math: ['导数', '积分', '极限', '函数', '微分', '微积分', '切线', '斜率', '求导', '不定积分', '定积分', '偏导', '级数', '矩阵', '向量空间', '线性代数', '代数', '方程', '拓扑', '概率', '统计', '证明', '定理', '数学', '行列式', '特征值', '收敛', '数列', '映射', '群论', 'derivative', 'integral', 'calculus', 'function', 'matrix', 'algebra', 'topology', 'probability', 'linear', 'theorem'],
  physics: ['力学', '力', '运动', '牛顿', '引力', '加速度', '动量', '能量守恒', '转动', '卫星', '轨道', '物理', 'feynman', '费曼', '费恩曼', '相对论', '狭义相对论', '广义相对论', '洛伦兹', '量子', '波函数', '薛定谔', '海森堡', '不确定性原理', '电磁', '电场', '磁场', '光学', '折射', '干涉', '衍射', '偏振', '热力学', '熵', '谐振', '引力波', '光子', 'force', 'motion', 'mechanics', 'gravity', 'momentum', 'velocity', 'quantum', 'relativity', 'physics', 'field', 'lorentz', 'schrodinger', 'entropy'],
};

// 信号权重：课程名命中 > 章标题命中 > 课名命中 > 学科基础词
const W = { courseName: 10, courseShort: 8, coursePrefix: 3, chapter: 4, lesson: 2, base: 1 };

// 文本分词段：按非字母数字字符拆分为英文词（供英文提问命中）
function wordsOf(name) {
  const out = new Set();
  for (const seg of String(name).toLowerCase().split(/[^a-z0-9]+/i)) {
    if (seg.length >= 3) out.add(seg);
  }
  return [...out];
}

// 课程名候选：全名 / 去括号 / 中文前缀 2 字
function nameCandidates(name) {
  const out = [{ text: name, w: W.courseName }];
  const noBracket = String(name).replace(/[（(].*?[）)]/g, '').trim();
  if (noBracket && noBracket !== name) out.push({ text: noBracket, w: W.courseShort });
  const prefix = noBracket.slice(0, 2);
  if (prefix.length >= 2 && /[\u4e00-\u9fa5]/.test(prefix)) out.push({ text: prefix, w: W.coursePrefix });
  return out;
}

// 蒸馏课程信号表：{ subject, courseId, courseName, signals: [{text, w}] }
function buildSignals() {
  let subjects = [];
  try {
    subjects = JSON.parse(fs.readFileSync(SUBJECTS_INDEX, 'utf8')).subjects || [];
  } catch (e) {
    return [];
  }
  const out = [];
  for (const s of subjects) {
    const root = path.join(DISTILLED_ROOT, s.bookDir);
    if (!fs.existsSync(root)) continue;
    for (const dir of fs.readdirSync(root, { withFileTypes: true })) {
      if (!dir.isDirectory() || dir.name.startsWith('_')) continue;
      const courseDir = path.join(root, dir.name);
      const signals = nameCandidates(dir.name);
      for (const ch of fs.readdirSync(courseDir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name, 'zh-CN-numeric'))) {
        if (!ch.isDirectory() || ch.name.startsWith('_')) continue;
        const chDir = path.join(courseDir, ch.name);
        signals.push({ text: ch.name, w: W.chapter });
        wordsOf(ch.name).forEach((w) => signals.push({ text: w, w: W.chapter }));
        for (const f of fs.readdirSync(chDir).filter((x) => x.endsWith('.md'))) {
          const base = path.basename(f, '.md');
          signals.push({ text: base, w: W.lesson });
          wordsOf(base).forEach((w) => signals.push({ text: w, w: W.lesson }));
        }
      }
      out.push({ subject: s.id, courseId: dir.name, courseName: dir.name, signals });
    }
  }
  return out;
}

// 从消息命中课程：课程名/章标题/课名包含匹配，得分加权；长信号优先于被其包含的短信号
function matchCourse(message) {
  const signals = buildSignals();
  const text = String(message || '').toLowerCase();
  const hits = [];
  for (const c of signals) {
    const scored = [];
    for (const sig of c.signals) {
      const t = sig.text.toLowerCase();
      if (t.length < 2 || !text.includes(t)) continue;
      if (scored.some((s) => s.t !== t && s.t.includes(t) && s.w >= sig.w)) continue;
      scored.push({ t, w: sig.w });
    }
    if (scored.length) {
      const total = scored.reduce((acc, s) => acc + s.w, 0);
      const via = scored.sort((a, b) => b.w - a.w)[0].t;
      hits.push({ subject: c.subject, courseId: c.courseId, courseName: c.courseName, score: total, via });
    }
  }
  hits.sort((a, b) => b.score - a.score);
  const best = hits[0];
  if (!best) return null;
  const second = hits[1];
  const ambiguous = second && second.score === best.score && second.subject !== best.subject;
  return { course: best, ambiguous };
}

module.exports = { buildSignals, matchCourse, BASE_KEYWORDS, W };