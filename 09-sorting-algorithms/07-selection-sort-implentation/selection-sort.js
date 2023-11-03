function selectionSort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const minNumber = Math.min(...numbers.slice(i));

    const indexOfMin = numbers.lastIndexOf(minNumber);

    numbers[i] = minNumber;
    numbers[indexOfMin] = number;
  }

  return numbers;
}

module.exports = selectionSort;
