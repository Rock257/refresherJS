variable - variable are container for data ,to store data


JS is dynamically type language


<!-- Variable -->

let ,const , var 

var  : variable can be re-declared and updated A global scope varible

<!-- var a = 30 -->
<!-- var a = 85 -->
<!-- var a = 40 -->
<!-- redeclaration of a using var without any error-->

let  :  variable cannot be re-declared but can be updated ,  a block scope

<!-- let age  = 46 -->

<!-- age = 50 -->

const : variable cannot be re-declared or
 updated , a block scope


 type of data types :- 

 1. Primitive :  Number ,String  ,Boolean , Undefined ,Null , Biglnt ,Symbol

 2. Non Primitive : Object -> (array ,function)  = collection of values 

 
 const students = {
    key : value,
    name : "Soha",
    age : 26,
    isMarried : False
 }

 const object key can be update but const varible cant be update

 <!-- Operator  -->

Operator -  used to perform some operation on data
  
1. airthmatic operator  - (+,-,*,/)
 2. Modulus - (%) or reminder operator
 3. exponentiation 
 4. Increment  - (++ )
 5. Decrement  -(--)
 6. Assignment Operator  - ( = )  and ( += , -+ , *= , /=)

  

 Comparisoin Operator 

equal to == 
not equal to != 
equal to & type === 
 not equal to & type !==

 >
 >=
 <
 <=

 <!-- Logical Operator -->  Output - true false

 1. && - And
 2. || - Or 
 3. !  = Not


Conditional Statement  - to impliment condtion 

1. if Statement 


<!-- function  -->

function  - A JavaScript function is a block of code designed to perform a particular task.

<!-- uses :-  -->

reuseable code 
with different parameter get different result

<!-- The () Operator -->
The () operator invokes (calls) the function:

syntax  

function functionName(para){
    return 
}

return - return statement uses

 When JavaScript reaches a return statement, the function will stop executing. 
Functions often compute a return value. The return value is "returned" back to the "caller": 


<!-- Objects --> 

What is a object in JavaScript?

An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.



array(mutable) and string(immutable)  IN javascript
ex. 

let stringName  = "Rahul"

console.log(stringName[2])   - h
stringName[2] = "r" 
console.log(stringName[2])   - h 


arr = [4,9,3];
console.log(arr[1])  - 9

arr[1] = 90 ;
console.log(arr[1])  -   90 

ARRAY ARE MUTABLE


 method are fucntion bind with some data-structure (method are associate with string,array and object ex. toUppercase , toSorted) 

 function are independent

 callback function  - function which can be passed as argument to a another function 


<!-- Class -->

JavaScript Classes are templates for JavaScript Objects.

class ClassName {
  constructor() { ... }
  
}

<!-- Imp -->
A JavaScript class is not an object. It is a template for JavaScript objects.


The Constructor Method
The constructor method is a special method:


1. It has to have the exact name "constructor"
2. It is executed automatically when a new object is created
3. It is used to initialize object properties
