const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { SKILLS_DIR, DATA_DIR } = require('../config');

const VENDOR_BLT = path.join(SKILLS_DIR, 'vendor', 'book-learning-tutor');
const PYTHON = path.join(VENDOR_BLT, 'venv_slim', 'Scripts', 'python.exe');
const BOOKS_DIR = path.join(DATA_DIR, 'books');
const BOOKS_INDEX = path.join(BOOKS_DIR, 'index.json');
const DISTILLED_DIR = path.join(BOOKS_DIR, 'distilled');
const TMP_COURSE_DIR = path.join(VENDOR_BLT, '书库');

const BOOK_EXTS = ['.pdf', '.epub', '.djvu', '.mobi', '.azw', '.azw3', '.docx', '.txt', '.md', '.cbz'];

const jobs = new Map();

function walkBooks(dir, out, depth) {
  if (depth > 4) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkBooks(full, out, depth + 1);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (!BOOK_EXTS.includes(ext)) continue;
      out.push({
        name: entry.name,
        file: full,
        sizeMB: Math.round(fs.statSync(full).size / 1024 / 1024),
      });
    }
  }
}

function scanBookFolder(folder) {
  const dir = path.resolve(String(folder || '').trim());
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
    throw new Error('目录不存在：' + (folder || '（未填写）'));
  }
  const books = [];
  walkBooks(dir, books, 0);
  return books.sort((a, b) => a.sizeMB - b.sizeMB);
}

function startDistill({ file, name, subject }) {
  const abs = path.resolve(String(file || '').trim());
  if (!fs.existsSync(abs)) throw new Error('文件不存在：' + file);
  const id = 'd' + Date.now();
  const job = { id, status: 'running', log: [], startedAt: new Date().toISOString(), book: null, subject: subject || null, rawFile: path.basename(abs), rawPath: '' };
  if (abs.startsWith(BOOKS_DIR)) job.rawPath = path.relative(BOOKS_DIR, path.dirname(abs));
  jobs.set(id, job);
  runDistill(job, { file: abs, name }).catch((e) => {
    job.status = 'error';
    job.log.push('✗ ' + (e.message || String(e)));
  });
  return id;
}

function getJob(id) {
  const j = jobs.get(id);
  if (!j) return null;
  return { id: j.id, status: j.status, log: j.log.slice(-40), book: j.book, startedAt: j.startedAt, error: j.error || null };
}

