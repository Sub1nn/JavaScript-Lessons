/*2.Create an object named myHouseDetails and add following properties
numberOfRooms
numberOfMembers
colorOfHouse
builtYear
numberOfStorey

A.Delete numberOfMembers property
B.Update numberOfRooms by new value
C.Add a  new property called estimatedPriceOfHouse
D.Print out all properties on the console like “I have a green coloured house        with 9 rooms where 10 people are  living. The house is 3 storey and was built in 2011 with an estimated budget of 2 crores.*/

// const MyHouseDetails = {
//   numberOfStorey: 7,
//   numberOfMembers: 7,
//   colorOfHouse: "green",
//   builtYear: 2011,
//   numberOfRooms: {
//     firstHouse: {
//       firstFloor: 5,
//       secondFloor: 5,
//       thirdFloor: 3,
//     },
//     secondHouse: {
//       firstFloor: 7,
//       secondFloor: 7,
//       thirdFloor: 3,
//     },
//   },
// };

// console.log(MyHouseDetails);
// console.log(MyHouseDetails.numberOfStorey.FirstHouse);

// delete MyHouseDetails.numberOfMembers;
// console.log(MyHouseDetails);

// MyHouseDetails.numberOfRooms = 6;
// console.log(MyHouseDetails);

// MyHouseDetails.estimatedPriceOfHouse = "1M";
// console.log(MyHouseDetails.estimatedPriceOfHouse);
// MyHouseDetails["estimatedPriceOfHouse"] = "1M";

// console.log(
//   `I have a ${
//     MyHouseDetails.colorOfHouse
//   } coloured house with ${(MyHouseDetails.numberOfRooms = 13)} rooms where ${
//     MyHouseDetails.numberOfMembers
//   } people are living. The house is ${
//     MyHouseDetails.numberOfStorey.FirstHouse
//   } storey and was built in ${
//     MyHouseDetails.builtYear
//   } with an estimated budget of ${MyHouseDetails.estimatedPriceOfHouse}\n`
// );

//Object destructuring

//if later in the code you much change the eg like colorOfHouse property you have to rename the color of house as follows:
const MyHouseDetails = {
  numberOfStorey: 7,
  numberOfMembers: 7,
  colorOfHouse: "green",
  builtYear: 2011,
  numberOfRooms: {
    firstHouse: {
      firstFloor1: 5,
      secondFloor1: 8,
      thirdFloor1: 3,
    },
    secondHouse: {
      firstFloor2: 7,
      secondFloor2: 4,
      thirdFloor2: 2,
    },
  },
};
//if later in the code you much change the eg like colorOfHouse property you have to rename the color of house as follows:
const colorOfHouse = "yellow";

const {
  numberOfStorey,
  numberOfMembers,
  colorOfHouse: orange,
  builtYear,
  numberOfRooms: {
    firstHouse: { firstFloor1, secondFloor1, thirdFloor1 },
    secondHouse: { firstFloor2, secondFloor2, thirdFloor2 },
  },
} = MyHouseDetails;

console.log(
  `I have a ${orange} color house. I live with ${numberOfMembers} family members. The built year is ${builtYear} and it has ${numberOfStorey} storeys. In my first house it has ${firstFloor1} number of rooms in the first floor, ${secondFloor1} number of rooms in the second floor and ${thirdFloor1} number of rooms in the third floor. I also have a second house which had ${firstFloor2} number of rooms in the first floor, ${secondFloor2} number of rooms in the second floor and ${thirdFloor2} number of rooms in the third floor.`
);
