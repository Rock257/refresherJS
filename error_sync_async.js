// error handling

let a =15 ;
let b  = 9;

// console.log("a+b =" ,a+b)
// console.log("a-b =" ,a-b)
// console.log("a*b =" ,a*b)
// console.log("a+b =" ,a+c)  
// here is the error occur  after this line code isnt run thats why we need error handling
// console.log("a/b =" ,a/b)
// console.log("a%b =" ,a%b)


console.log("a+b =" ,a+b)
console.log("a-b =" ,a-b)
console.log("a*b =" ,a*b)
try{
    console.log("a+b =" ,a+c)
}catch(err){
    console.log(err)
}
  
console.log("a/b =" ,a/b)
console.log("a%b =" ,a%b)
 
// code runs further after  the error  occur



//  async >> promise >> callback
