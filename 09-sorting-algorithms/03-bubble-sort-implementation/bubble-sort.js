function bubbleSort(numbers) {
  let hasNextPass = true;

  while (hasNextPass) {
    hasNextPass = false;
    
    for (let i = 0; i < numbers.length - 1; i++) {
      const number = numbers[i];
      const nextNumber = numbers[i + 1];

      if (nextNumber < number) {
        numbers[i] = nextNumber;
        numbers[i + 1] = number;
        hasNextPass = true;
      }
    }
  }

  return numbers;
}

module.exports = bubbleSort;
