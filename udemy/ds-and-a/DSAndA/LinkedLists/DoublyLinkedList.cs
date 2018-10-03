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
            {
                current.Prev.Next = current.Next; // 10 -> null (As 10 is last, next points to null)

                if (current.Prev.Next != null)
                    current.Prev.Next.Prev = current.Prev.Next; // 10 <- Next node to 10

                current.Next = current.Prev; // 2 -> 10
                current.Prev = current.Prev.Prev; // null <- 2 (As 2 is head, prev points to null)
                current.Next.Prev = current; // 2 <- 10

                if (current.Prev == null)
                    this.head = current; // head = 2
                else
                    current.Prev.Next = current; // Previous node to 2 -> 2
            }
        }
    }
}