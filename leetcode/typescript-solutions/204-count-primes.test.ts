test("given an integer n, return the number of prime numbers that are strictly less than n (Example 1)", () => {
  expect(countPrimes(10)).toBe(4);
});

test("given an integer n, return the number of prime numbers that are strictly less than n (Example 2)", () => {
  expect(countPrimes(0)).toBe(0);
});

test("given an integer n, return the number of prime numbers that are strictly less than n (Example 3)", () => {
  expect(countPrimes(1)).toBe(0);
});

test("given an integer n, return the number of prime numbers that are strictly less than n (Example 4)", () => {
  expect(countPrimes(30)).toBe(10);
});

test("given an integer n, return the number of prime numbers that are strictly less than n (Example 5)", () => {
  expect(countPrimes(10000)).toBe(1229);
});

function countPrimes(n: number): number {
  let primes: boolean[] = [];
  // Sieve of Eratosthenes algorithm:
  // First we assume that all numbers are prime (except 0 and 1)...
  for (let i = 0; i < n; i++) {
    primes[i] = i === 0 || i === 1 ? false : true;
  }

  // We know all multiples of 2 must not be primes, so we mark them off as non-primes...
  // We know all multiples of 3 must not be primes, so we mark them off as non-primes...
  // Basically, if the number is a multiple of any prime, then it is not prime...
  for (let i = 2; i < n; i++) {
    if (primes[i]) {
      for (let j = i; i * j < n; j++) {
        primes[i * j] = false;
      }
    }
  }

  // The numbers not crossed out at this point in the list are all prime numbers...
  return primes.reduce((sum, current) => sum + (current ? 1 : 0), 0);
}
