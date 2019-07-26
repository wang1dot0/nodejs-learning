// a.js
exports.loaded = false;
const b = require('./b');
module.exports = {
  bWasLoaded: b.loaded,
  loaded: true,
}

// b.js
exports.loaded = false;
const a = require('./a');
module.exports = {
  aWasLoaded: a.loaded,
  loaded: true,
}

// main.js
const a = require('./a');
const b = require('./b');
console.log(a);
console.log(b);
