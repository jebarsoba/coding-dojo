/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const sum = nums.slice(i, j + 1).reduce((acc, num) => {
        acc += num;
        return acc;
      }, 0);
      if (max === undefined || sum > max) max = sum;
    }
  }

  return max;
};

module.exports = maxSubArray;
