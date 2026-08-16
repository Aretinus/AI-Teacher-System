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
  const dest = path.join(DISTILLED_DIR, destName);
  fs.rmSync(dest, { recursive: true, force: true });
  fs.cpSync(src, dest, { recursive: true });
  const chapters = fs.existsSync(dest) ? fs.readdirSync(dest).filter((n) => n.includes('第')).length : 0;
  job.book = { title: destName, distilledPath: path.join('distilled', destName), subject: job.subject };
  appendBook(job.book);
  job.log.push(`✅ 蒸馏完成：02-DATA/books/distilled/${destName}/（${chapters} 个章节目录）`);
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