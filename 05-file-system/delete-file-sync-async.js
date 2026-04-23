// Delete File
const fs = require('fs');
// Async
fs.unlink('data/new_data.txt',(err)=>{
    if(err) throw err;
    console.log("File Deleted");
})


// Sync
fs.unlinkSync('data/new_data.txt');
console.log("file Deleted");
