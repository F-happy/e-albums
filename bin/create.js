#!/usr/bin/env node
const fs = require('fs');

const files = fs.readdirSync('./images');

const fileList = files.filter(file => !['index.js', '.DS_Store'].includes(file));

console.log(fileList);
fs.writeFileSync('./images/index.js', `window.images=${JSON.stringify(fileList)}`, { encoding: 'utf8'});
