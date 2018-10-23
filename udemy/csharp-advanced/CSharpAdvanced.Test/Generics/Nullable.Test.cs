using CSharpAdvanced.Generics;
using Xunit;

namespace CSharpAdvanced.Test.Generics
{
    public class NullableTestFixture
    {
        [Fact]
        public void NullableTest1()
        {
            Nullable<int> number = new Nullable<int>(5);

            Assert.True(number.HasValue);
            Assert.Equal(expected: 5, actual: number.GetValueOrDefault());
        }

        [Fact]
        public void NullableTest2()
        {
            Nullable<int> number = new Nullable<int>();

            Assert.False(number.HasValue);
            Assert.Equal(expected: 0, actual: number.GetValueOrDefault());
        }
    }
}