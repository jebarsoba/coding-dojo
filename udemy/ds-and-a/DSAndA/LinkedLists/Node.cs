namespace DSAndA.LinkedLists
{
    public class Node
    {
        public int Data { get; set; }
        public Node NextNode { get; set; }

        public Node(int data)
        {
            this.Data = data;
        }
    }
}