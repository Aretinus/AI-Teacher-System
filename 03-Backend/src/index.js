const express = require('express');
const fs = require('fs');
const path = require('path');
const { PORT, RUNTIME_MODEL, DEFAULT_USER } = require('./config');
const { chatCompletions, health } = require('./runtimeClient');
const { handleChat, persistAfterChat } = require('./services/chatService');
const { loadSubjects } = require('./services/routerService');
const { loadState, saveState, loadProfile, loadHistory, saveSessionDetail, loadSessionDetail, deleteSession } = require('./services/dataService');
const { loadSettings, saveSettings } = require('./services/settingsService');
const { refresh } = require('./services/refreshService');
const { scanSubjectBooks, startDistill, getJob } = require('./services/distillService');
const { scanRaw, startOcr, getOcrJob } = require('./services/ocrService');
const { listStyles } = require('./services/stylesService');
const { listCourses, listSubjectCourses } = require('./services/courseService');
const { externalRequest } = require('./runtimeClient');

const UPLOAD_DIR = path.join(__dirname, '..', '..', '02-DATA', 'uploads');

const app = express();
app.use(express.json({ limit: '12mb' }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    console.log(`[req] ${req.method} ${req.url} -> ${res.statusCode} (${Date.now() - start}ms)`);
  });
  next();
});

app.get('/api/health', async (req, res) => {
  const rt = await health();
  res.json({ status: 'ok', runtime: rt || 'unreachable' });
});

app.get('/api/subjects', (req, res) => {
  res.json({ subjects: loadSubjects() });
});

app.get('/api/styles', (req, res) => {
  res.json({ styles: listStyles() });
});

app.get('/api/settings', (req, res) => {
  res.json(loadSettings());
});

app.put('/api/settings', (req, res) => {
  const merged = saveSettings(req.body || {});
  res.json({ ok: true, settings: merged });
});

app.post('/api/settings/test', async (req, res) => {
  const { provider, baseUrl, apiKey, modelName } = req.body || {};
  if (provider !== 'runtime') {
    if (!baseUrl || !apiKey) return res.json({ ok: false, error: '请填写 baseUrl 与 API Key' });
    try {
      const r = await externalRequest(
        [{ role: 'user', content: 'ping' }],
        { model: modelName || 'gpt-4o-mini', apiKey, baseUrl, stream: false }
      );
      const content = (r.response && r.response.content || '').trim();
      return res.json({ ok: true, detail: content ? content.slice(0, 80) : '连接成功' });
    } catch (e) {
      return res.json({ ok: false, error: e.message });
    }
  }
  const { health } = require('./runtimeClient');
  const rt = await health();
  res.json(rt ? { ok: true, detail: `本地模型 ${rt.version || ''}` } : { ok: false, error: '本地运行时未启动（8080）' });
});

app.get('/api/users/:userId/state', (req, res) => {
  res.json(loadState(req.params.userId || DEFAULT_USER));
});

app.put('/api/users/:userId/state', (req, res) => {
  saveState(req.params.userId || DEFAULT_USER, req.body);
  res.json({ ok: true });
});

app.get('/api/users/:userId/profile', (req, res) => {
  res.json(loadProfile(req.params.userId || DEFAULT_USER));
});

app.get('/api/users/:userId/history', (req, res) => {
  res.json(loadHistory(req.params.userId || DEFAULT_USER));
});

app.get('/api/sessions/:sessionId', (req, res) => {
  const detail = loadSessionDetail(req.params.sessionId);
  if (!detail) return res.status(404).json({ error: 'session not found' });
  res.json(detail);
});

app.delete('/api/sessions/:sessionId', (req, res) => {
  const ok = deleteSession(req.query.userId || DEFAULT_USER, req.params.sessionId);
  res.json({ ok });
});

fs.mkdirSync(UPLOAD_DIR, { recursive: true });
app.use('/uploads', express.static(UPLOAD_DIR));

