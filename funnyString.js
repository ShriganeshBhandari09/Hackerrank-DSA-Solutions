/*
In this challenge, you will determine whether a string is funny or not. To determine whether a string is funny, create a copy of the string in reverse e.g. . Iterating through each string, compare the absolute difference in the ascii values of the characters at positions 0 and 1, 1 and 2 and so on to the end. If the list of absolute differences is the same for both strings, they are funny.

Determine whether a give string is funny. If it is, return Funny, otherwise return Not Funny.

Example

The ordinal values of the charcters are .  and the ordinals are . The absolute differences of the adjacent elements for both strings are , so the answer is Funny.

Function Description

Complete the funnyString function in the editor below.

funnyString has the following parameter(s):

string s: a string to test
Returns

string: either Funny or Not Funny
Input Format

The first line contains an integer , the number of queries.
The next  lines each contain a string, .

Constraints

Sample Input

STDIN   Function
-----   --------
2       q = 2
acxz    s = 'acxz'
bcxz    s = 'bcxz'
Sample Output

Funny
Not Funny
Explanation

Let  be the reverse of .

Test Case 0:

, 
Corresponding ASCII values of characters of the strings:
 and 
For both the strings the adjacent difference list is [2, 21, 2].

Test Case 1:

, 
Corresponding ASCII values of characters of the strings:
 and 
The difference list for string  is [1, 21, 2] and for string  is [2, 21, 1].
*/

function funnyString(s) {
  // Write your code here

  let sArray = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    sArray.push(element.charCodeAt(element));
  }

  console.log(sArray);
  let revStr = s.split("").reverse().join("");
  let revStrArray = [];
  for (let i = 0; i < revStr.length; i++) {
    const element = revStr[i];
    revStrArray.push(element.charCodeAt(element));
  }
  console.log(revStrArray);

  let newArray = [];
  for (let i = 0; i < sArray.length; i++) {
    if (i < sArray.length - 1) {
      newArray.push(Math.abs(sArray[i + 1] - sArray[i]));
    }
  }

  console.log(newArray);

  let revStrNewArr = [];
  for (let i = 0; i < revStrArray.length; i++) {
    if (i < revStrArray.length - 1) {
      revStrNewArr.push(Math.abs(revStrArray[i] - revStrArray[i + 1]));
    }
  }
  console.log(revStrNewArr);

  let answerArray = [];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === revStrNewArr[i]) {
      answerArray.push(true);
    } else {
      answerArray.push(false);
    }
  }

  if (answerArray.includes(false)) {
    return "Not Funny";
  } else {
    return "Funny";
  }

  // return answerArray
}

console.log(funnyString("jkmsxzwrxzy"));

/*
ovyvzvptyvpvpxyztlrztsrztztqvrxtxuxq
holtm
uvzxrumuztyqyvpnji
tmruzxzuwoskqysxztuvosuyrswrnmtxvzsrqwytzrxpltrwusxupw
wxstwxuzuyuvyzrsxysxyuvyqxuxyskqwsyqumqrvopvowqumnvrxpwqpwsrnvrztxrxpvuxunvyzvupvupowvyzvzuzwvsrwv
yrzxrxskrtlpwpmtpxvowrxrpxq
pryumtuntmovpwvowslj
nosklrxrtyuxtmnurzsryuxtywqwqpxts
fmpszyvqwxrtvpuwqszvyvotmsxsxuvzyvpwzrpmuxqwtswvytytzsnuxuyrpvtysqoutzurqxury
jkmsxzwrxzy
*/
