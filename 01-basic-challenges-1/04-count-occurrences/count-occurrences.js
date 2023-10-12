function countOccurrences(inputString, char) {
  return inputString.split("").filter((ch) => ch === char).length;
}

module.exports = countOccurrences;
