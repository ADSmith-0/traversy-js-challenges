function findMissingLetter(charArr) {

  for (let i = 0; i < charArr.length - 1; i++) {
    const prevValue = charArr[i].charCodeAt(0);
    const currValue = charArr[i + 1].charCodeAt(0);

    if (currValue - prevValue > 1) {
      return String.fromCharCode((currValue + prevValue) / 2);
    }
  }

  return "";
}

module.exports = findMissingLetter;
