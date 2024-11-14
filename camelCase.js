//There is a sequence of words in CamelCase as a string of letters, , having the following properties:

// It is a concatenation of one or more words consisting of English letters.
// All letters in the first word are lowercase.
// For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.

// Example
// Input  s = oneTwoThree
// There are  words in the string: 'one', 'Two', 'Three'.
// Output = 3

function splitString(str) {
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).match(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/)) {
      // return str.slice(str.charAt(i)).concat(" ")
      count++
    }
  }
  return count
}

console.log(splitString("oneTwoThree"));
