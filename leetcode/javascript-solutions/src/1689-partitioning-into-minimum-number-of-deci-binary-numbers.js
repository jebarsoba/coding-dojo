class MinDeciBinaryPartitions {
    minPartitions(n) {
        return parseInt(n) !== 0 ? 1 + this.minPartitions(n.split('').map(digit => digit > 0 ? --digit : digit).join('')) : 0;
    }
}

module.exports = MinDeciBinaryPartitions;