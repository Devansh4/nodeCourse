const express = require('express');
const router = express.Router();    //we use router object instead of app here 

const courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
    ];
    


router.get('/',(req,res)=>{
    //res.send([1, 2, 3]);
    res.send(courses);
});

router.get('/:id',(req,res)=>{   //route parameters - required values
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) //course not found...return 404
        res.status(404).send("This course with the given id is not available!");
    else
        res.send(course);
});

router.post('/',(req,res)=>{
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
        //res.status(400).send(result.error);//too complicated info for the client
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

router.put('/:id', (req,res)=>{
    //Look up for the course
    //If it doesn't exists, then return 404
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send("This course with the given id is not available!"); //same as if return; at next line
    //If exists, the validate
    //If invalid, return 400- Bad request
    /*const result = validateCourse(req.body);
    if(result.error) */ //all time only result.error used....so extract only error
    const {error} = validateCourse(req.body);   //object destructuring
    if(error)
    {
        res.status(400).send(result.error.details[0].message); 
        return; 
    }
    //If valid, update the course
    course.name = req.body.name;
    //return the updated course
    res.send(course);
});

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

router.delete('/:id',(req,res)=>{
    //Look up for the code
    //If not exist, then return 404
    const course = courses.find(c => c.id===parseInt(req.params.id))
    if(!course)
        return res.status(404).send("The course with the given id is not found and so cannot be deleted")
    //delete the course
    const index = courses.indexOf(course);
    courses.splice(index, 1);   //removes one element at "index" index
    //return the deleted course
    res.send(course);
});

module.exports = router;