app.post('/api/books/scan', (req, res) => {
  try {
    const { subject, src } = req.body || {};
    res.json({ books: scanSubjectBooks(subject, src) });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.post('/api/books/distill', (req, res) => {
  try {
    const { file, name, subject } = req.body || {};
    if (!file) return res.status(400).json({ error: 'file 必填' });
    const jobId = startDistill({ file, name, subject });
    res.json({ jobId });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.get('/api/books/distill/:jobId', (req, res) => {
  const j = getJob(req.params.jobId);
  if (!j) return res.status(404).json({ error: 'job not found' });
  res.json(j);
});

app.get('/api/books/courses', (req, res) => {
  res.json({ courses: listCourses() });
});

// 课程 = 蒸馏产物 distilled/{bookDir}/<一级目录>（数学=分类目录，物理=整本大书）
app.get('/api/courses', (req, res) => {
  const subject = req.query.subject;
  if (!subject) return res.status(400).json({ error: 'subject is required' });
  res.json({ courses: listSubjectCourses(subject) });
});

app.post('/api/ocr/scan', (req, res) => {
  try {
    res.json({ books: scanRaw((req.body || {}).subject || '') });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.post('/api/ocr/start', (req, res) => {
  try {
    const { file } = req.body || {};
    if (!file) return res.status(400).json({ error: 'file 必填' });
    const jobId = startOcr({ file });
    res.json({ jobId });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.get('/api/ocr/job/:jobId', (req, res) => {
  const j = getOcrJob(req.params.jobId);
  if (!j) return res.status(404).json({ error: 'job not found' });
  res.json(j);
});

app.post('/api/upload', (req, res) => {
  const { name, data } = req.body || {};
  if (!name || !data) return res.status(400).json({ error: 'name and data (base64) required' });
  const buf = Buffer.from(String(data), 'base64');
  if (buf.length > 8 * 1024 * 1024) return res.status(413).json({ error: 'file too large (max 8MB)' });
  const safe = path.basename(String(name)).replace(/[^\w.\-\u4e00-\u9fa5]/g, '_');
  const file = `${Date.now()}_${safe}`;
  fs.writeFileSync(path.join(UPLOAD_DIR, file), buf);
  res.json({ url: `/uploads/${file}`, name: safe });
});

app.post('/api/chat', async (req, res) => {
  const { userId = DEFAULT_USER, subject = null, message, conversationId, style, course } = req.body || {};
  if (!message) return res.status(400).json({ error: 'message is required' });

  const prepared = await handleChat({ userId, subject, message, conversationId, stream: false, style, course });
  if (prepared.error) return res.status(400).json(prepared);

  const { sessionId, routeInfo, messages, userMessage } = prepared;
  try {
    const response = await chatCompletions(messages, { model: RUNTIME_MODEL, stream: false });
    const content = response?.response?.content || response?.raw || '（空响应）';
    const result = await persistAfterChat({ userId, sessionId, routeInfo, userMessage, rawResponse: content });
    res.json({ sessionId, subject: routeInfo.subject, reply: result.replyContent, evaluation: result.parsed?.evaluation || null, state: result.nextState });
  } catch (e) {
    res.status(502).json({ error: e.message });
  }
});

app.post('/api/chat/stream', async (req, res) => {
  const { userId = DEFAULT_USER, subject = null, message, conversationId, style, course } = req.body || {};
  if (!message) return res.status(400).json({ error: 'message is required' });

  const prepared = await handleChat({ userId, subject, message, conversationId, stream: true, style, course });
  if (prepared.error) return res.status(400).json(prepared);

  const { sessionId, routeInfo, messages, userMessage } = prepared;
  const detail = loadSessionDetailSafe(sessionId);
  detail.subject = routeInfo.subject;
  detail.messages.push(userMessage);
  saveSessionDetail(sessionId, detail);

  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  res.write(`event: session\ndata: ${JSON.stringify({ sessionId, subject: routeInfo.subject })}\n\n`);

  try {
    const { stream } = await chatCompletions(messages, { model: RUNTIME_MODEL, stream: true });
    let full = '';
    stream.setEncoding('utf8');
    stream.on('data', (chunk) => {
      for (const line of chunk.split('\n')) {
        if (!line.startsWith('data:')) continue;
        const payload = line.slice(5).trim();
        if (payload === '[DONE]') continue;
        try {
          const evt = JSON.parse(payload);
          if (evt.type === 'response.output_text.delta') {
            full += evt.delta || '';
            res.write(`event: delta\ndata: ${JSON.stringify({ delta: evt.delta || '' })}\n\n`);
          } else if (evt.type === 'response.completed') {
            full += evt.response?.content || '';
          }
        } catch (e) { /* ignore malformed */ }
      }
    });
    stream.on('end', async () => {
      const result = await persistAfterChat({ userId, sessionId, routeInfo, userMessage, rawResponse: full });
      res.write(`event: done\ndata: ${JSON.stringify({ evaluation: result.parsed?.evaluation || null })}\n\n`);
      res.end();
    });
    stream.on('error', (e) => {
      res.write(`event: error\ndata: ${JSON.stringify({ error: e.message })}\n\n`);
      res.end();
    });
  } catch (e) {
    res.write(`event: error\ndata: ${JSON.stringify({ error: e.message })}\n\n`);
    res.end();
  }
});

function loadSessionDetailSafe(sessionId) {
  try {
    return loadSessionDetail(sessionId) || { sessionId, messages: [] };
  } catch (e) {
    return { sessionId, messages: [] };
  }
}

app.listen(PORT, () => {
  console.log(`[backend] listening on http://127.0.0.1:${PORT}`);
});

// 启动时扫描学科/技能目录并重建索引（新增学科/技能后重启后端即生效）
try {
  const r = refresh();
  console.log(`[subjects] 索引已更新：${r.totalSubjects} 个学科`);
} catch (e) {
  console.warn('[subjects] 索引刷新失败（忽略）：' + e.message);
}