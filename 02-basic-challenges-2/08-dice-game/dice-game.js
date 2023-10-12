function getResult(num) {
  if (num === 7 || num === 11) {
    return "win";
  }

  if (num === 2 || num === 3 || num === 12) {
    return "lose";
  }

  return "roll again";
}

function diceGameSimulation(numOfSimulations) {
  const results = [];

  for (let i = 0; i < numOfSimulations; i++) {
    const dice1 = Math.ceil(Math.random() * 6);
    const dice2 = Math.ceil(Math.random() * 6);
    const sum = dice1 + dice2;
    const result = getResult(dice1 + dice2);

    results.push({
      dice1,
      dice2,
      sum,
      result,
    });
  }

  return results;
}

module.exports = diceGameSimulation;
