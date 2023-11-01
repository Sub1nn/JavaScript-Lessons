// ? HOF => Higher Order functions
// ? => function returning function (also known as an example of closure as the first function is tracking the other function)|| function passed as argument to another function (callback function)
// ? closure

// const outerFunction = (firstName) => {
//   const innerFunction = (lastName) => {
//     return firstName + " " + lastName;
//   };
//   return innerFunction;
// };

//const outFunc = outerFunction("Subin"); //first call the main function and store the value in a variable which tracks it

//let res = outFunc("Khatiwada"); //Since the innerFunction is inside the outerFunction and "outFunc" is tracking it, so calling the innerFunction with the tracker will give the result as shown.
//console.log(res);

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
// const outerFunction = (firstName) => (lastName) => `${firstName} ${lastName}`;

// const mainFunc = outerFunction("Subin")("Khatiwada");
//console.log(mainFunc);

// ? function passed as argument to another function as called as callback function
//[1, 2, 3].map((item) => console.log(item)); //map itself is a function and is taking another function as argument

//example below:
const getSum = (a, b, func) => {
  let total = a + b;
  func(total);
};
//Below getSum function is called is called which is taking another function as an argument
getSum(2, 4, (res) => {
  //console.log(`The result is ${res}`);
});

// ? Closure => Takes the latest variable defined before calling the function

let a = 5;
const print = () => console.log(a); //
print(); // 5 is printed on calling print

a = 10;
print(); // prints 10 as the latest value of a before calling is 10
