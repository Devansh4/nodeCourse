const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises')
.then(() => console.log('Connected to the db...'))
.catch(err => console.log("Can't connect to the db....',err.message"));

const courseSchema = mongoose.Schema(
    {
        name: String,
        name: String,
        author: String,
        tags: [ String ],
        date: { type:Date, default:Date.now()},
        isPublished: Boolean,
        price: Number
    }
);

const Course = mongoose.model('Course',courseSchema);

async function getCourses(){
    const courses = await Course.find({ tags: 'backend' , isPublished: true })
                                    .sort({name: 1})                        //sort(-name)
                                    .select({name:1, author:1});
    return courses;
}
async function run(){
const courses = await getCourses();
console.log(courses);
}
run();
