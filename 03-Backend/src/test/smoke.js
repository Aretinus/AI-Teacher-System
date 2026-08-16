const assert = require('assert');
const { route } = require('../services/routerService');
const { loadState, newSessionId } = require('../services/dataService');
const { buildSystemPrompt } = require('../services/promptBuilder');
const { mergeStateUpdate } = require('../services/chatService');

let ok = 0, fail = 0;
function t(name, fn) {
  try { fn(); ok++; console.log('PASS', name); }
  catch (e) { fail++; console.log('FAIL', name, '-', e.message); }
}

t('手动路由 math', () => {
  const r = route({ subject: 'math', message: '随便' });
  assert.strictEqual(r.route.subject, 'math');
  assert.strictEqual(r.route.tutor, 'calculus-tutor');
});

t('自动路由 数学问题', () => {
  const r = route({ subject: null, message: '为什么导数表示变化率？' });
  assert.strictEqual(r.route.subject, 'math');
});

t('自动路由 物理问题', () => {
  const r = route({ subject: null, message: '卫星为什么不会掉下来？' });
  assert.strictEqual(r.route.subject, 'physics');
});

t('未知学科拒绝', () => {
  const r = route({ subject: 'chemistry', message: 'x' });
  assert.strictEqual(r.route, null);
  assert.strictEqual(r.reason, 'subject-not-supported');
});

t('自动路由 无法识别', () => {
  const r = route({ subject: null, message: '今天天气如何' });
  assert.strictEqual(r.route, null);
  assert.strictEqual(r.reason, 'unknown');
});

t('state 加载默认值', () => {
  const s = loadState('default');
  assert.strictEqual(s.userId, 'default');
  assert.ok(s.knowledgePoints !== undefined);
});

t('会话 id 格式', () => {
  assert.match(newSessionId(), /^\d{8}-\d{3}$/);
});

t('system prompt 组装', () => {
  const prompt = buildSystemPrompt({ subject: 'math', tutor: 'calculus-tutor', userState: { knowledgePoints: {} }, history: { sessions: [] }, message: '为什么导数表示变化率？' });
  assert.ok(prompt.includes('Tutor Engine'));
  assert.ok(prompt.includes('微积分'));
  assert.ok(prompt.includes('derivative-rate-of-change') || prompt.includes('变化率'));
});

t('mergeStateUpdate 掌握度', () => {
  const next = mergeStateUpdate({ knowledgePoints: {} }, { knowledgePoints: { 'derivative-geometric-meaning': { mastery: 0.7 } } });
  assert.strictEqual(next.knowledgePoints['derivative-geometric-meaning'].mastery, 0.7);
});

console.log(`\n${ok} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);