const numList = [1, 2, 3, 8, -1, -5];
const countryList = ["Nepal", "Bangladesh", "China", "India"];

// ? Reverse => changes the original array
// countryList.reverse();
// console.log(countryList);

// ? Splice => changes the original array

//countryList.splice(1, 1, "Italy"); // first 1 selects the index where to insert the item, second 1 is the number of items to be deleted and Italy is the item to be inserted in that place

//console.log(countryList);
//countryList.splice(1, 0, "Italy");
//console.log(countryList);

// ? includes => returns true false
// const isNepalIncluded = countryList.includes("Nepal");
// console.log(isNepalIncluded);

// ? sorts => sorts strings in alphabetical order
// countryList.sort(); // shorts in ascending order
// countryList.sort().reverse(); // sorts in descending order
//numList.sort((a, b) => a - b) returns in ascending order

// ? toSorted() => Returns in a different array (does not change original array) but only runs in node version 20 or above
// Similarly toReversed(), toSpliced() does not change original array and returns in a different array.

// ? forEach => executes a provided function once for each array element. It does not return anything unlike map or filter which returns an array
//let newList = numList.forEach((item) => console.log(item + 10));
// let sum = 0;
// let newList = numList.forEach((item) => {
//   sum += item;
// });
// console.log(sum);

// ? Reduce => reduces the array to give a single value. Solves the problem of declaring a variable like in the above foreach method. It takes a function and initial value

// let reduced = numList.reduce((sum, item) => {
//   return sum + item;
// }, 0); // sum works like an accumulator and keep on adding each array item on it until the array ends.
// console.log(reduced);
