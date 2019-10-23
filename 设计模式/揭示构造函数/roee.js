const EventEmitter = require('event');

module.exports = class Roee extends EventEmitter {
  constructor(executor) {
    super();
    const emit = this.emit.bind(this);
    this.emit = undefined;
    executor(emit);
  }
};
