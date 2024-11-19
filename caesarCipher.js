/*
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
Example


The alphabet is rotated by , matching the mapping above. The encrypted string is .

Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

Function Description

Complete the caesarCipher function in the editor below.

caesarCipher has the following parameter(s):

string s: cleartext
int k: the alphabet rotation factor
Returns

string: the encrypted string
Input Format

The first line contains the integer, , the length of the unencrypted string.
The second line contains the unencrypted string, .
The third line contains , the number of letters to rotate the alphabet by.
*/

function caesarCipher(s, k) {
  // Write your code here
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const capitalAplhabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if(k>26){
    k = k % 26
  }
  let rotatedString = alphabets.slice(k, 27) + alphabets.slice(0, k);
  console.log(rotatedString);

  let strIndex = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element.match(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/)) {
      strIndex.push({
        element: element,
        index: capitalAplhabets.indexOf(element),
      });
    }
    if (element.match(/[abcdefghijklmnopqrstuvwxyz]/)) {
      strIndex.push({ element: element, index: alphabets.indexOf(element) });
    }
    if (
      !element.match(/[abcdefghijklmnopqrstuvwxyz]/) &&
      !element.match(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/)
    ) {
      strIndex.push({ element: element, index: s.indexOf(element) });
    }
  }

  // console.log(strIndex);

  // for (let j = 0; j < strIndex.length; j++) {
  //   const element = strIndex[j].index;
  //   console.log(rotatedString[element]);
  // }

  let encryptedArray = [];

  for (let j = 0; j < strIndex.length; j++) {
    if (strIndex[j].element.match(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/)) {
      // console.log(rotatedString[strIndex[j].index].toUpperCase());
      encryptedArray.push(rotatedString[strIndex[j].index].toUpperCase());
    }
    if (
      !strIndex[j].element.match(/[abcdefghijklmnopqrstuvwxyz]/) &&
      !strIndex[j].element.match(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/)
    ) {
      // console.log(strIndex[j].element);
      encryptedArray.push(strIndex[j].element);
    } else if (strIndex[j].element.match(/[abcdefghijklmnopqrstuvwxyz]/)) {
      // console.log(rotatedString[strIndex[j].index]);
      encryptedArray.push(rotatedString[strIndex[j].index]);
    }
  }

  return encryptedArray.join("");
}

console.log(caesarCipher("www.abc.xy", 87));
