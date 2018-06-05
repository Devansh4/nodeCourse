
const EventEmitter = require('events');
//const emitter = new EventEmitter();   this object is different for both the classes. So to use the same object, us it in a class and call that class from the other file

var x = "http://myWebSite/log";

class Logger extends EventEmitter
{
    log(message){
    console.log(message);

    //Raise an event
    this.emit('myEvent',{id:1, url:"https://"}); //event arguments  //this used as we want to use the same current object of the class through which we called from app
    }
}

module.exports = Logger; 
