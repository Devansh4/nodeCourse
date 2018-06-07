const express = require('express'); //it returns a function
const app = express();  //it returns an object

const Joi = require('joi');

app.use(express.json());    //to use request processing (req.body.name) which is not available by default

const courses = [
{id:1, name:'course1'},
{id:2, name:'course2'},
{id:3, name:'course3'}
];

app.get('/',(req,res)=>{
    res.send("Hello Devansh");
});

app.get('/api/courses',(req,res)=>{
    res.send([1, 2, 3]);
});

app.get('/api/courses/:id',(req,res)=>{   //route parameters - required values
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) //course not found...return 404
        res.status(404).send("This course with the given id is not available!");
    else
        res.send(course);
});

app.post('/api/courses',(req,res)=>{
    //we define the schema with joi
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);  //returns an object //input validation with joi
    console.log(result);

    /*if(!req.body.name || req.body.name.length<3)    //input validation*/
    if(result.error)    //input validation with joi
    {
        /*res.status(400).send("Name is required and should be minimum 3 characters");*/    //old validation if-then
        /*res.status(400).send(result.error);*/ //too complicated info for the client
        res.status(400).send(result.error.details[0].message);    //simplifies the info the client gets
        return; //to avoid the rest of the function from being executed
    }
    const course = {
        id: courses.length+1,
        name: req.body.name //assuming request property has an object with name
    };
    courses.push(course);
    res.send(course);   //to make the new course id visible to the client
});

const port = process.env.port || 3000;
app.listen(port, ()=>{
    console.log(`listening to port ${port}...`);
});