function runDistill(job, { file, name }) {
  return new Promise((resolve, reject) => {
    const bookName = (name && String(name).trim()) || path.basename(file, path.extname(file));
    const py = fs.existsSync(PYTHON) ? PYTHON : 'python';
    job.log.push(`▶ 开始蒸馏《${bookName}》（本地处理，不联网）`);
    job.log.push(`   输入：${file}`);
    const child = spawn(py, ['teach.py', file, '--name', bookName], {
      cwd: VENDOR_BLT,
      windowsHide: true,
      env: { ...process.env, PYTHONUTF8: '1', PYTHONIOENCODING: 'utf-8' },
    });
    const onLine = (line) => {
      const t = line.toString().trim();
      if (!t) return;
      job.log.push(t);
      if (job.log.length > 300) job.log.splice(0, job.log.length - 300);
    };
    child.stdout.on('data', (c) => String(c).split(/\r?\n/).forEach(onLine));
    child.stderr.on('data', (c) => String(c).split(/\r?\n/).forEach(onLine));
    child.on('error', (e) => reject(e));
    child.on('close', async (code) => {
      if (code !== 0) return reject(new Error(`teach.py 退出码 ${code}`));
      try {
        await finalize(job, bookName);
        job.status = 'done';
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  });
}

function distillDestDir(job) {
  // 源书在 raw/ 或 ocr/ 下：镜像其学科目录结构（distilled/Math/08-…/<书名>/）
  if (job.rawPath) {
    const m = job.rawPath.match(/^(raw|ocr)[\\/](.+)$/);
    if (m) return path.join(DISTILLED_DIR, m[2]);
  }
  // 其他目录的源：按学科分类兜底
  if (job.subject) return path.join(DISTILLED_DIR, job.subject);
  return DISTILLED_DIR;
}

function countBooksInDir(dir) {
  try {
    return fs.readdirSync(dir).filter((n) => BOOK_EXTS.includes(path.extname(n).toLowerCase())).length;
  } catch (e) {
    return 1;
  }
}

function finalize(job, bookName) {
  let src = path.join(TMP_COURSE_DIR, bookName);
  if (!fs.existsSync(src) || !fs.statSync(src).isDirectory()) {
    job.log.push('! 产物目录名与书名不一致，查找最新生成的课程目录…');
    const dirs = fs.existsSync(TMP_COURSE_DIR)
      ? fs.readdirSync(TMP_COURSE_DIR, { withFileTypes: true }).filter((d) => d.isDirectory())
      : [];
    const latest = dirs.sort((a, b) => fs.statSync(path.join(TMP_COURSE_DIR, b.name)).mtimeMs - fs.statSync(path.join(TMP_COURSE_DIR, a.name)).mtimeMs)[0];
    if (!latest) throw new Error('未在 书库/ 中找到课程产物目录');
    src = path.join(TMP_COURSE_DIR, latest.name);
  }
  const destName = path.basename(src);
  const destDir = distillDestDir(job);
  // 单书目录直接用镜像目录名（用户举例的粒度）；多书目录加书名子目录防覆盖
  const srcDir = job.rawPath ? path.join(BOOKS_DIR, job.rawPath) : null;
  const singleBook = srcDir && countBooksInDir(srcDir) <= 1;
  const dest = singleBook ? destDir : path.join(destDir, destName);
  fs.rmSync(dest, { recursive: true, force: true });
  fs.cpSync(src, dest, { recursive: true });
  const chapters = fs.existsSync(dest) ? fs.readdirSync(dest).filter((n) => n.includes('第')).length : 0;
  const rel = path.relative(BOOKS_DIR, dest).split(path.sep).join('/');
  job.book = { title: destName, distilledPath: rel.startsWith('distilled/') ? rel : 'distilled/' + rel, subject: job.subject };
  appendBook(job.book);
  const bindMsg = bindCourseToManifest(job, dest);
  if (bindMsg) job.log.push('· ' + bindMsg);
  job.log.push(`✅ 蒸馏完成：${path.relative(BOOKS_DIR, dest)}/（${chapters} 个章节目录）`);
}

// 蒸馏产物自动绑定到对应学科的技能 manifest（courseDir）。
// 无学科 / 学科下无技能 / 已有有效课程绑定 → 保持现状（暂空），后续蒸馏会自动补上。
function bindCourseToManifest(job, dest) {
  const subject = job.subject && String(job.subject).trim();
  if (!subject) return null;
  const subjDir = path.join(SKILLS_DIR, 'subjects', subject);
  if (!fs.existsSync(subjDir) || !fs.statSync(subjDir).isDirectory()) return null;
  let skill = null;
  try {
    const idx = JSON.parse(fs.readFileSync(path.join(SKILLS_DIR, 'subjects', 'index.json'), 'utf8'));
    const s = (idx.subjects || []).find((x) => x.id === subject);
    if (s && s.defaultSkill) skill = s.defaultSkill;
  } catch (e) { /* 索引读失败则回退目录扫描 */ }
  if (!skill) {
    const dirs = fs.readdirSync(subjDir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith('_') && fs.existsSync(path.join(subjDir, d.name, 'manifest.yaml')));
    if (dirs.length) skill = dirs[0].name;
  }
  if (!skill) return null;
  const skillDir = path.join(subjDir, skill);
  const manifestPath = path.join(skillDir, 'manifest.yaml');
  if (!fs.existsSync(manifestPath)) return null;
  const text0 = fs.readFileSync(manifestPath, 'utf8');
  const rel = path.relative(skillDir, dest).split(path.sep).join('/');
  const courseLine = `  courseDir: ${rel}`;
  let text = text0;
  const existing = /^\s*courseDir:\s*(.+)$/m.exec(text);
  if (existing) {
    const target = path.resolve(skillDir, existing[1].trim());
    if (fs.existsSync(path.join(target, 'progress.json'))) {
      return `技能「${skill}」已有有效课程绑定（${existing[1].trim()}），保留现有`;
    }
    text = text.replace(/^\s*courseDir:\s*.+$/m, courseLine);
  } else {
    const dataIdx = text.indexOf('\ndata:');
    if (dataIdx >= 0) {
      const lineEnd = text.indexOf('\n', dataIdx + 1);
      text = text.slice(0, lineEnd + 1) + courseLine + '\n' + text.slice(lineEnd + 1);
    } else {
      text = text.replace(/\s*$/, '') + '\n' + courseLine + '\n';
    }
  }
  fs.writeFileSync(manifestPath, text, 'utf8');
  return `已自动绑定课程到技能「${skill}」：${rel}`;
}

function appendBook(book) {
  const index = JSON.parse(fs.readFileSync(BOOKS_INDEX, 'utf8'));
  index.books = index.books || [];
  if (index.books.some((b) => b.title === book.title)) {
    const i = index.books.findIndex((b) => b.title === book.title);
    index.books[i] = { ...index.books[i], subject: book.subject || index.books[i].subject, distilledPath: book.distilledPath };
  } else {
    const id = String(book.title).toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, '-').replace(/^-+|-+$/g, '') || ('book-' + Date.now());
    index.books.push({ id, title: book.title, subject: book.subject, rawPath: '', rawFile: '', distilledPath: book.distilledPath });
  }
  fs.writeFileSync(BOOKS_INDEX, JSON.stringify(index, null, 2), 'utf8');
}

module.exports = { scanBookFolder, startDistill, getJob, appendBook };