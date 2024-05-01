
let a = 51;
let b = 10;

console.log(' a + b =' , a+b)
console.log(' a - b =' , a-b)
console.log(' a * b =' , a*b)
console.log(' a / b =' , a/b)

// modulus operator 
console.log(' a % b =' , a%b)

// exponential operator
console.log(' a ** b =' , a**b)  // a^b i.e 51^10
console.log(5**5)


// Urinary Operator: 

//Incremental Operator(++)

let x = 50;

let y  = ++x; 
let z  = x++


console.log(y)

console.log(z)

//Decremental Operator (--)

let p = 100 ;

let q = --p;

console.log(q)

// assignment operator  ( ( = )  and ( += , -+ , *= , /=))

let ab = 10 ;
let bc = 20 

ab  += 25 
// ab = ab +25 i.e 35
bc  -= 5
// bc = bc -20  i.e 5

ab *= 5 
//  ab  = ab*5 i.e ab = ab(35)*5
console.log(ab)

ab  /=  5
console.log(ab)

ab **= 4

console.log(ab)
console.log(bc)
// ab  += 10  "is equivalent to"   ab  = ab + 10

// Comparisoin Operator  

let e = 3 ;
let f = 7 ;

let g = "3"

console.log(e ==f)
console.log(e !=f)
console.log(e >f)
console.log(e<f)

console.log(e === g)  //  false one is no. and anoter is string
console.log(e == g)   // true 
 

// Logical Operator 

console.log("Logical Operator")

 let num1 = 50 ; 
 let num2 = 60 ;
let num3 = 100 ;  



console.log(num3> num2 && num1 < num3 )  // true 
console.log(num3> num2 && num1 > num3 )  //false
console.log(num3> num2 ||  num1 > num3 )  // true
console.log(num3<num2 ||  num1 > num3 )  // false

// not '!' 

console.log("Not Operator(!)")

console.log(num3> num2 && num1 < num3 )  // true 
console.log(num3>! num2 &&  !(num1 < num3) )  //

 
// if conditon

// Ex -1 

let age = 20;
 
if(age>18){
    console.log("You Can Vote")
}
if(age<18){
    console.log("You Can't Vote")
}


// else{
//     console.log("You Can't Vote")
// }


// Ex -2 

let mode = "dark";
let color ;


if(mode === "dark"){
    color = "Black"
}

if(mode === "light"){
    color = "White"
}

console.log(color)

// if else 

if (mode ==="Dark"){
    color = "Dark"
}
else(color = "White")
console.log(color)

// ex .3  find odd even no
 
let num =5 

if(num%2 ==0){
    console.log("Number is even")
}
else(
    console.log("Number is odd")
)

// ex .4 find odd even no

let height = 160 ;

if(height>155){
    console.log("You can join Army")
}

if(height<155){
    console.log("You can't join Army")
}

// ex . find odd even no

let n1;
if(n1 % 2 !==0 ){
    console.log("n1 is odd")
}
else{
    console.log(
        "n1 is even "
    )
}


// else if statement (multiple condition)

// backround modes = ("dark" , "light" , 'night')

let modes  = "night" 

if(modes === "dark"){
    console.log("Dark Mode Activated ")
}
else if(modes === 'light'){ 
    console.log("Light Mode Activated ")
}
else{
    console.log("Night Mode Activated ")
}




// urinary operator  

// a++ = a+1 
// a-- = a-1

let n = 5 ;

// pre increment 

// console.log("++n = " , ++n);
// console.log(n)

// output  
// ++n =  6
//  6



// post increment 
console.log("a++ = ",n++);
console.log(n)

// output
// a++ =  5
//  6


// ternary operators 

// syntax  =  condition ? true output  : false output 


let weight = 105 ;
let result  = weight >100 ? "Overweight" : "Normal"; 
console.log(result)


// problem  1 :  check the no divisible by or not  

// let number = prompt('Enter Desire No') 

// if(number%5 === 0){
//     console.log("number is divisible by  5")
// }
// else{
//     console.log("number is  not divisible by  5")
// }

// Method

// const numresult  =  number % 5 === 0 ?  "Divisible by 5" : "Not Divisible by 5"

// console.log(numresult)

  
// problem  2 :  Grading  

// 90- 100 = A 
// 89 -80 = B 
// 79 - 70 = C 
// 69-60 = D 


// let marks = prompt("Enter Marks Of Student") ;

// if(marks< 100 && marks>=90){
//     console.log("Grade A")
// }

// else if((marks<89) && (marks>=80)){
//     console.log("Grade B")
// } 
// else if(marks<79 && marks>=70){
//     console.log("Grade C")
// }
// else if(marks<69 && marks>=60){
//     console.log("Grade D")
// }
// else{
//     console.log("You Are Failed ")
// }