const fs = require('fs');

/*let a = fs.readdirSync('./');
console.log(a);*/

let b = fs.readdir('./',function(err, result)   //every asynchronous method has a callback function, this one has the parameters error and result, out of which one is null
{
    if(err)
        console.log(`Error: ${b}`);
    else
        console.log(result);
});