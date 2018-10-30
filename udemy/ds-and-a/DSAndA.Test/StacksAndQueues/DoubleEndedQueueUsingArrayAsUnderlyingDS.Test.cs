using DSAndA.StacksAndQueues;
using Xunit;

namespace DSAndA.Test.StacksAndQueues
{
    public class DoubleEndedQueueUsingArrayAsUnderlyingDSTestFixture
    {
        [Fact]
        public void DoubleEndedQueueUsingArrayAsUnderlyingDSTest1()
        {
            DoubleEndedQueueUsingArrayAsUnderlyingDS arrayDEQueue = new DoubleEndedQueueUsingArrayAsUnderlyingDS(maxsize: 8);
            arrayDEQueue.InsertRight(7);

            Assert.Equal(expected: 7, actual: arrayDEQueue.DeleteLeft());
        }

        [Fact]
        public void DoubleEndedQueueUsingArrayAsUnderlyingDSTest2()
        {
            DoubleEndedQueueUsingArrayAsUnderlyingDS arrayDEQueue = new DoubleEndedQueueUsingArrayAsUnderlyingDS(maxsize: 8);
            arrayDEQueue.InsertRight(7);
            arrayDEQueue.InsertRight(12);

            arrayDEQueue.InsertLeft(14);

            Assert.Equal(expected: 14, actual: arrayDEQueue.DeleteLeft());
        }

        [Fact]
        public void DoubleEndedQueueUsingArrayAsUnderlyingDSTest3()
        {
            DoubleEndedQueueUsingArrayAsUnderlyingDS arrayDEQueue = new DoubleEndedQueueUsingArrayAsUnderlyingDS(maxsize: 8);
            arrayDEQueue.InsertRight(7);
            arrayDEQueue.InsertRight(12);

            arrayDEQueue.InsertLeft(14);

            Assert.Equal(expected: 12, actual: arrayDEQueue.DeleteRight());
        }
    }
}