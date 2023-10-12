function sumOfEvenSquares(arr) {
  // O(n)
  return arr.reduce((sum, num) => num % 2 === 0 ? sum += num**2 : sum, 0);
}

module.exports = sumOfEvenSquares;
