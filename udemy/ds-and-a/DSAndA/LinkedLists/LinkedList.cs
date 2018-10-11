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

            // Save a reference to the current element as toBeLast
            Node<T> toBeLast = current;

            // Go one more element forward
            current = current.NextNode;

            // Save a reference to the current element as toBeHead
            Node<T> toBeHead = current;

            // Go to the last element of the list
            while (current.NextNode != null)
                current = current.NextNode;

            // Connect last element to head: 3 -> 1 -> 2 -> null
            current.NextNode = this.head;

            // Make toBeHead the new head
            this.head = toBeHead;

            // Connect toBeLast.Next to null: 1 -> 2 -> null
            toBeLast.NextNode = null;
        }

        public void Reverse()
        {
            LinkedList<T> reversedLinkedList = new LinkedList<T>();

            Node<T> current = this.head;

            while (current != null)
            {
                reversedLinkedList.InsertAtHead(current.GetData());

                current = current.NextNode;
            }

            this.head = reversedLinkedList.head;
        }
    }
}