namespace DSAndA.LinkedLists
{
    public class Node<T>
    {
        private T data;
        public Node<T> NextNode { get; set; }

        public Node(T data)
        {
            this.data = data;
        }

        public override string ToString()
        {
            return this.data.ToString();
        }

        public T GetData()
        {
            return this.data;
        }

        public void OverwriteData(T data)
        {
            this.data = data;
        }
    }
}