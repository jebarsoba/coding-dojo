using System;
using System.Collections.Generic;

namespace DSAndA.BasicSortingAndSearchAlgorithms.Assignment3
{
    public class AnagramChecker
    {
        /// <summary>
        /// One for loop to populate the dictionary (O(n)), and another for loop to check if the letters from the second word exist in the dictionary (O(n)).
        /// So, the time complexity is O(n).
        /// Another valid approach would be to order both letter arrays and check if the words match (O(n square) if using insertion sort).
        /// </summary>
        /// <param name="wordOne"></param>
        /// <param name="wordTwo"></param>
        /// <returns></returns>
        public bool IsAnagram(string wordOne, string wordTwo)
        {
            char[] wordOneLetters = wordOne.ToCharArray();
            char[] wordTwoLetters = wordTwo.ToCharArray();

            if (wordOneLetters.Length != wordTwoLetters.Length)
                throw new ApplicationException("Words have different lenghts and cannot be anagrams.");

            Dictionary<char, int> wordOneLettersDict = new Dictionary<char, int>();

            for (int i = 0; i < wordOneLetters.Length; i++)
                if (wordOneLettersDict.ContainsKey(wordOneLetters[i])) ++wordOneLettersDict[wordOneLetters[i]]; else wordOneLettersDict[wordOneLetters[i]] = 1;

            for (int i = 0; i < wordTwoLetters.Length; i++)
                if (wordOneLettersDict.ContainsKey(wordTwoLetters[i]) && wordOneLettersDict[wordTwoLetters[i]] > 0) --wordOneLettersDict[wordTwoLetters[i]]; else return false;

            return true;
        }
    }
}