using System;

namespace DSAndA.LinkedLists
{
    public class SortedLinkedList<T> where T : IComparable<T>
    {
        private Node<T> head;

        public void Insert(T data)
        {
            Node<T> node = new Node<T>(data);

            //If list is empty...
            if (this.head == null)
            {
                this.head = node;

                return;
            }

            //If list has one element only...
            if (this.head.NextNode == null)
                if (node.GetData().CompareTo(this.head.GetData()) < 0)
                {
                    node.NextNode = this.head;
                    this.head = node;

                    return;
                }
                else
                {
                    this.head.NextNode = node;

                    return;
                }

            //If list has two elements or more...
            Node<T> current = this.head;

            while (current != null)
            {
                if (current.NextNode == null)
                {
                    current.NextNode = node;

                    return;
                }

                if (current.NextNode.GetData().CompareTo(node.GetData()) >= 0)
                {
                    node.NextNode = current.NextNode;
                    current.NextNode = node;

                    return;
                }

                current = current.NextNode;
            }
        }

        public override string ToString()
        {
            string nodes = string.Empty;

            Node<T> current = this.head;

            while (current != null)
            {
                nodes += $"{current.GetData()},";

                current = current.NextNode;
            }

            return nodes;
        }
    }
}