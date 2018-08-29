using Xunit;

namespace CSharpAdvanced.Test
{
    public class GenericListTestFixture
    {
        [Fact]
        public void GenericListTest_Numbers()
        {
            GenericList<int> numbers = new GenericList<int>(1);
            numbers.Add(1);

            Assert.Equal(expected: 1, actual: numbers[0]);
        }

        [Fact]
        public void GenericListTest_Books()
        {
            GenericList<Book> books = new GenericList<Book>(1);
            books.Add(new Book(isbn: "1111", title: "C# Advanced"));

            Assert.Equal(expected: "C# Advanced", actual: books[0].Title);
        }
    }
}