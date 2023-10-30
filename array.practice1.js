// ? The maximum sum Subarray

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// const maxSequence = (arr) => {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let currentSum = arr[0];
//   let maxSum = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     currentSum = Math.max(arr[i], currentSum + arr[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }
//   if (maxSum < 0) {
//     return 0;
//   }
//   return maxSum;
// };

// let result = maxSequence(arr);
// console.log(result);

// ! second method below

// const maxSequence = (arr) => {
//   let currentSum = 0;
//   let maxSum = 0;
//   for (let item of arr) {
//     currentSum += item;
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }
//     if (currentSum < 0) {
//       currentSum = 0;
//     }
//   }
//   return maxSum;
// };

// let result = maxSequence(arr);
// console.log(result);

// ? In the given array of marks if marks is greater or equal to 32 return marks but if it is less then 32 by just 5 marks, pass him/her by changing the marks to 32, else return marks.

// let marks = [25, 35, 31, 29, 55, 65];
// let passMarks = 32;
// let newMarks = marks.map((item) => {
//   if (item >= passMarks) {
//     return item;
//   } else if (item < passMarks && item >= passMarks - 5) {
//     //item += 5;
//     return passMarks;
//   } else return item;
// });
// console.log(newMarks);

// let newMarks = marks.map((item) =>
//   item == 32 || (item < 32 && item >= 27) ? 32 : item
// );
// console.log(newMarks);

// ? return item whose price is less then 5000 using map:

// const productList = [
//   {
//     name: "Shoes",
//     price: 5500,
//   },
//   {
//     name: "Jacket",
//     price: 15000,
//   },
//   {
//     name: "cap",
//     price: 1500,
//   },
//   {
//     name: "Goggles",
//     price: 6000,
//   },
//   {
//     name: "Trousers",
//     price: 5000,
//   },
// ];

// let newList = productList.map((item) => ({
//   ...item,
//   price: item.price - 1000,
// }));
// console.log(newList);

// let newItem = productList.filter((item) => item.price < 5000);
// console.log(newItem);

// ? return below whose marks is greater or equal to 32 using filter:

const marks = [28, 35, 26, 55, 75, 21, 45, 11];

// let newMarks = marks.filter((item) => {
//   return item >= 32;
// });
// console.log(newMarks);

// ? find method finds and returns first item/element satisfying given condition

// let item = productList.find((item) => item.name == "cap");
// console.log(item.price);

// some => returns true if any item satisfies the condition
// every => returns true if every item satisfies the condition

hasPassed = marks.every((item) => {
  if (item >= 32) {
    return true;
  }
});
console.log(hasPassed);
