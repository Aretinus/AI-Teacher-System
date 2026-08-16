const fs = require('fs');
const path = require('path');
const { DATA_DIR, RUNTIME_MODEL } = require('../config');

const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');

const DEFAULTS = { provider: 'runtime', baseUrl: '', apiKey: '', modelName: RUNTIME_MODEL };

function loadSettings() {
  try {
    return { ...DEFAULTS, ...JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf8')) };
  } catch (e) {
    return { ...DEFAULTS };
  }
}

function saveSettings(next) {
  const merged = { ...loadSettings(), ...next };
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(merged, null, 2), 'utf8');
  return merged;
}

module.exports = { loadSettings, saveSettings, SETTINGS_FILE };