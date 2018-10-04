using System;

namespace DSAndA.LinkedLists
{
    public class DoublyLinkedList<T> where T : IComparable
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

        public void Sort()
        {
            DoublyLinkedNode<T> current = this.head.Next;

            if (current != null && current.CompareTo(current.Prev.Data) < 0)
                this.Swap(leftNode: current.Prev, rightNode: current);
        }

        private void Swap(DoublyLinkedNode<T> leftNode, DoublyLinkedNode<T> rightNode)
        {
            leftNode.Next = rightNode.Next; // 10 -> null (As 10 is last, next points to null)

            if (leftNode.Next != null)
                leftNode.Next.Prev = leftNode; // 10 <- Next node to 10

            rightNode.Next = rightNode.Prev; // 2 -> 10
            rightNode.Prev = leftNode.Prev; // null <- 2 (As 2 is head, prev points to null)
            rightNode.Next.Prev = rightNode; // 2 <- 10

            if (rightNode.Prev != null)
                rightNode.Prev.Next = rightNode; // Previous node to 2 -> 2
            else
                this.head = rightNode; // head = 2
        }
    }
}