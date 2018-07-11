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

            if (this.orderedNumbers[middle] == number)
                return middle;
            else
                //Actually, I should keep looking for...
                return middle + 1;
        }
    }
}