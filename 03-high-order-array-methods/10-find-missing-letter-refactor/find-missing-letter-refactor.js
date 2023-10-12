function findMissingLetter(arr) {
  // Decided not doing it with HOA as for loop is way more efficient
  
  let prevCharVal = arr[0].charCodeAt(0);

  for (let i = 1; i < arr.length; i++) {
    const char = arr[i];
    const charVal = char.charCodeAt(0);

    if (charVal - prevCharVal > 1) {
      return String.fromCharCode(prevCharVal + 1);
    }

    prevCharVal++;
  }
}

module.exports = findMissingLetter;
