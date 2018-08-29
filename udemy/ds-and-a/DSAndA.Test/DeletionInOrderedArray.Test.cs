using Xunit;

namespace DSAndA.Test
{
    public class DeletionInOrderedArrayTestFixture
    {
        [Fact]
        public void DeletionInOrderedArrayTest1()
        {
            Assert.Equal(
                expected: new int[] { 3, 7, 20, 32, 45, 52, 60, 75 },
                actual: new DeletionInOrderedArray().Delete(orderedArray: new int[] { 3, 7, 20, 32, 45, 52, 55, 60, 75 }, itemToDelete: 55)
            );
        }

        [Fact]
        public void DeletionInOrderedArrayTest2()
        {
            Assert.Equal(
                expected: new int[] { 3, 7 },
                actual: new DeletionInOrderedArray().Delete(orderedArray: new int[] { 3, 5, 7 }, itemToDelete: 5)
            );
        }
    }
}