const url = require('url');
const q = url.parse("http://localhost:3120/?a=10&b=20",true);
console.log(q.query);
