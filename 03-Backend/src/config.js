const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const DATA_DIR = path.join(ROOT, '02-DATA');
const SKILLS_DIR = path.join(ROOT, '01-Skills');

module.exports = {
  PORT: process.env.PORT || 3000,
  RUNTIME_URL: process.env.RUNTIME_URL || 'http://127.0.0.1:8080',
  RUNTIME_MODEL: process.env.RUNTIME_MODEL || 'agnes-2.0-flash',
  ROOT_DIR: ROOT,
  DATA_DIR,
  SKILLS_DIR,
  SUBJECTS_INDEX: path.join(SKILLS_DIR, 'subjects', 'index.json'),
  BOOKS_INDEX: path.join(DATA_DIR, 'books', 'index.json'),
  USERS_DIR: path.join(DATA_DIR, 'users'),
  SESSIONS_DIR: path.join(DATA_DIR, 'sessions'),
  DEFAULT_USER: 'default',
  MAX_CONTEXT_HISTORY: 3,
};