/*
Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
*/

test("Example 1", () => {
  expect(checkPossibility([4, 2, 3])).toBeTruthy();
});

test("Example 2", () => {
  expect(checkPossibility([4, 2, 1])).toBeFalsy();
});

test("Example 3", () => {
  expect(checkPossibility([3, 4, 2, 3])).toBeFalsy();
});

test("Example 4", () => {
  expect(checkPossibility([1, 2, 3])).toBeTruthy();
});

test("Example 5", () => {
  expect(checkPossibility([5, 7, 1, 8])).toBeTruthy();
});

function checkPossibility(nums: number[]): boolean {
  if (nums.length < 3) {
    return true;
  }

  let modified = false;
  for (let i = 0; i < nums.length - 1; i++) {
    if (!(nums[i] <= nums[i + 1])) {
      if (!modified) {
        if (i > 0 && nums[i + 1] < nums[i - 1]) {
          nums[i + 1] = nums[i];
        } else {
          nums[i] = nums[i + 1];
        }
        modified = true;
      } else {
        return false;
      }
    }
  }

  return true;
}
