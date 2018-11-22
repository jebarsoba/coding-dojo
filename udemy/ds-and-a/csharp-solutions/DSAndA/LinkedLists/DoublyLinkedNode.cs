using System;

namespace DSAndA.LinkedLists
{
    public class DoublyLinkedNode<T> where T : IComparable
    {
        public T Data { get; private set; }
        public DoublyLinkedNode<T> Prev { get; set; }
        public DoublyLinkedNode<T> Next { get; set; }

        public DoublyLinkedNode(T data)
        {
            this.Data = data;
        }

        public override string ToString() => this.Data.ToString();
        public int CompareTo(T other) => this.Data.CompareTo(other);
    }
}