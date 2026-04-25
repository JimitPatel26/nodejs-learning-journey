const eventemitter = require('events');
const ee = new eventemitter();

ee.on("start",(start,end)=>{
    console.log(`Started at ${start} and ended at ${end}`);
})

ee.emit("start",1,100);