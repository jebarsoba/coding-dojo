class Factorial {
    calculate(number) {
        return number !== 1 ? number * this.calculate(--number) : 1;
    }
}

module.exports = Factorial;