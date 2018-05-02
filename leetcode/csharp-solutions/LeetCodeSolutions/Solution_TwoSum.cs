using System;
using System.Collections.Generic;

namespace LeetCodeSolutions
{
    public class Solution_TwoSum
    {
        public int[] TwoSum(int[] nums, int target)
        {
            Dictionary<int, int> dictionary = new Dictionary<int, int>();

            for (int i = 0; i < nums.Length; i++)
                dictionary.Add(nums[i], i);

            for (int i = 0; i < nums.Length; i++)
            {
                int complement = target - nums[i];

                if (dictionary.ContainsKey(complement))
                    return new int[] { i, dictionary[complement] };
            }

            throw new ApplicationException("No Two Sum solution.");
        }
    }
}