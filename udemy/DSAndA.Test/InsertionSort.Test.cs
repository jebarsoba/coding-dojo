using Xunit;

namespace DSAndA.Test
{
    public class InsertionSortTestFixture
    {
        [Fact]
        public void InsertionSortTest1()
        {
            Assert.Equal(expected: new int[] { 2, 5 }, actual: new InsertionSort().Sort(new int[] { 5, 2 }));
        }

        [Fact]
        public void InsertionSortTest2()
        {
            Assert.Equal(expected: new int[] { 2, 5, 7 }, actual: new InsertionSort().Sort(new int[] { 7, 5, 2 }));
        }

        [Fact]
        public void InsertionSortTest3()
        {
            Assert.Equal(expected: new int[] { 2, 5, 7, 8, 12 }, actual: new InsertionSort().Sort(new int[] { 12, 8, 7, 5, 2 }));
        }
    }
}