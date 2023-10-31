// function => block of code which serves single purpose
// DRY principle => Don't repeat yourself
// reduces repetition of code
// logical representation

// ways
// old way
// function function_name() {
// some code here
// }

// ? check if the input is odd or even

// function check(n) {
//   let result;
//   if (n % 2 == 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }
//   return result;
// }
// const result = check(1);
// console.log(result);

// ? write a function that takes a number and print values from 0 to that number.

// function printNumber(n) {
//   let i = 0;
//   while (i <= n) {
//     console.log(i);
//     i++;
//   }
// }
// printNumber(5);

// ? write a function that calculates the given number is prime or not
// function primeNumber(num) {
//  let result = "prime";
// if (num === 0) {
//     result = "Not Prime";
// }

// }
// primeNumber(1);

// const getMultiply = (a, b) => {
//   let multiply = a * b;
//   console.log(multiply);
// };
// getMultiply(2, 3);

// ? split method => returns an array splitting elements as we desire

// const string = (fullName) => {
//   let splittedString = fullName.split(" ");
//   return splittedString;
// };
// let result = string("Subin Khatiwada");
// console.log(result);

// ? can also return object as below:

// const string = (fullName) => {
//   let [firstName, lastName] = fullName.split(" ");
//   return {
//     firstName,
//     lastName,
//   };
// };
// let result = string("Subin Khatiwada");
// console.log(result);

// ? can make it shortcut as below:

// const string = (fullName) => fullName.split(" ");
// const res = string("Subin Khatiwada");
// console.log(res);

// ? with destructuring as below:
const string = (fullName) => fullName.split(" ");
const [fName, lName] = string("Subin Khatiwada"); // since it returns an array we can destructure
console.log(fName, lName);
