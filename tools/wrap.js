// Builds index.html (a standalone page) from model.html (the artifact source).
// model.html has no doctype/head/body because the artifact host adds its own;
// this adds the same skeleton so the page also opens directly in a browser.
// Usage: node tools/wrap.js
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const src = fs.readFileSync(path.join(root, 'model.html'), 'utf8');
const cut = src.indexOf('</style>') + '</style>'.length;
const head = src.slice(0, cut).trim();
const body = src.slice(cut).trim();
const reset = `<style>
:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
body{margin:0;font:14px/1.4 system-ui,sans-serif}
img{max-width:100%}
[hidden]{display:none!important}
</style>`;
const out = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
${reset}
${head}
</head>
<body>
${body}
</body>
</html>
`;
fs.writeFileSync(path.join(root, 'index.html'), out);
console.log('index.html written from model.html');
