// Object de-structure and JSON API 

const course ={
    courseName : " JS in Hindi ",
    price : 970,
    courseInstructor : "Hitesh"
}

// to acces the course instructor 
// course.courseInstructor

// destructure
const {courseInstructor : teacher} = course
console.log(teacher)