using CSharpAdvanced.Generics;
using Xunit;

namespace CSharpAdvanced.Test.Generics
{
    public class UtilitiesTestFixture
    {
        [Fact]
        public void UtilitiesTest_Max()
        {
            Assert.Equal(expected: 5, actual: new Utilities<int>().Max(number1: 3, number2: 5));
        }
    }
}