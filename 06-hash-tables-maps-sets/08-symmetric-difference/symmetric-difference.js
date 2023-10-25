function symmetricDifference(arr1, arr2) {
  const resultArr = [];

  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  for (const val of set1.values()) {
    if (set2.has(val)) {
      set1.delete(val);
      set2.delete(val);
    }
  }

  const finalArr1 = Array.from(set1);
  const finalArr2 = Array.from(set2);

  return finalArr1.concat(finalArr2);
}

module.exports = symmetricDifference;
