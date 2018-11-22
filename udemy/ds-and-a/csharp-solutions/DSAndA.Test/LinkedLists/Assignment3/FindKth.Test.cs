using DSAndA.LinkedLists;
using Xunit;

namespace DSAndA.Test.LinkedLists.Assignment3
{
    public class FindKthTestFixture
    {
        [Fact]
        public void FindKthTest1()
        {
            LinkedList<int> linkedList = new LinkedList<int>();
            linkedList.InsertAtHead(4);
            linkedList.InsertAtHead(3);
            linkedList.InsertAtHead(2);
            linkedList.InsertAtHead(1);

            Assert.Equal(expected: "4", actual: linkedList.FindKth(k: 1).ToString());
        }

        [Fact]
        public void FindKthTest2()
        {
            LinkedList<int> linkedList = new LinkedList<int>();
            linkedList.InsertAtHead(4);
            linkedList.InsertAtHead(3);
            linkedList.InsertAtHead(2);
            linkedList.InsertAtHead(1);

            Assert.Equal(expected: "1", actual: linkedList.FindKth(k: 4).ToString());
        }
    }
}