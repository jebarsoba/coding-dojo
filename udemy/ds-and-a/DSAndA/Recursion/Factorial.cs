namespace DSAndA.Recursion
{
    public class Factorial
    {
        public int Calculate(int number)
        {
            return number * (number > 1 ? this.Calculate(number - 1) : 1);
        }

        public int CalculateImplementingTailRecursion(int number)
        {
            return this.CalculateImplementingTailRecursion(number: number, result: 1);
        }

        private int CalculateImplementingTailRecursion(int number, int result)
        {
            return number != 0 ? this.CalculateImplementingTailRecursion(number: number - 1, result: result * number) : result;
        }
    }
}