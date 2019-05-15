using Xunit;
using DSAndA.Recursion;

namespace DSAndA.Test.Recursion
{
    public class MergeSortTestFixture
    {
        [Fact]
        public void MergeStepTest() {
            int[] numbers = new int[] { 2, 5, 8, 23, 7, 9, 12, 16 };

            new MergeSorter().Merge(array: numbers, start: 0, middle: 3, end: 7);

            Assert.Equal(
                expected: new int[] { 2, 5, 7, 8, 9, 12, 16, 23 },
                actual: numbers);
        }

        [Fact]
        public void MergeStepStartingFromTheMiddleTest() {
            int[] numbers = new int[] { 1, 4, 6, 9 };

            new MergeSorter().Merge(array: numbers, start: 2, middle: 2, end: 3);

            Assert.Equal(
                expected: new int[] { 1, 4, 6, 9 },
                actual: numbers);
        }

        [Fact]
        public void MergeSortTest() {
            int[] numbers = new int[] { 8, 7, 2 };

            new MergeSorter().Sort(numbers);

            Assert.Equal(
                expected: new int[] { 2, 7, 8 },
                actual: numbers);
        }

        [Fact]
        public void MergeSortLargerArrayTest() {
            int[] numbers = new int[] { 4, 1, 6, 9 };

            new MergeSorter().Sort(numbers);

            Assert.Equal(
                expected: new int[] { 1, 4, 6, 9 },
                actual: numbers);
        }

        [Fact]
        public void MergeSortEvenLargerArrayTest() {
            int[] numbers = new int[] { 23, 5, 2, 8, 12, 7, 16, 9 };

            new MergeSorter().Sort(numbers);

            Assert.Equal(
                expected: new int[] { 2, 5, 7, 8, 9, 12, 16, 23 },
                actual: numbers);
        }
    }
}