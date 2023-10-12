// defineProperty //under the hood

const classRoom = {};
Object.defineProperty(classRoom, "hasBook", {
  value: true,
  enumerable: false, //shows into console
  writable: true, // can edit or not
  configurable: true, //can delete or not
});

classRoom.hasBook = "Yes";

// Object destructure

const bikeDetails = {
  name: "Hero-7",
  brand: "Hero",
  cc: "220",
  storage: {
    firstBag: "5l",
    secondBag: "10l",
  },
};

const name = "Subin";

const {
  name: bikeName,
  brand,
  cc,
  storage: { firstBag, secondBag },
} = bikeDetails;
console.log(
  `I have a ${bikeName} bike which is from ${brand} brand and ${cc} cc with ${secondBag}`
);
