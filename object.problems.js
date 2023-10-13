// ? 1. Object Manipulation

/*Write a function to deep-merge two objects into a new object.
Create a function that takes an object and returns an array of its property names and values in the format: [{name: 'property_name', value: 'property_value'}, ...].*/

const bikeDetails = {
  bikeName: "Hero-7",
  bikeBrand: "Hero",
  engineCapacity: "220cc",
  material: {
    body: "sheetmetal",
    engine: "steel",
  },
};

const {
  bikeName,
  bikeBrand,
  engineCapacity,
  material: { body, engine },
} = bikeDetails;

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

const arrayBikeDetails = () => {
  return Object.entries(bikeDetails).map(([key, value]) => ({
    key,
    value,
  })); /*We use Object.entries(bikeDetails) to get an array of key-value pairs from the person object.
  Then, we use .map() to transform these key-value pairs into an array of objects with properties key and value.*/
};
//console.log({ bikeDetails });
let result = arrayBikeDetails({ ...bikeDetails });
console.log(result);
