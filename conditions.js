//if/else, switch

//switch //used for straightforward expressions

// let day = 3;

// switch (day) {
//   case 1:
//     console.log(sunday);
//     break;
//   case 2:
//     console.log(monday);
//     break;
//   case 3:
//     console.log(tuesday);
//     break;
//   case 4:
//     console.log(wednesday);
//     break;
//   case 5:
//     console.log(thursday);
//     break;
//   case 6:
//     console.log(friday);
//     break;
//   case 7:
//     console.log(saturday);
// }

// let num1 = 3;
// let num2 = 2;

// let option = "add";
// let result;

// switch (option) {
//   case "add":
//      console.log(num1 + num2);
//     result = num1 + num2;
//     break;
//   case "subtract":
//      console.log(num1 - num2);
//     result = num1 - num2;
//     break;
//   case "multiply":
//     console.log(num1 * num2);
//     result = num1 * num2;
//     break;
//   default:
//     console.log("Invalid Option");
//     result = undefined;
// }

// console.log(`${num1} ${option} ${num2} = ${result}`);

//  ? ternary operator

// let x = 5;

// if (x < 0) {
//   console.log("Negative Number");
// } else if (x > 0) {
// console.log("Positive Number");
// } else {
//   console.log("The Number is Zero");
// }

//  Ternary operator example
// x < 0 ? console.log("Negative Number") : console.log("Positive Number");

// ? conditional chaining
let marks = 60;
// if (marks > 32) {
//   console.log("Passed");
// } else if (marks === 32) {
//   console.log("Just Passed");
// } else {
//   console.log("failed");
// }

marks > 32
  ? console.log("passed, You did a great Job!")
  : marks === 32
  ? console.log("Just Passed")
  : console.log("failed");
