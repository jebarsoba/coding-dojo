using System;
using System.Collections.Generic;
using System.Linq;

namespace DSAndA.Recursion
{
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