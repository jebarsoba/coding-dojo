/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  // A trailing zero is always produced by prime factors 2 and 5.
  // As observed (in notes), we have to count the total number of 5s, in prime factors, of n!.
  // To calculate it, we can use floor(n/5).
  // Full explanation: https://www.geeksforgeeks.org/count-trailing-zeroes-factorial-number/
  //
  // Prime factors: Factors of a number that are, themselves, prime numbers.
  // Prime number: Natural number greater than 1 that is not a product of two smaller natural numbers (e.g. 2 and 5).

  let count = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) count += Math.floor(n / i);
  return count;
};

module.exports = {
  trailingZeroes,
};
