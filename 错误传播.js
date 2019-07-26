const fs = require('fs')

function readJSON(filename, cb) {
  fs.readFile(filename, 'utf8', (err, data) => {
    let parsed;
    if (err) {
      return cb(err);
    }
    cb(null, JSON.parse(data));
  })
}

/*process.on('uncaughtException', (err) => {
  console.error('This will be catch at last the: ', err.message);
});*/

readJSON('NON.txt', err => { var b = err; console.log('b: ', b); });
