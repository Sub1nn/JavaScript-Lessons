// The maximum sum Subarray

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSequence = (arr) => {
  let currentSum = arr[0];
  let maxSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  //console.log(maxSum);
  return maxSum;
};

let result = maxSequence(arr);
console.log(result);
