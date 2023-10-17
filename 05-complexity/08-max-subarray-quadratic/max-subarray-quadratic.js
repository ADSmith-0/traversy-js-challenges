function maxSubarraySum(arr, k) {
  // I think that this might still be O(n)?
  // Essentially arr[i] + arr[i + 1] + arr[i + 2];

  let maxSum = -Infinity;

  for (let i = 0; i < arr.length - k; i++) {
    let currSum = 0;

    for (let j = i; j < i + k; j++) {
      currSum += arr[j];
    }

    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
}

module.exports = maxSubarraySum;
