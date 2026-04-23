// Append File
const fs = require('fs');

// Async
fs.appendFile('data/data.txt','\nNew Line Added',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Content Appended");
    }
});

// Sync
fs.appendFileSync('data/data.txt','\nNew Line 2 Added');
console.log("Data Appended");