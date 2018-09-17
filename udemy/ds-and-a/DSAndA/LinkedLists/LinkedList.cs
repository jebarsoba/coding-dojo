namespace DSAndA.LinkedLists
{
    public class LinkedList
    {
        public Node Head { get; set; }

        public void InsertAtHead(int data)
        {
            Node nodeToBeInserted = new Node(data) { NextNode = this.Head };

            this.Head = nodeToBeInserted;
        }
    }
}