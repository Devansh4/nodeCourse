//use npm init to make a package.json file, which is neceesary for every application
//use npm i "packageName" to install a package from npmjs.com....See the change reflect in dependencies of package.json file and in npm modules folder
//Now, to the code...

var _ = require('underscore');

//require first assumes that it is a core module, then assumes it is a file or folder, then it is in node_modules

var result = _.contains([1,2,3],2);    //one of the functions from underscorejs.org homepage
console.log(result);