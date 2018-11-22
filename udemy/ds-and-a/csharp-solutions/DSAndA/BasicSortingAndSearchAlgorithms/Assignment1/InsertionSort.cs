namespace DSAndA.BasicSortingAndSearchAlgorithms.Assignment1
{
    public class InsertionSort
    {
        public Employee[] Sort(Employee[] employees)
        {
            for (int currentIndex = 1; currentIndex < employees.Length; currentIndex++)
            {
                Employee currentEmployee = employees[currentIndex];

                int previousIndex = currentIndex - 1;

                while (previousIndex >= 0 && currentEmployee.Number < employees[previousIndex].Number)
                {
                    employees[previousIndex + 1] = employees[previousIndex];
                    employees[previousIndex--] = currentEmployee;
                }
            }

            return employees;
        }
    }
}