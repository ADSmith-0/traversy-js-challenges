function areAllCharactersUnique(str) {
  // O(n^2) implementation
  // const chars = [];
  //
  // for (let i = 0; i < str.length; i++) {
  //   const char = str[i];
  //
  //   if (chars.includes(char)) {
  //     return false;
  //   }
  //
  //   chars.push(char);
  // }
  //
  // return true;

  // O(n) implementation
  const chars = new Map();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (chars.has(char)) {
      return false;
    }

    chars.set(char, true);
  }

  return true;
}

module.exports = areAllCharactersUnique;
