using Xunit;

namespace DSAndA.Test
{
    public class SelectionSortTestFixture
    {
        [Fact]
        public void SelectionSortTest1()
        {
            Assert.Equal(expected: new int[] { 2, 5 }, actual: new SelectionSort().Sort(new int[] { 5, 2 }));
        }

        [Fact]
        public void SelectionSortTest2()
        {
            Assert.Equal(expected: new int[] { 2, 5, 7 }, actual: new SelectionSort().Sort(new int[] { 7, 5, 2 }));
        }

        [Fact]
        public void SelectionSortTest3()
        {
            Assert.Equal(expected: new int[] { 2, 5, 7, 8, 12 }, actual: new SelectionSort().Sort(new int[] { 12, 8, 7, 5, 2 }));
        }
    }
}