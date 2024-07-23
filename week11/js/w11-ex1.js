console.log("Hello!");

// Create objects using literal notation

let person1 = {
        firstName: "Edwinah",
        "last name": "Ninsiima",
        age: 19,
        lastAccess: new Date(),
        address: {streetNumber: 18, streetName:"something", city: "Ottawa"},
        print: function(){console.log(`The name is ${this.firstName} ${this["last name"]} and the age is ${this.age}`)}
        
};
console.log(person1.firstName);
console.log(person1["firstName"]);
// Can only use this
console.log(person1["last name"]);

console.log(person1.age);
console.log(person1["age"]);

person1.age = 49;
console.log(person1.age);

console.log(person1.lastAccess);
console.log(person1.address.city);
person1.print();

person1.height = "17.6cm";
console.log(person1.height);

// Creating objects-Using a function constructor
function PersonV2(first= "Lynn", last="Nini",age = "21"){
    this.firstName = first,
    this.lastName = last,
    this.age = age,
    this.lastAccess = new Date(),
    this.print = function(){console.log(`The name is ${this.firstName} ${this.lastName} and the age is ${this.age}`)}
}

let p1 = new PersonV2("Sam","Tom",34);
let p2 = new PersonV2("Mia","Bren",14);
let p3 = new PersonV2();

console.log(p1.firstName);
p1.print();
p3.print();

PersonV2.prototype.height = "167 cm";
// All objects will have that height
console.log(p1.height);
console.log(p2.height);


// but we can change
p2.height = "222 cm";
console.log(p1.height);
console.log(p2.height);

// Create object using classes
class PersonV3{
    firstName;
    lastName;
    age;
    constructor(first,last,age){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
    print(){
        console.log(`The name is ${this.firstName} ${this.lastName} and the age is ${this.age}`)
    }
}
let p4 = new PersonV3("Max", "Melanin", 14);
p4.print();
console.log(p4.firstName); 

class Student extends PersonV3{
    grade;
    constructor(first, last, age, g){
        super(first,last,age)
        this.grade = g;
    }
}
let s1 = new Student("DD", "MM", 24, 88);
s1.print();
console.log(s1.grade);