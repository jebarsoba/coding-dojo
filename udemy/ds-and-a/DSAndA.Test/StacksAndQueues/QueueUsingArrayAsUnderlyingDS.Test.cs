using DSAndA.StacksAndQueues;
using Xunit;

namespace DSAndA.Test.StacksAndQueues
{
    public class QueueUsingArrayAsUnderlyingDSTestFixture
    {
        [Fact]
        public void QueueUsingArrayAsUnderlyingDSTest1()
        {
            QueueUsingArrayAsUnderlyingDS arrayQueue = new QueueUsingArrayAsUnderlyingDS(maxSize: 8);
            arrayQueue.Enqueue(8);

            Assert.Equal(expected: 8, actual: arrayQueue.Peek());
        }

        [Fact]
        public void QueueUsingArrayAsUnderlyingDSTest2()
        {
            QueueUsingArrayAsUnderlyingDS arrayQueue = new QueueUsingArrayAsUnderlyingDS(maxSize: 8);
            arrayQueue.Enqueue(8);
            arrayQueue.Enqueue(12);

            Assert.Equal(expected: 8, actual: arrayQueue.Dequeue());
        }

        [Fact]
        public void QueueUsingArrayAsUnderlyingDSTest3()
        {
            QueueUsingArrayAsUnderlyingDS arrayQueue = new QueueUsingArrayAsUnderlyingDS(maxSize: 8);
            arrayQueue.Enqueue(8);
            arrayQueue.Enqueue(12);
            arrayQueue.Enqueue(17);
            arrayQueue.Enqueue(73);
            arrayQueue.Enqueue(19);
            arrayQueue.Enqueue(12);
            arrayQueue.Enqueue(3);
            arrayQueue.Enqueue(98);

            arrayQueue.Dequeue(); //8
            arrayQueue.Dequeue(); //12
            arrayQueue.Dequeue(); //17

            arrayQueue.Enqueue(8);

            Assert.Equal(expected: 73, actual: arrayQueue.Peek());
        }
    }
}