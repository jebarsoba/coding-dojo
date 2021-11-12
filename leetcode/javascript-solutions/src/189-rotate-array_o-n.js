/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const steps = k % nums.length;
  const reverse = (arr, start, end) => {
    while (start < end) {
      const tmp = arr[start];
      arr[start] = arr[end];
      arr[end] = tmp;
      start++;
      end--;
    }
  };

  // Reverse all numbers...
  reverse(nums, 0, nums.length - 1);

  // Reverse first k numbers...
  reverse(nums, 0, steps - 1);

  // Reverse last n - k numbers...
  reverse(nums, steps, nums.length - 1);
};

module.exports = {
  rotate,
};
