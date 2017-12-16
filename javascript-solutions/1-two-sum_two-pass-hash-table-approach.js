/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const hashTable = new Map();

  for (let i = 0; i < nums.length; i++) {
    hashTable.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (hashTable.has(complement) && hashTable.get(complement) !== i) {
      return [i, hashTable.get(complement)];
    }
  }

  throw new Error('No Two Sum solution.');
}

// Sample #1, with solution
let nums = [2, 7, 11, 15];
let target = 9;

console.log('Sample #1: ', twoSum(nums, target));

// Sample #2, with solution
nums = [3, 2, 4];
target = 6;

console.log('Sample #2: ', twoSum(nums, target));

// Sample #3, no solution
nums = [2, 8, 11, 15];
target = 9;

console.log('Sample #3: ', twoSum(nums, target));
