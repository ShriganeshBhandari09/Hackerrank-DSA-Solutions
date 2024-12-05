/*
1. Break the string in two parts
2. change characters according to sub string

*/

function anagram(s) {
  // Write your code here

  let count = 0;
  if (s.length % 2 == 0) {
    let n = s.length / 2;
    // console.log(n);
    let sOne = s.slice(0, n);
    let sTwo = s.slice(n, s.length);
    // for (let i = 0; i < sOne.length; i++) {
    //   const element = sOne[i];
    // }
    // console.log(sOne, sTwo);

    // let StrOneCount = 0;
    // let StrTwoCount = 0;
    // for (let i = 0; i < sOne.length; i++) {
    //   if (!sOne.includes(sTwo[i])) {
    //     StrOneCount++;
    //   }

    //   if (!sTwo.includes(sOne[i])) {
    //     StrTwoCount++;
    //   }
    // }
    // return StrOneCount;
    for (let i = 0; i < n; i++) {
      sOne = sOne.replace(sTwo[i], "");
    }
    return sOne.length;
  } else {
    return -1;
  }
}

console.log(anagram("abccde"));
console.log(anagram("aaabbb"));
console.log(anagram("ab"));
console.log(anagram("abc"));
console.log(anagram("mnop"));
console.log(anagram("xyyx"));
console.log(anagram("xaxbbbxx"));
console.log(anagram("asdfjoieufoa"));
console.log(anagram("fdhlvosfpafhalll"));
console.log(anagram("mvdalvkiopaufl"));
