using Xunit;

namespace DSAndA.Test.LinkedLists
{
    public class DoublyEndedListTestFixture
    {
        [Fact]
        public void InsertAtHeadTest1()
        {
            DoublyEndedList doublyEndedList = new DoublyEndedList();
            doublyEndedList.InsertAtHead(1);

            Assert.Equal(expected: "1,", actual: doublyEndedList.ToString());
        }

        [Fact]
        public void InsertAtTailTest1()
        {
            DoublyEndedList doublyEndedList = new DoublyEndedList();
            doublyEndedList.InsertAtHead(1);
            doublyEndedList.InsertAtHead(5);
            Assert.Equal(expected: "5,1,", actual: doublyEndedList.ToString());

            doublyEndedList.InsertAtTail(6);
            Assert.Equal(expected: "5,1,6,", actual: doublyEndedList.ToString());
        }

        [Fact]
        public void InsertAtTailTest2()
        {
            DoublyEndedList doublyEndedList = new DoublyEndedList();
            doublyEndedList.InsertAtTail(6);

            Assert.Equal(expected: "6,", actual: doublyEndedList.ToString());
        }
    }
}