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
  age: "21",
  address: "Finland",
};
//const { name, age, address } = person; //destructured person object

const checkIfAdult = ({ age }) => {
  //can perform destructuring in parenthesis just by listing the keys inside curly brackets
  let isAdult = false;
  if (age > 18) {
    isAdult = true;
  }
  //return { ...person, adult: isAdult }; // <= alternative way or as below:
  const newPerson = { ...person, adult: isAdult };
  return newPerson;
};
const result = checkIfAdult({ ...person });
console.log(result);
