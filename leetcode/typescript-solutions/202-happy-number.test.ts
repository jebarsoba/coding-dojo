test("given a number, shuuld return if it's happy or not (Example 1)", () => {
  expect(isHappy(19)).toBe(true);
});

test("given a number, shuuld return if it's happy or not (Example 2)", () => {
  expect(isHappy(2)).toBe(false);
});

// Replace the number by the sum of the square of its digits
// Repeat until the number equals 1, or loop endlessly...
function isHappy(n: number): boolean {
  let visited = new Map<number, boolean>();

  // When the sum equals a number that has already been checked, we can confirm it is not happy (otherwise, it'd loop endlessly)...
  while (!visited.get(n)) {
    let sum = 0;
    let nByTen = n / 10;
    while (nByTen > 0) {
      let integralPart = Math.trunc(nByTen);
      let fractionalPart = nByTen - integralPart;
      let lastDigit = Math.round(fractionalPart * 10);
      sum += Math.pow(lastDigit, 2);

      nByTen = integralPart / 10;
    }

    if (sum === 1) {
      return true;
    } else {
      visited.set(n, true);
      n = sum;
    }
  }

  return false;
}
