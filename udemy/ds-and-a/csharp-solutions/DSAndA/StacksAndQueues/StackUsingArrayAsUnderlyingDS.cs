namespace DSAndA.StacksAndQueues
{
    public class StackUsingArrayAsUnderlyingDS
    {
        private int[] stackArray;
        private int top;

        public StackUsingArrayAsUnderlyingDS(int maxSize)
        {
            this.stackArray = new int[maxSize];

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