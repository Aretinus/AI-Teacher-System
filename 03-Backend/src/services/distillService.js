const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { SKILLS_DIR, DATA_DIR, ROOT_DIR } = require('../config');
const { saveJob } = require('./logService');

const VENDOR_BLT = path.join(SKILLS_DIR, 'vendor', 'book-learning-tutor');
const PYTHON = path.join(VENDOR_BLT, 'venv_slim', 'Scripts', 'python.exe');
const BOOKS_DIR = path.join(DATA_DIR, 'books');
const BOOKS_INDEX = path.join(BOOKS_DIR, 'index.json');
const DISTILLED_DIR = path.join(BOOKS_DIR, 'distilled');
const TMP_COURSE_DIR = path.join(VENDOR_BLT, '书库');
const FEX_DIR = path.join(ROOT_DIR, '06-Tools', 'formula-extraction');
const SUBJECTS_INDEX = path.join(SKILLS_DIR, 'subjects', 'index.json');
const OCR_STATUS = path.join(BOOKS_DIR, 'raw', '_ocr_status.json');

const BOOK_EXTS = ['.pdf', '.epub', '.djvu', '.mobi', '.azw', '.azw3', '.docx', '.txt', '.cbz'];

const jobs = new Map();

function safeName(name) {
  const s = String(name || '').replace(/[\\/:*?"<>|]/g, '_').trim();
  return s || 'untitled';
}

// 学科 id → 书库顶层目录（raw/ocr 镜像）：优先取 subjects/index.json 的 bookDir；
// 未注册学科（书库实时新增的文件夹）直接把学科名当目录名
function bookDirOf(subject) {
  const id = String(subject || '').trim();
  if (!id) return null;
  try {
    const idx = JSON.parse(fs.readFileSync(SUBJECTS_INDEX, 'utf8'));
    const s = (idx.subjects || []).find((x) => x.id === id);
    if (s && s.bookDir) return s.bookDir;
  } catch (e) { /* 索引缺失时按目录名处理 */ }
  return id;
}

// 书库文件夹名 → 中文名（未注册学科显示用；未收录的文件夹原样显示）
const FOLDER_NAMES = {
  math: '数学',
  physic: '物理',
  physics: '物理',
  chemistry: '化学',
  biology: '生物',
  economics: '经济学',
  literature: '文学',
  philosophy: '哲学',
  history: '历史',
  taoism: '道家',
  confucianism: '儒家',
  buddhism: '佛学',
  traditionalchinesemedicine: '中医',
  psychology: '心理学',
  sociology: '社会学',
  computerScience: '计算机科学',
};

// 书库学科清单（已注册 + raw/ocr/distilled 三层顶层目录实时扫描合并），书籍加工页与主页用
function listLibrarySubjects() {
  let registered = [];
  try {
    registered = JSON.parse(fs.readFileSync(SUBJECTS_INDEX, 'utf8')).subjects || [];
  } catch (e) { /* 无索引时全部视为未注册 */ }
  const out = [];
  const seen = new Set();
  for (const s of registered) {
    out.push({ id: s.id, name: s.name || s.id, bookDir: s.bookDir || null, registered: true });
    seen.add(String(s.id).toLowerCase());
    if (s.bookDir) seen.add(String(s.bookDir).toLowerCase());
  }
  const dirs = new Set();
  for (const layer of ['raw', 'ocr', 'distilled']) {
    let entries;
    try {
      entries = fs.readdirSync(path.join(BOOKS_DIR, layer), { withFileTypes: true });
    } catch (e) {
      continue;
    }
    for (const e of entries) {
      if (e.isDirectory() && !e.name.startsWith('.') && !e.name.startsWith('_')) dirs.add(e.name);
    }
  }
  for (const d of [...dirs].sort()) {
    if (seen.has(d.toLowerCase())) continue;
    const name = FOLDER_NAMES[d.toLowerCase()] || d;
    out.push({ id: d, name, bookDir: d, registered: false });
  }
  return out;
}

// 产物判定：新产物有 progress.json；旧产物无 progress.json，但目录内有 00_/01_… 编号条目（章节目录、目录整理）
function hasDistilledProducts(dest) {
  if (!dest) return false;
  try {
    if (!fs.existsSync(dest)) return false;
    if (fs.existsSync(path.join(dest, 'progress.json'))) return true;
    const items = fs.readdirSync(dest);
    if (!items.length) return false;
    return items.some((n) => /^\d{2}_/.test(n));
  } catch (e) {
    return false;
  }
}

// 与 ocrService 相同的落位判定：单书目录用镜像目录名，多书目录加书名子目录；
// 多书但镜像目录名下已有旧产物时（历史产物为单书镜像名），回退到镜像目录
function distilledInfo(srcDir, relDir, stem) {
  try {
    const destDir = relDir ? path.join(DISTILLED_DIR, relDir) : DISTILLED_DIR;
    const dest = countBooksInDir(srcDir) <= 1 ? destDir : path.join(destDir, safeName(stem));
    const real = dest !== destDir && !hasDistilledProducts(dest) && hasDistilledProducts(destDir) ? destDir : dest;
    return {
      destPath: path.relative(BOOKS_DIR, real).split(path.sep).join('/'),
      distilledDone: hasDistilledProducts(real),
    };
  } catch (e) {
    return { destPath: null, distilledDone: false };
  }
}

// 按学科 + 来源（raw/ocr）扫描书籍：返回按目录分组的清单（folder 为相对学科根的目录路径）
function scanSubjectBooks(subject, src) {
  const srcKey = src === 'ocr' ? 'ocr' : 'raw';
  const bookDir = bookDirOf(subject);
  if (!bookDir) throw new Error('未配置学科的书籍目录（bookDir）');
  const root = path.join(BOOKS_DIR, srcKey, bookDir);
  if (!fs.existsSync(root) || !fs.statSync(root).isDirectory()) {
    throw new Error(`目录不存在：${path.relative(BOOKS_DIR, root).split(path.sep).join('/')}/`);
  }
  const status = (() => {
    try {
      return JSON.parse(fs.readFileSync(OCR_STATUS, 'utf8')) || {};
    } catch (e) {
      return {};
    }
  })();
  const books = [];
  function walk(dir, rel) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.')) continue;
      const full = path.join(dir, entry.name);
      const relFull = rel ? path.join(rel, entry.name) : entry.name;
      if (entry.isDirectory()) {
        walk(full, relFull);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (!BOOK_EXTS.includes(ext)) continue;
        const stem = path.basename(entry.name, ext);
        const relDir = rel ? path.dirname(relFull).replace(/\\/g, '/') : '';
        const srcDir = path.dirname(full);
        const di = distilledInfo(srcDir, relDir, stem);
        let needOcr = false;
        if (srcKey === 'raw' && (ext === '.pdf' || ext === '.djvu')) {
          const kind = (status[full] && status[full].kind) || 'unknown';
          needOcr = kind === 'scanned' || kind === 'partial' || kind === 'unknown';
        }
        const ocrFile = ext === '.pdf' || ext === '.djvu'
          ? path.join(BOOKS_DIR, 'ocr', relDir, ext === '.djvu' ? `${stem}_转PDF_OCR.pdf` : `${stem}_OCR.pdf`)
          : null;
        const ocrDone = !!(ocrFile && fs.existsSync(ocrFile));
        const size = fs.statSync(full).size;
        books.push({
          name: entry.name,
          file: full,
          folder: relDir ? relDir.split('/').slice(1).join('/') : '',
          ext,
          sizeMB: Number((size / 1024 / 1024).toFixed(1)),
          sizeKB: Math.max(1, Math.round(size / 1024)),
          destPath: di.destPath,
          distilledDone: di.distilledDone,
          needOcr,
          ocrDone,
          ocrProductFile: ocrDone ? ocrFile : null,
        });
      }
    }
  }
  walk(root, bookDir);
  return books.sort((a, b) => a.sizeMB - b.sizeMB);
}

