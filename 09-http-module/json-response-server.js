let http = require('http');
http.createServer((req,res)=>{
    const data = {
        subject : "FSD-2",
        total_lectures : 20
    }
    res.writeHead(200,{"content-type" : "application/json"});
    res.write(JSON.stringify(data));
    res.end();
}).listen(3120,()=>{
    console.log("Server Started at http://localhost:3120");
})
