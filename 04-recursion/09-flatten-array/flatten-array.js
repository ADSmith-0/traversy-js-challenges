function flattenArray(arr) {
  if (arr.length === 0) {
    return [];
  }

  const newArr = flattenArray(arr.slice(1));

  if (Array.isArray(arr[0])) {
    newArr.unshift(...flattenArray(arr[0]));
  } else {
    newArr.unshift(arr[0]);
  }

  return newArr;
}

module.exports = flattenArray;
