using System;
using System.Collections.Generic;

namespace DSAndA.LinkedLists
{
    public class LinkedList<T> where T : IComparable<T>
    {
        private Node<T> head;

        public int Lenght { get; private set; }

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

            ++this.Lenght;
        }

        public void DeleteFromHead()
        {
            this.head = this.head.NextNode;

            --this.Lenght;
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

        /// <summary>
        /// With an input of k=1, the last element is returned; with k=2, the second last element; and on so on.
        /// 
        /// Example: 1 -> 2 -> 3 -> 4
        /// 1 = 4th last element => k = 4 (Lenght + 1 - Position = 4 + 1 - 1 = 4)
        /// 4 = 1st last element => k = 1 (Lenght + 1 - Position = 4 + 1 - 4 = 1)
        /// </summary>
        /// <param name="k"></param>
        /// <returns></returns>
        public Node<T> FindKth(int k)
        {
            Node<T> current = this.head;

            int kth = this.Lenght;

            while (kth-- != k && current != null)
                current = current.NextNode;

            return current;
        }

        public void RemoveDuplicates()
        {
            Node<T> current = this.head;

            Dictionary<T, bool> presenceDictionary = new Dictionary<T, bool>
            {
                [current.GetData()] = true
            };

            Node<T> previous = current;
            current = current.NextNode;

            while (current != null)
            {
                if (presenceDictionary.ContainsKey(current.GetData()))
                    previous.NextNode = current.NextNode; // Removing the duplicate...
                else
                {
                    previous = current;
                    presenceDictionary[current.GetData()] = true;
                }

                current = current.NextNode;
            }
        }
    }
}