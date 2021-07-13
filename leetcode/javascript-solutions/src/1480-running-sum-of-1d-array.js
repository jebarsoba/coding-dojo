class RunningSum {
  runningSum(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
      result[i] = nums[i] + (i > 0 ? result[i - 1] : 0);
    }

    return result;
  }
}

module.exports = RunningSum;
