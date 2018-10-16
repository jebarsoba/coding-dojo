using DSAndA.LinkedLists;
using Xunit;

namespace DSAndA.Test.LinkedLists.Assignment4
{
    public class RemoveDuplicates
    {
        [Fact]
        public void RemoveDuplicatesTest1()
        {
            LinkedList<int> linkedList = new LinkedList<int>();
            linkedList.InsertAtHead(1);
            linkedList.InsertAtHead(1);

            linkedList.RemoveDuplicates();

            Assert.Equal(expected: "1,", actual: linkedList.ToString());
        }

        [Fact]
        public void RemoveDuplicatesTest2()
        {
            LinkedList<int> linkedList = new LinkedList<int>();
            linkedList.InsertAtHead(1);
            linkedList.InsertAtHead(4);
            linkedList.InsertAtHead(3);
            linkedList.InsertAtHead(1);
            linkedList.InsertAtHead(3);
            linkedList.InsertAtHead(1);

            linkedList.RemoveDuplicates();

            Assert.Equal(expected: "1,3,4,", actual: linkedList.ToString());
        }
    }
}