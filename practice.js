// Write a function that accepts an object as argument
//check if user is adult or not
//add a field isAdult and set it to true/false

// 1st way without defining object
// const checkIfAdult = (person) => {
//   console.log(person);
//   let isAdult = false;
//   if (person.age > 18) {
//     isAdult = true;
//   }
//   return { ...person, isAdult: isAdult };
// };

// let result = checkIfAdult({ name: "Subin", age: "30", address: "Finland" });
// console.log(result);

// another way by defining person object first
const person = {
  name: "Subin",
  age: "30",
  address: "Finland",
};

const checkIfAdult = (person) => {
  let isAdult = false;
  if (person.age > 18) {
    isAdult = true;
  }
  return { ...person, adult: isAdult };
};
const result = checkIfAdult({ ...person });
console.log(result);
