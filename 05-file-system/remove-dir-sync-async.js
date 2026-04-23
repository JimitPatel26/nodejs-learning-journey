// Remove Directory

// Async
const fs = require('fs');
fs.rmdir('myfolder',(err)=>{
    if(err){
        console.log("Error in Removing Folder");
    }
    else{
        console.log("Folder Removed");
    }
})

// Sync
fs.rmdirSync('myfolder');
console.log("Folder Removed");
