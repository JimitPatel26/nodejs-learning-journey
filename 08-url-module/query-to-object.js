const url = require('url');
let addr = "http://localhost:8080/default.html?year=2025&month=feb#test";
let q = url.parse(addr, true);
console.log(q);