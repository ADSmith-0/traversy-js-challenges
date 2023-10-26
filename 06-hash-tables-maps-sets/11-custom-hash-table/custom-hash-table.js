class HashTable {
  constructor(limit = 14) {
    this.storage = [];
    this.limit = limit;
  }

  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.limit;
  }

  set(key, value) {
    const index = this.#hash(key);
    this.storage[index] = value;
  }

  get(key) {
    const index = this.#hash(key);
    return this.storage[index];
  }

  remove(key) {
    const index = this.#hash(key);
    delete this.storage[index];
  }

  getValues() {
    return this.storage.filter(Boolean);
  }
  
  // getKeys wouldn't work with this implementation, but more efficient as is without getKeys
}

const ht = new HashTable(8);
ht.set('john', '555-234-3544');
ht.set('james', '555-384-5523');
ht.set('jack', '555-384-9933');
ht.set('jill', '555-390-0034');
ht.set('james', '555-384-0011');

module.exports = HashTable;
