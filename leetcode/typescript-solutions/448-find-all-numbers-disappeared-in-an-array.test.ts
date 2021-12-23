test("given an array nums of n integers where nums[i] is in the range [1, n], should return an array of all the integers in the range [1, n] that do not appear in nums (Example 1)", () => {
  expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
});

test("given an array nums of n integers where nums[i] is in the range [1, n], should return an array of all the integers in the range [1, n] that do not appear in nums (Example 2)", () => {
  expect(findDisappearedNumbers([1, 1])).toEqual([2]);
});

function findDisappearedNumbers(nums: number[]): number[] {
  // Without extra space in O(n)...
  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1;
    nums[idx] = nums[idx] > 0 ? -nums[idx] : nums[idx];
  }

  return nums.reduce((result, current, index) => {
    if (current > 0) {
      result.push(index + 1);
    }
    return result;
  }, []);

  // Extra space in O(n)...
  /*let map = new Map<number, boolean>();
  for (let i = 1; i <= nums.length; i++) {
      map.set(i, false);
  }
  
  for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], true);
  }
  
  let results: number[] = [];
  for (const [key, value] of map.entries()) {
      if (!value) {
          results.push(key);
      }
  }
  
  return results;*/
}
