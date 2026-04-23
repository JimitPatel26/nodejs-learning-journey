const fs = require('fs');

const data = fs.readFileSync('data/data.txt');

console.log("Sync Read:");
console.log(data.toString());