using Xunit;

namespace DSAndA.Test
{
    public class BubbleSortTestFixture
    {
        [Fact]
        public void BubbleSortTest1()
        {
            Assert.Equal(expected: new int[] { 2, 5 }, actual: new BubbleSort().Sort(new int[] { 5, 2 }));
        }

        [Fact]
        public void BubbleSortTest2()
        {
            Assert.Equal(expected: new int[] { 2, 5, 7 }, actual: new BubbleSort().Sort(new int[] { 7, 5, 2 }));
        }

        [Fact]
        public void BubbleSortTest3()
        {
            Assert.Equal(expected: new int[] { 2, 5, 7, 8, 12 }, actual: new BubbleSort().Sort(new int[] { 12, 8, 7, 5, 2 }));
        }
    }
}