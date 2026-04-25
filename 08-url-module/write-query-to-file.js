const url = require('url');
const fs = require('fs');

let addr = "http://localhost:8080/default.html?year=2025&month=feb";
let q = url.parse(addr, true);

let data = JSON.stringify(q);
fs.writeFileSync("data.txt", data);

console.log('Done');