using Xunit;
using DSAndA;

namespace DSAndA.Test
{
    public class GCDFinderTestFixture
    {
        [Fact]
        public void FindGCDTest1()
        {
            Assert.Equal(expected: 2, actual: new GCDFinder().FindGCD(m: 4, n: 2));
        }

        [Fact]
        public void FindGCDTest2()
        {
            Assert.Equal(expected: 1, actual: new GCDFinder().FindGCD(m: 5, n: 2));
        }

        [Fact]
        public void FindGCDTest3()
        {
            Assert.Equal(expected: 4, actual: new GCDFinder().FindGCD(m: 4, n: 0));
        }

        [Fact]
        public void FindGCDTest4()
        {
            Assert.Equal(expected: 5, actual: new GCDFinder().FindGCD(m: 25, n: 10));
        }
    }
}