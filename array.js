// array   = collection of items    
// special type of object datatype
// array are mutable in JS
//length of an array is the index of last index +1  as the index start from  0




// store  10 students marks 

// method1  :define varible 

// let stu1 = 90;
// let stu2 = 77;  ... .. so on not feasiblie as no. grows 

// method1  :define object 

// let student  = {
//     stu1 : 90 ,
//     stu2 : 50,
//     stu3 : 90 ,
//     stu4 : 50,
//     stu5 : 90
// }

// genrally in array same type of info stored in a linear way 

let stuMarks  = [90,78,60,96]
let names  = ["raj" ," sanjay" , "rahul"," rock"]

console.log(stuMarks)

console.log(stuMarks.length) //property in array 

console.log(names)

console.log(typeof(stuMarks))  // object

// array indices  - access item through index
console.log(names[2])

// change value of index 

names[2] = "Soha"
console.log(names) // rahul is replaced by soha


//loop through a array  
// method 1 
for( let i of names){
    console.log(i)
}

// method 2   

for(let i = 0 ;i<names.length; i++){
    console.log(i,value = names[i] )
}

for(let data of names){
    console.log([data.toUpperCase()])
}


// Practice  : find avrage

let numData  = [90,78,60,96 ,65,44,83]

let sum = 0 ;

for(let i of numData){
    console.log(i)
    sum = (sum +i); //sum  += i

}

// let finalSum = (sum) ;

let avg = (sum/numData.length)
 console.log(`the avg of given arr ${avg}`)

 
// Practice  : new array with 10% off price

let arr = [100,250,400,540]

// % calculate  10% = (10*val)/100
//new arr value =  val 

let idx = 0 
for(let val of arr){ 
    console.log( `value before offer ${idx} = ${val} And value after offer ${idx} = ${val- (10*val)/100}`  );
    idx++
};

// Array Method  // 


// Push() : Add to end 
//Pop() : delete from and return 
// toString() : convert array to string  
//toReversed() : reversed array
//concat() : join two arr 
// toSorted() : sort the array
// unShift() : add to start 
// shift() : delete from start & return 
//slice() : return a piece of the array
//splice() : change original array(add ,remove ,replace)
// syntax :splice(startindex,)
let myArr =  [8,5,4,43,21];
myArr.push(33,9,40);
console.log(myArr)
//[8, 5, 4, 43, 21, 33, 9, 40]
let deletedItem  = myArr.pop();
console.log(myArr)
// [8, 5, 4, 43, 21, 33, 9]
console.log(deletedItem)
// 40
console.log(arr);
console.log(arr.toString())
//8,5,4,43,21

console.log(arr);
console.log(arr.toReversed());
[21, 43, 4, 5, 8];


let myAr =  [9,'sanjay','radhey','soha','akshay'];
console.log(myAr);
console.log(myAr.toSorted());
[9, 'sanjay', 'radhey', 'soha', 'akshay']
[9, 'akshay', 'radhey', 'sanjay', 'soha']

let newArr = myAr.concat(myAr);
console.log(newArr)

[9, 'sanjay', 'radhey', 'soha', 'akshay', 9, 'sanjay', 'radhey', 'soha', 'akshay']


console.log(myArr.slice(2,4));
[4, 43]


// Exercise  : combine method 

// let myAr =  [9,'sanjay','radhey','soha','akshay'];
// let myArr =  [8,5,4,43,21];
// let profession = ["Teacher" ,'banker' , 'engineer' ,"SDE"]

// let newArr = myAr.concat(myArr, profession);
// console.log(newArr);
// console.log(newArr.toSorted());

//[9, 'sanjay', 'radhey', 'soha', 'akshay', 8, 5, 4, 43, 21, 'Teacher', 'banker', 'engineer', 'SDE']

//[21, 4, 43, 5, 8, 9, 'SDE', 'Teacher', 'akshay', 'banker', 'engineer', 'radhey', 'sanjay', 'soha']



//practice : 
// create array 

let company = ["TCS " , "OLA"," MICROSOFT" ,"APPLE" , "IBM"]

// remove first company

console.log(company);
console.log(company.shift());
console.log(company);

// ['TCS ', 'OLA', ' MICROSOFT', 'APPLE', 'IBM']
// TCS 
// ['OLA', ' MICROSOFT', 'APPLE', 'IBM']

//remove ola and add uber

// console.log(company.splice(1,0,"UBER"))

// add amazon at end

console.log(company.push("AMAZON"));
console.log(company);

// ['OLA', ' MICROSOFT', 'APPLE', 'IBM', 'AMAZON']

