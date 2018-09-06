namespace DSAndA.BasicSortingAndSearchAlgorithms.Assignment1
{
    public class InsertionSort
    {
        public Employee[] Sort(Employee[] employees)
        {
            int currentIndex = 0;
            int lastIndex = employees.Length - 1;

            if (employees[currentIndex].Number > employees[lastIndex].Number)
            {
                Employee aux = employees[lastIndex];
                employees[lastIndex] = employees[currentIndex];
                employees[currentIndex] = aux;
            }

            return employees;
        }
    }
}