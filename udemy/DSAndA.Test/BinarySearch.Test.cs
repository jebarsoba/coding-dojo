using Xunit;

namespace DSAndA.Test
{
    public class BinarySearchTestFixture
    {
        [Fact]
        public void BinarySearchTest1()
        {
            int[] orderedNumbers = new int[] { 3, 7 };

            Assert.Equal(expected: 0, actual: new BinarySearch(orderedNumbers).Find(3));
        }

        [Fact]
        public void BinarySearchTest2()
        {
            int[] orderedNumbers = new int[] { 3, 7 };

            Assert.Equal(expected: 1, actual: new BinarySearch(orderedNumbers).Find(7));
        }
    }
}