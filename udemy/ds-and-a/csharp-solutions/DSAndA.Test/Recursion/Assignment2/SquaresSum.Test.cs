using System;
using Xunit;

namespace DSAndA.Test.Recursion.Assignment2
{
    public class SquaresSumTestFixture
    {
        [Fact]
        public void SquaresSumTest1()
        {
            double given = 3;
            double expected = 14; //3^2 + 2^2 + 1^2 = 14

            Func<double, double> SumSquares = null;
            SumSquares = n => Math.Pow(n, 2) + (--n > 1 ? SumSquares(n) : 1);

            Assert.Equal(expected: expected, actual: SumSquares(given));
        }
    }
}