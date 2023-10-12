function titleCase(str) {
  // Declarative
  return str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");

  // Imperative
  // const words = str.split(" ");
  // const titleCaseWords = [];
  //
  // for (let i = 0; i < words.length; i++) {
  //   titleCaseWords[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  // }
  //
  // return titleCaseWords.join(" ");
}

module.exports = titleCase;
