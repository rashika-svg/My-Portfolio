// Lists placeholder values still left in the site. Exits with code 1 if any remain.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const roots = ['src', 'public'];
const extensions = new Set(['.ts', '.html', '.css', '.txt', '.xml', '.json']);
const patterns = [
  /your-domain\.com/,
  /example\.com/,
  /your-profile/,
  /X{6,}/,
  /Your City/,
  /\/\/ TODO/,
];

function* files(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* files(path);
    else if (extensions.has(extname(name)) && !name.endsWith('.spec.ts')) yield path;
  }
}

const hits = [];
for (const root of roots) {
  for (const file of files(root)) {
    readFileSync(file, 'utf8')
      .split('\n')
      .forEach((line, index) => {
        if (patterns.some((pattern) => pattern.test(line))) {
          hits.push(`${relative(process.cwd(), file)}:${index + 1}  ${line.trim()}`);
        }
      });
  }
}

if (hits.length) {
  console.log(`Found ${hits.length} placeholder line(s) to replace:\n`);
  console.log(hits.join('\n'));
  process.exit(1);
}
console.log('No placeholders left. Ready to publish.');
