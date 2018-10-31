using DSAndA.LinkedLists;

namespace DSAndA.StacksAndQueues
{
    public class StackUsingLinkedListAsUnderlyingDS
    {
        private DoublyLinkedNode<int> top;

        public void Push(int element)
        {
            DoublyLinkedNode<int> newNode = new DoublyLinkedNode<int>(element);
            newNode.Prev = this.top;

            if (this.top != null) this.top.Next = newNode;

            this.top = newNode;
        }

        public int Peek()
        {
            return this.top.Data;
        }

        public int Pop()
        {
            DoublyLinkedNode<int> poppedNode = this.top;

            this.top = this.top.Prev;

            return poppedNode.Data;
        }
    }
}