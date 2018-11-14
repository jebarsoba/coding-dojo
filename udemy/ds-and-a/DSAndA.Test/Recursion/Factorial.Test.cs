using DSAndA.Recursion;
using Xunit;

namespace DSAndA.Test.Recursion
{
    public class FactorialTestFixture
    {
        [Fact]
        public void FactorialTest1()
        {
            Assert.Equal(expected: 6, actual: new Factorial().Calculate(3));
        }

        [Fact]
        public void FactorialTest2()
        {
            Assert.Equal(expected: 1, actual: new Factorial().CalculateImplementingTailRecursion(1));
        }

        [Fact]
        public void FactorialTest3()
        {
            Assert.Equal(expected: 2, actual: new Factorial().CalculateImplementingTailRecursion(2));
        }

        [Fact]
        public void FactorialTest4()
        {
            Assert.Equal(expected: 6, actual: new Factorial().CalculateImplementingTailRecursion(3));
        }
    }
}