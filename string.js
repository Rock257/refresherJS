// string  = "sequence of character to represent the  text "
// string are immutable in JS   

// create string  

let strName1  = "Rahul"
let strName2  = "Soliha Bashir"

console.log(strName1  +' 💌 '+ strName2)

// length of string 

console.log(strName1.length)

// string indices 

console.log(strName1[0])
console.log(strName2[2])

for(let val of strName2){
    console.log(val)
}


// Template Literals in JS  - A way to have embedded expression in string  

 `This is template string`

//  EX  String Interpolation

let names = "Radhika";

console.log(`We will be together ${names}  dear`)

// ex 2 

let speaker = {
    brand  : "Boat Stone",
    connectivity : "Blutooth /AUX ",
    battary   :"700mAH"
}

console.log(` Hey Dear i have new speaker of ${speaker['brand']} having battary life of ${speaker.battary}`)

// ex - 3  

console.log(`The value of  90 x 4 will be ${90*4}`)

// escape character -  \n - add next line

console.log("Hello Rahul \n This is me ")

// tab - add tab space between character 

console.log( "I\tmiss\tyou")

// String Method/function  

let roadKing = "  royal Enfield Classic350  "
console.log(roadKing)

// toUpperCase()
let newName = roadKing.toUpperCase()
console.log(newName)

// toLowerCase()
console.log(newName.toLowerCase())

// trim() - remove white space from starting and  end  of string only not from middle
console.log(newName.trim(""))


// slice(start ,end) - 
console.log(roadKing.slice(3,12))

// concat() -  join string and string 2  

console.log(roadKing.concat(newName))

// replace() 

let love = "Radhika" ;  
console.log(love.replace('R' ,'S'))

// charAt() ;

console.log(newName.charAt(4))


// Practice Question  

// 1. promt name from user and return a new username to user starts ith @ and end with length of sting 
// ex  rahul  -> @rahul5

let enterName = prompt("Kindly Please Enter  Your Name ")

// add @  

// let lengthUser  = toString(enterName.length)
// console.log(typeof(lengthUser))

lengthUser =  enterName.length

let userName  = `@${enterName}${lengthUser}`  

console.log(userName)
