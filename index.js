module.exports =  (process.type === 'renderer' ? require('debug/browser') : require('debug'));
