import fs from 'node:fs';
import path from 'node:path';

const targets = [
  path.join(process.cwd(), 'web', 'dist'),
  path.join(process.cwd(), 'docs', 'build'),
  path.join(process.cwd(), 'docs', '.docusaurus'),
];

for (const target of targets) {
  fs.rmSync(target, {recursive: true, force: true});
}

console.log('Removed generated build directories.');
