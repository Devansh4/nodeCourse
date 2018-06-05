const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('myEvent', (args)=>{
    console.log("Listener Called", args);
});

//Raise an event
emitter.emit('myEvent',{id:1, url:"https://"}); //event arguments