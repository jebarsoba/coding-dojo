using CSharpAdvanced.Generics;
using System;
using System.Collections.Generic;

namespace CSharpAdvanced.LambdaExpressions
{
    public class BookRepository
    {
        private List<Book> books = new List<Book>();

        public void Save(Book book)
        {
            this.books.Add(book);
        }

        public IList<Book> Find(Predicate<Book> predicate)
        {
            return this.books.FindAll(predicate);
        }
    }
}