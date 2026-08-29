const express = require('express');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { PORT, RUNTIME_MODEL, DEFAULT_USER } = require('./config');
const { chatCompletions, health } = require('./runtimeClient');
const { handleChat, persistAfterChat } = require('./services/chatService');
const { loadSubjects } = require('./services/routerService');
const { loadState, saveState, loadProfile, loadHistory, saveSessionDetail, loadSessionDetail, deleteSession } = require('./services/dataService');
const { loadSettings, saveSettings } = require('./services/settingsService');
const { refresh } = require('./services/refreshService');
const { scanSubjectBooks, startDistill, getJob, listLibrarySubjects } = require('./services/distillService');
const { scanRaw, startOcr, getOcrJob } = require('./services/ocrService');
const { listLogs, getLog } = require('./services/logService');
const { listStyles } = require('./services/stylesService');
const { listCourses, listSubjectCourses } = require('./services/courseService');
const { externalRequest, anthropicRequest } = require('./runtimeClient');
const { spawn } = require('child_process');

const UPLOAD_DIR = path.join(__dirname, '..', '..', '02-DATA', 'uploads');

// Edge TTS 音色（key → edge 全名）
const TTS_VOICES = {
  'xiaoxiao': 'zh-CN-XiaoxiaoNeural',
  'xiaoyi': 'zh-CN-XiaoyiNeural',
  'yunxi': 'zh-CN-YunxiNeural',
  'yunjian': 'zh-CN-YunjianNeural',
  'yunyang': 'zh-CN-YunyangNeural',
  'yunfeng': 'zh-CN-YunfengNeural',
  'yunjie': 'zh-CN-YunjieNeural',
  'yunhao': 'zh-CN-YunhaoNeural',
  'yunze': 'zh-CN-YunzeNeural',
  'xiaochen': 'zh-CN-XiaochenNeural',
  'xiaohan': 'zh-CN-XiaohanNeural',
  'xiaomo': 'zh-CN-XiaomoNeural',
  'xiaorui': 'zh-CN-XiaoruiNeural',
  'xiaoxuan': 'zh-CN-XiaoxuanNeural',
  'xiaoyan': 'zh-CN-XiaoyanNeural',
  'xiaoyou': 'zh-CN-XiaoyouNeural',
  'xiaozhen': 'zh-CN-XiaozhenNeural',
  'xiaoshuang': 'zh-CN-XiaoshuangNeural',
  'xiaobei': 'zh-CN-liaoning-XiaobeiNeural',
  'xiaoni': 'zh-CN-shaanxi-XiaoniNeural',
  'yunxia': 'zh-CN-YunxiaNeural',
  'yunye': 'zh-CN-YunyeNeural',
};
const TTS_VOICE_LABELS = [
  { key: 'xiaoxiao', name: '晓晓', label: '女声 · 温柔甜美', voice: 'zh-CN-XiaoxiaoNeural' },
  { key: 'xiaoyi', name: '晓伊', label: '女声 · 活泼亲切', voice: 'zh-CN-XiaoyiNeural' },
  { key: 'xiaochen', name: '晓辰', label: '女声 · 温柔', voice: 'zh-CN-XiaochenNeural' },
  { key: 'xiaohan', name: '晓涵', label: '女声 · 温和', voice: 'zh-CN-XiaohanNeural' },
  { key: 'xiaomo', name: '晓墨', label: '女声 · 活泼', voice: 'zh-CN-XiaomoNeural' },
  { key: 'xiaorui', name: '晓睿', label: '女声 · 成熟', voice: 'zh-CN-XiaoruiNeural' },
  { key: 'xiaoxuan', name: '晓萱', label: '女声 · 亲切', voice: 'zh-CN-XiaoxuanNeural' },
  { key: 'xiaoyan', name: '晓颜', label: '女声 · 严谨', voice: 'zh-CN-XiaoyanNeural' },
  { key: 'xiaozhen', name: '晓甄', label: '女声 · 知性', voice: 'zh-CN-XiaozhenNeural' },
  { key: 'xiaoyou', name: '晓悠', label: '女声 · 儿童', voice: 'zh-CN-XiaoyouNeural' },
  { key: 'xiaoshuang', name: '晓双', label: '女声 · 童声', voice: 'zh-CN-XiaoshuangNeural' },
  { key: 'yunxi', name: '云希', label: '男声 · 阳光少年', voice: 'zh-CN-YunxiNeural' },
  { key: 'yunjian', name: '云健', label: '男声 · 沉稳磁性', voice: 'zh-CN-YunjianNeural' },
  { key: 'yunyang', name: '云扬', label: '男声 · 新闻播音', voice: 'zh-CN-YunyangNeural' },
  { key: 'yunfeng', name: '云枫', label: '男声 · 温润', voice: 'zh-CN-YunfengNeural' },
  { key: 'yunjie', name: '云杰', label: '男声 · 成熟', voice: 'zh-CN-YunjieNeural' },
  { key: 'yunhao', name: '云浩', label: '男声 · 少年', voice: 'zh-CN-YunhaoNeural' },
  { key: 'yunze', name: '云泽', label: '男声 · 青春', voice: 'zh-CN-YunzeNeural' },
  { key: 'xiaobei', name: '小北', label: '女声 · 东北方言', voice: 'zh-CN-liaoning-XiaobeiNeural' },
  { key: 'xiaoni', name: '小妮', label: '女声 · 陕西方言', voice: 'zh-CN-shaanxi-XiaoniNeural' },
  { key: 'yunxia', name: '云霞', label: '男声 · 陕西方言', voice: 'zh-CN-YunxiaNeural' },
  { key: 'yunye', name: '云烨', label: '男声 · 东北方言', voice: 'zh-CN-YunyeNeural' },
];
const EDGE_TTS = path.join(__dirname, '..', '..', '06-Tools', 'tts', 'venv', 'Scripts', 'edge-tts.exe');
const TTS_PROXY = process.env.TTS_PROXY || '';

