function numberRange(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }

  return [startNum, ...numberRange(startNum + 1, endNum)];

  // if (startNum === endNum) {
  //   return [startNum];
  // }
  //
  // const numbers = numberRange(startNum, endNum - 1);
  //
  // numbers.push(endNum);
  //
  // return numbers;
}

module.exports = numberRange;
