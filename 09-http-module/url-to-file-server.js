// Write node js script to fetch values from url given below and display output as asked.
// "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to
// LJU#AllTheBest"
// 1) Data must be written as below in file named “exam.txt”. File name must be fetched from
// the url given above.
// Output:
// Hello!
// Welcome to LJU FSD2 T1 Test
// #AllTheBest
// 2) Read content from file “exam.txt” and send response to server and display data in “/”
// page in same format as above but in H1 tag and in red color.
// 3) If any other page is requested it shows “Page not found” message in plain text.

const fs = require('fs');
const http = require('http');
const url = require('url');

let addr = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2%20T1%20Test&c3=Welcome%20to%20LJU#AllTheBest"

let q = url.parse(addr,true);

let data = q.query.c1 + "!\n" + q.query.c3 + "\n" + q.hash;
let fname = ("." + q.pathname)
fs.writeFileSync(fname,data);

let read = fs.readFileSync(fname,'utf-8');

http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"content-type" : "text/html"});
        res.end(`
            <h1 style = "color:red;"><pre>${read}</pre></h1>
            `);
    }
    else{
        res.writeHead(404,{"content-type" : "text/html"});
        res.end("<h1>Page Not Found</h1>");
    }
}).listen(3120,()=>{
    console.log("http://localhost:3120");
})
