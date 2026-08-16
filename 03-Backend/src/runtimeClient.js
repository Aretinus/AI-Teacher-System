const http = require('http');
const https = require('https');
const { Transform } = require('stream');
const { RUNTIME_URL } = require('./config');

function parseExternalUrl(baseUrl) {
  const s = (baseUrl || '').trim().replace(/\/$/, '');
  if (!s) throw new Error('baseUrl 未配置');
  const u = new URL(s + '/chat/completions');
  return { url: u, mod: u.protocol === 'https:' ? https : http };
}

function externalRequest(messages, { model, apiKey, baseUrl, stream }) {
  const { url, mod } = parseExternalUrl(baseUrl);
  const body = JSON.stringify({ model: model || 'gpt-4o-mini', messages, stream });
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey || ''}`,
      'Content-Length': Buffer.byteLength(body),
    },
  };
  return new Promise((resolve, reject) => {
    const req = mod.request(url, options, (res) => {
      if (res.statusCode !== 200) {
        let chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () =>
          reject(new Error(`Provider error (${res.statusCode}): ${Buffer.concat(chunks).toString('utf8').slice(0, 300)}`))
        );
        return;
      }
      if (!stream) {
        let full = '';
        let err = null;
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          for (const line of chunk.split('\n')) {
            if (!line.startsWith('data:')) continue;
            const payload = line.slice(5).trim();
            if (!payload || payload === '[DONE]') continue;
            try {
              const evt = JSON.parse(payload);
              const d = evt.choices && evt.choices[0];
              if (d && d.delta && d.delta.content) full += d.delta.content;
              if (evt.error) err = evt.error.message;
            } catch (e) { /* ignore */ }
          }
        });
        res.on('end', () => {
          if (err) return reject(new Error(err));
          resolve({ status: res.statusCode, response: { role: 'assistant', content: full }, type: 'response.completed' });
        });
        res.on('error', reject);
      } else {
        const conv = new Transform({
          transform(chunk, _enc, cb) {
            let buf = this._buf || '';
            buf += chunk.toString('utf8');
            this._buf = '';
            const lines = buf.split('\n');
            buf = lines.pop();
            for (const line of lines) {
              if (!line.startsWith('data:')) continue;
              const payload = line.slice(5).trim();
              if (!payload || payload === '[DONE]') continue;
              try {
                const evt = JSON.parse(payload);
                const d = evt.choices && evt.choices[0];
                if (d && d.delta && d.delta.content) {
                  this.push(`data: ${JSON.stringify({ type: 'response.output_text.delta', delta: d.delta.content })}\n`);
                } else if (d && d.finish_reason) {
                  this.push(`data: ${JSON.stringify({ type: 'response.completed', response: { content: '' } })}\n`);
                }
              } catch (e) { /* ignore */ }
            }
            this._buf = buf;
            cb();
          },
          flush(cb) { cb(); },
        });
        res.pipe(conv);
        resolve({ status: res.statusCode, stream: conv });
      }
    });
    req.on('error', reject);
    req.setTimeout(300000, () => req.destroy(new Error('Provider timeout')));
    req.write(body);
    req.end();
  });
}

function parseUrl() {
  const u = new URL(RUNTIME_URL);
  return { host: u.hostname, port: Number(u.port) || 80, base: u.pathname.replace(/\/$/, '') };
}

function buildRequest(path, { method = 'GET', body, headers = {} } = {}) {
  const { host, port, base } = parseUrl();
  const data = body !== undefined ? JSON.stringify(body) : null;
  const options = {
    host,
    port,
    path: `${base}${path}`,
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
      ...(data ? { 'Content-Length': Buffer.byteLength(data) } : {}),
    },
  };
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        const raw = Buffer.concat(chunks).toString('utf8');
        resolve({ status: res.statusCode, headers: res.headers, body: raw });
      });
    });
    req.on('error', reject);
    req.setTimeout(180000, () => req.destroy(new Error('Runtime request timeout')));
    if (data) req.write(data);
    req.end();
  });
}

function parseJson(raw) {
  try {
    return JSON.parse(raw);
  } catch (e) {
    return { raw };
  }
}

async function chatCompletions(messages, { model, stream = false, signal } = {}) {
  const { loadSettings } = require('./services/settingsService');
  const settings = loadSettings();
  if (settings.provider !== 'runtime') {
    return externalRequest(messages, {
      model: settings.modelName || model,
      apiKey: settings.apiKey,
      baseUrl: settings.baseUrl,
      stream,
    });
  }
  const { RUNTIME_MODEL } = require('./config');
  const body = { model: model || RUNTIME_MODEL, messages, stream: true };
  const { host, port, base } = parseUrl();
  const data = JSON.stringify(body);
  return new Promise((resolve, reject) => {
    const req = http.request(
      { host, port, path: `${base}/api/v1/ai/chat/completions`, method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) } },
      (res) => {
        if (res.statusCode !== 200) {
          let chunks = [];
          res.on('data', (c) => chunks.push(c));
          res.on('end', () => reject(new Error(`Runtime stream error (${res.statusCode}): ${Buffer.concat(chunks).toString('utf8')}`)));
          return;
        }
        if (!stream) {
          let full = '';
          let err = null;
          res.setEncoding('utf8');
          res.on('data', (chunk) => {
            for (const line of chunk.split('\n')) {
              if (!line.startsWith('data:')) continue;
              const payload = line.slice(5).trim();
              if (payload === '[DONE]') continue;
              try {
                const evt = JSON.parse(payload);
                if (evt.type === 'response.output_text.delta') full += evt.delta || '';
                else if (evt.type === 'response.completed') full += evt.response?.content || '';
                else if (evt.type === 'response.failed') err = evt.response?.error?.message || 'stream failed';
              } catch (e) { /* ignore */ }
            }
          });
          res.on('end', () => {
            if (err) return reject(new Error(err));
            resolve({ status: res.statusCode, response: { role: 'assistant', content: full }, type: 'response.completed' });
          });
          res.on('error', reject);
          return;
        }
        resolve({ status: res.statusCode, stream: res });
      }
    );
    req.on('error', reject);
    req.setTimeout(300000, () => req.destroy(new Error('Runtime stream timeout')));
    req.write(data);
    req.end();
  });
}

async function health() {
  try {
    const res = await buildRequest('/api/v1/health');
    return res.status === 200 ? parseJson(res.body) : null;
  } catch (e) {
    return null;
  }
}

async function aiHealth() {
  try {
    const res = await buildRequest('/api/v1/ai/health');
    return res.status === 200 ? parseJson(res.body) : null;
  } catch (e) {
    return null;
  }
}

module.exports = { chatCompletions, health, aiHealth, buildRequest, parseJson, externalRequest };