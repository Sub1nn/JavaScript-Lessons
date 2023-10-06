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
