function log(req, res, next){   //middleware function for logging
    console.log("Logging...");  //Suppose it logs every user request
    next(); //we need to pass the control to another middleware to terminate the req res cycle
};

module.exports = log;