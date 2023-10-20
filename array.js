// ? Array

// let friendList = ["Subin", "Rubin", "Sahil"];
// for (let list of friendList) {
//   console.log(list);
// }
// console.log(friendList.length);

// ? famous loop => map method

// const countries = ["Nepal", "America", "China"];
// countries.map((item, index, self) => {
//   console.log(item, index, self); //self if the countries array itself.
// });

// const marksList = [32, 25, 11, 77, 24];
// marksList.map((item) => {
//   if (item % 2 === 0) {
//     console.log(`${item} is even.`);
//   } else {
//     console.log(`${item} is odd.`);
//   }
// });

// ? famous loop => forEach

// in => used for key like in objects
// of => used for value like in arrays

//extracting Object entries, keys, values
const person = {
  Owner: "Hari",
  age: 21,
};

console.log(Object.entries(person));
console.log(Object.keys(person));
console.log(Object.values(person));
