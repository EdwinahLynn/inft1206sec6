console.log("Hello");

//1. Write a function buildArray that takes two Numbers, and returns an Array filled with all numbers between the given
//number: buildArray(5, 10) should return [5, 6, 7, 8, 9, 10]


// Function Declartion
function buildArray(n1,n2){
    let arr = [];
    for(let i = n1; i <= n2;i++){
        arr.push(i);
    }
    return arr;
}
console.log(buildArray(5,10));


// Function Expression
const buildArray2 = function(n1,n2){
    let arr = [];
    for(let i = n1; i <= n2;i++){
        arr.push(i);
    }
    return arr;
}
console.log(buildArray2(2,10));

// Arrow function
const buildArray3 =(n1,n2) =>{
    let arr = [];
    for(let i = n1; i <= n2;i++){
        arr.push(i);
    }
    return arr;
}
console.log(buildArray3(7,10));


// Write a function checkAges that takes two arguments: an Array of ages (Number); and a cut-off age (Number). 
//Your function should return true if all of the ages in the Array are at least as old as the cut-off age: checkAges([16,
// 18, 22, 32, 56], 19) should return false and checkAges([16, 18, 22, 32, 56], 6) should return true

function checkAges(ages, cutOffAge){
    for (let i=0; i < ages.length;i++){
        if (ages[i]< cutOffAge){
            return false;
        }
    }
    return true
}
console.log(checkAges([16, 18, 22, 32, 56],6))
console.log(checkAges([16, 18, 22, 32, 56],19))

// Write a function containsBadWord that takes two arguments: badWords (an Array of words that can’t be used),
// and userName (a String entered by the user). Check to see if any of the words in badWords are contained within userName. 
// Return the badWord that was found, or null if none are found.
function containsBadWord(badWords, word){
    for (let i = 0; i < badWords.length; i++){
        if (word.includes(badWords[i])){
            return badWords[i]
        }
    }
    return none
}
console.log(containsBadWord(["bread", "Tea", "See"],"Seetean"));


//Write a function that takes a String and checks whether or not it begins with
//one of "Mr.", "Mrs.", or "Ms.". Return true if it does, otherwise false.

function checkTitle(names){
    if (names.startsWith("Mr") || names.startsWith("Mrs")|| names.startsWith("M")){
        return true}
    return false

}
console.log(checkTitle("MrsChen"));
console.log(checkTitle("Chen"));