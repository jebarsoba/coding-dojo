using System;

namespace DSAndA.BasicSortingAndSearchAlgorithms
{
    public class BinarySearch
    {
        private int[] orderedArray;

        public BinarySearch(int[] orderedArray)
        {
            this.orderedArray = orderedArray;
        }

        public int Find(int number)
        {
            int min = 0;
            int max = (this.orderedArray.Length - 1);
            int middle = (max + min) / 2;

            while (min <= max)
            {
                if (this.orderedArray[middle] == number)
                    return middle;
                else
                {
                    min = middle + 1;
                    middle = (max + min) / 2;
                }
            }

            throw new ApplicationException("Number not found.");
        }
    }
}