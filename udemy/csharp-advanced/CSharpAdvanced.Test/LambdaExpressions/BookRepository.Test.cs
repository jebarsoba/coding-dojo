using CSharpAdvanced.Generics;
using CSharpAdvanced.LambdaExpressions;
using Xunit;

namespace CSharpAdvanced.Test.LambdaExpressions
{
    public class BookRepositoryTestFixture
    {
        [Fact]
        public void BookRepositoryTest1()
        {
            BookRepository repo = new BookRepository();
            repo.Save(new Book(isbn: "1111", title: "C# Advanced Topics") { Price = 1 });
            repo.Save(new Book(isbn: "2222", title: "Introduction to Data Structures & Algorithms in Java") { Price = 2 });

            Assert.Equal(expected: 1, actual: repo.Find(book => book.Price < 2).Count);
            Assert.Equal(expected: "1111", actual: repo.Find(book => book.Price < 2)[0].Isbn);
        }
    }
}