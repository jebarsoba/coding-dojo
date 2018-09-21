using Xunit;

namespace CSharpAdvanced.Test
{
    public class NullableTestFixture
    {
        [Fact]
        public void NullableTest1()
        {
            Nullable<int> number = new Nullable<int>(5);
        }
    }
}