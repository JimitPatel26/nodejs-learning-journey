let http = require("http");
http.createServer((req, res) => {
    res.writeHead(200, { "content-type": 'text/html' });
    res.write("<h1>Hello World</h1>");
    res.end();
}).listen(3120, () => {
    console.log("Server Started at http://localhost:3120");
})
