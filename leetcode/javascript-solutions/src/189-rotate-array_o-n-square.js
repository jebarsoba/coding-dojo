/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    // Save last element...
    let aux = nums[nums.length - 1];

    // Shift array elements one position forward...
    for (let j = nums.length - 2; j >= 0; j--) {
      nums[j + 1] = nums[j];
    }

    // Put the stored "last element" as the new head...
    nums[0] = aux;
  }
};

module.exports = {
  rotate,
};
