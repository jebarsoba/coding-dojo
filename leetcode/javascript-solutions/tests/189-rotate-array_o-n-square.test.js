const { rotate } = require("../src/189-rotate-array_o-n-square");

test("given an array, should rotate the array to the right by k steps (Example 1)", () => {
  let nums = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;
  rotate(nums, k);

  expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
});

test("given an array, should rotate the array to the right by k steps (Example 2)", () => {
  let nums = [-1, -100, 3, 99];
  const k = 2;
  rotate(nums, k);

  expect(nums).toEqual([3, 99, -1, -100]);
});

test("given an array, should rotate the array to the right by k steps (Example 3)", () => {
  let nums = [1, 2, 3, 4, 5, 6, 7];
  const k = 1;
  rotate(nums, k);

  expect(nums).toEqual([7, 1, 2, 3, 4, 5, 6]);
});
