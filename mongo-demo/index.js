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
    const pageNumber = 2;  //just for simplicity    //we get from query string parameters
    const pageSize = 10;    // /api/courses?pageNumber=2&pageSize=10

    const courses = await Course
        .find({ author: 'Mosh', isPublished: true })
        .skip((pageNumber-1)*pageSize)  //for pagination
        .limit(pageSize)
        .sort({ name: 1})
        .select({ name: 1, tags: 1});
    console.log(courses);
}

async function updateCourses(id){
    //Approach: Query first
    //findById()
    //Modify its properties
    //save
    const course = await Course.findById(id);
    if(!course) return;
    course.set({
        isPublished: true,
        author: 'Another Author'
    });
    const result = await course.save();
    console.log(result);
    //Approach: Update first
    //Update directly
    //Optionally: get the updated document
}
updateCourses('5b21f00f97089a678eff7904');