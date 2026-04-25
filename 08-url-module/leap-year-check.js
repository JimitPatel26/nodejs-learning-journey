const url = require('url');
let addr = "http://localhost:8080/default.html?year=2025&month=feb";
let q = url.parse(addr, true);

let year = q.query.year;

if ((year % 400 == 0) || (year % 100 != 0 && year % 4 == 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}