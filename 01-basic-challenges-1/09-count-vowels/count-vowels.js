function countVowels(str) {
  // Declarative
  // return str.toLowerCase().split("").filter((char) => char === "a" || char === "e" || char === "o" || char === "i" || char === "u").length;

  // Imperative
  let count = 0;
  const lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === "a" || lowerStr[i] === "e" || lowerStr[i] === "i" || lowerStr[i] === "o" || lowerStr[i] === "u") {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
