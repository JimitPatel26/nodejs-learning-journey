/*
Write a Node.js program using the events module to simulate a sequence of events:
1. When a "connection" event occurs, print "Connection successfully" and trigger a
"data-received" event.
2. When the "data-received" event occurs, print "Data received successfully".
*/

let eventemitter = require('events');
let ee = new eventemitter();

ee.on("connection",()=>{
    console.log("Connection Successfull");
    ee.emit("data-received");
})

ee.on("data-received",()=>{
    console.log("Data received successfully");
})

ee.emit("connection");
console.log("Done");
