using DSAndA.LinkedLists;

namespace DSAndA
{
    public class DoublyEndedList
    {
        private Node<int> head;
        private Node<int> tail;

        public void InsertAtHead(int data)
        {
            Node<int> newNode = new Node<int>(data);

            newNode.NextNode = this.head;
            this.head = newNode;

            if (this.tail == null)
                this.tail = newNode;
        }

        public void InsertAtTail(int data)
        {
            Node<int> newNode = new Node<int>(data);

            if (this.head == null)
            {
                this.head = newNode;
                this.tail = newNode;

                return;
            }

            this.tail.NextNode = newNode;
            this.tail = newNode;
        }

        public override string ToString()
        {
            string nodes = string.Empty;

            Node<int> current = this.head;

            while (current != null)
            {
                nodes += $"{current.ToString()},";

                current = current.NextNode;
            }

            return nodes;
        }
    }
}