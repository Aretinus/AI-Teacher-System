const fs = require('fs');
const path = require('path');
const { SKILLS_DIR } = require('../config');

const STYLES_DIR = path.join(SKILLS_DIR, 'styles');

// 实时扫描 styles/*.md：新增风格文件无需重启后端即可出现在 /api/styles 与对话注入中
function listStyles() {
  const out = [];
  try {
    for (const f of fs.readdirSync(STYLES_DIR)) {
      if (!f.endsWith('.md')) continue;
      const id = f.slice(0, -3);
      const content = fs.readFileSync(path.join(STYLES_DIR, f), 'utf8');
      const lines = content.split(/\r?\n/);
      const name = (lines[0] || '').replace(/^#\s*/, '').trim() || id;
      let desc = '';
      for (let i = 1; i < lines.length; i++) {
        const t = lines[i].trim();
        if (!t) continue;
        desc = t;
        break;
      }
      out.push({ id, name, desc });
    }
  } catch (e) { /* ignore */ }
  return out;
}

function loadStyle(id) {
  const safe = String(id || '').replace(/[^\w\u4e00-\u9fa5-]/g, '');
  const p = path.join(STYLES_DIR, safe + '.md');
  try {
    return fs.readFileSync(p, 'utf8');
  } catch (e) {
    return null;
  }
}

module.exports = { listStyles, loadStyle };
