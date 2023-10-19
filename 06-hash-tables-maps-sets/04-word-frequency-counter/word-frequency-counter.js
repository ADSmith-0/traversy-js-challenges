function wordFrequencyCounter(str) {
  const frequencyMap = new Map();

  if (str.length === 0) {
    return frequencyMap;
  }

  for (const word of str.split(" ")) {
    const wordKey = word.toLowerCase().replace(/[!|\.|\,]/g, "");
    const wordFrequency = frequencyMap.get(wordKey) ?? 0;
    frequencyMap.set(wordKey, wordFrequency + 1);
  }

  return frequencyMap;
}

module.exports = wordFrequencyCounter;
