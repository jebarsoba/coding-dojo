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
    }
}