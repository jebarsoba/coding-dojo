using Xunit;
using LeetCodeSolutions;

namespace LeetCodeSolutions.Test
{
    public class Solution_TwoSum_Test
    {
        private readonly Solution_TwoSum _solution_TwoSum;

        public Solution_TwoSum_Test()
        {
            this._solution_TwoSum = new Solution_TwoSum();
        }

        [Fact]
        public void TwoSumTest()
        {
            int[] nums = new int[] { 2, 7, 11, 15 };
            int target = 9;

            int[] expected = new int[] { 0, 1 };
            int[] actual = this._solution_TwoSum.TwoSum(nums, target);

            Assert.Equal(expected, actual);
        }
    }
}