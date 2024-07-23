// function Declaration

function greeting1(){
    console.log("Hello! ");
}

greeting1();

function greetin2(){
    return "Hello ";
}

let str = greetin2()
console.log(str);
console.log(greetin2())


function greetin3(name){
    //return "Hello " + name;
    // return `Hello ` + name
    // return 'Hello ' + name
    return `Hello ${name}`;
}

console.log(greetin3("Edwinah"))
console.log(greetin3(5))


function greetin4(name ='Sam'){
    //return "Hello " + name;
    // return `Hello ` + name
    // return 'Hello ' + name
    return `Hello ${name}`;
}

console.log(greetin4());
console.log(greetin4("Tom"));

function sum (num1=0, num2=0){
    return num1 + num2;
}


console.log(sum(3,5));
console.log(sum('5', '3'))
console.log(sum("hi ","Jack"))
console.log(sum(3))


//2. Function Expression
let m = sum()
console.log(m);
console.log(typeof(m));

let f = sum;
console.log(typeof(f));
console.log(f(6,10))
f = 9;
//console.log(f(6,10))
// Error because f is now a number

const f2 = function(){
    return "Good afternoon "
};

console.log(f2());


//3. Arrow expression
const f3 = ()=> "Good afternoon ";

console.log(f3());

function sum2 (num1=0, num2=0){
    return num1 + num2;
}

const sum3 = (num1=0, num2=0)=> num1 + num2;
console.log(sum3(2,3))

console.log(Math.min(0.52, 1))