// 1. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even and displays a message on the screen.
// Sample Output :

// "1 is odd"
// "2 is even"

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} is a even number`);
//   } else console.log(i, "is odd");
// }

// 2. Write a JS code to calculate the sum of digits in a number

// let num = 1234;
// let numStr = num.toString();
// let sum = 0;

// for (let i = 0; i < numStr.length; i++) {
//   sum += +numStr[i];
// }
// console.log(sum);

// alter method

// let n = 1234;
// let sum = 0;

// while (n != 0) {
//   const rem = n % 10;
//   sum += rem;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// 6. Write a JS code to print numbers from 100 to 50

// for (let i = 100; i >= 50; i--) {
//   console.log(i);
// }

// 7. Write a JS code to print  square of numbers from 1 to n

// let n = 10;
// for (i = 1; i <= n; i++) {
//   console.log(`The square of ${i} is ${i ** 2}`);
// }

// function squareNum(n) {
//   for (i = 1; i <= n; i++) {
//     console.log(`The square of ${i} is ${i ** 2}`);
//   }
// }
// squareNum(5);
