// ? 1. Object Manipulation

/*Write a function to deep-merge two objects into a new object.*/

// const bikeDetails = {
//   bikeName: "Hero-7",
//   bikeBrand: "Hero",
//   engineCapacity: "220cc",
//   material: {
//     body: "sheetmetal",
//     engine: "steel",
//   },
// };

// const {
//   bikeName,
//   bikeBrand,
//   engineCapacity,
//   material: { body, engine },
// } = bikeDetails;

// const person = {
//   Owner: "John",
//   age: 21,
// };
// const { Owner, age } = person;

// const mergedDetails = {
//   ...person,
//   ...bikeDetails,
// };
// console.log(mergedDetails);
// console.log(`The body material is ${body} and the engine is ${engine} made.`);

// ? 2. Create a function that takes an object and returns an array of its property names and values in the format: [{key: 'property_name', value: 'property_value'}, ...].

// const arrayBikeDetails = () => {
//   return Object.entries(bikeDetails).map(([key, value]) => ({
//     key,
//     value,
//   })); /*We use Object.entries(bikeDetails) to get an array of key-value pairs from the person object. Then, we use .map() to transform these key-value pairs into an array of objects with properties key and value.*/
//};
//console.log({ bikeDetails });
// let result = arrayBikeDetails({ ...bikeDetails });
// console.log(result);

// Object Iteration

// ? 3. Write a function that iterates through all the properties of an object and logs their names and values.
// ? Create a function that checks if an object is empty (has no properties).

const person = {
  Owner: "John",
  age: 21,
};
// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
//}
const personDetails = (obj) => {
  let result = "";
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result += `${key}: ${person[key]}\n`;
    }
  }
  return result;
};
const result = personDetails(person);
console.log(result);
