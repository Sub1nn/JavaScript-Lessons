//SpreadRest Operators
// copying Arrays
const originalArray = [1, 2, 3, 4, 5];
let copyArray = [...originalArray];
console.log(copyArray);
//Adding two arrays
const arr1 = ["a", "b", "c", "d"];
const arr2 = ["e", "f", "g"];

let arr3 = [...arr1, ...arr2];
console.log(arr3);
//converting string to an array of characters
const greeting = "Hello";
const greet = [...greeting];
console.log(greet);
