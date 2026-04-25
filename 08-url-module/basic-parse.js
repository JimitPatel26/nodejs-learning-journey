// Syntax
// url.parse(urlString,parseQueryString)

const url = require('url');
const q = url.parse("http://localhost:3120/?a=10&b=20");
console.log(q.query);
