function reverseString(inputStr) {
  const reversedStr = [];

  for (let i = inputStr.length - 1; i >= 0; i--) {
    reversedStr.push(inputStr[i]);
  }

  return reversedStr.join("");
}

module.exports = reverseString;
