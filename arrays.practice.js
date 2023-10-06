let myArray = [10, 20, 30, 40, 50];
// ? push => Adds one or more elements to the end of the array and returns a new array.
// myArray.push(60);
// console.log(myArray);

// ? Pop => Removes and returns the last element from the array
// newArray = myArray.pop();
// console.log(myArray);
// console.log(newArray); // ans 60

// ? splice() => The method can be used to remove elements from an array at a specified index
//newArray = myArray.splice(1, 3); //1 is the starting index of splice and 3 is the number of elements to spliced.
//console.log(newArray);

// ? can also add new elements to the removed part of the array
//let a = myArray.splice(1, 2, 100, 200, 300);
//console.log(a); // a is the spliced elements starting from index 1 and two elements which are 20 and 30. 100 and 200 are the added elements in those area. Result will be [20,30]
//console.log(myArray); //my array becomes [10,100,200,300,40,50]

// ? slice() => The method returns a shallow copy of a portion of an array selected from start to end (end index not included)

// let x = myArray.slice(2);
// console.log(x); // [30,40,50]
// let y = myArray.slice(1, 4);
// console.log(y); //[20,30,40]
// let z = myArray.slice(1, -3);
// console.log(z); //[20]

// ? includes() => The method checks if and item exists in an array
// console.log(myArray.includes(30));
// let x = 100;
// let y = myArray.includes(x);
// console.log(y);

// ? array iteration
// ? forEach => The method iterates over each element of the array and executes a provided function for each element. The method does not create a new array
//myArray.forEach((i) => console.log(i * 10));

// myArray.forEach((number, index, array) => {
//   array[index] = number * 10;
// });
// console.log(myArray);

// const people = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 35 },
// ];
//people.forEach((person) => console.log(person.name, person.age));
// people.forEach((person) =>
//   console.log(`name: ${person.name}, age: ${person.age}`)
// );
