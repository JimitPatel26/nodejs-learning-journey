const url = require('url');
let addr = "http://localhost:3120/default.html?year=2025&month=feb#test";
let q = url.parse(addr);
console.log(q);