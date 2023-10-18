function maxSubarraySum(arr, k) {
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  let currSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    currSum = currSum - arr[i - k] + arr[i];
    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
}

module.exports = maxSubarraySum;
