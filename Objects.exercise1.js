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

const MyHouseDetails = {
  numberOfRooms: 7,
  numberOfMembers: 7,
  colorOfHouse: "green",
  builtYear: 2011,
  numberOfStorey: {
    FirstHouse: "8",
    SecondHouse: "9",
  },
};
console.log(MyHouseDetails);
console.log(MyHouseDetails.numberOfStorey.FirstHouse);

delete MyHouseDetails.numberOfMembers;
console.log(MyHouseDetails);

MyHouseDetails.numberOfRooms = 6;
console.log(MyHouseDetails);

MyHouseDetails.estimatedPriceOfHouse = "1M";
console.log(MyHouseDetails.estimatedPriceOfHouse);
MyHouseDetails["estimatedPriceOfHouse"] = "1M";

console.log(
  `I have a ${
    MyHouseDetails.colorOfHouse
  } coloured house with ${(MyHouseDetails.numberOfRooms = 13)} rooms where ${
    MyHouseDetails.numberOfMembers
  } people are living. The house is ${
    MyHouseDetails.numberOfStorey.FirstHouse
  } storey and was built in ${
    MyHouseDetails.builtYear
  } with an estimated budget of ${MyHouseDetails.estimatedPriceOfHouse}\n`
);
