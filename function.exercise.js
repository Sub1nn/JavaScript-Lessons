// ? 1. Write a JavaScript function that reverses a number. Example x = 32243; Expected Output : 34223

// const num = 12345;

// var num_split = (number) => {
//   const digitsArray = [...number.toString().split("")];
//   console.log(digitsArray);
//   const reversedArray = digitsArray.reverse().join("");
//   return reversedArray;
// };
// const result = num_split(num);
// console.log(result);

// ? 2. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. Example string : 'The quick brown fox' Expected Output : 5

// const vowel = ["a", "e", "i", "o", "u"];

// const vowelFromStr = (str) => {
//   let vowel_extracted = "";
//   let count = 0;
//   for (let char of str) {
//     if (vowel.includes(char) && char !== "y") {
//       vowel_extracted += char;
//       count++;
//     }
//   }
//   return { vowel_extracted, count };
// };
// let result = vowelFromStr("This is my Computer");
// console.log(result);

// ? 3. Write a JavaScript function to get the number of occurrences of each letter in a specified string.

const numOfLetters = (string) => {
  let cleanString = string.toLowerCase();
  let uniqChar = {};
  //let splitString = string.split("");
  for (let char of cleanString) {
    if (uniqChar[char]) {
      uniqChar[char]++;
    } else {
      uniqChar[char] = 1;
    }
  }
  console.log(uniqChar);
};
// let result = numOfLetters("How many letters are actually here");
// console.log(result);
