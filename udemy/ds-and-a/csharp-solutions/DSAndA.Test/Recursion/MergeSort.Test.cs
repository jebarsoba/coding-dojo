using Xunit;
using System;
using System.Collections.Generic;
using System.Linq;

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

    public class MergeSorter
    {
        public void Sort(int[] array) {
            this.MergeSort(array: array, start: 0, end: array.Length - 1);
        }

        public void MergeSort(int[] array, int start, int end) {
            if (start < end) {
                int middle = (int) Math.Floor((decimal)((start + end) / 2));
                this.MergeSort(array, start, middle);
                this.MergeSort(array, middle + 1, end);
                this.Merge(array, start, middle, end);
            }
        }

        public void Merge(int[] array, int start, int middle, int end) {
            IList<int> left = array.Where((number, index) => index >= start && index <= middle).ToList();
            IList<int> right = array.Where((number, index) => index > middle && index <= end).ToList();

            int i = 0;
            int j = 0;

            while(!(i == left.Count() && j == right.Count())) {
                if (i == left.Count()) {
                    array[start + i + j] = right[j++];

                    continue;
                }

                if (j == right.Count()) {
                    array[start + i + j] = left[i++];

                    continue;
                }

                if (left[i] <= right[j])
                    array[start + i + j] = left[i++];
                else
                    array[start + i + j] = right[j++];
            }
        }
    }
}