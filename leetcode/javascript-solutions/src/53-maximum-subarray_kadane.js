/**
 * This solution is based on the Kadane's algorithm. Here's a good explanation about it:
 * https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let localMax;
  return nums.reduce((globalMax, currValue, currIndex) => {
    localMax =
      currIndex > 0 ? Math.max(currValue, currValue + localMax) : currValue;
    return localMax > globalMax ? localMax : globalMax;
  }, nums[0]);
};

module.exports = maxSubArray;
