const fs = require('fs');
const path = require('path');
const { SKILLS_DIR, DATA_DIR } = require('../config');

const DISTILLED_ROOT = path.join(DATA_DIR, 'Books', 'distilled');
const COURSES_DIR = path.join(DATA_DIR, 'courses');

const COURSE_KEYWORDS = [
  '学这本书', '学习这本书', '开始学', '开始学习', '课程', '继续学', '继续学习',
  '下一课', '学下一课', '学第', '第01课', '第1课', '上课', '开课', '跟随课程',
  'teach me', 'course', 'lesson', '继续上次', '接着学', '接着上次',
];

function detectCourseIntent(message) {
  const m = (message || '').toLowerCase();
  return COURSE_KEYWORDS.some((k) => m.includes(k.toLowerCase()));
}

function readManifest(subject, tutor) {
  const p = path.join(SKILLS_DIR, 'subjects', subject, tutor, 'manifest.yaml');
  try {
    return fs.readFileSync(p, 'utf8');
  } catch (e) {
    return null;
  }
}

function extractYamlField(yaml, field) {
  if (!yaml) return null;
  const m = yaml.match(new RegExp(`^\\s*${field}:\\s*(.+)$`, 'm'));
  if (!m) return null;
  return m[1].trim().replace(/^['"]|['"]$/g, '');
}

function findCourse(subject, tutor) {
  const manifest = readManifest(subject, tutor);
  const rel = extractYamlField(manifest, 'courseDir');
  if (!rel) return null;
  const dir = path.resolve(SKILLS_DIR, 'subjects', subject, tutor, rel);
  if (!fs.existsSync(path.join(dir, 'progress.json'))) return null;
  return dir;
}

// 课程书架：遍历所有学科/技能 manifest，列出已绑定且有效的课程
function listCourses() {
  const courses = [];
  const SUBJECTS_INDEX = path.join(SKILLS_DIR, 'subjects', 'index.json');
  let subjects = [];
  try {
    subjects = JSON.parse(fs.readFileSync(SUBJECTS_INDEX, 'utf8')).subjects || [];
  } catch (e) {
    return courses;
  }
  for (const s of subjects) {
    for (const skillId of s.skills || []) {
      const skillDir = path.join(SKILLS_DIR, 'subjects', s.id, skillId);
      const manifest = readManifest(s.id, skillId);
      const rel = extractYamlField(manifest, 'courseDir');
      if (!rel) continue;
      const dir = path.resolve(skillDir, rel);
      if (!fs.existsSync(path.join(dir, 'progress.json'))) continue;
      let chapterCount = 0;
      try {
        chapterCount = fs.readdirSync(dir).filter((n) => n.includes('第')).length;
      } catch (e) { /* 忽略 */ }
      courses.push({
        subject: s.id,
        subjectName: s.name || s.id,
        skill: skillId,
        skillName: extractYamlField(manifest, 'name') || skillId,
        bookTitle: path.basename(dir),
        courseDir: path.relative(SKILLS_DIR, dir).split(path.sep).join('/'),
        chapters: chapterCount,
      });
    }
  }
  return courses;
}

function listLessons(courseDir) {
  const out = [];
  const walk = (d, prefix) => {
    let entries;
    try {
      entries = fs.readdirSync(d, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name, 'zh-CN-numeric'));
    } catch (e) {
      return;
    }
    for (const e of entries) {
      if (e.name === 'progress.json' || e.name === '00_目录导读.md' || e.name.startsWith('_')) continue;
      const rel = prefix ? `${prefix}/${e.name}` : e.name;
      if (e.isDirectory()) walk(path.join(d, e.name), rel);
      else if (e.name.endsWith('.md')) out.push(rel);
    }
  };
  walk(courseDir, '');
  return out
    .filter((p) => !p.endsWith('第00课_本章导言.md'))
    .sort((a, b) => a.localeCompare(b, 'zh-CN-numeric'));
}

function loadProgress(courseDir) {
  try {
    return JSON.parse(fs.readFileSync(path.join(courseDir, 'progress.json'), 'utf8'));
  } catch (e) {
    return { version: 1, book: path.basename(courseDir), current: null, lessons: {} };
  }
}

function saveProgress(courseDir, progress) {
  progress.updated = new Date().toISOString();
  const tmp = path.join(courseDir, 'progress.json.tmp');
  fs.writeFileSync(tmp, JSON.stringify(progress, null, 2), 'utf8');
  fs.renameSync(tmp, path.join(courseDir, 'progress.json'));
}

function advanceLesson(courseDir, progress, lessons) {
  let current = progress.current;
  if (!current || !lessons.includes(current)) current = lessons[0] || null;
  const idx = lessons.indexOf(current);
  const next = idx >= 0 && idx + 1 < lessons.length ? lessons[idx + 1] : null;

  if (progress.lessons[current]) {
    const l = progress.lessons[current];
    if (l.status !== 'learned') {
      l.status = 'learned';
      l.mastery = Math.max(l.mastery || 0, 0.8);
    }
  }
  if (next) {
    progress.current = next;
  } else {
    progress.current = current;
  }
  saveProgress(courseDir, progress);
  return next;
}

function lessonTitle(progress, lessonPath) {
  const l = progress.lessons?.[lessonPath];
  if (l?.lesson) return l.lesson;
  return path.basename(lessonPath, '.md').replace(/^第\d+课_/, '');
}

function tocChapterList(toc) {
  const chapters = [];
  for (const line of toc.split('\n')) {
    const m = line.match(/^### (.+)$/m);
    if (m) chapters.push(m[1]);
  }
  return chapters;
}

function tocCurrentChapter(toc, currentLesson) {
  const lines = toc.split('\n');
  const chapters = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^### (.+)$/m);
    if (m) chapters.push({ title: m[1], start: i });
    if (currentLesson && lines[i].includes(currentLesson) && chapters.length) {
      const ch = chapters[chapters.length - 1];
      let end = -1;
      for (let j = i + 1; j < lines.length; j++) {
        if (/^### /m.test(lines[j])) { end = j; break; }
      }
      return {
        chapter: ch.title,
        section: lines.slice(ch.start, end < 0 ? lines.length : end).slice(0, 40).join('\n'),
      };
    }
  }
  const first = chapters[0];
  if (!first) return { chapter: null, section: '' };
  let end = -1;
  for (let j = first.start + 1; j < lines.length; j++) {
    if (/^### /m.test(lines[j])) { end = j; break; }
  }
  return {
    chapter: first.title,
    section: lines.slice(first.start, end < 0 ? lines.length : end).slice(0, 40).join('\n'),
  };
}

function loadCourseContext(subject, tutor, message, wantAdvance) {
  const courseDir = findCourse(subject, tutor);
  if (!courseDir) return null;

  const progress = loadProgress(courseDir);
  const lessons = listLessons(courseDir);
  if (!lessons.length) return null;

  let current = progress.current || lessons[0];
  if (wantAdvance && progress.current) {
    const adv = advanceLesson(courseDir, progress, lessons);
    if (adv) current = adv;
  }

  const tocPath = path.join(courseDir, '00_目录导读.md');
  const toc = fs.existsSync(tocPath) ? fs.readFileSync(tocPath, 'utf8') : '';
  const { chapter, section } = tocCurrentChapter(toc, current);
  const chapterList = tocChapterList(toc);

  const lessonPath = path.join(courseDir, current);
  const lessonContent = fs.existsSync(lessonPath) ? fs.readFileSync(lessonPath, 'utf8') : '';

  const learnedCount = Object.values(progress.lessons || {}).filter((l) => l.status === 'learned').length;

  return {
    courseDir,
    courseName: path.basename(courseDir),
    chapter,
    chapterList: chapterList.join('；') || '（无）',
    tocSection: section || '（无）',
    currentLesson: current,
    lessonTitle: lessonTitle(progress, current),
    lessonContent: lessonContent.slice(0, 12000) + (lessonContent.length > 12000 ? '\n…（课文其余部分略）' : ''),
    totalLessons: lessons.length,
    learnedCount,
    progress: {
      current: progress.current,
      totalLessons: lessons.length,
      learnedCount,
    },
  };
}

// 未注册学科（书库实时新增的文件夹）直接把学科名当书库目录名
function bookDirOf(subject) {
  const id = String(subject || '').trim();
  if (!id) return null;
  try {
    const idx = JSON.parse(fs.readFileSync(path.join(SKILLS_DIR, 'subjects', 'index.json'), 'utf8'));
    const s = (idx.subjects || []).find((x) => x.id === id);
    if (s && s.bookDir) return s.bookDir;
  } catch (e) { /* 索引缺失时按目录名处理 */ }
  return id;
}

// 课程 = 蒸馏产物 distilled/{bookDir}/<一级目录>：数学下是分类目录（多本书），物理下是整本大书
function listSubjectCourses(subject) {
  const bookDir = bookDirOf(subject);
  const root = bookDir ? path.join(DISTILLED_ROOT, bookDir) : null;
  if (!root || !fs.existsSync(root)) return [];
  const out = [];
  for (const name of fs.readdirSync(root, { withFileTypes: true })) {
    if (!name.isDirectory() || name.name.startsWith('_')) continue;
    const dir = path.join(root, name.name);
    const lessons = listLessons(dir);
    const chapters = chaptersOf(dir);
    out.push({
      id: name.name,
      name: name.name,
      subject,
      chapters: chapters.length,
      lessons: lessons.length,
      available: lessons.length > 0,
    });
  }
  return out.sort((a, b) => a.id.localeCompare(b.id, 'zh-CN-numeric'));
}

// 安全解析课程目录：拒绝越界路径
function resolveDistilledCourse(subject, courseId) {
  if (!courseId) return null;
  const bookDir = bookDirOf(subject);
  if (!bookDir) return null;
  const root = path.join(DISTILLED_ROOT, bookDir);
  const dir = path.resolve(root, courseId);
  if (dir !== root && !dir.startsWith(root + path.sep)) return null;
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return null;
  return dir;
}

function progressFileOf(subject, courseId) {
  const safe = String(courseId).replace(/[\\/]/g, '__').replace(/[^\w\u4e00-\u9fa5-]/g, '_');
  return path.join(COURSES_DIR, subject, safe + '.json');
}

function loadProgressFile(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    return { version: 1, book: path.basename(path.dirname(file)).replace(/__/g, '/'), current: null, lessons: {} };
  }
}

function saveProgressFile(file, progress) {
  progress.updated = new Date().toISOString();
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = file + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(progress, null, 2), 'utf8');
  fs.renameSync(tmp, file);
}

function advanceLessonFile(file, progress, lessons) {
  let current = progress.current;
  if (!current || !lessons.includes(current)) current = lessons[0] || null;
  const idx = lessons.indexOf(current);
  const next = idx >= 0 && idx + 1 < lessons.length ? lessons[idx + 1] : null;
  if (progress.lessons[current]) {
    const l = progress.lessons[current];
    if (l.status !== 'learned') {
      l.status = 'learned';
      l.mastery = Math.max(l.mastery || 0, 0.8);
    }
  }
  progress.current = next || current;
  saveProgressFile(file, progress);
  return next;
}

// 章 = 蒸馏目录的一级子目录（第XX章_xxx），课 = 章内 .md 文件（无章目录时直接列文件）
function chaptersOf(courseDir) {
  const out = [];
  for (const e of fs.readdirSync(courseDir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name, 'zh-CN-numeric'))) {
    if (!e.isDirectory() || e.name.startsWith('_')) continue;
    out.push(e.name);
  }
  return out;
}

