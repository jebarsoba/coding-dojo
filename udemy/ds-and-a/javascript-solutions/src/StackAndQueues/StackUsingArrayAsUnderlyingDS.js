class StackUsingArrayAsUnderlyingDS {
    constructor() {
        this.stack = [];
        this.top = -1;
    }

    // O(1)
    push(data) {
        this.stack[++this.top] = data;
    }

    // O(1)
    pop() {
        return this.stack[this.top--];
    }

    // O(1)
    peek() {
        return this.stack[this.top];
    }

    toString() {
        return this.top >= 0 ? this.stack.slice(0, this.top + 1).join(', ') : '';
    }
}

module.exports = StackUsingArrayAsUnderlyingDS;