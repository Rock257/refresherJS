
const car = {
    //key : value pair 
    ownerFirst :"Rahul",  //properties
    ownerLast : "Soni",
    color : "Red",
    model : "Tata Nexon",
    year  : 2000,
    message :function message(){
        return "Welcome In Tata World"
    },
    ownerName : function(){
        return this.ownerFirst + " " + this.ownerLast
    }
    
}

console.log(car.color)
console.log(car.ownerName())

// here this  refers to person object


// access object properties
// objectName.propertyName