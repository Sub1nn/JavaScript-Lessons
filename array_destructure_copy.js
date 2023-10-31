// ? array destructure

// const [firstName, lastName] = ["Subin", "Khatiwada"];
// console.log(firstName, lastName);

//const numList = [10, 20, 30];
//console.log(numList[0]);
// const [num1, num2, num3] = [10, 20, 30];
// console.log(num2);

// const college = {
//   0: "KEC",
//   2: "LEC",
//   1: "NEC",
// };

// console.log(Object.entries(college));
// console.log(
//   Object.values(college).map((item) => {
//     return item;
//   })
// );

// ? Object.keys => Give the keys of the object
// ? Object.entries => Give both key-value pair

// ? Copying an Object => similar to spread operator
const numList = [10, 20, 30];
const newNumList = [...numList];
newNumList.push(45);
console.log(newNumList);
