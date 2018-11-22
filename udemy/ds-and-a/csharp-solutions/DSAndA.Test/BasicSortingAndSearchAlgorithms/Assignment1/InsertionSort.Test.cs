using DSAndA.BasicSortingAndSearchAlgorithms.Assignment1;
using Xunit;

namespace DSAndA.Test.BasicSortingAndSearchAlgorithms.Assignment1
{
    public class InsertionSortTestFixture
    {
        [Fact]
        public void InsertionSortTest1()
        {
            Assert.Equal(
                expected: new Employee[] {
                    new Employee(number: 1, firstName: "John", lastName: "Doe", email: "john.doe@company.com"),
                    new Employee(number: 2, firstName: "Yolotl", lastName: "Nanabah", email: "yolotl.nanabah@company.com")
                },
                actual: new DSAndA.BasicSortingAndSearchAlgorithms.Assignment1.InsertionSort().Sort(
                            new Employee[] {
                                new Employee(number: 2, firstName: "Yolotl", lastName: "Nanabah", email: "yolotl.nanabah@company.com"),
                                new Employee(number: 1, firstName: "John", lastName: "Doe", email: "john.doe@company.com")
                })
            );
        }

        [Fact]
        public void InsertionSortTest2()
        {
            Assert.Equal(
                expected: new Employee[] {
                    new Employee(number: 1, firstName: "John", lastName: "Doe", email: "john.doe@company.com"),
                    new Employee(number: 2, firstName: "Yolotl", lastName: "Nanabah", email: "yolotl.nanabah@company.com"),
                    new Employee(number: 3, firstName: "Millaray", lastName: "Naiche", email: "millaray.naiche@company.com"),
                    new Employee(number: 4, firstName: "Ailen", lastName: "Qillaq", email: "ailen.qillaq@company.com")
                },
                actual: new DSAndA.BasicSortingAndSearchAlgorithms.Assignment1.InsertionSort().Sort(
                            new Employee[] {
                                new Employee(number: 4, firstName: "Ailen", lastName: "Qillaq", email: "ailen.qillaq@company.com"),
                                new Employee(number: 3, firstName: "Millaray", lastName: "Naiche", email: "millaray.naiche@company.com"),
                                new Employee(number: 2, firstName: "Yolotl", lastName: "Nanabah", email: "yolotl.nanabah@company.com"),
                                new Employee(number: 1, firstName: "John", lastName: "Doe", email: "john.doe@company.com")
                })
            );
        }
    }
}