// 蒸馏驱动课程上下文：进度存 COURSES_DIR（蒸馏目录会被重蒸馏清空，不能写入）
function loadDistilledCourseContext(subject, courseId, message, wantAdvance) {
  const courseDir = resolveDistilledCourse(subject, courseId);
  if (!courseDir) return null;
  const lessons = listLessons(courseDir);
  if (!lessons.length) return null;

  const progressFile = progressFileOf(subject, courseId);
  const progress = loadProgressFile(progressFile);
  let current = progress.current || lessons[0];
  if (wantAdvance && progress.current) {
    const adv = advanceLessonFile(progressFile, progress, lessons);
    if (adv) current = adv;
  }

  const chapters = chaptersOf(courseDir);
  const curChapter = chapters.find((ch) => {
    const chDir = path.join(courseDir, ch);
    return fs.readdirSync(chDir).some((f) => path.join(ch, f).replace(/\\/g, '/') === current || path.join(ch, f) === current);
  });

  const lessonPath = path.join(courseDir, current);
  const lessonContent = fs.existsSync(lessonPath) ? fs.readFileSync(lessonPath, 'utf8') : '';
  const learnedCount = Object.values(progress.lessons || {}).filter((l) => l.status === 'learned').length;

  return {
    courseDir,
    courseName: path.basename(courseDir),
    chapter: curChapter || '未知',
    chapterList: chapters.join('；') || '（无）',
    tocSection: curChapter ? fs.readdirSync(path.join(courseDir, curChapter)).filter((f) => f.endsWith('.md')).sort((a, b) => a.localeCompare(b, 'zh-CN-numeric')).join('；') : '（无）',
    currentLesson: current,
    lessonTitle: lessonTitle(progress, current),
    lessonContent: lessonContent.slice(0, 12000) + (lessonContent.length > 12000 ? '\n…（课文其余部分略）' : ''),
    totalLessons: lessons.length,
    learnedCount,
    progress: {
      current: progress.current,
      totalLessons: lessons.length,
      learnedCount,
    },
  };
}

module.exports = { detectCourseIntent, findCourse, loadCourseContext, listLessons, advanceLesson, extractYamlField, listCourses, listSubjectCourses, resolveDistilledCourse, loadDistilledCourseContext };
