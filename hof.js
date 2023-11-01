// ? HOF => Higher Order functions
// ? => function returning function || function passed as argument to another function
// ? closure

// const outerFunction = (firstName) => {
//   const innerFunction = (lastName) => {
//     return firstName + " " + lastName;
//   };
//   return innerFunction;
// };

// const outFunc = outerFunction("Subin"); //first call the main function and store the value in a variable which tracks it

// let res = outFunc("Khatiwada"); //Since the innerFunction is inside the outerFunction and "outFunc" is tracking it, so calling the innerFunction with the tracker will give the result as shown.
// console.log(res);

// ! short method below
//const mainFunc = outerFunction("Subin")("Khatiwada");
//console.log(mainFunc);

// ? We can make the above hof more short as below:
//this case too outerFunction returning a function which is hof
// const outerFunction = (firstName) => {
//   return (lastName) => {
//     return `${firstName} ${lastName}`;
//   };
// };

// This can be made more shorter as below simply by removing the return and making it as a one liner
const outerFunction = (firstName) => (lastName) => `${firstName} ${lastName}`;

const mainFunc = outerFunction("Subin")("Khatiwada");
console.log(mainFunc);
