const url = require('url');

let addr = "http://localhost:8080/test?m1=50&m2=60&m3=70";
let q = url.parse(addr, true);

let num1 = Number(q.query.m1);
let num2 = Number(q.query.m2);
let num3 = Number(q.query.m3);

console.log((num1 + num2 + num3) / 3);