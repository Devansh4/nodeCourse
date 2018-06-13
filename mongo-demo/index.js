const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')   //the first time we write to this db, mongodb will automatically create this db for us
.then(() => console.log('Connected to MongoDB....'))   //connect() returns a promise
.catch(err => console.error("Can't connect to MOngoDB...",err.message));

