using DSAndA.Recursion;
using Xunit;

namespace DSAndA.Test.Recursion
{
    public class TowerOfHanoiTestFixture
    {
        [Fact]
        public void TowerOfHanoiTest1()
        {
            TowerOfHanoi towerOfHanoi = new TowerOfHanoi();
            towerOfHanoi.Push(disc: 2);
            towerOfHanoi.Push(disc: 1);

            Assert.Equal(expected: "A ; B ; C 1, 2,", actual: towerOfHanoi.Solve());
        }
    }
}