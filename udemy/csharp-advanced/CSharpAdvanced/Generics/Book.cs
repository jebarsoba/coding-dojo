namespace CSharpAdvanced.Generics
{
    public class Book : Product
    {
        public Book(string isbn, string title)
        {
            this.Isbn = isbn;
            this.Title = title;
        }

        public string Isbn { get; private set; }
    }
}