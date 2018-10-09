using System;

namespace DSAndA.LinkedLists
{
    public class LinkedList<T> where T : IComparable<T>
    {
        private Node<T> head;

        public int Lenght
        {
            get
            {
                int length = 0;

                Node<T> current = this.head;

                while (current != null)
                {
                    ++length;

                    current = current.NextNode;
                }

                return length;
            }
        }

        public override string ToString()
        {
            string nodes = string.Empty;

            Node<T> current = this.head;

            while (current != null)
            {
                nodes += $"{current.ToString()},";

                current = current.NextNode;
            }

            return nodes;
        }

        public void InsertAtHead(T data)
        {
            Node<T> nodeToBeInserted = new Node<T>(data) { NextNode = this.head };

            this.head = nodeToBeInserted;
        }

        public void DeleteFromHead()
        {
            this.head = this.head.NextNode;
        }

        public Node<T> Search(T data)
        {
            Node<T> current = this.head;

            while (current != null)
            {
                if (current.GetData().CompareTo(data) == 0)
                    return current;

                current = current.NextNode;
            }

            return null;
        }

        public void AppendLastNodesToBeginning(int n)
        {
            Node<T> current = this.head;
            int currentPosition = 1;

            // Example: 1 -> 2 -> 3
            // Iterate through the list until reaching the (count - n) element = 2
            while (currentPosition++ != this.Lenght - n)
                current = current.NextNode;

            // Save a reference to the current element as "toBeLastElement"
            Node<T> toBeLastElement = current;

            // Go one more element forward
            current = current.NextNode;

            // Connect toBeLastElement.Next to null: 1 -> 2 -> null
            toBeLastElement.NextNode = null;

            // Connect current.Next to head: 3 -> 1 -> 2 -> null
            current.NextNode = this.head;

            // Make current the new head
            this.head = current;
        }
    }
}