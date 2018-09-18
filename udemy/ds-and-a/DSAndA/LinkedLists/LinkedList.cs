namespace DSAndA.LinkedLists
{
    public class LinkedList
    {
        private Node head;

        public int Lenght
        {
            get
            {
                int length = 0;

                Node current = this.head;

                while (current != null)
                {
                    ++length;

                    current = current.NextNode;
                }

                return length;
            }
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

        public void InsertAtHead(int data)
        {
            Node nodeToBeInserted = new Node(data) { NextNode = this.head };

            this.head = nodeToBeInserted;
        }

        public void DeleteFromHead()
        {
            this.head = this.head.NextNode;
        }
    }
}