# SOMNOG9 Software Development Track

A simple public workshop portal for:

- Home / quick access
- Workshop schedule
- Workshop files
- Markdown documentation

The main site uses **Vite + React + TypeScript**.  
Workshop documentation uses **Docusaurus** under `/docs/`.

No database, authentication, API, CMS or production Node server is required.

---

## Architecture

```text
/
├── web/              Vite + React main website
├── docs/             Docusaurus Markdown documentation
├── scripts/          build/combine helpers
├── deployment/       Apache and Nginx examples
└── web/dist/         FINAL DEPLOYABLE OUTPUT after npm run build
```

Public URLs after deployment:

```text
/
 /schedule/
 /materials/
 /docs/
 /docs/day-1/git-github/
```

---

## Requirements

Use:

- Node.js 20 or newer
- npm 10 or newer recommended

Check:

```bash
node -v
npm -v
```

---

## First setup

From the repository root:

```bash
npm install
```

Because this repository uses npm workspaces, this installs dependencies for both:

```text
web/
docs/
```

You do not need to run `npm install` separately inside those folders.

---

## Development

Start both Vite and Docusaurus:

```bash
npm run dev
```

Main website:

```text
http://localhost:5173
```

Documentation is proxied through the Vite dev server:

```text
http://localhost:5173/docs/
```

Docusaurus itself runs internally on:

```text
http://localhost:3001/docs/
```

You can also run only one side:

```bash
npm run dev:web
npm run dev:docs
```

---

## Production build

Run:

```bash
npm run build
```

The build performs:

1. Vite build
2. Docusaurus build
3. Copies `docs/build/` into `web/dist/docs/`
4. Copies the cPanel/Apache `.htaccess`
5. Creates `.nojekyll`
6. Verifies required generated pages exist

The final deployable website is:

```text
web/dist/
```

You deploy that folder only.

You do NOT need Node.js on the production server.

---

# Editing the workshop schedule

Edit:

```text
web/src/data/schedule.ts
```

Example:

```ts
{
  time: '10:30 - 12:00',
  title: 'Git & GitHub',
  facilitator: 'Nadaara',
}
```

The website table updates automatically.

---

# Adding workshop files

Put the physical file into the correct public folder.

Example:

```text
web/public/materials/day-1/git-slides.pdf
```

Then edit:

```text
web/src/data/materials.ts
```

Add:

```ts
{
  id: 'git-slides',
  title: 'Git & GitHub Slides',
  type: 'pdf',
  size: '3.2 MB',
  href: '/materials/day-1/git-slides.pdf',
}
```

Supported types:

```text
docs
pdf
pptx
docx
xlsx
zip
link
github
video
```

Actions are automatic:

```text
docs   -> Read Docs
pdf    -> View
pptx   -> Download
docx   -> Download
xlsx   -> Download
zip    -> Download
link   -> Open
github -> Open Repository
video  -> Watch
```

---

# Adding Markdown documentation

Create a normal Markdown file inside Docusaurus.

Example:

```text
docs/docs/day-4/rest-api.md
```

Content:

```md
---
sidebar_position: 2
title: REST API Guide
description: REST API workshop guide.
---

# REST API Guide

## Create a Server

```js
app.get('/api/hello', (req, res) => {
  res.json({message: 'Hello'});
});
```
```

Docusaurus automatically places the page in the documentation navigation.

The URL will be similar to:

```text
/docs/day-4/rest-api/
```

To show the guide on the Materials page, add:

```ts
{
  id: 'rest-api-guide',
  title: 'REST API Workshop Guide',
  description: 'Step-by-step workshop documentation.',
  type: 'docs',
  href: '/docs/day-4/rest-api/',
}
```

to:

```text
web/src/data/materials.ts
```

---

# Replacing the logo

The website currently uses:

```text
web/public/images/somnog9-logo.png
docs/static/img/somnog9-logo.png
```

If you receive a better transparent official logo later, replace BOTH files with the same image.

Do not rename the files unless you also update the configuration.

---

# Deployment

## 1. Vercel

Push the repository to GitHub and import it into Vercel.

Recommended settings:

