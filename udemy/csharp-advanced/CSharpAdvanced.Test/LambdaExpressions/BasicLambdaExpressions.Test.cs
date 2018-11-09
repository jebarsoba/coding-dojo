using System;
using Xunit;

namespace CSharpAdvanced.Test.LambdaExpressions
{
    public class BasicLambdaExpressionsTestFixture
    {
        [Fact]
        public void SquareTest()
        {
            Func<int, int> square = number => number * number;

            Assert.Equal(expected: 25, actual: square(5));
        }

        [Fact]
        public void MultiplierTest()
        {
            const int factor = 5;

            Func<int, int> multiplier = number => number * factor;

            Assert.Equal(expected: 50, actual: multiplier(10));
        }
    }
}