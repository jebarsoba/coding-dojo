namespace CSharpAdvanced.Generics
{
    public class GenericList<T>
    {
        private T[] genericList;
        private int currentIndex;

        public GenericList(int size)
        {
            this.genericList = new T[size];
            this.currentIndex = 0;
        }

        public void Add(T value)
        {
            this.genericList[this.currentIndex++] = value;
        }

        public T this[int index]
        {
            get { return this.genericList[index]; }
        }
    }
}