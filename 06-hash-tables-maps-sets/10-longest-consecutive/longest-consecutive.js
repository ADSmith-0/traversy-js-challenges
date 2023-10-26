function longestConsecutiveSequence(nums) {
  const numSet = new Set(nums);

  let longestSequence = 0;
  let currentSequence = 1;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    while (numSet.has(num + 1)) {
      currentSequence++;
      num++;
    }

    longestSequence = Math.max(longestSequence, currentSequence);
    currentSequence = 1;
  }

  return longestSequence;
}

module.exports = longestConsecutiveSequence;
