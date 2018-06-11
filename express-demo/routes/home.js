const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    //res.send("Hello Devansh");
    res.render('index',{title: 'My Express App', message: 'Hello'})   //index.pug is the template file    //we have to provide values to the parameters that we have defined in our template
});

module.exports = router;