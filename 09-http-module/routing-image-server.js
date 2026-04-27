const http = require("http");
const fs = require('fs');
const data = fs.readFileSync("Nature.jpg");
http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Home Page</h1>");
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>About Us Page</h1>");
    }
    else if (req.url === "/image") {
        res.writeHead(200, { "content-type": "image/jpg" });
        res.end(data);
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>Page Not Found</h1>")
    }
}).listen(3120, () => {
    console.log("http://localhost:3120");
})