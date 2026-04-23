// Copy File

const fs = require('fs');
// Async
fs.copyFile('data/source.txt','destination.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Copied File");
    }
});

// Sync
fs.copyFileSync("data/source.txt",'data/destination.txt');
console.log("Copied File");
