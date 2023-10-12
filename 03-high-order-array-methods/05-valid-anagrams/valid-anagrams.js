function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1ArrSorted = str1.split("").sort();
  const str2ArrSorted = str2.split("").sort();

  for (let i = 0; i < str1ArrSorted.length; i++) {
    const str1Char = str1ArrSorted[i];
    const str2Char = str2ArrSorted[i];

    if (str1Char !== str2Char) {
      return false;
    }
  }

  return true;
}

module.exports = validAnagrams;
