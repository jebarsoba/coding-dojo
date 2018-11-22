using DSAndA.LinkedLists;

namespace DSAndA.StacksAndQueues.Assignment3
{
    public class QueueUsingLinkedListAsUnderlyingDS
    {
        private Node<int> head;
        private Node<int> tail;

        private bool IsEmpty => this.tail == null;

        public void Push(int element)
        {
            Node<int> newNode = new Node<int>(element);

            if (!this.IsEmpty)
                this.tail.NextNode = newNode;
            else
            {
                this.head = newNode;
                this.tail = newNode;
            }
        }

        public int Pop()
        {
            int poppedElement = this.head.GetData();

            this.head = this.head.NextNode;

            return poppedElement;
        }

        public int Peek()
        {
            return this.head.GetData();
        }
    }
}