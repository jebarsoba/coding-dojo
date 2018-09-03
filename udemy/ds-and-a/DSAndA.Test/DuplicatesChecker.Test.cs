using Xunit;

namespace DSAndA.Test
{
    public class DuplicatesCheckerTestFixture
    {
        [Fact]
        public void DuplicatesCheckerTest1()
        {
            Assert.True(new DuplicatesChecker().HasDuplicateCharacters("anaconda"));
        }

        [Fact]
        public void DuplicatesCheckerTest2()
        {
            Assert.False(new DuplicatesChecker().HasDuplicateCharacters("great"));
        }
    }
}