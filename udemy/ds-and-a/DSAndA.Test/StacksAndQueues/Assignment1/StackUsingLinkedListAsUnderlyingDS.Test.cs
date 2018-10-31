using DSAndA.StacksAndQueues;
using Xunit;

namespace DSAndA.Test.StacksAndQueues.Assignment1
{
    public class StackUsingLinkedListAsUnderlyingDSTestFixture
    {
        [Fact]
        public void StackUsingLinkedListAsUnderlyingDSTest1()
        {
            StackUsingLinkedListAsUnderlyingDS linkedListStack = new StackUsingLinkedListAsUnderlyingDS();
            linkedListStack.Push(5);

            Assert.Equal(expected: 5, actual: linkedListStack.Peek());
        }

        [Fact]
        public void StackUsingLinkedListAsUnderlyingDSTest2()
        {
            StackUsingLinkedListAsUnderlyingDS linkedListStack = new StackUsingLinkedListAsUnderlyingDS();
            linkedListStack.Push(5);
            linkedListStack.Push(12);

            Assert.Equal(expected: 12, actual: linkedListStack.Peek());
        }

        [Fact]
        public void StackUsingLinkedListAsUnderlyingDSTest3()
        {
            StackUsingLinkedListAsUnderlyingDS linkedListStack = new StackUsingLinkedListAsUnderlyingDS();
            linkedListStack.Push(5);
            linkedListStack.Push(12);
            linkedListStack.Push(7);
            linkedListStack.Push(2);

            Assert.Equal(expected: 2, actual: linkedListStack.Pop());
            Assert.Equal(expected: 7, actual: linkedListStack.Pop());
            Assert.Equal(expected: 12, actual: linkedListStack.Peek());
        }
    }
}