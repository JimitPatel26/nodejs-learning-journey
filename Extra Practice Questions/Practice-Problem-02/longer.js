const {appName,version} = require("./config.js");

function log(message){
    console.log("["+appName+"] : "+message);
}

module.exports = log;