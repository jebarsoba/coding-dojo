using DSAndA.LinkedLists;
using Xunit;

namespace DSAndA.Test.LinkedLists
{
    public class LinkedListTestFixture
    {
        [Fact]
        public void InsertAtHeadTest1()
        {
            LinkedList linkedList = new LinkedList();

            linkedList.InsertAtHead(1);
            Assert.Equal(expected: "1,", actual: linkedList.ToString());

            linkedList.InsertAtHead(5);
            Assert.Equal(expected: "5,1,", actual: linkedList.ToString());
        }

        [Fact]
        public void LenghtTest1()
        {
            LinkedList linkedList = new LinkedList();
            linkedList.InsertAtHead(1);
            linkedList.InsertAtHead(5);

            Assert.Equal(expected: 2, actual: linkedList.Lenght);
        }

        [Fact]
        public void DeleteFromHeadTest1()
        {
            LinkedList linkedList = new LinkedList();
            linkedList.InsertAtHead(1);
            linkedList.InsertAtHead(5);
            Assert.Equal(expected: "5,1,", actual: linkedList.ToString());

            linkedList.DeleteFromHead();
            Assert.Equal(expected: "1,", actual: linkedList.ToString());
        }
    }
}