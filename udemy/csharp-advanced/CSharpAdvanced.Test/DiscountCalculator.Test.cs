using Xunit;

namespace CSharpAdvanced.Test
{
    public class DiscountCalculatorTestFixture
    {
        [Fact]
        public void DiscountCalculatorTest1()
        {
            DiscountCalculator<Product> discountCalculator = new DiscountCalculator<Product>();
            Assert.Equal(expected: 0.5, actual: discountCalculator.CalculateDiscount(new Book(isbn: "1111", title: "C# Advanced") { Price = 1 }));
        }
    }
}