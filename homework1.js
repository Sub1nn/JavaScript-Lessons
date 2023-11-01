//30.10
// ?decrease price of each laptop by 10K
// ?find laptop named "TUF F15"
// ? is all laptop priced below 2lakh
// ?find index of laptop named "Vivobook"
// ?return msi laptops only
// ? sort product from cheap to expensive
// ? sort product according to brand in descending order
// ?calculate sum of price of all laptops
// ?insert macbook pro and macbook air object in index position 3

const laptops = [
  {
    name: "Inspiron 3511",
    price: 55000,
    brand: "dell",
  },
  {
    name: "Acer Nitro",
    price: 109000,
    brand: "acer",
  },
  {
    name: "TUF F15",
    price: 205000,
    brand: "asus",
  },
  {
    name: "Vivobook",
    price: 76000,
    brand: "asus",
  },
  {
    name: "Aspire 5",
    price: 87500,
    brand: "acer",
  },
  {
    name: "Modern 14",
    price: 92000,
    brand: "msi",
  },
  {
    name: "Thinkpad X13",
    price: 149000,
    brand: "lenovo",
  },

  {
    name: "TUF F15",
    price: 205000,
    brand: "asus",
  },
  {
    name: "Legion 5 PRO",
    price: 188000,
    brand: "lenovo",
  },
  {
    name: "Predator Helios 300",
    price: 169000,
    brand: "acer",
  },
  {
    name: "GP66 Leopard",
    price: 199000,
    brand: "msi",
  },
];

// ?decrease price of each laptop by 10K

// let newList = laptops.map((item) => ({
//   ...item,
//   price: item.price - 10000,
// }));
// console.log(newList);

// ?find laptop named "TUF F15"

// const found = laptops.find((item) => item.name === "TUF F15");
// console.log(found);

// ? is all laptop priced below 2lakh

// const isBelow2Lakh = laptops.every((item) => item.price < 200000);
// console.log(isBelow2Lakh);

// ?find index of laptop named "Vivobook"

// const vivoBook = laptops.findIndex((item) => item.name === "Vivobook");
// console.log(vivoBook);

// ?return msi laptops only
// const msiLaptopList = laptops.filter((item) => item.brand === "msi");
// console.log(msiLaptopList);

// ? sort product from cheap to expensive
const sortedByPrice = laptops.sort((a, b) => a.price - b.price);
//console.log(sortedByPrice);

// ? sort product according to brand in descending order
const sortedByBrandDesc = laptops.sort((a, b) =>
  b.brand.localeCompare(a.brand)
);
//console.log(sortedByBrandDesc);

// ?calculate sum of price of all laptops
const sumPrice = laptops.reduce((sum, item) => {
  return sum + item.price;
}, 0);
// console.log(sumPrice);

// ?insert macbook pro and macbook air object in index position 3
laptops.splice(
  3,
  0,
  {
    name: "Macbook",
    price: 300000,
    brand: "apple",
  },
  {
    name: "Macbook Air",
    price: 250000,
    brand: "apple",
  }
);
//console.log(laptops);

// ? WAF to return key only from string "Bearer 12dfafakfafdk"

getKey = (string) => {
  return string.split(" ")[1];
};
const result = getKey("Bearer 12dfafakfafdk");
console.log(result);
