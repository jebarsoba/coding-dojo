using Xunit;
using System.Collections.Generic;
using System.Linq;

namespace DSAndA.Test.Recursion
{
    public class MergeSortTestFixture
    {
        [Fact]
        public void MergeStepTest() {
            Assert.Equal(
                expected: new int[] { 2, 5, 7, 8, 9, 12, 16, 23 },
                actual: new MergeSort().Merge(array: new int[] { 2, 5, 8, 23, 7, 9, 12, 16 }, start: 0, middle: 3, end: 7));
        }
    }

    public class MergeSort
    {
        public int[] Merge(int[] array, int start, int middle, int end) {
            int[] result = new int[array.Length];
            IList<int> array1 = array.Where((number, index) => index >= start && index <= middle).ToList();
            IList<int> array2 = array.Where((number, index) => index > middle && index <= end).ToList();

            int currentIndex1 = 0;
            int currentIndex2 = 0;

            while(!(currentIndex1 == array1.Count() && currentIndex2 == array2.Count())) {
                if (currentIndex1 == array1.Count()) {
                    result[currentIndex1 + currentIndex2] = array2[currentIndex2++];

                    continue;
                }

                if (currentIndex2 == array2.Count()) {
                    result[currentIndex1 + currentIndex2] = array1[currentIndex1++];

                    continue;
                }

                if (array1[currentIndex1] <= array2[currentIndex2])
                    result[currentIndex1 + currentIndex2] = array1[currentIndex1++];
                else
                    result[currentIndex1 + currentIndex2] = array2[currentIndex2++];
            }

            return result;
        }
    }
}