using DSAndA.SortingAnyTypeOfObject;
using Xunit;

namespace DSAndA.Test.SortingAnyTypeOfObject
{
    public class CircleTestFixture
    {
        [Fact]
        public void GreaterThanTest()
        {
            Assert.True(new Circle(1.0) > new Circle(0.5));
        }
    }
}