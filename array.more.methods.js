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
countryList.sort(); // shorts in ascending order
countryList.sort().reverse(); // sorts in descending order
