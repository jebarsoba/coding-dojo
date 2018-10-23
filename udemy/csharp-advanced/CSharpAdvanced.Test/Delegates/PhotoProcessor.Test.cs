using CSharpAdvanced.Delegates;
using Xunit;

namespace CSharpAdvanced.Test.Delegates
{
    public class PhotoProcessorTestFixture
    {
        [Fact]
        public void PhotoProcessorTest1()
        {
            Assert.Equal(expected: "Applying brightness,Applying contrast,Resizing photo,", actual: new PhotoProcessor().Process(new Photo()));
        }
    }
}