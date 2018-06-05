const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('myEvent', ()=>{
    console.log("Listener Called");
});

//Raise an event
emitter.emit('myEvent');