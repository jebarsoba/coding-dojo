namespace CSharpAdvanced
{
    public class Book
    {
        private string isbn;
        private string title;

        public Book(string isbn, string title)
        {
            this.isbn = isbn;
            this.title = title;
        }

        public string Isbn { get { return this.isbn; } }
        public string Title { get { return this.title; } }
    }
}