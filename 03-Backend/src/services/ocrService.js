const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { DATA_DIR, SKILLS_DIR } = require('../config');

const TOOLKIT_DIR = path.join(SKILLS_DIR, '..', '06-Tools', 'ocr-toolkit');
const VENV_PY = path.join(TOOLKIT_DIR, 'venv', 'Scripts', 'python.exe');
const OCR_BOOK_PY = path.join(TOOLKIT_DIR, 'ocr_book.py');
const DJVU_TO_PDF_PY = path.join(TOOLKIT_DIR, 'djvu_to_pdf.py');
const PROBE_PY = path.join(TOOLKIT_DIR, 'probe_textlayer.py');
const BOOKS_DIR = path.join(DATA_DIR, 'books');
const RAW_DIR = path.join(BOOKS_DIR, 'raw');
const OCR_DIR = path.join(BOOKS_DIR, 'ocr');
const OCR_STATUS = path.join(RAW_DIR, '_ocr_status.json');
const SUBJECTS_INDEX = path.join(SKILLS_DIR, 'subjects', 'index.json');

// 学科 id → 书库顶层目录（raw/ocr 镜像），取自 subjects/index.json 的 bookDir
function bookDirOf(subject) {
  const id = String(subject || '').trim();
  if (!id) return null;
  try {
    const idx = JSON.parse(fs.readFileSync(SUBJECTS_INDEX, 'utf8'));
    const s = (idx.subjects || []).find((x) => x.id === id);
    return (s && s.bookDir) || null;
  } catch (e) {
    return null;
  }
}

const OCR_EXTS = ['.pdf', '.djvu'];
const BOOK_EXTS = ['.pdf', '.epub', '.djvu', '.mobi', '.azw', '.azw3', '.docx', '.txt', '.cbz'];
const DISTILLED_DIR = path.join(BOOKS_DIR, 'distilled');

const jobs = new Map();

