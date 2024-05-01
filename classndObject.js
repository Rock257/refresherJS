// object - a js object is an entity having state and behaviour(properties and method)
// JS object have a special property called prototype(__proto__) -
// prototype  is a object contain pre -defined some object and property
// prototype is reference of object

//  create  on prototype
// const employee = {
//     calTax1 :function(i){
//         // 10  tax
//         let taxPer = console.log((5/100)*i);
//         return taxPer;

//     },
//     // 7% pf
//     calPF(i){
//         let pfAmt =console.log((7/100)*i)
//         return pfAmt
//     }
// }

const employee = {
  calTax1: function () {
    console.log("tax  rate is 10%");
  },
};

const emp1 = {
  income: 54000,
};

const emp2 = {
  income: 54000,
};
const emp3 = {
  income: 54000,
};
const emp4 = {
  income: 54000,
};

emp1.__proto__ = employee;
emp2.__proto__ = employee;
emp3.__proto__ = employee;
emp4.__proto__ = employee;

console.log(emp2.calTax1());
// output

// VM873:21
// {income: 54000, ___proto___: {…}}
// income
// :
// 54000
// ___proto___
// :
// {calTax1: ƒ, calPF: ƒ}
// [[Prototype]]
// :
// Object

// console.log(employee.calPF(65422), employee.calTax1(65422));

const client = {
  fullName: "Riya Sharma",
  marks: 98,
  print: function () {
    console.log(this.fullName, this.marks); //student.marks and student.fullName
  },
};

client.print();
console.log(client);

// prototype :special propert or object (contain different object and properties)

// Classes are program code  template for creating objects

class rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

const rect1 = new rectangle(5, 10);
console.log(rect1);

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    const result = date.getFullYear() - this.year;
    return result;
  }
}

const car1 = new Car("Tata", 2018);

console.log(car1, "my car is " + car1.age() + " year old");

class Student {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }
  fullNames() {
    const fullName = this.fName + thislName;
    return fullName;
  }
}

const student1 = new Student("Rahul", "Soni");

console.log("this student full name is : " + this.fullName());

// one for for classes (blueprint for creating object )

class Laptop {
  constructor(brand, model, wt, os, processor, ram, ssd) {
    this.brand = brand;
    this.model = model;
    this.wt = wt;
    this.os = os;
    this.processor = processor;
    this.ram = ram;
    this.ssd = ssd;
  }
}
// create object through the class
const lap1 = new Laptop("asus", 2022, "1.6kg", "KALI", "i7", "16 GB", "1TB");

console.log(lap1);
// we can create many more like this as lap2 ,lap3 , lap3 ,............lapn

// we just once create the instance of object of laptop  now we can create n number of object instance



class Toyota {
    constructor(model, year, engine, power) {
      this.model = model;
      this.year = year;
      this.engine = engine;
      this.power = power;
    }
      details() {
        return (`car model is : ${this.model} , year is : ${this.year} , engine is : ${this.engine}`);
      };
    
  }
  
  const cars1 = new Toyota("fortuner" , 2023, '3000cc' ,'30BHP' );
  console.log(cars1)
  console.log(cars1.details())

  
//   output

// Toyota {model: 'fortuner', year: 2023, engine: '3000cc', power: '30BHP'}
//   car model is : fortuner , year is : 2023 , engine is : 3000cc