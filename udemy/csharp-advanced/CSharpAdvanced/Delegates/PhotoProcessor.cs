using System;

namespace CSharpAdvanced.Delegates
{
    public class PhotoProcessor
    {
        public string Process(Photo photo, Func<Photo, string> photoFilterHandler)
        {
            string result = "";

            foreach (Func<Photo, string> filter in photoFilterHandler.GetInvocationList())
                result += $"{filter(photo)},";

            return result;
        }
    }
}