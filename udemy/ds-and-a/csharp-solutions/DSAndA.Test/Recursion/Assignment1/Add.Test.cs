using System;
using Xunit;

namespace DSAndA.Test.Recursion.Assignment1
{
    public class AddTestFixture
    {
        Func<int, int, int> add = null;

        public AddTestFixture() {
            add = (a, b) => b == 0 ? a : add(a + 1, b - 1);
        }                

        [Fact]
        public void AddTest1()
        {
            Assert.Equal(expected: 4, actual: add(2, 2));
        }

        [Fact]
        public void AddTest2()
        {
            Assert.Equal(expected: 2, actual: add(0, 2));
        }
    }
}