function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }

  // return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
  return reverseString(str.substr(1)) + str.charAt(0);
}

module.exports = reverseString;
