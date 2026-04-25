/*
Create a Node.js program using the events module to demonstrate:
1. Registering multiple event listeners for different events (myEvent1, myEvent2).
2. Removing a specific event listener (removeListener) for myEvent2.
3. Removing all listeners associated with myEvent1 (removeAllListeners).
4. Triggering events and observing which listeners execute.
*/

const EventEmitter = require('events');
var eventEmitter = new EventEmitter();
var fun1 = (msg) => {
    console.log("Message from fun1: " + msg);
};
var fun2 = (msg) => {
    console.log("Message from fun2: " + msg);
};
eventEmitter.on('myEvent1', fun1);
eventEmitter.on('myEvent2', fun2); 
eventEmitter.on('myEvent1', fun1);
eventEmitter.on('myEvent2', fun2);

eventEmitter.removeListener('myEvent2', fun2);
eventEmitter.removeAllListeners('myEvent1'); 

eventEmitter.emit('myEvent2', "Play");
eventEmitter.emit('myEvent1', "Run");
