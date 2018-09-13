using System;
using System.Collections.Generic;

namespace DSAndA.BasicSortingAndSearchAlgorithms.Assignment3
{
    public class AnagramChecker
    {
        public bool IsAnagram(string wordOne, string wordTwo)
        {
            char[] wordOneLetters = wordOne.ToCharArray();
            char[] wordTwoLetters = wordTwo.ToCharArray();

            if (wordOneLetters.Length != wordTwoLetters.Length)
                throw new ApplicationException("Words have different lenghts and cannot be anagrams.");

            Dictionary<char, int> wordOneLettersDict = new Dictionary<char, int>();

            for (int i = 0; i < wordOneLetters.Length; i++)
                wordOneLettersDict[wordOneLetters[i]] = i;

            for (int i = 0; i < wordTwoLetters.Length; i++)
                if (!wordOneLettersDict.ContainsKey(wordTwoLetters[0]))
                    return false;

            return true;
        }
    }
}