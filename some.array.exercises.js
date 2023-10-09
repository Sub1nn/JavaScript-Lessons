// From a given array of numbers, separate negative and positive numbers into two separate arrays. Give the length of the array with negative numbers and the sum of the numbers with positive numbers in a different array.

let arr = [1, -3, 5, 7, -11, -2, 3, 8, -6, 4];
let arr1 = [];
let arr2 = [];

for (const num of arr) {
  if (num < 0) {
    arr1.push(num);
  } else {
    arr2.push(num);
  }
}
console.log(arr1);
console.log(arr2);

let x = arr1.length;
let y = arr2.reduce((a, b) => a + b);
console.log([x, y]);
