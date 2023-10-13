// if the key and value names are same we can just simply omit the value name

// const firstName = "Subin";
// const lastName = "Khatiwada";

// const person = {
//   firstName: firstName,
//   lastName: lastName,
// };
// console.log(person);

//since the first name and last name is same, we can do as follows:
// const person = {
//   firstName, // js understands there is some value with the same name as key
//   lastName,
// };
// console.log(person);

// ? exe. object of personDetails => name, country
// if country is Nepal, return object with isNepali true/false

// const checkIfNepali = ({ name, country }) => {
//   let isNepali = false;
//   if (country === "Nepal") {
//     isNepali = true;
//   }
//   return { name, country, isNepali: isNepali };
// };

// let result = checkIfNepali({ name: "Subin", country: "Nepal" });
// console.log(result);

// ! alter. way by first defining the object and also using destructing

const personDetails = {
  name: "Subin",
  country: "Nepal",
};

const checkIfNepali = ({ country }) => {
  let isNepali = false;
  if (country === "Nepal") {
    isNepali = true;
  }
  return { ...personDetails, isNepali: isNepali };
};

let result = checkIfNepali({ ...personDetails });
console.log(result);
