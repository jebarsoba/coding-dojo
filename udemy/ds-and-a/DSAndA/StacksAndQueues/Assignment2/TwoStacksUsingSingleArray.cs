namespace DSAndA.StacksAndQueues.Assignment2
{
    public class TwoStacksUsingSingleArray
    {
        private int maxSize1;
        private int maxSize2;
        private int[] twoStacksArray;
        private int top1;
        private int top2;

        public TwoStacksUsingSingleArray(int maxSize1, int maxSize2)
        {
            this.maxSize1 = maxSize1;
            this.maxSize2 = maxSize2;
            this.twoStacksArray = new int[maxSize1 + maxSize2];
            this.top1 = -1;
            this.top2 = maxSize2 - 1;
        }

        public void Push1(int element)
        {
            if (this.top1 == this.maxSize1 - 1) throw new System.ApplicationException("Stack 1 is full.");

            this.twoStacksArray[++this.top1] = element;
        }

        public int Pop1()
        {
            return this.twoStacksArray[this.top1--];
        }

        public void Push2(int element)
        {
            this.twoStacksArray[++this.top2] = element;
        }

        public int Pop2()
        {
            return this.twoStacksArray[this.top2--];
        }
    }
}