const HashTable = require('./HashTable');

function wordInstanceCounter(str, targetWord) {
  // Decided not to use a HashTable here as we only need to count the instance of 1 word,
  // so the rest of the HashTable instance is unnecessary
  let count = 0;

  const sanitisedStr = str.replace(/[!|.|,]/g, "").toLowerCase();
  const words = sanitisedStr.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word === targetWord) {
      count++;
    }
  }

  return count;

}

module.exports = wordInstanceCounter;
