using DSAndA.LinkedLists;
using Xunit;

namespace DSAndA.Test.LinkedLists.Assignment6
{
    public class IsCircularTestFixture
    {
        [Fact]
        public void IsCircularTest1()
        {
            LinkedList<int> linkedList = new LinkedList<int>();
            linkedList.InsertAtHead(3);
            linkedList.InsertAtHead(2);
            linkedList.InsertAtHead(1);

            Node<int> head = linkedList.Search(1);
            Node<int> last = linkedList.Search(3);
            last.NextNode = head;

            Assert.True(linkedList.IsCircular());
        }

        [Fact]
        public void IsCircularTest2()
        {
            LinkedList<int> linkedList = new LinkedList<int>();
            linkedList.InsertAtHead(3);
            linkedList.InsertAtHead(2);
            linkedList.InsertAtHead(1);

            Assert.False(linkedList.IsCircular());
        }
    }
}