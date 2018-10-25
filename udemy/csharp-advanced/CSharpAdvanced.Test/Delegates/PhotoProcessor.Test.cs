using CSharpAdvanced.Delegates;
using Xunit;

namespace CSharpAdvanced.Test.Delegates
{
    public class PhotoProcessorTestFixture
    {
        [Fact]
        public void PhotoProcessorTest1()
        {
            PhotoFilters photoFilters = new PhotoFilters();

            PhotoProcessor.PhotoFilterHandler photoFilterHandler = photoFilters.ApplyBrightness;
            photoFilterHandler += photoFilters.ApplyContrast;
            photoFilterHandler += photoFilters.Resize;
            photoFilterHandler += this.RemoveRedEyeFilter;

            Assert.Equal(expected: "Applying brightness,Applying contrast,Resizing photo,Remove red eye,", actual: new PhotoProcessor().Process(new Photo(), photoFilterHandler));
        }

        private string RemoveRedEyeFilter(Photo photo)
        {
            return "Remove red eye";
        }
    }
}