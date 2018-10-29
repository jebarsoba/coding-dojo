namespace DSAndA.StacksAndQueues
{
    public class QueueUsingArrayAsUnderlyingDS
    {
        private readonly int maxSize;
        private int[] queueArray;
        private int head;
        private int tail;
        private bool IsFull => this.tail == this.maxSize - 1;
        private bool HasEmptySpacesBeforeHead => this.head > 0;

        public QueueUsingArrayAsUnderlyingDS(int maxSize)
        {
            this.maxSize = maxSize;
            this.queueArray = new int[this.maxSize];
            this.head = -1;
            this.tail = -1;
        }

        public void Enqueue(int element)
        {
            if (this.head == -1) ++this.head;

            if (this.IsFull && this.HasEmptySpacesBeforeHead)
                this.tail = -1; // Reseting tail to make this queue circular...

            this.queueArray[++this.tail] = element;
        }

        public int Dequeue()
        {
            return this.queueArray[this.head++];
        }

        public int Peek()
        {
            return this.queueArray[this.head];
        }
    }
}