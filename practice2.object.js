// if the key and value names are same we can just simply omit the value name

const firstName = "Subin";
const lastName = "Khatiwada";

// const person = {
//   firstName: firstName,
//   lastName: lastName,
// };
// console.log(person);

//since the first name and last name is same, we can do as follows:
const person = {
  firstName,
  lastName,
};
console.log(person);
