const Factorial = require('../../src/Recursion/Factorial');

test('should calculate the factorial of a number accondinly', () => {
    expect(new Factorial().calculate(3)).toBe(6);
});