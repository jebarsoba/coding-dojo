test("given an array representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police (Example 1)", () => {
  expect(rob([1, 2, 3, 1])).toBe(4);
});

test("given an array representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police (Example 2)", () => {
  expect(rob([2, 7, 9, 3, 1])).toBe(12);
});

function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let dp = [0];
  dp[1] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Except for this line, the others are part of the dynamic programming template...
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]); // dp[i - 1] is one house away, so we donn't alert the police...
  }

  return dp[nums.length];
}
