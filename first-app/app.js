const os = require('os');
let a = os.freemem();
console.log(a);
let b = os.totalmem();
console.log(`Total Memory: ${b}`);  //Template String