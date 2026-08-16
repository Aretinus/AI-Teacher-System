const http = require('http');

function post(path, body, timeout = 200000) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = http.request({
      host: '127.0.0.1', port: 3000, path, method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) },
    }, (res) => {
      let chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString('utf8') }));
    });
    req.on('error', reject);
    req.setTimeout(timeout, () => req.destroy(new Error('timeout')));
    req.write(data);
    req.end();
  });
}

async function main() {
  console.log('=== 1. 数学问答（自动路由） ===');
  let r = await post('/api/chat', { message: '为什么导数表示变化率？' });
  let j = JSON.parse(r.body);
  console.log('status:', r.status, '| subject:', j.subject, '| session:', j.sessionId);
  console.log('reply:', j.reply);
  if (!j.reply || j.reply.includes('??')) { console.log('FAIL: 中文回复异常'); process.exit(1); }

  console.log('\n=== 2. 物理问答（自动路由） ===');
  r = await post('/api/chat', { message: '卫星为什么不会掉下来？' });
  j = JSON.parse(r.body);
  console.log('status:', r.status, '| subject:', j.subject);
  console.log('reply:', j.reply);

  console.log('\n=== 3. 手动指定学科 ===');
  r = await post('/api/chat', { subject: 'math', message: '什么是链式法则？' });
  j = JSON.parse(r.body);
  console.log('status:', r.status, '| subject:', j.subject);
  console.log('reply:', j.reply);

  console.log('\n=== 4. 无法识别学科 ===');
  r = await post('/api/chat', { message: '今天天气如何' });
  j = JSON.parse(r.body);
  console.log('status:', r.status, '| body:', r.body.slice(0, 200));

  console.log('\n=== 5. 会话明细落盘 ===');
  const fs = require('fs');
  const path = require('path');
  const base = path.join(__dirname, '..', '..', '..', '02-DATA');
  const files = fs.readdirSync(path.join(base, 'sessions', '2026', '08'));
  console.log('sessions files:', files.length);
  const state = JSON.parse(fs.readFileSync(path.join(base, 'users', 'default', 'state.json'), 'utf8'));
  console.log('state.knowledgePoints:', JSON.stringify(state.knowledgePoints));
  const hist = JSON.parse(fs.readFileSync(path.join(base, 'users', 'default', 'history.json'), 'utf8'));
  console.log('history entries:', hist.sessions.length, '| latest:', JSON.stringify(hist.sessions[0]));
}

main().catch((e) => { console.error('FAIL:', e.message); process.exit(1); });