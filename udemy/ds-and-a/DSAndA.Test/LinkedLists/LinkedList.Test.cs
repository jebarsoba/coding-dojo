using DSAndA.BasicSortingAndSearchAlgorithms.SortingAnyTypeOfObject;
using DSAndA.LinkedLists;
using Xunit;

namespace DSAndA.Test.LinkedLists
{
    public class LinkedListTestFixture
    {
        [Fact]
        public void InsertAtHeadTest1()
        {
            LinkedList<int> linkedList = new LinkedList<int>();

            linkedList.InsertAtHead(1);
            Assert.Equal(expected: "1,", actual: linkedList.ToString());

            linkedList.InsertAtHead(5);
            Assert.Equal(expected: "5,1,", actual: linkedList.ToString());
        }

        [Fact]
        public void LenghtTest1()
        {
            LinkedList<int> linkedList = new LinkedList<int>();
            linkedList.InsertAtHead(1);
            linkedList.InsertAtHead(5);

            Assert.Equal(expected: 2, actual: linkedList.Lenght);
        }

        [Fact]
        public void DeleteFromHeadTest1()
        {
            LinkedList<int> linkedList = new LinkedList<int>();
            linkedList.InsertAtHead(1);
            linkedList.InsertAtHead(5);
            Assert.Equal(expected: "5,1,", actual: linkedList.ToString());

            linkedList.DeleteFromHead();
            Assert.Equal(expected: "1,", actual: linkedList.ToString());
        }

        [Fact]
        public void SearchTest1()
        {
            LinkedList<int> linkedList = new LinkedList<int>();
            linkedList.InsertAtHead(1);
            linkedList.InsertAtHead(5);

            Assert.Equal(expected: "1", actual: linkedList.Search(1).ToString());
        }

        [Fact]
        public void SearchTest_Circle()
        {
            LinkedList<Circle> linkedList = new LinkedList<Circle>();
            linkedList.InsertAtHead(new Circle(0.5));
            linkedList.InsertAtHead(new Circle(1.0));

            Assert.Equal(expected: "1.0", actual: linkedList.Search(new Circle(1.0)).ToString());
        }
    }
}