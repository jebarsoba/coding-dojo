namespace CSharpAdvanced.Delegates
{
    public class PhotoFilters
    {
        public string ApplyBrightness(Photo photo)
        {
            return "Applying brightness";
        }

        public string ApplyContrast(Photo photo)
        {
            return "Applying contrast";
        }

        public string Resize(Photo photo)
        {
            return "Resizing photo";
        }
    }
}