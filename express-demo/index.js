const startupDebugger = require('debug')('app:startup');    //require debug returns a function and we are supplying that function with arguments
const dbDebugger = require('debug')('app:db');

const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');

const courses = require('./routes/courses');
const home = require('./routes/home');

const express = require('express'); //it returns a function
const app = express();  //it returns an object

const Joi = require('joi');

app.set('view engine','pug');   //templating engine
app.set('views','./views');     //views is the default folder for storing the templates //this statement is optional

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);  //by default is undefined. NODE_ENV may be set to development,production,staging,testing
console.log(`App process: ${app.get('env')}`);    //uses the same function as above. BY default is set to production. 

app.use(helmet());

app.use('/api/courses', courses);   //for any route that is starting with the path, use courses
app.use('/', home);

//configuration
console.log('Application Name:'+config.get('name'));    //name is the propert we want to display
console.log('Mail Server: '+config.get('mail.host'));   //will tell according to the environment
console.log('Mail Password: '+config.get('mail.password'));

//can set environment variable to production by export NODE_ENV=production
if(app.get('env')) //enable logging of http requests only in development environment
{
    app.use(morgan('tiny'));
    //console.log("Morgan enabled...");
    startupDebugger("Morgan enabled...");
}

//DB work...
dbDebugger("Connected to the database...");

app.use(express.json());    //to use request processing (req.body.name) which is not available by default

//custom middlewares
const logger = require('./middleware/logger'); //all middleware should be in separate files
app.use(logger);
    
app.use(function(req, res, next){   //middleware function for authentication
    console.log("Authenticating...");  //Suppose it authenticates every user request
    next(); //we need to pass the control to another middleware to terminate the req res cycle
});

//built-in middlewares
app.use(express.urlencoded({ extended: true}));  //to handle key-value pairs which we may get from html forms.extended is set to true so that we can pass arrays and objects using urlencoded function
app.use(express.static('public'));  //to handle static assets like html and css code.public is the folder in which they all are put...use localhost:3000/readme.txt in browser

const port = process.env.port || 3000;
app.listen(port, ()=>{
    console.log(`listening to port ${port}...`);
});