test("given an unsorted array of integers nums, should return the length of the longest continuous increasing subsequence (Example 1)", () => {
  expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toBe(3);
});

function findLengthOfLCIS(nums: number[]): number {
  let cis = 1;
  let max = cis;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      cis++;

      if (cis > max) {
        max = cis;
      }
    } else {
      cis = 1;
    }
  }

  return max;
}