// 本地 TTS（Qwen3-TTS）配置，engine: auto=local 优先失败回落 edge / local / edge
const TTS_CONFIG_PATH = path.join(__dirname, '..', 'tts-config.json');
const TTS_CONFIG = fs.existsSync(TTS_CONFIG_PATH) ? JSON.parse(fs.readFileSync(TTS_CONFIG_PATH, 'utf8')) : {};
const TTS_ENGINE = TTS_CONFIG.engine || 'edge';
const LOCAL_TTS_URL = (TTS_CONFIG.local && TTS_CONFIG.local.url) || 'http://127.0.0.1:8765/tts';
const LOCAL_TTS_TIMEOUT = (TTS_CONFIG.local && TTS_CONFIG.local.timeoutMs) || 180000;
const TTS_INSTRUCT = TTS_CONFIG.instruct || '请用温和、耐心、清晰自然的语气讲课。';
const EDGE_RATE = (TTS_CONFIG.edge && TTS_CONFIG.edge.rate) || '+8%';
const EDGE_PITCH = (TTS_CONFIG.edge && TTS_CONFIG.edge.pitch) || '+4Hz';

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
  const registered = loadSubjects().map((s) => ({
    ...s,
    courseCount: listSubjectCourses(s.id).length,
    hasCourses: listSubjectCourses(s.id).length > 0,
  }));
  // 合并书库实时学科（未注册文件夹）：通用教学模式，无技能/课程
  const regIds = new Set(registered.map((s) => String(s.id).toLowerCase()));
  const extra = listLibrarySubjects()
    .filter((s) => !regIds.has(String(s.id).toLowerCase()))
    .map((s) => ({ id: s.id, name: s.name, bookDir: s.bookDir, skills: [], defaultSkill: '', registered: false, courseCount: 0, hasCourses: false }));
  res.json({ subjects: [...registered, ...extra] });
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
      const r = provider === 'anthropic'
        ? await anthropicRequest(
            [{ role: 'user', content: 'ping' }],
            { model: modelName || 'claude-sonnet-4-5', apiKey, baseUrl, stream: false }
          )
        : await externalRequest(
            [{ role: 'user', content: 'ping' }],
            { model: modelName || 'gpt-4o-mini', apiKey, baseUrl, stream: false }
          );
      const content = (r.response && r.response.content || '').trim();
      return res.json({ ok: true, detail: content ? content.slice(0, 80) : '连接成功' });
    } catch (e) {
      return res.json({ ok: false, error: e.message });
    }
  }
  const { health, chatCompletions } = require('./runtimeClient');
  const rt = await health();
  if (!rt) return res.json({ ok: false, error: '本地运行时未启动（8080）' });
  const { RUNTIME_MODEL } = require('./config');
  const target = modelName || RUNTIME_MODEL;
  try {
    const r = await chatCompletions(
      [{ role: 'user', content: 'ping' }],
      { model: target, stream: false, explicitModel: !!modelName }
    );
    const content = (r.response && r.response.content || '').trim();
    const extra = content && content.toLowerCase() !== 'ping' ? `：${content.slice(0, 60)}` : '';
    return res.json({ ok: true, detail: `本地模型 ${target} 可用（运行时 ${rt.version || ''}）${extra}` });
  } catch (e) {
    return res.json({ ok: false, error: `模型 ${target} 不可用：${e.message}` });
  }
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
  // 清洗历史遗留的连续重复消息（同 role + 同 content）
  const messages = [];
  for (const m of detail.messages || []) {
    const prev = messages[messages.length - 1];
    if (prev && prev.role === m.role && prev.content === m.content) continue;
    messages.push(m);
  }
  res.json({ ...detail, messages });
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

