using DSAndA.StacksAndQueues;
using Xunit;

namespace DSAndA.Test.StacksAndQueues.Assignment4
{
    public class MathPrefixExpressionEvaluatorTestFixture
    {
        [Fact]
        public void MathPrefixExpressionEvaluatorTest1()
        {
            Assert.Equal(expected: 6.0, actual: new MathPrefixExpressionEvaluator().Evaluate("+ 3 3"));
        }

        [Fact]
        public void MathPrefixExpressionEvaluatorTest2()
        {
            Assert.Equal(expected: 9.0, actual: new MathPrefixExpressionEvaluator().Evaluate("+ 3 ( + 3 3 )"));
        }

        [Fact]
        public void MathPrefixExpressionEvaluatorTest3()
        {
            Assert.Equal(expected: 9.0, actual: new MathPrefixExpressionEvaluator().Evaluate("+ 3 ( * 2 3 )"));
        }
    }
}