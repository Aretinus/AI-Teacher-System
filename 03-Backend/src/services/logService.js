const fs = require('fs');
const path = require('path');
const { DATA_DIR } = require('../config');

const LOGS_DIR = path.join(DATA_DIR, 'logs');

function safeName(name) {
  const s = String(name || '').replace(/[\\/:*?"<>|]/g, '_').trim();
  return s || 'untitled';
}

function typeDir(type, subject) {
  const t = type === 'ocr' ? 'ocr' : 'distill';
  const sub = safeName(subject || 'all');
  return path.join(LOGS_DIR, t, sub);
}

// 归档一个已完成/失败的 job：distill/ocr 共用（job 需含 id/status/log/startedAt/book/subject）
function saveJob(type, job) {
  try {
    const dir = typeDir(type, job.subject);
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, `${String(job.id).replace(/[^\w.-]/g, '_')}.json`);
    const record = {
      id: job.id,
      type,
      subject: job.subject || null,
      book: job.book || null,
      startedAt: job.startedAt || null,
      endedAt: new Date().toISOString(),
      status: job.status,
      error: job.error || null,
      log: (job.log || []).slice(-500),
    };
    fs.writeFileSync(file, JSON.stringify(record, null, 2), 'utf8');
  } catch (e) {
    console.error('[logs] save fail:', e.message);
  }
}

function listLogs(type, subject) {
  const root = path.join(LOGS_DIR, type);
  if (!fs.existsSync(root)) return [];
  const out = [];
  const collect = (dir) => {
    let files;
    try {
      files = fs.readdirSync(dir);
    } catch (e) {
      return;
    }
    for (const f of files) {
      if (!f.endsWith('.json')) continue;
      try {
        const d = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
        out.push({
          id: d.id || f.replace(/\.json$/, ''),
          file: f,
          type,
          subject: d.subject || null,
          book: d.book || null,
          startedAt: d.startedAt,
          endedAt: d.endedAt,
          status: d.status,
          error: d.error || null,
          lines: (d.log || []).length,
        });
      } catch (e) { /* skip corrupt */ }
    }
  };
  if (subject) {
    collect(typeDir(type, subject));
  } else {
    for (const sub of fs.readdirSync(root)) {
      collect(path.join(root, sub));
    }
  }
  return out.sort((a, b) => String(b.endedAt || '').localeCompare(String(a.endedAt || '')));
}

function getLog(type, id) {
  if (!/^[\w.-]+$/.test(String(id || ''))) return null;
  const root = path.join(LOGS_DIR, type);
  if (!fs.existsSync(root)) return null;
  for (const sub of fs.readdirSync(root)) {
    const file = path.join(root, sub, `${id}.json`);
    if (fs.existsSync(file)) {
      try {
        return JSON.parse(fs.readFileSync(file, 'utf8'));
      } catch (e) {
        return null;
      }
    }
  }
  return null;
}

module.exports = { saveJob, listLogs, getLog, LOGS_DIR };