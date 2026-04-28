
// Create HTTP webpage on which Home page display “Welcome to Log in page” in blue color
// and font size must be 32px, Login page shows one HTML file from static URL having Form with
// detail for Username, Password, submit and reset button, Gallery page reflect one Image
// “hello.png” and any other page shows “Page Not found”.
// Write all necessary files to perform task. (Image already exist in same folder)

const http = require('http');
const fs = require('fs');

const data = fs.readFileSync("./form.html");
const img = fs.readFileSync("./nature.jpg");

http.createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200,{"content-type" : "text/html"});
        res.write(`
            <h1 style = "color:blue;font-size:32px">Welcome to Log in page</h1>
        `)
        res.end(data);
    }
    else if(req.url === "/gallery"){
        res.writeHead(200,{"content-type" : 'image/jpg'});
        res.end(img);
    }
    else{
        res.writeHead(404,{"content-type" : "text/html"});
        res.write(`
            <h1 style = "color:red;font-size:32px">Page Not Found</h1>
        `)
        res.end();
    }
}).listen(3120,()=>{
    console.log("http://localhost:3120");
});