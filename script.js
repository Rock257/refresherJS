console.log("Hello Shradha")
console.log("i love JS")

// define and types variable 

age  = 35;
fullName  = "Tony Stark";
price = 444.6
x = null ;
y = undefined;

// boolean type - true ,false

isFollow = false
isFriend = true


console.log(age  , fullName)

console.log(typeof(age))
console.log(typeof(fullName))
console.log(typeof(price))
console.log(typeof(x))
console.log(typeof(y))
console.log(typeof(isFollow))
console.log(typeof(isFriend))

// JS is dynamically type language - we dont need to declare type of variable before varible declaration  like in other coding langauges

// = assignment operator  - assign the value of var a to var b

let a = 50 ;
let b ;

b = a

console.log(b)


// nameing of varible are case Sensative  
// letter , digit , _(underscore) , $ are allowed in naming
//reserved words cant be used as varible

let lastNames =  "Stark"
console.log(lastNames)

// diff in var let and const 

// var  - redeclation and update(global scope)

var age  =  30 ;

console.log(age) 

var age  =  20 ;
var age  = 10  ;

console.log(age) 

// let  - only update (block scope)

let  myName = "Rahul"
console.log(myName)

myName = "Soliha"
console.log(myName)


// const =  neither redeclare nor update 

const year = 2000; 
console.log(year)

// Datatype types 

let names = "Rahul";
let ages = 40;
let isFollows =  true
let abc ;
let bI = BigInt("99084")
let ya = Symbol('Hello !!')


console.log(bI)

let xyx = null

console.log(typeof names) ; 
console.log(typeof ages ); 
console.log(typeof isFollows) ; 
console.log(typeof abc ); 
console.log(typeof xyx ); 
console.log(typeof bI ); 
console.log(typeof ya)

//object 

const students = {
    name : "Soha",
    age : 26,
    isMarried : false,
    cgpa : 8.5

 }

 console.log(students)

//  access object name
 console.log(students.name)
 console.log(students["name"])

//  update object value of key

students.cgpa = students.cgpa + 1

students.name  = "Rahul"

console.log(students.name)

 console.log(students.cgpa)

 console.log(students['isMarried'])
 
 console.log(typeof(students))
 