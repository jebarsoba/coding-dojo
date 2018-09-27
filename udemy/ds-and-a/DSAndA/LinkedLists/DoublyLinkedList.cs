namespace DSAndA.LinkedLists
{
    public class DoublyLinkedList<T>
    {
        private DoublyLinkedNode<T> head;

        public void InsertAtHead(T data)
        {
            DoublyLinkedNode<T> node = new DoublyLinkedNode<T>(data);

            node.Next = this.head;

            if (this.head != null)
                this.head.Prev = node;

            this.head = node;
        }

        public override string ToString()
        {
            string nodes = string.Empty;

            DoublyLinkedNode<T> current = this.head;

            while (current != null)
            {
                nodes += $"{current.ToString()},";

                current = current.Next;
            }

            return nodes;
        }
    }
}