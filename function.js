// function - block of code that can be  perform specific task whenever they needed to  execute, then can be  invoke

function functionName(){
    //do some work
}


function functionName(param1, param2 , paramn){
    //do some work
}

// Arrow function
const multiply = (a,b)=>{
    return a*b
}

//  invoking a function functionname()
multiply(3,5)

// let x = multiply ;   - refer to function object
// let x = multiply() ;  refers  tofunction result 


function myFun(name){
    return "Good Mornin"+ " " + name
}

myFun("Rahul")

// Ex. - write fuction change celcius to kelvin  C = K - 273.15  
//    C  = (5/9) * (F-332)

function tempConverter(K){
    return  C = K - 273.5 
}

tempConverter(500)


// function used as variable 

let result = tempConverter(400)

let text  = "The 400 Farhenite into celcius is  = " + " "+ result + "C"
console.log(text)



let texts  = "The 700 Farhenite into celcius is  = " + " "+ tempConverter(700) + "C"
console.log(texts)


const myAlert = ()=>{
    alert("Hey You are in my World Now")
}

myAlert();

function multyply(a, b){
    const mul = a*b ;
    return mul; 
}

let results = multiply(8,10);
console.log(results)


function  sum(a,b) {
    // a,b  act as local varible,block scope
    let s = a +b ;
    return s;
    // nothing will executed after return statement 
}
// return keyword return always one value

let val = sum(44,80)
console.log(val)
// 124

const area =(radii)=>{
    let a = 3.14*radii*radii

    return a;
}
area(3);
//78.5

const percent=(x,y)=>{

    let percentage = x/y*100;
    return percentage;
}

let ans = percent(19,90);
console.log(ans)

// Practice : create function takes string as argument and return the number of vowels in the string 

function countVowels(str){
    let count = 0 ;
    for(let char of str){
        // console.log(char)
        if(char=== 'a' || char ==='e' || char ==='i' || char ==='o' || char==='u'){
            console.log(`vovel found ${char}`)
            count++
        }
        return count
    }
}

countVowels('hello')


// function can be passes as parameter in JS 

// callback function  - function which can be passed as argument to a another function 


// array.forEach(element => {
    
// });

// ex 1
 let numArr = [30,40,50,60];
 numArr.forEach((val)=> console.log(val*2))

//  val passed by forEach to the callback function ,val is the each element value of each index of array 
// ex 2
 numArr.forEach(function triple(val) {
     console.log(3*val)
 })

//  ex 3 
//callback function in for each can have 3 parameter all three are optional

// city.forEach((val,index, city){
// })

let city = ['delhi' , 'munbai' ,'jaipur' ,'banglore'];

city.forEach((val,i, city)=>{
    updateCity = val.toUpperCase()
    console.log(updateCity ,i)
    // console.log(city)
})

// forEach is a higher order function(hof) - 
//HOF- are those function which takes another function as parameter or return another function as their output

// practice : find suare by forEach 
let num = [3,6,7,9];

num.forEach((val)=>{
    let sqAr = [];
    let sq = val*val
    console.log(sq)
})

// method 2

const square =(i)=>{
    console.log(i*i)
}
num.forEach(square);

// Some more importent array method :

// map() :  create a new array with the results of some operation ,the value its callback returns are used to form new array

// arr.map(callbackFun(val ,index ,array))

let nums = [3,6,7,9,12,11,52 ];

const newArr = num.map((val)=>val*val);

console.log(newArr)

// filter() : create a new array of elements that give true for a condition filter
// ex. all even elements

let newArray = nums.filter((val)=>{ 
      return val%2===0
    
})
console.log(newArray)

// all odd num 
let oddArr  = nums.filter((i)=>{
    return i%2 !==0 ;
})
console.log(oddArr) ;


// find value greater than 5  and even number

let greaterFive = nums.filter((i)=>{
    return i > 5 && i%2 ===0;
})

console.log(greaterFive)


// reduce : perform some operation and reduces the array to a single value
// it returns that single value 

// Ex - find some of array elements 

let myArray = [2,4,3,6,5,7,10,8,9]

const newMyArray = myArray.reduce((result, currValue)=>{
    return result + currValue ; 
})

console.log(newMyArray)

// find avg of above array  

let avg = (newMyArray/(myArray.length))

console.log(avg)

// 54
// 6
  

// find grater element from array 

const maxima = myArray.reduce((pre,curr)=>{
    return pre >curr ? pre :curr
})

console.log(maxima)

// 10

// practice question : we are given array of marks of students  ,filterout students that scored 90+


let marks = [88,90,95,93,87,76,99]; 

let filtArr =marks.filter((val)=>{
    return val >=90;
})
console.log(filtArr)

// (4) [90, 95, 93, 99]

// example 2 create an array of length n given by user prompt

let n = prompt("Please enter a number"); 

let exArray = [];

for(let i= 1 ; i<=n ; i++){
    exArray.push(i);
}
console.log(exArray)
// [1, 2, 3, 4, 5,6,7]
// enter value is 7
// use reduce method to get sum of all array number

const sum = exArray.reduce((acc,curr)=>{
    return acc +curr ;
})
console.log(` the sum of n no. is ${sum}`)
// the sum of n(7) no. is 28

// use reduec method to calculate the product of all enter no. i.e factorial on n number 

const product = exArray.reduce((acc,curr)=>{
    return acc*curr;
})

console.log(`factorial is = ${product}`)
// factorial is = 5040