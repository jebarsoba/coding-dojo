using DSAndA.StacksAndQueues;
using Xunit;

namespace DSAndA.Test.StacksAndQueues
{
    public class StackWithArrayAsUnderlyingDSTestFixture
    {
        [Fact]
        public void StackUsingArrayAsUnderlyingDSTest1()
        {
            StackUsingArrayAsUnderlyingDS arrayStack = new StackUsingArrayAsUnderlyingDS(maxSize: 9);
            arrayStack.Push(5);

            Assert.Equal(expected: 5, actual: arrayStack.Peek());
        }

        [Fact]
        public void StackUsingArrayAsUnderlyingDSTest2()
        {
            StackUsingArrayAsUnderlyingDS arrayStack = new StackUsingArrayAsUnderlyingDS(maxSize: 9);
            arrayStack.Push(5);
            arrayStack.Push(12);
            arrayStack.Push(7);
            arrayStack.Push(2);

            Assert.Equal(expected: 2, actual: arrayStack.Pop());
            Assert.Equal(expected: 7, actual: arrayStack.Pop());
        }
    }
}