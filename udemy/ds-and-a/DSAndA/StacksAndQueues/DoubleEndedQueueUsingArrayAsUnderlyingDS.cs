using System;

namespace DSAndA.StacksAndQueues
{
    public class DoubleEndedQueueUsingArrayAsUnderlyingDS
    {
        private int maxsize;
        private int[] doubleEndedQueueArray;
        private int head;
        private int tail;

        private bool IsEmpty => this.head == -1;
        private bool HasFreeSpacesAtLeft => this.head > 0;
        private bool HasFreeSpacesAtRight => this.tail < this.maxsize - 1;

        public DoubleEndedQueueUsingArrayAsUnderlyingDS(int maxsize)
        {
            this.maxsize = maxsize;
            this.doubleEndedQueueArray = new int[this.maxsize];
            this.head = -1;
            this.tail = -1;
        }

        public void InsertRight(int element)
        {
            if (this.IsEmpty) ++this.head;

            this.doubleEndedQueueArray[++this.tail] = element;
        }

        public int DeleteLeft()
        {
            return this.doubleEndedQueueArray[this.head++];
        }

        public void InsertLeft(int element)
        {
            if (!this.HasFreeSpacesAtLeft && !this.HasFreeSpacesAtRight)
                throw new ApplicationException("Double ended queue is full.");

            if (!this.HasFreeSpacesAtLeft && this.HasFreeSpacesAtRight)
                this.head = this.maxsize;

            this.doubleEndedQueueArray[--this.head] = element;
        }

        public int DeleteRight()
        {
            return this.doubleEndedQueueArray[this.tail--];
        }
    }
}