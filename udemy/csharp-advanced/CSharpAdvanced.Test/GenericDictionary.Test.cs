using Xunit;

namespace CSharpAdvanced.Test
{
    public class GenericDictionaryTestFixture
    {
        [Fact]
        public void GenericDictionaryTest1()
        {
            GenericDictionary<string, Book> dictionary = new GenericDictionary<string, Book>();
            dictionary.Add("1234", new Book(isbn: "1111", title: "C# Advanced"));

            Assert.Equal(expected: "C# Advanced", actual: dictionary["1234"].Title);
        }
    }
}