function startDistill({ file, name, subject }) {
  const abs = path.resolve(String(file || '').trim());
  if (!fs.existsSync(abs)) throw new Error('文件不存在：' + file);
  const id = 'd' + Date.now();
  const bookName = (name && String(name).trim()) || path.basename(abs, path.extname(abs));
  const job = { id, status: 'running', log: [], startedAt: new Date().toISOString(), book: bookName, subject: subject || null, rawFile: path.basename(abs), rawPath: '' };
  if (abs.toLowerCase().startsWith(BOOKS_DIR.toLowerCase())) job.rawPath = path.relative(BOOKS_DIR, path.dirname(abs));
  jobs.set(id, job);
  runDistill(job, { file: abs, name: bookName }).then(
    () => saveJob('distill', job),
    (e) => {
      job.status = 'error';
      job.error = e.message || String(e);
      job.log.push('✗ ' + (e.message || String(e)));
      saveJob('distill', job);
    }
  );
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
    const sub = job.subject || 'unknown';
    job.log.push(`▶ 开始蒸馏《${bookName}》（学科：${sub}）`);
    job.log.push(`   输入：${file}`);
    const args = ['teach.py', file, '--name', bookName];
    if (job.subject) args.push('--subject', String(job.subject));
    const child = spawn(py, args, {
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
    job.log.push('! 产物目录名与书名不一致，查找本次运行新生成的课程目录…');
    const dirs = fs.existsSync(TMP_COURSE_DIR)
      ? fs.readdirSync(TMP_COURSE_DIR, { withFileTypes: true }).filter((d) => d.isDirectory())
      : [];
    // 批量蒸馏安全：只认本次任务开始后新生成的目录，防止抓到上一本书/历史遗留的产物
    const startedMs = Date.parse(job.startedAt) || 0;
    const recent = dirs
      .filter((d) => fs.statSync(path.join(TMP_COURSE_DIR, d.name)).mtimeMs >= startedMs - 5000)
      .sort((a, b) => fs.statSync(path.join(TMP_COURSE_DIR, b.name)).mtimeMs - fs.statSync(path.join(TMP_COURSE_DIR, a.name)).mtimeMs);
    const latest = recent[0];
    if (!latest) throw new Error(`未在 书库/ 中找到《${bookName}》的课程产物目录（书库/<书名> 不存在，且本次运行期间无新生成目录）`);
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
  cleanupDistillArtifacts(job, destName);
  job.log.push(`✅ 蒸馏完成：${path.relative(BOOKS_DIR, dest)}/（${chapters} 个章节目录）`);
}

// 蒸馏成功（课程已拷入 distilled）后清理过程产物：work/（P2T/质检/精修）、参考/（切章）、书库/（课程已拷走）。
// 失败保留现场排查；清理失败仅记日志，不阻塞结果。
function cleanupDistillArtifacts(job, destName) {
  const targets = [
    path.join(FEX_DIR, 'work', destName),
    path.join(VENDOR_BLT, '参考', destName),
    path.join(TMP_COURSE_DIR, destName),
  ];
  for (const t of targets) {
    try {
      if (!fs.existsSync(t)) continue;
      fs.rmSync(t, { recursive: true, force: true });
      job.log.push(`· 已清理过程产物：${path.relative(ROOT_DIR, t).split(path.sep).join('/')}`);
    } catch (e) {
      job.log.push(`! 清理失败（跳过，不影响结果）：${e.message}`);
    }
  }
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

module.exports = { scanSubjectBooks, startDistill, getJob, appendBook, listLibrarySubjects };