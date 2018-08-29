namespace DSAndA
{
    public class BubbleSort
    {
        public int[] Sort(int[] numbers)
        {
            for (int i = 0; i < numbers.Length - 1; i++)
                for (int j = 0; j < numbers.Length - 1 - i; j++)
                    if (numbers[j] > numbers[j + 1])
                    {
                        int aux = numbers[j];
                        numbers[j] = numbers[j + 1];
                        numbers[j + 1] = aux;
                    }

            return numbers;
        }
    }
}