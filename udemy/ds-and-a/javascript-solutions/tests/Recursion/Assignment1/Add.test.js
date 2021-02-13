const Add = require("../../../src/Recursion/Assignment1/Add");

test('given two integers, should return their sum accordingly', () => {
    expect(new Add().calc(2, 2)).toBe(4);
});
