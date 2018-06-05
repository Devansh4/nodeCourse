const http = require('http');

/*const server = http.createServer(); //this server is an event emitter, as http.server is derived from net.server which itself is an event emitter

//to handle the event connection raised
server.on('connection', (socket)=>{
    console.log("New connection established");
});*/

const server = http.createServer((req,res)=>
{
    if(req.url == "/")
    {
        res.write("Hello World");
        res.end();
    }
    if(req.url == "/api/courses")
    {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);
console.log("Listening on port 3000...");