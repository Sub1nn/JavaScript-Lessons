// ? Object Copy

// create an object about your best sport
const bestSport = {
  sport: "Football",
  playerName: "Ronaldo",
  bestScore: "70 Goals a season",
};

const bestSportCopy = { ...bestSport };
console.log(bestSportCopy);
