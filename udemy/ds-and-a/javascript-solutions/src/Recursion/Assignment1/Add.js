class Add {
    calc(a, b) {
        return a !== 0 ? a + this.calc(b, 0) : 0;
    }
}

module.exports = Add;