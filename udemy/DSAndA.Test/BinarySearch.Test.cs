using Xunit;

namespace DSAndA.Test
{
    public class BinarySearchTestFixture
    {
        [Fact]
        public void BinarySearchTest1()
        {
            int[] orderedArray = new int[] { 3, 7 };

            Assert.Equal(expected: 0, actual: new BinarySearch(orderedArray).Find(3));
        }

        [Fact]
        public void BinarySearchTest2()
        {
            int[] orderedArray = new int[] { 3, 7 };

            Assert.Equal(expected: 1, actual: new BinarySearch(orderedArray).Find(7));
        }

        [Fact]
        public void BinarySearchTest3()
        {
            int[] orderedArray = new int[] { 3, 7, 20 };

            Assert.Equal(expected: 1, actual: new BinarySearch(orderedArray).Find(7));
        }

        [Fact]
        public void BinarySearchTest4()
        {
            int[] orderedArray = new int[] { 3, 7, 20 };

            Assert.Equal(expected: 2, actual: new BinarySearch(orderedArray).Find(20));
        }

        [Fact]
        public void BinarySearchTest5()
        {
            int[] orderedArray = new int[] { 3, 7, 20, 32 };

            Assert.Equal(expected: 3, actual: new BinarySearch(orderedArray).Find(32));
        }

        [Fact]
        public void BinarySearchTest6()
        {
            int[] orderedArray = new int[] { 3, 7, 20, 32, 45, 55, 60, 75 };

            Assert.Equal(expected: 6, actual: new BinarySearch(orderedArray).Find(60));
        }
    }
}