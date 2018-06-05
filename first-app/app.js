const EventEmitter = require('events');
//const emitter = new EventEmitter();    // this is not needed as we will use object of the extending class in logger

const Logger = require("./logger");
const logger = new Logger();    //object of the class

//Register a listener
logger.on('myEvent', (args)=>{
    console.log("Listener Called", args);
});

logger.log("DC");