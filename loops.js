// loops- loops job to execute some code again again till the condition meet

//1. initilisation i.e let  i =0 ;
//2. stopping condition  i<10 ;
//3. updation i++ i.e a = a+1
// How loop Works
console.log("How Loop Works");
for (let i = 1; i < 8; i++) {
  console.log(i);
}

// infinite loop - loop that never ends

// for(var j = 1; j<8; j++){
//     console.log(j)
// }

for (let i = 1; i <= 5; i++) {
  console.log("Hello World");
}

console.log("Loop Has Ended");
// print table of  5

for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}
console.log("Loop Has Ended");

// print even no.  till 50

for (let i = 2; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("Loop Has Ended");
// understanding for loop

// calculate the sum of  1 to n num

let sum = 0;
let n = 10;
for (let i = 0; i < n; i++) {
  sum = sum + i;
}
console.log(sum);

//
let sums = 0;
let m = 100;
for (let i = 1; i <= m; i++) {
  sums = sums + i;
}

console.log("The sum of 1 to m is = ", sums);

//while loop

// initlisation
// while(condition){
//     work
//     updation
// }

let i = 10;
while (i <= 15) {
  console.log("i =", i);
  i++;
}

// do - while loop

let j = 20;
do {
  console.log("Hello  World");
  j++;
} while (j <= 10);

// loop run only once as condition is j<=10 while j  = 20

// for -of  and for in  loop - use t iterate every elemnt o string and array

// i val bot are same just a varible,  called iterator

let strValue = "HeyBabyLetLiveTheMoment";

for (let i of strValue) {
  console.log(i);
}

let length = 0;

for (let i of strValue) {
  length++;
}

console.log("length of string is = ", length);

console.log(strValue.length);

let arrValue = [3, 5, 6, 2, 8, 9, 7];

for (let val of arrValue) {
  console.log(val);
}

// for-in = use to iterate every elment of Array and key of Object
//Syntax
// for(let key in objVar){
//     //do some work
// }

const student = {
  name: "Rahul",
  height: "160-CM",
  weight: 72,
  catagory: "Sigma",
};

// to iterate every key from object  or return key

for (let i in student) {
  console.log("key = ", i, "Value = ", student[i]);
}

// Exercise

// 1. print all even no. from 0 -100

for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// using while loop odd number

// let x = 0;

// while(x<=100){
//     if(x%2 !== 0){
//         console.log(x)
//     }
//     x++;
// }

// example 2  : create a number gauessing game

const luckynumber = 5;

for (i = 0; i <= 7; i++) {
  const luckynumber = 5; 
  let  userGuess = prompt("Please enter a number");
  console.log(userGuess)

  if (luckynumber == userGuess) {
    alert("You Won");
  } else {
    alert("You Lose");
  }
}

// using while loop 


// const luckynumber = 5;
// const userGuess = prompt("Please enter a number");
// console.log(userGuess)
// while(luckynumber !==userGuess){
//   userGuess = prompt("You enter incoorect input,guess again")
// }
// console.log("Congrulation you won the game ")
