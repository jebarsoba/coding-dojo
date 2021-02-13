const Stack = require('../StackAndQueues/StackUsingArrayAsUnderlyingDS');

class TowerOfHanoi {
    constructor() {
        this.towers = {
            'A': new Stack(),
            'B': new Stack(),
            'C': new Stack()
        };
        this.length = 0;
        this.moves = 0;
    }

    push(disc) {
        this.towers['A'].push(disc);
        this.length++;
    }

    move(numberOfDiscs, from, to, intermediate) {
        if (numberOfDiscs === 1) {
            this.popFromOneAndPushIntoAnother(from, to);

            return;
        }

        this.move(numberOfDiscs - 1, from, intermediate, to);
        this.popFromOneAndPushIntoAnother(from, to);
        this.move(numberOfDiscs - 1, intermediate, to, from);
    }

    popFromOneAndPushIntoAnother(from, to) {
        // console.log(`Moving disc from ${from} to ${to}`);
        this.towers[to].push(this.towers[from].pop());
        this.moves++;
    }

    toString() {
        // With 2 discs, 3 moves are needed...
        // With 3 discs, 7 moves are needed...
        // With 4 discs, 15 moves ares needed...
        // With 5 discs, 31 moves ares needed...
        // So, time complexity is O(2^n - 1)
        console.log(`Number of moves: ${this.moves}`);

        return `A ${this.towers['A'].toString()}; B ${this.towers['B'].toString()}; C ${this.towers['C'].toString()}`
    }
}

module.exports = TowerOfHanoi;