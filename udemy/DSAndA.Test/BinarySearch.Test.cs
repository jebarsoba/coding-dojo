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

        [Fact]
        public void BinarySearchTest3()
        {
            int[] orderedNumbers = new int[] { 3, 7, 20 };

            Assert.Equal(expected: 1, actual: new BinarySearch(orderedNumbers).Find(7));
        }

        [Fact]
        public void BinarySearchTest4()
        {
            int[] orderedNumbers = new int[] { 3, 7, 20 };

            Assert.Equal(expected: 2, actual: new BinarySearch(orderedNumbers).Find(20));
        }

        [Fact]
        public void BinarySearchTest5()
        {
            int[] orderedNumbers = new int[] { 3, 7, 20, 32 };

            Assert.Equal(expected: 3, actual: new BinarySearch(orderedNumbers).Find(32));
        }

        [Fact]
        public void BinarySearchTest6()
        {
            int[] orderedNumbers = new int[] { 3, 7, 20, 32, 45, 55, 60, 75 };

            Assert.Equal(expected: 6, actual: new BinarySearch(orderedNumbers).Find(60));
        }
    }
}