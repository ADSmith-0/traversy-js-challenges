function insertionSort(numbers) {
  // const sortedNumbers = [];
  //
  // for (let i = 0; i < numbers.length; i++) {
  //   let inserted = false;
  //   const unsortedNumber = numbers[i];
  //
  //   if (sortedNumbers.length === 0) {
  //     sortedNumbers.push(unsortedNumber);
  //     continue;
  //   } 
  //
  //   for (let j = 0; j < sortedNumbers.length; j++) {
  //     const sortedNumber = sortedNumbers[j];
  //
  //     if (unsortedNumber < sortedNumber) {
  //       sortedNumbers.splice(j, 0, unsortedNumber);
  //       inserted = true;
  //       break;
  //     }
  //   }
  //
  //   if (!inserted) {
  //     sortedNumbers.push(unsortedNumber);
  //   }
  // }
  //
  // return sortedNumbers;

  for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i];
    let j = i - 1;

    while (j >= 0 &&  numbers[j] > number) {
      numbers[j + 1] = numbers[j];
      j--;
    }

    numbers[j + 1] = number;
  }

  return numbers;
}

module.exports = insertionSort;
