const merge = require("../src/88-merge-sorted-array");

test("given two sorted integer arrays nums1 and nums2, should merge nums2 into nums1 as one sorted array (Example 1)", () => {
  let nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;

  const expected = [1, 2, 2, 3, 5, 6];

  merge(nums1, m, nums2, n);

  expect(nums1).toEqual(expected);
});

test("given two sorted integer arrays nums1 and nums2, should merge nums2 into nums1 as one sorted array (Example 2)", () => {
  let nums1 = [1];
  const m = 1;
  const nums2 = [];
  const n = 0;

  const expected = [1];

  merge(nums1, m, nums2, n);

  expect(nums1).toEqual(expected);
});

test("given two sorted integer arrays nums1 and nums2, should merge nums2 into nums1 as one sorted array (Example 3)", () => {
  let nums1 = [0];
  const m = 0;
  const nums2 = [1];
  const n = 1;

  const expected = [1];

  merge(nums1, m, nums2, n);

  expect(nums1).toEqual(expected);
});

test("given two sorted integer arrays nums1 and nums2, should merge nums2 into nums1 as one sorted array (Example 4)", () => {
  let nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [4, 5, 6];
  const n = 3;

  const expected = [1, 2, 3, 4, 5, 6];

  merge(nums1, m, nums2, n);

  expect(nums1).toEqual(expected);
});

test("given two sorted integer arrays nums1 and nums2, should merge nums2 into nums1 as one sorted array (Example 5)", () => {
  let nums1 = [-1, -1, 0, 0, 0, 0];
  const m = 4;
  const nums2 = [-1, 0];
  const n = 2;

  const expected = [-1, -1, -1, 0, 0, 0];

  merge(nums1, m, nums2, n);

  expect(nums1).toEqual(expected);
});

test("given two sorted integer arrays nums1 and nums2, should merge nums2 into nums1 as one sorted array (Example 6)", () => {
  let nums1 = [-1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0];
  const m = 5;
  const nums2 = [-1, -1, 0, 0, 1, 2];
  const n = 6;

  const expected = [-1, -1, -1, 0, 0, 0, 0, 0, 1, 2, 3];

  merge(nums1, m, nums2, n);

  expect(nums1).toEqual(expected);
});
