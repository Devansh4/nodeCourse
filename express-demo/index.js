const express = require('express'); //it returns a function
const app = express();  //it returns an object

app.get('/',(req,res)=>{
    res.send("Hello Devansh");
});

app.get('/api/courses',(req,res)=>{
    res.send([1, 2, 3]);
});

/*app.get('/api/courses/:id',(req,res)=>{   //route parameters - required values
    res.send(req.params.id);
});*/

app.get('/api/courses/:year/:month',(req,res)=>{    //localhost:5000/api/courses/2018/5
    //res.send(req.params);
    res.send(req.query); // query parameters - optional....//localhost:5000/api/courses/2018/5?sortBy=name
});

const port = process.env.port || 3000;
app.listen(port, ()=>{
    console.log(`listening to port ${port}...`);
});