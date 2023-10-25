function twoSum(nums, target) {
  // for (let i = 0; i < nums.length; i++) {
  //   const num1 = nums[i];
  //
  //   for (let j = i + 1; j < nums.length; j++) {
  //     const num2 = nums[j];
  //     
  //     const sum = num1 + num2;
  //
  //     if (sum === target) {
  //       return [i, j];
  //     }
  //   }
  // }

  const complements = new Set();

  for (let i = 0; i < nums.length; i++) {

    const num = nums[i];

    const complement = target - num;

    if (complements.has(complement)) {
      return [nums.indexOf(complement), i];
    }

    complements.add(num);
  }

  return [];
}

module.exports = twoSum;
