namespace DSAndA
{
    public class GCDFinder
    {
        public int FindGCD(int m, int n)
        {
            return n == 0 ? m : FindGCD(n, m % n);
        }
    }
}