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

        [Fact]
        public void InsertionSortTest1()
        {
            DoublyLinkedList<int> doublyLinkedList = new DoublyLinkedList<int>();
            doublyLinkedList.InsertAtHead(2);
            doublyLinkedList.InsertAtHead(10);

            doublyLinkedList.Sort();

            Assert.Equal(expected: "2,10,", actual: doublyLinkedList.ToString());
        }

        [Fact]
        public void InsertionSortTest2()
        {
            DoublyLinkedList<int> doublyLinkedList = new DoublyLinkedList<int>();
            doublyLinkedList.InsertAtHead(8);
            doublyLinkedList.InsertAtHead(2);
            doublyLinkedList.InsertAtHead(10);

            doublyLinkedList.Sort();

            Assert.Equal(expected: "2,8,10,", actual: doublyLinkedList.ToString());
        }

        /*[Fact]
        public void InsertionSortTest3()
        {
            DoublyLinkedList<int> doublyLinkedList = new DoublyLinkedList<int>();
            doublyLinkedList.InsertAtHead(6);
            doublyLinkedList.InsertAtHead(8);
            doublyLinkedList.InsertAtHead(2);
            doublyLinkedList.InsertAtHead(10);

            doublyLinkedList.Sort();

            Assert.Equal(expected: "2,6,8,10,", actual: doublyLinkedList.ToString());
        }*/
    }
}