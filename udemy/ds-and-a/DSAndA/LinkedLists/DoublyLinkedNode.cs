namespace DSAndA.LinkedLists
{
    public class DoublyLinkedNode<T>
    {
        private T data;
        public DoublyLinkedNode<T> Prev { get; set; }
        public DoublyLinkedNode<T> Next { get; set; }

        public DoublyLinkedNode(T data)
        {
            this.data = data;
        }

        public override string ToString()
        {
            return this.data.ToString();
        }
    }
}