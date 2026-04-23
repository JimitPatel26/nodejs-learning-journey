// Create Directory
const fs = require('fs');

// Async
fs.mkdir('myfolder',(err)=>{
    if(err){
        console.log(err);   
    }
    else{
        console.log("Directory Created");
    }
})

// Sync
fs.mkdirSync("myfolder");
console.log("Folder Created");
