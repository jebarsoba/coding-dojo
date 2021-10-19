const { trailingZeroes } = require("../src/172-factorial-trailing-zeroes");

test("given an integer n, should return the number of trailing zeroes in n! (Example 1)", () => {
  let n = 3;
  expect(trailingZeroes(n)).toBe(0);
});

test("given an integer n, should return the number of trailing zeroes in n! (Example 2)", () => {
  let n = 5;
  expect(trailingZeroes(n)).toBe(1);
});

test("given an integer n, should return the number of trailing zeroes in n! (Example 3)", () => {
  let n = 0;
  expect(trailingZeroes(n)).toBe(0);
});

test("given an integer n, should return the number of trailing zeroes in n! (Example 4)", () => {
  let n = 7;
  expect(trailingZeroes(n)).toBe(1);
});

test("given an integer n, should return the number of trailing zeroes in n! (Example 5)", () => {
  let n = 30;
  expect(trailingZeroes(n)).toBe(7);
});
