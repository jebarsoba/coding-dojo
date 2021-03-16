const ValidParentheses = require('../src/20-valid-parentheses');

test('should determine if the input string is valid (Example 1)', () => {
    expect(new ValidParentheses().isValid("()")).toBe(true);
});

test('should determine if the input string is valid (Example 2)', () => {
    expect(new ValidParentheses().isValid("()[]{}")).toBe(true);
});

test('should determine if the input string is valid (Example 3)', () => {
    expect(new ValidParentheses().isValid("(]")).toBe(false);
});

test('should determine if the input string is valid (Example 4)', () => {
    expect(new ValidParentheses().isValid("([)]")).toBe(false);
});

test('should determine if the input string is valid (Example 5)', () => {
    expect(new ValidParentheses().isValid("{[]}")).toBe(true);
});

test('should determine if the input string is valid (Example 6)', () => {
    expect(new ValidParentheses().isValid("[")).toBe(false);
});