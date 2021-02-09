class StackUsingArrayAsUnderlyingDS {
    constructor() {
        this.stack = [];
        this.top = -1;
        this.length = 0;
    }

    // O(1)
    push(data) {
        this.stack[++this.top] = data;
        this.length++;
    }

    // O(1)
    pop() {
        const item = this.stack[this.top--];
        this.length--;

        return item;
    }

    // O(1)
    peek() {
        return this.stack[this.top];
    }

    length() {
        return this.length;
    }

    toString() {
        return this.top >= 0 ? this.stack.slice(0, this.top + 1).join(', ') : '';
    }
}

module.exports = StackUsingArrayAsUnderlyingDS;