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
    }
}