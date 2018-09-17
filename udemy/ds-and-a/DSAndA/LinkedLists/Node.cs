namespace DSAndA.LinkedLists
{
    public class Node
    {
        private int data;
        public Node NextNode { get; set; }

        public Node(int data)
        {
            this.data = data;
        }

        public override string ToString()
        {
            return this.data.ToString();
        }
    }
}