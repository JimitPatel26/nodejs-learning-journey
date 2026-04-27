// Write a nodejs program load a simple html file defined as static on nodejs web server and
// print its content as html content.

const fs = require('fs');
const http = require("http");
http.createServer((req,res)=>{
    const data = fs.readFileSync("./index.html");
    res.end(data);
}).listen(3120,()=>{
    console.log("http://localhost:3120");
})
