using DSAndA.BasicSortingAndSearchAlgorithms.SortingAnyTypeOfObject;
using Xunit;

namespace DSAndA.Test.BasicSortingAndSearchAlgorithms.SortingAnyTypeOfObject
{
    public class InsertionSortGenericsTestFixture
    {
        [Fact]
        public void InsertionSortGenerics_Int()
        {
            Assert.Equal(expected: new int[] { 2, 5 }, actual: new InsertionSortGenerics<int>().Sort(new int[] { 5, 2 }));
        }

        [Fact]
        public void InsertionSortGenerics_Circle()
        {
            Assert.Equal(expected: new Circle[] { new Circle(0.5), new Circle(1.0) }, actual: new InsertionSortGenerics<Circle>().Sort(new Circle[] { new Circle(1.0), new Circle(0.5) }));
        }
    }
}