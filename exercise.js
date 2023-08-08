/*
Quick Question #1: What does the following code return?
    new Set([1,1,2,2,3,4])

The code will return a set containing [1,2,3,4]

Quick Question #2: What does the following code return?
    [...new Set("referee")].join("")

The code will return a string containing only 'ref'

Quick Question #3:
What does the Map m look like after running the following code?
    let m = new Map();
    m.set([1,2,3], true);
    m.set([1,2,3], false);

The map has two entries, index 0 contains {Array(3) => true} and index 1
contains {Array(3) => false}
*/

//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = (array) => {
  return new Set(array).size !== array.length;
};

//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
const vowelCount = (str) => {
  const vowelMap = new Map();
  const string = str.toLowerCase();
  const vowels = 'aeiou';

  for (let char of string) {
    //Check if the char is a vowel,
    if (vowels.includes(char)) {
      //If so, check whether char exists in the map
      if (vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1); //If so, increment by 1
      } else {
        vowelMap.set(char, 1); //If it doesnt exist, set its count to 1
      }
    }
  }
  return vowelMap;
};
