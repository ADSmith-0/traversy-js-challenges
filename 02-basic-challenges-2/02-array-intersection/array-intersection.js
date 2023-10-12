function arrayIntersection(arr1, arr2) {
  // Declarative
  // return arr1.filter((val) => arr2.includes(val));

  // Imperative
  const returnArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      const arr1Num = arr1[i];
      const arr2Num = arr2[j];

      if (arr1Num === arr2Num) {
        returnArr.push(arr1Num);
      }
    }
  }

  return returnArr;
}

module.exports = arrayIntersection;
