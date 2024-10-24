function isPalindrome(input) {
  return input === input.split('').reverse().join('');
}

console.log(isPalindrome('abba'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('a'));
console.log(isPalindrome('robot'));
console.log(isPalindrome('ab'));

/*
The input.split('') splits the string into an array of characters
.reverse() reverses the array and .join('') joins the reversed array back into a string.
The console log will check if the original string and return true or false accordingly.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
