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

        [Fact]
        public void InsertionInOrderedArrayTest3()
        {
            Assert.Equal(
                expected: new int[] { 3, 5, 7 },
                actual: new InsertionInOrderedArray().Insert(orderedArray: new int[] { 3, 5 }, itemToInsert: 7)
            );
        }

        [Fact]
        public void InsertionInOrderedArrayTest4()
        {
            Assert.Equal(
                expected: new int[] { 1, 3, 5 },
                actual: new InsertionInOrderedArray().Insert(orderedArray: new int[] { 3, 5 }, itemToInsert: 1)
            );
        }

        [Fact]
        public void InsertionInOrderedArrayTest5()
        {
            Assert.Equal(
                expected: new int[] { 3, 7, 20, 32, 45, 52, 55, 60, 75 },
                actual: new InsertionInOrderedArray().Insert(orderedArray: new int[] { 3, 7, 20, 32, 45, 55, 60, 75 }, itemToInsert: 52)
            );
        }
    }
}