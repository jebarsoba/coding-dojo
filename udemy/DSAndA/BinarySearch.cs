using System;

namespace DSAndA
{
    public class BinarySearch
    {
        private int[] orderedNumbers;

        public BinarySearch(int[] orderedNumbers)
        {
            this.orderedNumbers = orderedNumbers;
        }

        public int Find(int number)
        {
            int min = 0;
            int max = (this.orderedNumbers.Length - 1);
            int middle = (max + min) / 2;

            while (min <= max)
            {
                if (this.orderedNumbers[middle] == number)
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