using DSAndA.LinkedLists;
using Xunit;

namespace DSAndA.Test.LinkedLists.Assignment5
{
    public class DeleteFromMiddleTestFixture
    {
        [Fact]
        public void DeleteFromMiddleTest1()
        {
            LinkedList<string> linkedList = new LinkedList<string>();
            linkedList.InsertAtHead("z");
            linkedList.InsertAtHead("y");
            linkedList.InsertAtHead("x");
            linkedList.InsertAtHead("w");
            linkedList.InsertAtHead("v");
            linkedList.InsertAtHead("u");

            linkedList.DeleteFromMiddle(linkedList.Search("v"));

            Assert.Equal(expected: "u,w,x,y,z,", actual: linkedList.ToString());
        }
    }
}