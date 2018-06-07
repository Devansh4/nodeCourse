const express = require('express'); //it returns a function
const app = express();  //it returns an object

app.get('/',(req,res)=>{
    res.send("Hello Devansh");
});

app.get('/api/courses',(req,res)=>{
    res.send([1, 2, 3]);
})

app.listen(3000, ()=>{
    console.log("listening to port 3000...");
});