const RunningSum = require("../src/1480-running-sum-of-1d-array");

test("given an array of numbers, should return its running sum (Example 1)", () => {
  const nums = [1, 2, 3, 4];
  const expected = [1, 3, 6, 10];

  expect(new RunningSum().runningSum(nums)).toEqual(expected);
});

test("given an array of numbers, should return its running sum (Example 2)", () => {
  const nums = [1, 1, 1, 1, 1];
  const expected = [1, 2, 3, 4, 5];

  expect(new RunningSum().runningSum(nums)).toEqual(expected);
});

test("given an array of numbers, should return its running sum (Example 3)", () => {
  const nums = [3, 1, 2, 10, 1];
  const expected = [3, 4, 6, 16, 17];

  expect(new RunningSum().runningSum(nums)).toEqual(expected);
});
