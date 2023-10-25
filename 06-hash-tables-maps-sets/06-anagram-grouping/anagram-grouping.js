function anagramGrouping(arr) {
  const words = new Map();
  
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    const key = word.split("").sort().join("");

    const currentVal = words.get(key);

    if (currentVal) {
      currentVal.push(word);
      words.set(key, currentVal);
    } else {
      words.set(key, [word]);
    }
  }

  return Array.from(words.values());
}

module.exports = anagramGrouping;
