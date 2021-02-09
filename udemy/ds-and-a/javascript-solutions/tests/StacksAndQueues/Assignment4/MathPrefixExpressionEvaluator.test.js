const MathPrefixExpressionEvaluator = require('../../../src/StackAndQueues/Assignment4/MathPrefixExpressionEvaluator');

test('given a prefix expression with addition, should evaluate it accordingly', () => {
    expect(new MathPrefixExpressionEvaluator().evaluate("+ 3 3")).toBe(6);
});

test('given a prefix expression with addition and multiply combined, should evaluate it accordingly', () => {
    expect(new MathPrefixExpressionEvaluator().evaluate("* + 3 3 3")).toBe(18);
});

test('given a prefix expression with addition and multiply combined more complex, should evaluate it accordingly', () => {
    expect(new MathPrefixExpressionEvaluator().evaluate("+ 3 + * 2 8 9")).toBe(28);
});

test('given a prefix expression with addition and multiply combined (another example), should evaluate it accordingly', () => {
    expect(new MathPrefixExpressionEvaluator().evaluate("+ * 2 4 * 3 6")).toBe(26);
});