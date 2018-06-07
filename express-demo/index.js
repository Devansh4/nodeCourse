const express = require('express'); //it returns a function
const app = express();  //it returns an object

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

const port = process.env.port || 3000;
app.listen(port, ()=>{
    console.log(`listening to port ${port}...`);
});