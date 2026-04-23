// Rename File
const fs = require("fs");

// Async
fs.rename('data/data.txt','data/new_data.txt',(err)=>{
    if(err) throw err;
    console.log("File Renamed");
})

// Sync
fs.renameSync('data/data.txt','data/new_data.txt');
console.log("File Renamed");
