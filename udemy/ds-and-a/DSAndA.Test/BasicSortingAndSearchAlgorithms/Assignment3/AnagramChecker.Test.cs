using DSAndA.BasicSortingAndSearchAlgorithms.Assignment3;
using Xunit;

namespace DSAndA.Test.BasicSortingAndSearchAlgorithms.Assignment3
{
    public class AnagramCheckerTestFixture
    {
        [Fact]
        public void AnagramCheckerTest1()
        {
            Assert.True(new AnagramChecker().IsAnagram("letras", "lastre"));
        }

        [Fact]
        public void AnagramCheckerTest2()
        {
            Assert.False(new AnagramChecker().IsAnagram("letras", "llllll"));
        }
    }
}