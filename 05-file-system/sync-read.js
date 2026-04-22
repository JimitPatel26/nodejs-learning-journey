const fs = require('fs');

const data = fs.readFileSync('data.txt');

console.log("Sync Read:");
console.log(data.toString());