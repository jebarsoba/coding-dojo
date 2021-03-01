class JewelsAndStones {
    numJewelsInStones(jewels, stones) {
        const jewelStones = new Set(jewels);
        return stones.split('').reduce((count, stone) => jewelStones.has(stone) ? ++count : count, 0);
    }
}

module.exports = JewelsAndStones;