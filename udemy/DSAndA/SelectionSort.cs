namespace DSAndA
{
    public class SelectionSort
    {
        public int[] Sort(int[] numbers)
        {
            int currentPosition = 0;

            if (numbers[currentPosition + 1] < numbers[currentPosition])
            {
                int smallestElementPosition = currentPosition + 1;

                int aux = numbers[currentPosition];
                numbers[currentPosition] = numbers[smallestElementPosition];
                numbers[smallestElementPosition] = aux;
            }

            return numbers;
        }
    }
}