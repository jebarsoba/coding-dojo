const SquaresSum = require("../../../src/Recursion/Assignment2/SquaresSum");

test('should return the sum of squares of the first n natural numbers accordingly', () => {
    expect(new SquaresSum().calc(2)).toBe(5);
});
