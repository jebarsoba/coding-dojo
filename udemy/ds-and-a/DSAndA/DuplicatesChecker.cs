namespace DSAndA
{
    public class DuplicatesChecker
    {
        /// <summary>
        /// The time complexity of this algorithm is O(N square).
        /// </summary>
        /// <param name="literal"></param>
        /// <returns></returns>
        public bool HasDuplicateCharacters(string literal)
        {
            char[] characters = literal.ToCharArray();

            for (int i = 0; i < characters.Length; i++)
                for (int j = i + 1; j < characters.Length; j++)
                    if (characters[j] == characters[i])
                        return true;

            return false;
        }
    }
}