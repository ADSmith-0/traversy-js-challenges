function mergeSort(numbers) {
  const merge = (arr1, arr2) => {
    let array1 = arr1;
    let array2 = arr2;
    
    if (arr1.length > 1) {
      const halfway = arr1.length / 2;
      array1 = merge(arr1.slice(0, halfway), arr1.slice(halfway));
    }

    if (arr2.length > 1) {
      const halfway = arr2.length / 2;
      array2 = merge(arr2.slice(0, halfway), arr2.slice(halfway));
    }

    let i = 0;
    let j = 0;

    const result = [];

    while (i < array1.length && j < array2.length) {
      const num1 = array1[i];
      const num2 = array2[j];

      if (num1 < num2 || num1 === num2) {
        result.push(num1);
        i++;
      } else if (num2 < num1) {
        result.push(num2);
        j++;
      }
    }

    if (i === array1.length) {
      result.push(...array2.slice(j));
    }

    if (j === array2.length) {
      result.push(...array1.slice(i));
    }

    return result;
  }

  const rootHalfway = numbers.length / 2;
  return merge(numbers.slice(0, rootHalfway), numbers.slice(rootHalfway));
}

module.exports = mergeSort;
