const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')   //the first time we write to this db, mongodb will automatically create this db for us
.then(() => console.log('Connected to MongoDB....'))   //connect() returns a promise
.catch(err => console.error("Can't connect to MOngoDB...",err.message));

const courseSchema = mongoose.Schema(
    {
        name: String,
        author: String,
        tags: [ String ],
        date: { type:Date, default:Date.now()},
        isPublished: Boolean
    }
);

async function createCourse(){
const Course = mongoose.model('Course',courseSchema);   //creates a class from the schema, course in the parameters is the singular name of the collection
const course = new Course({
    name: "Angular course",
    author: 'Mosh',
    tags: ["Node","frontend"],
    isPublished: true
});

const result = await course.save();   //async operation as it will take some time. Returns a promise
console.log(result);
}
createCourse();