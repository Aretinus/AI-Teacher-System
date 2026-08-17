const fs = require('fs');
const path = require('path');
const { SKILLS_DIR, SUBJECTS_INDEX, ROOT_DIR } = require('../config');

function extractYamlField(yaml, field) {
  if (!yaml) return null;
  const m = yaml.match(new RegExp(`^\\s*${field}:\\s*(.+)$`, 'm'));
  return m ? m[1].trim().replace(/^['"]|['"]$/g, '') : null;
}

function resolveCourseDir(subjectId, tutor, rawDir) {
  if (!rawDir) return null;
  const rel = rawDir.replace(/\\/g, '/').replace(/^\.\.\/\.\.\/\.\.\/\.\.\//, '');
  const p = path.join(ROOT_DIR, rel);
  return fs.existsSync(p) ? p : null;
}

function scanSkillsOf(subjectId) {
  const dir = path.join(SKILLS_DIR, 'subjects', subjectId);
  const skills = [];
  if (!fs.existsSync(dir)) return skills;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('_')) continue;
    const skillDir = path.join(dir, entry.name);
    const manifestPath = path.join(skillDir, 'manifest.yaml');
    if (!fs.existsSync(manifestPath)) continue;
    const manifest = fs.readFileSync(manifestPath, 'utf8');
    const skillMd = path.join(skillDir, 'SKILL.md');
    const courseDir = resolveCourseDir(subjectId, entry.name, extractYamlField(manifest, 'courseDir'));
    skills.push({
      id: entry.name,
      name: extractYamlField(manifest, 'name') || entry.name,
      subject: extractYamlField(manifest, 'subject') || subjectId,
      valid: fs.existsSync(skillMd),
      courseExists: !!courseDir,
    });
  }
  return skills;
}

function scanSubjects() {
  const root = path.join(SKILLS_DIR, 'subjects');
  const subjects = [];
  if (!fs.existsSync(root)) return subjects;
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('_')) continue;
    const subjDir = path.join(root, entry.name);
    const subjYaml = path.join(subjDir, 'subject.yaml');
    let name = null;
    let bookDir = null;
    if (fs.existsSync(subjYaml)) {
      const yaml = fs.readFileSync(subjYaml, 'utf8');
      name = extractYamlField(yaml, 'name');
      bookDir = extractYamlField(yaml, 'bookDir');
    }
    const skills = scanSkillsOf(entry.name);
    if (!skills.length) continue;
    subjects.push({
      id: entry.name,
      name,
      bookDir,
      skills,
      defaultSkill: skills[0].id,
    });
  }
  return subjects;
}

function refresh() {
  const oldRaw = fs.existsSync(SUBJECTS_INDEX) ? JSON.parse(fs.readFileSync(SUBJECTS_INDEX, 'utf8')) : null;
  const oldById = Object.fromEntries(((oldRaw && oldRaw.subjects) || []).map((s) => [s.id, s]));
  const scanned = scanSubjects();

  const addedSubjects = [];
  const addedSkills = [];
  const changedSubjects = [];
  const invalidSkills = [];
  const noCourse = [];

  for (const s of scanned) {
    const prev = oldById[s.id];
    if (prev) {
      const newSkills = s.skills.filter((k) => !(prev.skills || []).includes(k.id));
      if (newSkills.length) addedSkills.push({ subject: s.id, skills: newSkills.map((k) => k.id) });
      const key = JSON.stringify({ skills: s.skills.map((k) => k.id), defaultSkill: s.defaultSkill });
      const oldKey = JSON.stringify({ skills: prev.skills || [], defaultSkill: prev.defaultSkill });
      if (key !== oldKey) changedSubjects.push(s.id);
      if (prev.name && !s.name) s.name = prev.name;
      if (!s.bookDir && prev.bookDir) s.bookDir = prev.bookDir;
    } else {
      addedSubjects.push(s.id);
    }
    for (const k of s.skills) {
      if (!k.valid) invalidSkills.push(`${s.id}/${k.id}: 缺少 SKILL.md`);
      else if (!k.courseExists) noCourse.push(`${s.id}/${k.id}: 未配置课程书籍（仅问答模式）`);
    }
  }

  const removedSubjects = Object.keys(oldById).filter((id) => !scanned.some((x) => x.id === id));

  const out = {
    version: (oldRaw && oldRaw.version) || '1.0',
    subjects: scanned.map((s) => ({
      id: s.id,
      name: s.name || s.id,
      bookDir: s.bookDir || null,
      skills: s.skills.map((k) => k.id),
      defaultSkill: s.defaultSkill,
    })),
  };
  fs.writeFileSync(SUBJECTS_INDEX, JSON.stringify(out, null, 2), 'utf8');

  return {
    ok: true,
    generated: new Date().toISOString(),
    totalSubjects: scanned.length,
    addedSubjects,
    addedSkills,
    changedSubjects,
    removedSubjects,
    invalidSkills,
    noCourse,
  };
}

module.exports = { scanSubjects, refresh };