// ? 1. Object Manipulation

/*Write a function to deep-merge two objects into a new object.
Create a function that takes an object and returns an array of its property names and values in the format: [{name: 'property_name', value: 'property_value'}, ...].*/

const bikeDetails = {
  name: "Hero-7",
  bikeBrand: "Hero",
  engineCapacity: "220cc",
  material: {
    body: "sheetmetal",
    engine: "steel",
  },
};

const {
  name: bikeName,
  bikeBrand,
  engineCapacity,
  material: { body, engine },
} = bikeDetails;

const person = {
  name: "John",
  age: 21,
};
const { name: personName, age } = person;

const mergedDetails = {
  ...bikeDetails,
  ...person,
  bike: bikeDetails.name,
  person: person.name,
};
console.log(mergedDetails);
