class TwoStacksUsingSingleArray {
    constructor(maxSize1, maxSize2) {
        this.stack = [];
        for (let i = 0; i < maxSize1 + maxSize2; i++) {
            this.stack[i] = 0;
        }

        this.maxSize1 = maxSize1;
        this.maxSize2 = maxSize2;

        this.head1 = -1;
        this.top1 = -1;

        this.head2 = -1 + this.maxSize1;
        this.top2 = -1 + this.maxSize1;
    }

    push1(data) {
        if (this.top1 === this.maxSize1 - 1) {
            throw new Error("Stack is full");
        }

        this.stack[++this.top1] = data;

        if (this.head1 < 0) {
            this.head++;
        }
    }

    peek1() {
        return this.stack[this.top1];
    }

    push2(data) {
        if (this.top2 === this.maxSize1 + this.maxSize2 - 1) {
            throw new Error("Stack is full");
        }
        this.stack[++this.top2] = data;

        if (this.head2 < 0 + this.maxSize1) {
            this.head++;
        }
    }

    peek2() {
        return this.stack[this.top2];
    }
}

module.exports = TwoStacksUsingSingleArray;