```text
Framework Preset: Other
Install Command: npm install
Build Command: npm run build
Output Directory: web/dist
```

A `vercel.json` file is already included.

No serverless functions are required.

---

## 2. Netlify

Connect the repository.

Netlify should automatically read:

```text
netlify.toml
```

Settings are already:

```text
Build command: npm run build
Publish directory: web/dist
```

---

## 3. Cloudflare Pages

Create a Pages project from the Git repository.

Use:

```text
Build command: npm run build
Build output directory: web/dist
Node version: 20
```

A `wrangler.toml` file is also included for Wrangler-based deployments.

---

## 4. cPanel / ordinary shared hosting

Build locally:

```bash
npm install
npm run build
```

Open:

```text
web/dist/
```

Upload the CONTENTS of `web/dist/` into:

```text
public_html/
```

Important:

Upload the contents, not the `dist` folder itself.

Your hosting structure should look approximately like:

```text
public_html/
├── index.html
├── schedule/
├── materials/
├── docs/
├── assets/
├── images/
└── .htaccess
```

The included `.htaccess` only adds safe MIME/cache settings.  
The site does not depend on Apache rewrite rules.

---

## 5. Nginx

Build:

```bash
npm run build
```

Copy:

```text
web/dist/
```

to your Nginx web root.

A sample configuration is included at:

```text
deployment/nginx/site.conf
```

The important routing rule is:

```nginx
try_files $uri $uri/ =404;
```

Because the Vite site is built as a real multi-page static website, `/schedule/` and `/materials/` do not depend on SPA rewrite rules.

---

## 6. GitHub Pages

A workflow is already included:

```text
.github/workflows/deploy-pages.yml
```

Push to the `main` branch.

Then in GitHub:

```text
Repository
-> Settings
-> Pages
-> Source
-> GitHub Actions
```

The workflow automatically builds the correct repository base path.

For a manual GitHub Pages build:

macOS/Linux:

```bash
VITE_BASE_PATH=/YOUR-REPOSITORY/ \
DOCS_BASE_URL=/YOUR-REPOSITORY/docs/ \
PUBLIC_SITE_URL=https://YOUR-USERNAME.github.io \
npm run build
```

PowerShell:

```powershell
$env:VITE_BASE_PATH="/YOUR-REPOSITORY/"
$env:DOCS_BASE_URL="/YOUR-REPOSITORY/docs/"
$env:PUBLIC_SITE_URL="https://YOUR-USERNAME.github.io"
npm run build
```

---

## 7. Docker (optional)

Docker is NOT required.

If you want it:

```bash
docker compose up --build
```

Then open:

```text
http://localhost:8080
```

The Docker image builds the site and serves the static output through Nginx.

---

# Custom subdirectory deployment

For a root domain such as:

```text
https://workshop.example.com/
```

use the defaults:

```text
VITE_BASE_PATH=/
DOCS_BASE_URL=/docs/
```

For a subdirectory:

```text
https://example.com/somnog9/
```

build with:

```text
VITE_BASE_PATH=/somnog9/
DOCS_BASE_URL=/somnog9/docs/
```

This is already handled by the site's URL helpers.

---

# Common commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run clean
```

---

# Before the workshop

Replace/update:

1. `web/src/data/schedule.ts`
   - final times
   - final session titles
   - final facilitators

2. `web/src/data/materials.ts`
   - actual materials

3. `web/public/materials/day-X/`
   - PDFs
   - DOCX
   - XLSX
   - PPTX
   - ZIP files

4. `docs/docs/`
   - facilitator Markdown documentation

5. `web/public/images/somnog9-logo.png`
   - only if a higher-quality transparent official logo is available

---

# Why the main site is multi-page instead of an SPA

The Vite website intentionally generates real files such as:

```text
dist/index.html
dist/schedule/index.html
dist/materials/index.html
```

This makes deployment more reliable on cPanel, Apache, Nginx, S3-style hosting and other static platforms because `/schedule/` does not require a special SPA rewrite rule.

Docusaurus is then copied into:

```text
dist/docs/
```

The complete deployment behaves like one website.
