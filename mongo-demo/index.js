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

const Course = mongoose.model('Course',courseSchema);   //creates a class from the schema, course in the parameters is the singular name of the collection

async function createCourse(){
const course = new Course({
    name: "Angular course",
    author: 'Mosh',
    tags: ["Node","frontend"],
    isPublished: true
});

const result = await course.save();   //async operation as it will take some time. Returns a promise
console.log(result);
}
//createCourse();

async function getCourses(){
    const courses = await Course
        //.find({ author: 'Mosh', isPublished: true })
        //.find({ price: { $gte: 10, $lte: 20 } })  //pass an object with one of the comparison operator(eq,ne,lt,gt,lte,gte,in,nin) as the key.$ indicates that this is an operator
        //.find({price: { $in: [10,15,20]}})
        .find() //logical operator(and, or). and is similar to the filter directly in find()
        .or([ {author: 'Mosh'}, {isPublished: true} ]) //pass two object, with each object as a filter
        .limit(10)
        .sort({ name: 1})
        .select({ name: 1, tags: 1});
    console.log(courses);
}
getCourses();