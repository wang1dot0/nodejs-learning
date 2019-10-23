// const fs = require('fs');

const level = require('level');
const fsAdapter = require('./fsAdapter');
const db = level('./fsDB', { valueEncoding: 'binary' });
const fs = fsAdapter(db);

fs.writeFile('file.txt', 'Hello !', () => {
  fs.readFile('file.txt', { encoding: 'utf8' }, (err, res) => {
    console.log(res);
  });
});

fs.readFile('miss.txt', { encoding: 'utf8' }, (err, res) => {
  console.log(res);
});
