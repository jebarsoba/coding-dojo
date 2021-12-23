test("given two integers a and b, should return the sum of the two integers without using the operators + and - (Example 1)", () => {
  expect(getSum(1, 2)).toBe(3);
});

test("given two integers a and b, should return the sum of the two integers without using the operators + and - (Example 2)", () => {
  expect(getSum(2, 3)).toBe(5);
});

function getSum(a: number, b: number): number {
  // After a pen-and-paper test, addition can be achieved through Bit manipulation,
  // by combining XOR and "AND with left bit-shift" for the carrying...
  while (b !== 0) {
    let carry = (a & b) << 1; // AND with left bit-shift
    a = a ^ b; // XOR
    b = carry;
  }
  return a;
}
