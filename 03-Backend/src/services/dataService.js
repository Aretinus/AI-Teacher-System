const fs = require('fs');
const path = require('path');
const { USERS_DIR, SESSIONS_DIR } = require('../config');

function readJson(filePath, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return fallback;
  }
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

function userDir(userId) {
  return path.join(USERS_DIR, userId);
}

function userFile(userId, name) {
  return path.join(userDir(userId), name);
}

function loadState(userId) {
  return readJson(userFile(userId, 'state.json'), { userId, currentSubject: null, currentGoal: null, knowledgePoints: {}, recentErrors: [] });
}

function saveState(userId, state) {
  writeJson(userFile(userId, 'state.json'), state);
}

function loadProfile(userId) {
  return readJson(userFile(userId, 'profile.json'), { userId, displayName: userId });
}

function loadHistory(userId) {
  return readJson(userFile(userId, 'history.json'), { userId, sessions: [] });
}

function saveHistory(userId, history) {
  writeJson(userFile(userId, 'history.json'), history);
}

function appendHistory(userId, summary) {
  const history = loadHistory(userId);
  history.sessions = [summary, ...history.sessions.filter((s) => s.sessionId !== summary.sessionId)].slice(0, 50);
  saveHistory(userId, history);
  return history;
}

function deleteSession(userId, sessionId) {
  const history = loadHistory(userId);
  const before = history.sessions.length;
  history.sessions = (history.sessions || []).filter((s) => s.sessionId !== sessionId);
  saveHistory(userId, history);
  const file = sessionFile(sessionId);
  if (fs.existsSync(file)) fs.unlinkSync(file);
  return before !== history.sessions.length;
}

function sessionFile(sessionId) {
  const d = new Date();
  const yyyy = String(d.getFullYear());
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  return path.join(SESSIONS_DIR, yyyy, mm, `${sessionId}.json`);
}

function saveSessionDetail(sessionId, data) {
  writeJson(sessionFile(sessionId), data);
}

function loadSessionDetail(sessionId) {
  return readJson(sessionFile(sessionId), null);
}

function newSessionId() {
  const d = new Date();
  const yyyy = String(d.getFullYear());
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const rand = String(Math.floor(Math.random() * 900) + 100);
  return `${yyyy}${mm}${dd}-${rand}`;
}

module.exports = {
  readJson, writeJson, loadState, saveState, loadProfile, loadHistory,
  saveHistory, appendHistory, deleteSession, sessionFile, saveSessionDetail, loadSessionDetail,
  newSessionId, userFile,
};