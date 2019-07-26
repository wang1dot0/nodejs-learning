// 命名导出
// file logger.js
exports.info = () => {};
exports.verbose = () => {};

// file main.js
const logger = require('./logger');
logger.info();
logger.verbose();

// 导出函数: substack模式
// file logger.js
module.exports = (message) => {
  console.log(`info: ${message}`);
}
module.exports.verbose = (message) => {
  console.log(`verbose: ${message}`);
}

// file main.js
const logger = require('./logger');
logger('This is an info');

// 导出构造函数
// file logger.js
function Logger(name) {
  if (!(this instanceof Logger)) {
    return new Logger(name);
  }
  this.name = name;
}
Logger.prototype.log = function(message) {
  console.log(`[${this.name}] ${message}`);
}
Logger.prototype.info = function(message) {
  console.log(`info: ${message}`);
}
Logger.prototype.verbose = function(message) {
  console.log(`verbose: ${message}`);
}
module.exports = Logger;

// file main.js
const Logger = require('./logger');
const dbLogger = new Logger('DB');
dbLogger.info('This is an informational message');
const accessLogger = new Logger('ACCESS');
accessLogger.verbose('This is a verbose message');

// file logger.js es6 class
class Logger {
  constructor(name) {
    this.name = name;
  }
  log(message) {
    console.log(`[${this.name}] ${message}`);
  }
  info(message) {
    console.log(`info: ${message}`);
  }
  verbose(message) {
    console.log(`verbose: ${message}`);
  }
}

module.exports = Logger;


// 导出实例 -> 因为模块的缓存机制，导致
// file logger.js
function Logger(name) {
  this.count = 0;
  this.name = name;
}
Logger.prototype.log = function(message) {
  this.count ++;
  console.log(`[${this.name}] ${message}`);
}
module.exports = new Logger('Default');

// file main.js
const logger = require('./logger');
logger.log('This is an informational message');