function safeName(name) {
  const s = String(name || '').replace(/[\\/:*?"<>|]/g, '_').trim();
  return s || 'untitled';
}

function countBooks(dir) {
  try {
    return fs.readdirSync(dir).filter((n) => BOOK_EXTS.includes(path.extname(n).toLowerCase())).length;
  } catch (e) {
    return 1;
  }
}

// 与 distillService.finalize 相同的落位逻辑：单书目录用镜像目录名，多书目录加书名子目录
function distilledInfo(srcDir, relDir, stem) {
  try {
    const destDir = relDir ? path.join(DISTILLED_DIR, relDir) : DISTILLED_DIR;
    const dest = countBooks(srcDir) <= 1 ? destDir : path.join(destDir, safeName(stem));
    return {
      destPath: path.relative(BOOKS_DIR, dest).split(path.sep).join('/'),
      distilledDone: fs.existsSync(path.join(dest, 'progress.json')),
    };
  } catch (e) {
    return { destPath: null, distilledDone: false };
  }
}

function loadStatus() {
  try {
    return JSON.parse(fs.readFileSync(OCR_STATUS, 'utf8')) || {};
  } catch (e) {
    return {};
  }
}

function saveStatus(status) {
  try {
    fs.writeFileSync(OCR_STATUS, JSON.stringify(status, null, 1), 'utf8');
  } catch (e) { /* best-effort */ }
}

function probeTextLayers(files) {
  if (!files.length) return {};
  const py = fs.existsSync(VENV_PY) ? VENV_PY : 'python';
  const { spawnSync } = require('child_process');
  const r = spawnSync(py, [PROBE_PY], {
    input: files.map((f) => f.file).join('\n') + '\n',
    encoding: 'utf8',
    timeout: 120000,
    windowsHide: true,
    env: { ...process.env, PYTHONUTF8: '1', PYTHONIOENCODING: 'utf-8' },
  });
  const out = {};
  if (r.error || r.status !== 0) return out;
  for (const line of String(r.stdout || '').split('\n')) {
    const t = line.trim();
    if (!t) continue;
    try {
      const d = JSON.parse(t);
      out[d.path] = d;
    } catch (e) { /* skip */ }
  }
  return out;
}

function ocrProduct(relDir, stem, ext) {
  const base = path.join(OCR_DIR, relDir);
  const main = ext === '.djvu'
    ? path.join(base, `${stem}_转PDF.pdf`)
    : path.join(base, `${stem}_OCR.pdf`);
  const cache = ext === '.djvu' ? null : path.join(base, `${stem}_ocr_cache.json`);
  return { main, cache };
}

function cachePages(cacheFile) {
  if (!cacheFile || !fs.existsSync(cacheFile)) return 0;
  try {
    return Object.keys(JSON.parse(fs.readFileSync(cacheFile, 'utf8'))).length;
  } catch (e) {
    return 0;
  }
}

function scanRaw(subject) {
  const bookDir = bookDirOf(subject);
  if (!bookDir) return [];
  const root = path.join(RAW_DIR, bookDir);
  if (!fs.existsSync(root) || !fs.statSync(root).isDirectory()) return [];
  const files = [];

  function walk(dir, rel) {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch (e) {
      return;
    }
    for (const e of entries) {
      if (e.name.startsWith('.')) continue;
      const full = path.join(dir, e.name);
      const relFull = rel ? path.join(rel, e.name) : e.name;
      if (e.isDirectory()) {
        walk(full, relFull);
      } else if (e.isFile()) {
        const ext = path.extname(e.name).toLowerCase();
        if (!OCR_EXTS.includes(ext)) continue;
        const stem = path.basename(e.name, ext);
        const relDir = rel ? path.dirname(relFull).replace(/\\/g, '/') : '';
        const prod = ocrProduct(relDir, stem, ext);
        const done = fs.existsSync(prod.main);
        const srcDir = done ? path.join(OCR_DIR, relDir) : path.dirname(full);
        const di = distilledInfo(srcDir, relDir, stem);
        files.push({
          name: e.name,
          file: full,
          relPath: relFull.split(path.sep).join('/'),
          folder: relDir ? relDir.split('/').slice(1).join('/') : '',
          ext,
          sizeMB: Math.round(fs.statSync(full).size / 1024 / 1024),
          ocrDone: done,
          ocrProduct: done ? path.relative(BOOKS_DIR, prod.main).split(path.sep).join('/') : null,
          ocrProductFile: done ? prod.main : null,
          ocrCachePages: cachePages(prod.cache),
          destPath: di.destPath,
          distilledDone: di.distilledDone,
        });
      }
    }
  }

  walk(root, bookDir);
  const status = loadStatus();
  const toProbe = files.filter((f) => !status[f.file] || !status[f.file].kind);
  const probes = probeTextLayers(toProbe);
  const merged = { ...status };
  for (const f of toProbe) {
    if (probes[f.file]) merged[f.file] = probes[f.file];
  }
  saveStatus(merged);
  for (const f of files) {
    if (f.ext === '.djvu') {
      f.textLayer = 'djvu';
      f.needOcr = false;
      continue;
    }
    const p = merged[f.file];
    const kind = p && p.kind ? p.kind : 'unknown';
    f.textLayer = kind;
    f.needOcr = kind === 'scanned' || kind === 'partial' || kind === 'unknown';
  }
  return files.sort((a, b) => a.sizeMB - b.sizeMB);
}

function startOcr({ file }) {
  const abs = path.resolve(String(file || '').trim());
  if (!fs.existsSync(abs)) throw new Error('文件不存在：' + file);
  const ext = path.extname(abs).toLowerCase();
  if (!OCR_EXTS.includes(ext)) throw new Error(`不支持的格式：${ext}（仅支持 pdf/djvu）`);
  const id = 'o' + Date.now();
  const job = { id, status: 'running', log: [], startedAt: new Date().toISOString(), product: null, error: null };
  jobs.set(id, job);
  runOcr(job, { file: abs, ext }).catch((e) => {
    job.status = 'error';
    job.error = e.message || String(e);
    job.log.push('✗ ' + (e.message || String(e)));
  });
  return id;
}

function getOcrJob(id) {
  const j = jobs.get(id);
  if (!j) return null;
  return { id: j.id, status: j.status, log: j.log.slice(-40), startedAt: j.startedAt, product: j.product || null, error: j.error || null };
}

function runOcr(job, { file, ext }) {
  return new Promise((resolve, reject) => {
    const py = fs.existsSync(VENV_PY) ? VENV_PY : 'python';
    const script = ext === '.djvu' ? DJVU_TO_PDF_PY : OCR_BOOK_PY;
    job.log.push(`▶ 开始 OCR《${path.basename(file)}》（本地处理，不联网）`);
    const child = spawn(py, [script, file], {
      cwd: TOOLKIT_DIR,
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
    child.on('close', (code) => {
      if (code !== 0) return reject(new Error(`OCR 脚本退出码 ${code}`));
      const rel = path.relative(RAW_DIR, path.dirname(file));
      const stem = path.basename(file, path.extname(file));
      const prod = ocrProduct(rel, stem, ext);
      const relProd = path.relative(BOOKS_DIR, prod.main).split(path.sep).join('/');
      job.product = relProd;
      job.log.push(`✅ OCR 完成：${relProd}`);
      resolve();
    });
  });
}

module.exports = { scanRaw, startOcr, getOcrJob };