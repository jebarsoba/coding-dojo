/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let occurrences = new Map();
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let currentOccurrences = occurrences.get(current);
    occurrences.set(current, currentOccurrences ? ++currentOccurrences : 1);
    if (occurrences.get(current) > nums.length / 2) {
      return current;
    }
  }
};

module.exports = {
  majorityElement,
};
