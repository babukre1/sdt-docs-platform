import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const webOut = path.join(root, 'web', 'dist');
const docsBuild = path.join(root, 'docs', 'build');
const docsDestination = path.join(webOut, 'docs');

function ensureExists(target, label) {
  if (!fs.existsSync(target)) {
    throw new Error(`${label} was not found at ${target}`);
  }
}

ensureExists(webOut, 'Vite output');
ensureExists(docsBuild, 'Docusaurus output');

fs.rmSync(docsDestination, {recursive: true, force: true});
fs.mkdirSync(docsDestination, {recursive: true});
fs.cpSync(docsBuild, docsDestination, {recursive: true});

// GitHub Pages should not process the static output with Jekyll.
fs.writeFileSync(path.join(webOut, '.nojekyll'), '');

// Copy optional Apache/cPanel configuration into the deployable directory.
const htaccess = path.join(root, 'deployment', 'apache', '.htaccess');
if (fs.existsSync(htaccess)) {
  fs.copyFileSync(htaccess, path.join(webOut, '.htaccess'));
}

const required = [
  path.join(webOut, 'index.html'),
  path.join(webOut, 'schedule', 'index.html'),
  path.join(webOut, 'materials', 'index.html'),
  path.join(webOut, 'docs', 'index.html'),
];

for (const file of required) {
  ensureExists(file, 'Required generated page');
}

console.log('');
console.log('SOMNOG9 build combined successfully.');
console.log(`Deploy this directory: ${webOut}`);
console.log('');
