function findMaxNumber(numbers) {
  // Simple way
  // return Math.max(...numbers);

  // More complicated way
  let maxNumber = numbers[0];
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i+1]) {
      maxNumber = numbers[i];
    } else if (numbers[i + 1] > numbers[i]) {
      maxNumber = numbers[i + 1];
    }
  }
  return maxNumber;
}

module.exports = findMaxNumber;
