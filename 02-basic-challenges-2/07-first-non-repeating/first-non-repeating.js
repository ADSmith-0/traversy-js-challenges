function findFirstNonRepeatingCharacter(str) {
  let lastChar = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    const char = str[i];

    if (lastChar !== char) {
      if (count === 1) {
        return lastChar;
      }

      count = 1;
      lastChar = char;
      continue;
    }

    count++;
    
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
