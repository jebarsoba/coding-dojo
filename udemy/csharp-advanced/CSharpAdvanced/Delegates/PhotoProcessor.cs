namespace CSharpAdvanced.Delegates
{
    public class PhotoProcessor
    {
        public delegate string PhotoFilterHandler(Photo photo);

        public string Process(Photo photo, PhotoFilterHandler photoFilterHandler)
        {
            string result = "";

            foreach (PhotoFilterHandler filter in photoFilterHandler.GetInvocationList())
                result += $"{filter(photo)},";

            return result;
        }
    }
}