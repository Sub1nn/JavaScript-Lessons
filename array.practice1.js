// ? The maximum sum Subarray

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

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

const maxSequence = (arr) => {
  let currentSum = 0;
  let maxSum = 0;
  for (let item of arr) {
    currentSum += item;
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};

let result = maxSequence(arr);
console.log(result);
