namespace DSAndA.BasicSortingAndSearchAlgorithms.Assignment1
{
    public class Employee
    {
        private int number;
        private string firstName;
        private string lastName;
        private string email;

        public int Number { get { return this.number; } }

        public Employee(int number, string firstName, string lastName, string email)
        {
            this.number = number;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
        }

        public override bool Equals(object obj)
        {
            if (obj == null || GetType() != obj.GetType())
                return false;

            Employee emp = obj as Employee;

            return this.number.Equals(emp.Number);
        }

        public override int GetHashCode()
        {
            return 769468832 + number.GetHashCode();
        }
    }
}