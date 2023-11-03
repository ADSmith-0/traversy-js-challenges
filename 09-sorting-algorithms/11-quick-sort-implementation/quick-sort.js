function quickSort(numbers) {
  if (numbers.length <= 1) {
    return numbers;
  }

  const pivot = numbers[0];

  const leftArr = [];
  const rightArr = [];
  
  for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i];

    if (number < pivot) {
      leftArr.push(number);
    } else {
      rightArr.push(number);
    }
  }

  const sortedLeftArr = quickSort(leftArr);
  const sortedRightArr = quickSort(rightArr);

  // [...sortedLeftArr, pivot, ...sortedRightArr];

  sortedLeftArr.push(pivot);

  return sortedLeftArr.concat(sortedRightArr);
}

module.exports = quickSort;
