/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  throw new Error("No Two Sum solution.");
}

// Sample #1, with solution
let nums = [2, 7, 11, 15];
let target = 9;

console.log("Sample #1: ", twoSum(nums, target));

// Sample #2, no solution
nums = [2, 8, 11, 15];
target = 9;

console.log("Sample #2: ", twoSum(nums, target));
