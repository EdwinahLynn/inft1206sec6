console.log("Hello");

// Scope of the variable:
// 1- Global Scope
// a -Any variable declared using var keyword or let keyword or outside the functions
// Any variable declared WITHOUT var or let or const 

// 2-Function scope(local scope)
// a -Any variable declared using var keyword inside the function

// 3-Block Scope
// a-Any varibale declared using let keyword inside the block

// let cannot be acceses outside the block


var g = 10;
//let g = 10;
console.log("(outside the function)g="+ g);

function todo(){
    console.log("(Inside the function)g="+ g);
    let a = 5;
    console.log("(Inside the function)g="+ a);
    {
        var b = 22;
        console.log("(Inside the block)g="+ b);

        let c = 100;
        console.log("(Inside the block)g="+ c);
    }
    console.log("(outside the function)g="+ b);
    

    d = 150;
}

todo();