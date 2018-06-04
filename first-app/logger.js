//(function (exports, require, module, __filename, __dirname) {   //module wrapper function
var x = "http://myWebSite/log";

function log(message){
    console.log(message);
}

module.exports.log = log; //or module.exports = log as no need to send an object

console.log(__filename);
console.log(__dirname);

//})