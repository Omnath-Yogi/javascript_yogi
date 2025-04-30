const mysmbol = Symbol("key1")


const jsUser={
 name : " Yogi",
" full name ": " Omnath YOgi",
[mysmbol] : "mykey1",
 age : 22,
 location : "Bhilwara",
 emailId : "omnathyogi9996@gmail.com",
 isLoggedIn : false
}


// console.table([jsUser.name , jsUser.emailId , jsUser.location])
// console.log( jsUser.location)
// console.log(jsUser["emailId"])
// console.log(jsUser[" full name "])
// console.log(jsUser[mysmbol])


 jsUser.age = 18;
console.log(jsUser.age)
// Object.freeze(jsUser)     


jsUser.greeting = function(){
    console.log("hello user")
}
console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`Hello Mr. , ${this.name}`)
}

console.log(jsUser.greetingTwo())