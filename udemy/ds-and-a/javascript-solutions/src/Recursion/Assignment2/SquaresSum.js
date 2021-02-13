class SquaresSum {
    calc(n) {
        return n !== 0 ? Math.pow(n, 2) + this.calc(n - 1) : 0;
    }
}

module.exports = SquaresSum;