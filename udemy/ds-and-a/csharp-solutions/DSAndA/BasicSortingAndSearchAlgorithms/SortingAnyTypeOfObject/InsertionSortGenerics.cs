using System;

namespace DSAndA.BasicSortingAndSearchAlgorithms.SortingAnyTypeOfObject
{
    public class InsertionSortGenerics<T> where T : IComparable<T>
    {
        public T[] Sort(T[] array)
        {
            for (int i = 0; i < array.Length - 1; i++)
            {
                int currentPosition = i;

                for (int j = currentPosition; j >= 0; j--)
                    if (array[j + 1].CompareTo(array[j]) < 0)
                    {
                        T aux = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = aux;
                    }
            }

            return array;
        }
    }
}