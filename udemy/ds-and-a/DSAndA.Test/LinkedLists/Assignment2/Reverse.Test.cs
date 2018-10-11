using DSAndA.LinkedLists;
using Xunit;

namespace DSAndA.Test.LinkedLists.Assignment2
{
    public class ReverseTestFixture
    {
        [Fact]
        public void ReverseTest1()
        {
            LinkedList<int> linkedList = new LinkedList<int>();
            linkedList.InsertAtHead(2);
            linkedList.InsertAtHead(1);

            linkedList.Reverse();

            Assert.Equal(expected: "2,1,", actual: linkedList.ToString());
        }
    }
}