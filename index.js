if (process.type !== 'renderer') {
  module.exports = require('debug');
} else {
  module.exports = require('debug/browser');
  if (process && process.env && process.env.DEBUG) module.exports.enable(process.env.DEBUG);
}
