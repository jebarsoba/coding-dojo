using System;

namespace CSharpAdvanced
{
    public class Utilities<T> where T : IComparable
    {
        public T Max(T number1, T number2)
        {
            return number1.CompareTo(number2) > 0 ? number1 : number2;
        }
    }
}