using DSAndA.LinkedLists;
using Xunit;

namespace DSAndA.Test.LinkedLists.Assignment1
{
    public class AppendLastNodesToBeginningTestFixture
    {
        [Fact]
        public void AppendLastNodesToBeginningTest1()
        {
            LinkedList<int> linkedList = new LinkedList<int>();
            linkedList.InsertAtHead(3);
            linkedList.InsertAtHead(2);
            linkedList.InsertAtHead(1);

            linkedList.AppendLastNodesToBeginning(n: 1);

            Assert.Equal("3,1,2,", linkedList.ToString());
        }
    }
}