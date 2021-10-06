/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majority = nums[0];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (current === majority) {
      count++;
    } else {
      count--;

      if (count === 0) {
        majority = current;
        count++;
      }
    }
  }

  return majority;
};

module.exports = {
  majorityElement,
};
