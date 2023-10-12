function findMissingNumber(arr) {
  if (!arr) return undefined;

  const n = arr.length;

  if (n === 0) return 1;

  const expectedLength = (n + 1) * (n + 2) / 2;

  const actualLength = arr.reduce((sum, num) => sum += num, 0);

  return expectedLength - actualLength;
}

module.exports = findMissingNumber;
