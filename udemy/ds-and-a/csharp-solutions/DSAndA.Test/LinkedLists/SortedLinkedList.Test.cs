using DSAndA.LinkedLists;
using Xunit;

namespace DSAndA.Test.LinkedLists
{
    public class SortedLinkedListTestFixture
    {
        [Fact]
        public void InsertInSortedListTest1()
        {
            SortedLinkedList<int> sortedLinkedList = new SortedLinkedList<int>();
            sortedLinkedList.Insert(27);

            Assert.Equal(expected: "27,", actual: sortedLinkedList.ToString());
        }

        [Fact]
        public void InsertInSortedListTest2()
        {
            SortedLinkedList<int> sortedLinkedList = new SortedLinkedList<int>();
            sortedLinkedList.Insert(27);
            sortedLinkedList.Insert(21);

            Assert.Equal(expected: "21,27,", actual: sortedLinkedList.ToString());
        }

        [Fact]
        public void InsertInSortedListTest3()
        {
            SortedLinkedList<int> sortedLinkedList = new SortedLinkedList<int>();
            sortedLinkedList.Insert(21);
            sortedLinkedList.Insert(27);

            Assert.Equal(expected: "21,27,", actual: sortedLinkedList.ToString());
        }

        [Fact]
        public void InsertInSortedListTest4()
        {
            SortedLinkedList<int> sortedLinkedList = new SortedLinkedList<int>();
            sortedLinkedList.Insert(5);
            sortedLinkedList.Insert(7);
            sortedLinkedList.Insert(10);
            sortedLinkedList.Insert(15);
            sortedLinkedList.Insert(16);
            sortedLinkedList.Insert(19);
            sortedLinkedList.Insert(17);

            Assert.Equal(expected: "5,7,10,15,16,17,19,", actual: sortedLinkedList.ToString());
        }
    }
}