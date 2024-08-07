const maxSubArray = require("../src/53-maximum-subarray_brute-force");

test("given an integer array, should find the contiguous subarray which has the largest sum and return it (Example 1)", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});

test("given an integer array, should find the contiguous subarray which has the largest sum and return it (Example 2)", () => {
  expect(maxSubArray([1])).toBe(1);
});

test("given an integer array, should find the contiguous subarray which has the largest sum and return it (Example 3)", () => {
  expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
});
