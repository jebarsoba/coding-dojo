using DSAndA.LinkedLists;
using Xunit;

namespace DSAndA.Test.LinkedLists
{
    public class DoublyLinkedListTestFixture
    {
        [Fact]
        public void InsertAtHeadTest1()
        {
            DoublyLinkedList<int> doublyLinkedList = new DoublyLinkedList<int>();
            doublyLinkedList.InsertAtHead(3);

            Assert.Equal(expected: "3,", actual: doublyLinkedList.ToString());
        }

        [Fact]
        public void InsertAtHeadTest2()
        {
            DoublyLinkedList<int> doublyLinkedList = new DoublyLinkedList<int>();
            doublyLinkedList.InsertAtHead(3);
            doublyLinkedList.InsertAtHead(9);

            Assert.Equal(expected: "9,3,", actual: doublyLinkedList.ToString());
        }
    }
}