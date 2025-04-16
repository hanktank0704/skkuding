
var url = 'http://mylogger.io/log';

//this log function is private, we need to publish this to use in different files
function log(message) {
    //send an http request
    console.log(message);
}

function randomNum(){
    return Math.floor(Math.random() * 100) + 1;
}

// module.exports.log = log;
// module.exports.randomNum= randomNum;
module.exports = {log, randomNum};