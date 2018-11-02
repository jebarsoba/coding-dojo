using DSAndA.StacksAndQueues.Assignment3;
using Xunit;

namespace DSAndA.Test.StacksAndQueues.Assignment3
{
    public class QueueUsingLinkedListAsUnderlyingDSTestFixture
    {
        [Fact]
        public void QueueUsingLinkedListAsUnderlyingDSTest1()
        {
            QueueUsingLinkedListAsUnderlyingDS linkedListQueue = new QueueUsingLinkedListAsUnderlyingDS();
            linkedListQueue.Push(1);

            Assert.Equal(expected: 1, actual: linkedListQueue.Peek());
        }

        [Fact]
        public void QueueUsingLinkedListAsUnderlyingDSTest2()
        {
            QueueUsingLinkedListAsUnderlyingDS linkedListQueue = new QueueUsingLinkedListAsUnderlyingDS();
            linkedListQueue.Push(1);
            linkedListQueue.Push(2);

            Assert.Equal(expected: 1, actual: linkedListQueue.Pop());
        }
    }
}