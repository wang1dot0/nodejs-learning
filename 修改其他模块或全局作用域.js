// monkey patching
// file patcher.js
// ./logger is another module
require('./logger').customMessage = () => {
  console.log('This is a new functionality');
};

// file main.js
require('./patcher');
const logger = require('./logger');
logger.customMessage();

// 这种操作副作用很大，影响了作用域之外的实体状态，导致不可预测的结果。
