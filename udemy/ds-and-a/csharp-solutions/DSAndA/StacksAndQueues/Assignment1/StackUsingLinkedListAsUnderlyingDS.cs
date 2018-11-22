using DSAndA.LinkedLists;
using System;

namespace DSAndA.StacksAndQueues.Assignment1
{
    public class StackUsingLinkedListAsUnderlyingDS<T> where T : IComparable
    {
        private DoublyLinkedNode<T> top;

        public int Length { get; private set; }

        public void Push(T element)
        {
            DoublyLinkedNode<T> newNode = new DoublyLinkedNode<T>(element);
            newNode.Prev = this.top;

            if (this.top != null) this.top.Next = newNode;

            this.top = newNode;

            ++this.Length;
        }

        public T Peek()
        {
            return this.top.Data;
        }

        public T Pop()
        {
            if (this.top == null)
                return default(T);

            DoublyLinkedNode<T> poppedNode = this.top;

            this.top = this.top.Prev;

            --this.Length;

            return poppedNode.Data;
        }

        public override string ToString()
        {
            string elements = "";

            T element = this.Pop();

            while (element.CompareTo(default(T)) != 0)
            {
                elements += $"{element}, ";

                element = this.Pop();
            }

            return elements.Trim();
        }
    }
}