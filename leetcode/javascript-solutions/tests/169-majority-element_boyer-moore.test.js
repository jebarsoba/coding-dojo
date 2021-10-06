const { majorityElement } = require("../src/169-majority-element_boyer-moore");

test("given an array nums of size n, should return the majority element, i.e. element that appears more than ⌊n / 2⌋ times (Example 1)", () => {
  let nums = [3, 2, 3];

  expect(majorityElement(nums)).toBe(3);
});

test("given an array nums of size n, should return the majority element, i.e. element that appears more than ⌊n / 2⌋ times (Example 2)", () => {
  let nums = [2, 2, 1, 1, 1, 2, 2];

  expect(majorityElement(nums)).toBe(2);
});
