// Example to understand difference between sync and async.

const fs = require('fs');

// Synchronous
fs.writeFileSync('data/test.txt','Hello World');
console.log("Synchronous Write Operation Completed");
console.log("Outside Synchronous");

// Aynchronous
fs.writeFile('data/test1.txt','Hello World',(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log('Asynchronous Write operation completed.');
    }
})

console.log("Outside Asynchronous");
