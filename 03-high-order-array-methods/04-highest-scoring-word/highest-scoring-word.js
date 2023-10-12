const valFromChar = (char) => {
  return char.toLowerCase().charCodeAt(0) - 96;
}

function highestScoringWord(arr) {
  const words = arr.split(" ");

  const wordsScores = words.map((word) => word.split("").reduce((sum, char) => sum + valFromChar(char), 0));

  const maxScore = Math.max(...wordsScores);

  const index = wordsScores.indexOf(maxScore);

  return words[index];
}

module.exports = highestScoringWord;
