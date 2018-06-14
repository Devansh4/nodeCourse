const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises')
.then(() => console.log('Connected to the db...'))
.catch(err => console.log("Can't connect to the db....',err.message"));

const courseSchema = mongoose.Schema(
    {
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
    return await Course.find({isPublished: true})
.or([{price: {$gte: 15}}, {name: /.*by.*/i}]);
}
async function run(){
const courses = await getCourses();
console.log(courses);
}
run();
