//Question link: https://www.hackerrank.com/challenges/strong-password/problem?isFullScreen=true

// Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

// Its length is at least .
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+
// She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

// Input 3,Ab1
// Length is 3
// Password is Ab1
// Output 3

function strongPassword(n, password) {
  let count = 0;
  if (!password.match(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/)) {
    count++;
    console.log("Password should includes capital letters", count);
  }
  if (!password.match(/[0123456789]/)) {
    count++;
    console.log("Password should includes numbers", count);
  }
  if (!password.match(/[abcdefghijklmnopqrstuvwxyz]/)) {
    count++;
    console.log("Password length should includes small letters", count);
  }
  if (!password.match(/[!@#$%^&*()--+]/)) {
    count++;
    console.log("Password should include special characters", count);
  }
  diffLength = 6 - password.length;
  if(diffLength>0 && diffLength>=count){
    return diffLength
  }
  return count
}

console.log(strongPassword(3, "Ab1"));
