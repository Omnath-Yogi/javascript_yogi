//const instaUser = new Object() //this is a singleton  object


const instaUser ={

}

instaUser.id = "123abc";
instaUser.name = "Omnath Yogi"
instaUser.loggedIn = true

// console.log(instaUser)


const newUser ={
    email : "sammy@wi.com",
    fullName :{
        UserFullName :{
           firstName : "Omnath",
           LastName : "Yogi"
        }
    }
}

// console.log(newUser.fullName.UserFullName.LastName)


/// addition of objects 

const obj1 = { 1: "a ", 2:"b"}
const obj2 = { 3: "a ", 4:"b"}
const obj3 = { 5: "a ", 6:"b"}

// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4)


// another Way
const obj4 = { ...obj1 , ...obj2}
//console.log(obj4)

// console.log(instaUser)

console.log(Object.keys(instaUser)) ; 
 // to access the keys of a object
 console.log(Object.values(instaUser)) 