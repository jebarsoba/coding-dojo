namespace DSAndA.LinkedLists
{
    public class LinkedList
    {
        private Node head;

        public void InsertAtHead(int data)
        {
            Node nodeToBeInserted = new Node(data) { NextNode = this.head };

            this.head = nodeToBeInserted;
        }

        public override string ToString()
        {
            string nodes = string.Empty;

            Node current = this.head;

            while (current != null)
            {
                nodes += $"{current.ToString()},";

                current = current.NextNode;
            }

            return nodes;
        }
    }
}