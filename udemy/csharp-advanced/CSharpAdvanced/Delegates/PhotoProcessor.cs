namespace CSharpAdvanced.Delegates
{
    public class PhotoProcessor
    {
        public string Process(Photo photo)
        {
            string result = "";

            PhotoFilters filters = new PhotoFilters();
            result += $"{filters.ApplyBrightness(photo)},";
            result += $"{filters.ApplyContrast(photo)},";
            result += $"{filters.Resize(photo)},";

            return result;
        }
    }
}