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

            while (current != null)
            {
                DoublyLinkedNode<T> left = current.Prev;

                if (current.CompareTo(left.Data) < 0)
                {
                    this.Swap(left: left, right: current);

                    current = left.Next;
                }
                else
                    current = current.Next;
            }
        }

        private void Swap(DoublyLinkedNode<T> left, DoublyLinkedNode<T> right)
        {
            left.Next = right.Next; // 10 -> null (As 10 is last, next points to null)

            if (left.Next != null)
                left.Next.Prev = left; // 10 <- Next node to 10

            right.Next = right.Prev; // 2 -> 10
            right.Prev = left.Prev; // null <- 2 (As 2 is head, prev points to null)
            right.Next.Prev = right; // 2 <- 10

            if (right.Prev != null)
                right.Prev.Next = right; // Previous node to 2 -> 2
            else
                this.head = right; // head = 2
        }
    }
}