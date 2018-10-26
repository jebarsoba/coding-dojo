namespace DSAndA.StacksAndQueues
{
    public class StackUsingArrayAsUnderlyingDS
    {
        private int maxSize;
        private int[] stackArray;
        private int top;

        public StackUsingArrayAsUnderlyingDS(int maxSize)
        {
            this.maxSize = maxSize;
            this.stackArray = new int[maxSize];

            for (int i = 0; i < this.maxSize; i++)
                this.stackArray[i] = 0;

            this.top = -1;
        }

        public void Push(int element)
        {
            this.stackArray[++top] = element;
        }

        public int Pop()
        {
            return this.stackArray[top--];
        }

        public int Peek()
        {
            return this.stackArray[top];
        }
    }
}