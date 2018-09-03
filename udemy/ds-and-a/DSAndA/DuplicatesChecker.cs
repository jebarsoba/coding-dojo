using System.Collections.Generic;

namespace DSAndA
{
    public class DuplicatesChecker
    {
        /// <summary>
        /// The time complexity of this algorithm is O(N).
        /// </summary>
        /// <param name="literal"></param>
        /// <returns></returns>
        public bool HasDuplicateCharacters(string literal)
        {
            Dictionary<char, int> dict = new Dictionary<char, int>();

            char[] characters = literal.ToCharArray();

            for (int i = 0; i < characters.Length; i++)
                if (dict.ContainsKey(characters[i]))
                    return true;
                else
                    dict[characters[i]] = i;

            return false;
        }
    }
}