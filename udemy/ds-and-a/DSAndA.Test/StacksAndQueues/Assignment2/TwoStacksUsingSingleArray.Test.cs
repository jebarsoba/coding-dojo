using DSAndA.StacksAndQueues.Assignment2;
using Xunit;

namespace DSAndA.Test.StacksAndQueues.Assignment2
{
    public class TwoStacksUsingSingleArrayTestFixture
    {
        [Fact]
        public void TwoStacksUsingSingleArrayTest1()
        {
            TwoStacksUsingSingleArray twoStacks = new TwoStacksUsingSingleArray(maxSize1: 50, maxSize2: 50);
            twoStacks.Push1(1);

            Assert.Equal(expected: 1, actual: twoStacks.Pop1());
        }

        [Fact]
        public void TwoStacksUsingSingleArrayTest2()
        {
            TwoStacksUsingSingleArray twoStacks = new TwoStacksUsingSingleArray(maxSize1: 50, maxSize2: 50);
            twoStacks.Push1(1);
            twoStacks.Push2(1);

            Assert.Equal(expected: 1, actual: twoStacks.Pop1());
            Assert.Equal(expected: 1, actual: twoStacks.Pop2());
        }

        [Fact]
        public void TwoStacksUsingSingleArrayTest3()
        {
            TwoStacksUsingSingleArray twoStacks = new TwoStacksUsingSingleArray(maxSize1: 2, maxSize2: 2);
            twoStacks.Push1(1);
            twoStacks.Push1(2);
            twoStacks.Push2(1);
            twoStacks.Push2(2);

            Assert.Throws(System.Type.GetType("System.ApplicationException"), () => twoStacks.Push1(3));
        }
    }
}