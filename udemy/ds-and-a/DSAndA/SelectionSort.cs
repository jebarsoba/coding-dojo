namespace DSAndA
{
    public class SelectionSort
    {
        public int[] Sort(int[] numbers)
        {
            for (int i = 0; i < numbers.Length - 1; i++)
            {
                int currentPosition = i;
                int smallestElementPosition = currentPosition;

                for (int j = currentPosition; j < numbers.Length - 1; j++)
                    if (numbers[j + 1] < numbers[j])
                        smallestElementPosition = j + 1;

                int aux = numbers[currentPosition];
                numbers[currentPosition] = numbers[smallestElementPosition];
                numbers[smallestElementPosition] = aux;
            }

            return numbers;
        }
    }
}