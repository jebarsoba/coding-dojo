namespace DSAndA
{
    public class InsertionSort
    {
        public int[] Sort(int[] numbers)
        {
            for (int i = 0; i < numbers.Length - 1; i++)
            {
                int currentPosition = i;

                for (int j = currentPosition; j >= 0; j--)
                    if (numbers[j + 1] < numbers[j])
                    {
                        int aux = numbers[j];
                        numbers[j] = numbers[j + 1];
                        numbers[j + 1] = aux;
                    }
            }

            return numbers;
        }
    }
}