// 书库学科清单（已注册 + 书库目录实时扫描），供书籍加工页选择学科
app.get('/api/books/subjects', (req, res) => {
  res.json({ subjects: listLibrarySubjects() });
});

// 课程 = 蒸馏产物 distilled/{bookDir}/<一级目录>（数学=分类目录，物理=整本大书）
app.get('/api/courses', (req, res) => {
  const subject = req.query.subject;
  if (!subject) return res.status(400).json({ error: 'subject is required' });
  res.json({ courses: listSubjectCourses(subject) });
});

app.post('/api/ocr/scan', async (req, res) => {
  try {
    const books = await scanRaw((req.body || {}).subject || '');
    res.json({ books });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.post('/api/ocr/start', (req, res) => {
  try {
    const { file, subject } = req.body || {};
    if (!file) return res.status(400).json({ error: 'file 必填' });
    const jobId = startOcr({ file, subject });
    res.json({ jobId });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.get('/api/logs/:type', (req, res) => {
  const type = req.params.type === 'ocr' ? 'ocr' : 'distill';
  const subject = String(req.query.subject || '').trim() || undefined;
  res.json({ logs: listLogs(type, subject) });
});

app.get('/api/logs/:type/:id', (req, res) => {
  const type = req.params.type === 'ocr' ? 'ocr' : 'distill';
  const log = getLog(type, req.params.id);
  if (!log) return res.status(404).json({ error: 'log not found' });
  res.json(log);
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

function edgeTtsOnce(text, voice, res) {
  return new Promise((resolve) => {
    const outFile = path.join(os.tmpdir(), `tts_${Date.now()}_${Math.random().toString(36).slice(2)}.mp3`);
    const args = ['--voice', voice, '--write-media', outFile];
    if (EDGE_RATE) args.push(`--rate=${EDGE_RATE}`);
    if (EDGE_PITCH) args.push(`--pitch=${EDGE_PITCH}`);
    if (TTS_PROXY) args.push('--proxy', TTS_PROXY);
    args.push('--text', text);
    const child = spawn(EDGE_TTS, args, { stdio: ['ignore', 'ignore', 'pipe'] });
    let err = '';
    child.stderr.on('data', (c) => (err += c));
    child.on('error', (e) => resolve({ ok: false, error: 'edge-tts 不可用：' + e.message }));
    child.on('close', () => {
      if (!fs.existsSync(outFile)) {
        resolve({ ok: false, error: 'TTS 合成失败：' + err.slice(-300) });
        return;
      }
      const buf = fs.readFileSync(outFile);
      fs.unlink(outFile, () => {});
      if (!buf.length) {
        resolve({ ok: false, error: 'TTS 合成失败：' + err.slice(-300) });
        return;
      }
      resolve({ ok: true, buf });
    });
  });
}

async function edgeTts(text, voice, res) {
  // 微软免费 TTS 服务不稳定：重试 1 次、短等待即失败，避免拖慢语音交互；失败由前端提示
  let lastError = '';
  for (let i = 0; i < 2; i++) {
    const r = await edgeTtsOnce(text, voice, res);
    if (r.ok) {
      res.set({ 'Content-Type': 'audio/mpeg', 'Content-Length': r.buf.length });
      return res.send(r.buf);
    }
    lastError = r.error;
    if (i < 1) await new Promise((ok) => setTimeout(ok, 800));
  }
  if (!res.headersSent) res.status(502).json({ error: lastError });
}

async function localTts(text, voice) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), LOCAL_TTS_TIMEOUT);
  try {
    const r = await fetch(LOCAL_TTS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, voice, instruct: TTS_INSTRUCT }),
      signal: controller.signal,
    });
    if (!r.ok) throw new Error('local tts status ' + r.status);
    const buf = Buffer.from(await r.arrayBuffer());
    if (!buf.length) throw new Error('local tts empty');
    return buf;
  } finally {
    clearTimeout(timer);
  }
}

app.get('/api/tts/voices', (req, res) => {
  res.json({ voices: TTS_VOICE_LABELS });
});

app.post('/api/tts', async (req, res) => {
  const text = String(req.body.text || '').trim().slice(0, 3000);
  if (!text) return res.status(400).json({ error: 'text 必填' });
  const voice = req.body.voice || 'xiaoxiao';
  const engine = String(req.body.engine || '').toLowerCase() || TTS_ENGINE;
  if (engine === 'local' || engine === 'auto') {
    try {
      const buf = await localTts(text, voice);
      res.set({ 'Content-Type': 'audio/wav', 'Content-Length': buf.length });
      return res.send(buf);
    } catch (e) {
      console.warn('[tts] local 失败，回落 edge：', e.message);
      if (engine === 'local') return res.status(502).json({ error: '本地 TTS 不可用：' + e.message });
    }
  }
  edgeTts(text, TTS_VOICES[voice] || TTS_VOICES.xiaoxiao, res);
});

app.post('/api/chat', async (req, res) => {
  const { userId = DEFAULT_USER, subject = null, message, conversationId, style, course, debug } = req.body || {};
  if (!message) return res.status(400).json({ error: 'message is required' });

  const prepared = await handleChat({ userId, subject, message, conversationId, stream: false, style, course, debug });
  if (prepared.error) return res.status(400).json(prepared);

  const { sessionId, routeInfo, messages, userMessage } = prepared;
  try {
    const response = await chatCompletions(messages, { model: RUNTIME_MODEL, stream: false });
    const content = response?.response?.content || response?.raw || '（空响应）';
    const result = await persistAfterChat({ userId, sessionId, routeInfo, userMessage, rawResponse: content, effectiveCourse: prepared.effectiveCourse, debug });
    res.json({ sessionId, subject: routeInfo.subject, reply: result.replyContent, evaluation: result.parsed?.evaluation || null, state: result.nextState });
  } catch (e) {
    res.status(502).json({ error: e.message });
  }
});

app.post('/api/chat/stream', async (req, res) => {
  const { userId = DEFAULT_USER, subject = null, message, conversationId, style, course, debug } = req.body || {};
  if (!message) return res.status(400).json({ error: 'message is required' });

  const prepared = await handleChat({ userId, subject, message, conversationId, stream: true, style, course, debug });
  if (prepared.error) return res.status(400).json(prepared);

  const { sessionId, routeInfo, messages, userMessage } = prepared;
  if (!debug) {
    const detail = loadSessionDetailSafe(sessionId);
    detail.subject = routeInfo.subject;
    detail.messages.push(userMessage);
    saveSessionDetail(sessionId, detail);
  }

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
      const result = await persistAfterChat({ userId, sessionId, routeInfo, userMessage, rawResponse: full, effectiveCourse: prepared.effectiveCourse, debug, skipUserPush: true });
      res.write(`event: done\ndata: ${JSON.stringify({ evaluation: result.parsed?.evaluation || null, replyContent: result.replyContent })}\n\n`);
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