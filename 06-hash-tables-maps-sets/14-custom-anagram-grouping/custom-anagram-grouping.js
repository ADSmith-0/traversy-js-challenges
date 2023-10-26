const HashTable = require('./HashTable');

function anagramGrouping(words) {
  const hashTable = new HashTable(words.length);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    const key = word.split("").sort().join("");

    const value = hashTable.get(key) ?? [];
    value.push(word);

    hashTable.set(key, value);
  }

  return hashTable.getValues();
}

module.exports = anagramGrouping;
