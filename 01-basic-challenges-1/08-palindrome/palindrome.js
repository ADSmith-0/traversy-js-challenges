function isPalindrome(str) {
  // let isPalindrome = true;
  //
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] !== str[str.length - (1 + i)]) {
  //     isPalindrome = false;
  //     break;
  //   }
  // }
  // return isPalindrome;

  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversedStr = cleanedStr.split("").reverse().join("");

  return reversedStr === cleanedStr;
}

module.exports = isPalindrome;
