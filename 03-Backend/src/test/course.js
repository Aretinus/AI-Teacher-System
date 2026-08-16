const fs = require('fs');
const path = require('path');
const assert = require('assert');
const {
  detectCourseIntent, findCourse, loadCourseContext, listLessons,
} = require('../services/courseService');

const COURSE = path.join(__dirname, '..', '..', '..', '02-DATA', 'books', 'distilled', '费恩曼物理学讲义（英文版）');
const PROG = path.join(COURSE, 'progress.json');
const orig = fs.readFileSync(PROG, 'utf8');
const origProgress = JSON.parse(orig);

let pass = 0;
function ok(name, cond, extra) {
  assert.ok(cond, `${name}${extra ? ` :: ${extra}` : ''}`);
  pass++;
  console.log(`PASS ${name}`);
}

(async () => {
  ok('意图检测-继续学', detectCourseIntent('继续学力学') === true);
  ok('意图检测-普通问题', detectCourseIntent('为什么苹果会落地？') === false);

  const dir = findCourse('physics', 'feynman-mechanics');
  ok('findCourse 定位', dir === COURSE, dir);

  const lessons = listLessons(dir);
  ok('课列表 293（345 总 - 52 导言）', lessons.length === 293, lessons.length);
  ok('无导言课', !lessons.some((p) => p.endsWith('第00课_本章导言.md')));

  const base = lessons.indexOf(origProgress.current) >= 0 ? origProgress.current : lessons[0];
  const baseIdx = lessons.indexOf(base);
  ok('基线课存在', baseIdx >= 0, base);

  const ctx = loadCourseContext('physics', 'feynman-mechanics', '学这本书', false);
  ok('首课上下文=基线', ctx.currentLesson === base, ctx && ctx.currentLesson);
  ok('本章名非空', (ctx.chapter || '').length > 5, ctx && ctx.chapter);
  ok('章列表 55', (ctx.chapterList || '').split('；').length >= 55, ctx && ctx.chapterList.length);
  ok('当前章清单>100', (ctx.tocSection || '').length > 100);
  ok('当前章清单含当前课', (ctx.tocSection || '').includes(ctx.currentLesson.split('/').pop()));
  ok('有正文', (ctx.lessonContent || '').length > 500);
  ok('无旧toc字段', ctx.toc === undefined);

  const ctx2 = loadCourseContext('physics', 'feynman-mechanics', '继续学', true);
  ok('继续学→下一课', ctx2.currentLesson === lessons[baseIdx + 1], ctx2 && ctx2.currentLesson);
  const p2 = JSON.parse(fs.readFileSync(PROG, 'utf8'));
  ok('旧课 learned', p2.lessons[base].status === 'learned');
  ok('新课 current', p2.current === lessons[baseIdx + 1]);

  const ctx3 = loadCourseContext('physics', 'feynman-mechanics', '继续学', true);
  ok('继续学→再下一课', ctx3.currentLesson === lessons[baseIdx + 2], ctx3 && ctx3.currentLesson);

  fs.writeFileSync(PROG, orig, 'utf8');
  const p3 = JSON.parse(fs.readFileSync(PROG, 'utf8'));
  ok('恢复原进度', p3.current === origProgress.current && p3.lessons[base].status === origProgress.lessons[base].status);

  console.log(`\ncourse tests: ${pass} passed`);
  process.exit(0);
})().catch((e) => {
  console.error(`\nFAIL: ${e.message}`);
  fs.writeFileSync(PROG, orig, 'utf8');
  process.exit(1);
});
