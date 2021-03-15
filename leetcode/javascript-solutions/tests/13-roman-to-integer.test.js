const RomanToInt = require('../src/13-roman-to-integer');

test('given a roman numeral, should convert it to integer (Example 1)', () => {
    const s = "III";

    expect(new RomanToInt().romanToInt(s)).toBe(3);
});

test('given a roman numeral, should convert it to integer (Example 2)', () => {
    const s = "IV";

    expect(new RomanToInt().romanToInt(s)).toBe(4);
});

test('given a roman numeral, should convert it to integer (Example 3)', () => {
    const s = "IX";

    expect(new RomanToInt().romanToInt(s)).toBe(9);
});

test('given a roman numeral, should convert it to integer (Example 4)', () => {
    const s = "LVIII";

    expect(new RomanToInt().romanToInt(s)).toBe(58);
});

test('given a roman numeral, should convert it to integer (Example 5)', () => {
    const s = "MCMXCIV";

    expect(new RomanToInt().romanToInt(s)).toBe(1994);
});