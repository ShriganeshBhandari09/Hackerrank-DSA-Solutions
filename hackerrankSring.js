function hackerrankInString(s) {
  // Write your code here

  return s.match(/h.*a.*c.*k.*e.*r.*r.*a.*n.*k/) ? "YES" : "NO";
}

console.log(hackerrankInString("hackerworld"));
