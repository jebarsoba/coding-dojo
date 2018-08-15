using Xunit;

namespace DSAndA.Test
{
    public class InsertionInOrderedArrayTestFixture
    {
        [Fact]
        public void InsertionInOrderedArrayTest1()
        {
            Assert.Equal(
                expected: new int[] { 3, 5, 7 },
                actual: new InsertionInOrderedArray().Insert(orderedArray: new int[] { 3, 7 }, itemToInsert: 5)
            );
        }

        [Fact]
        public void InsertionInOrderedArrayTest2()
        {
            Assert.Equal(
                expected: new int[] { 3, 7, 20, 32 },
                actual: new InsertionInOrderedArray().Insert(orderedArray: new int[] { 3, 7, 32 }, itemToInsert: 20)
            );
        }
    }
}