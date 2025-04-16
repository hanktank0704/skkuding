console.log('hello, world');

function sayHello(name){
    console.log('hello fucntion' + name);
}

// sayHello('infra team');

// setTimeout();
// clearTimeout();
// var message = 'message';
// globalThis.setTimeout

// console.log(module);

//we dont want to overwrite the value of logger, so use const
const logger = require('./logger');
// const randomNum = require('./logger');
console.log(logger);
logger.log('log messgae module')
logger.log(`random number : ${logger.randomNum()}`)