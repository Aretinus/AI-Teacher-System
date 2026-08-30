const fs = require('fs');
const path = require('path');
const { DATA_DIR, RUNTIME_MODEL } = require('../config');

const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');

// 默认配置 = Agnes（OpenAI 兼容），apiKey 为空时由前端引导用户去设置页填写
const DEFAULT_PROFILE = { id: 'agnes', name: 'Agnes', provider: 'openai', baseUrl: 'https://api.agnes-ai.cn/v1', apiKey: '', modelName: 'agnes-2.5-flash' };

function genId(prefix) {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}

function normalizeProfiles(list) {
  const seen = new Set();
  const out = [];
  for (const p of (list || [])) {
    const profile = {
      id: p.id || genId('p'),
      name: String(p.name || p.provider || '未命名配置'),
      provider: ['runtime', 'openai', 'anthropic'].includes(p.provider) ? p.provider : 'runtime',
      baseUrl: p.baseUrl || '',
      apiKey: p.apiKey || '',
      modelName: p.modelName || RUNTIME_MODEL,
    };
    if (seen.has(profile.id)) continue;
    seen.add(profile.id);
    out.push(profile);
  }
  if (!out.length) out.push({ ...DEFAULT_PROFILE });
  return out;
}

// 兼容迁移：旧格式（顶层 provider/baseUrl/...）转成单个 profile
function migrate(raw) {
  if (raw && Array.isArray(raw.profiles)) {
    return {
      activeProfileId: raw.activeProfileId || (raw.profiles[0] && raw.profiles[0].id) || '',
      profiles: normalizeProfiles(raw.profiles),
    };
  }
  const legacy = { ...DEFAULT_PROFILE, ...raw };
  return {
    activeProfileId: legacy.id,
    profiles: normalizeProfiles([legacy]),
  };
}

// 本机私有字段（如 dbPassword）不经过设置页 UI，读写 settings.json 时原样保留
const LOCAL_KEYS = ['dbPassword'];

function extractLocal(raw) {
  const local = {};
  if (raw && typeof raw === 'object') {
    for (const k of LOCAL_KEYS) {
      if (raw[k] !== undefined) local[k] = raw[k];
    }
  }
  return local;
}

function loadRaw() {
  try {
    return JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf8'));
  } catch (e) {
    return null;
  }
}

// 返回展平的当前配置（兼容 runtimeClient 与前端旧用法）+ profiles 列表
function loadSettings() {
  const { activeProfileId, profiles } = migrate(loadRaw());
  const active = profiles.find((p) => p.id === activeProfileId) || profiles[0];
  return { ...active, profiles, activeProfileId: active.id };
}

// 支持两种写法：
//  1) 新版：{ profiles: [...], activeProfileId } → 整体替换
//  2) 旧版：{ provider/baseUrl/apiKey/modelName/name } → 合并进当前激活配置
function saveSettings(next) {
  const local = extractLocal(loadRaw());
  if (next && Array.isArray(next.profiles)) {
    const { activeProfileId, profiles } = migrate(next);
    const data = { ...local, activeProfileId, profiles };
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(data, null, 2), 'utf8');
    const active = profiles.find((p) => p.id === activeProfileId) || profiles[0];
    return { ...active, profiles, activeProfileId: active.id };
  }
  const raw = loadRaw();
  const { activeProfileId, profiles } = migrate(raw);
  const active = profiles.find((p) => p.id === activeProfileId) || profiles[0];
  const merged = { ...active, ...next };
  const updated = normalizeProfiles(profiles.map((p) => (p.id === merged.id ? merged : p)));
  const data = { ...local, activeProfileId: merged.id, profiles: updated };
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(data, null, 2), 'utf8');
  const act = updated.find((p) => p.id === merged.id) || updated[0];
  return { ...act, profiles: updated, activeProfileId: act.id };
}

module.exports = { loadSettings, saveSettings, SETTINGS_FILE };