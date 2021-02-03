class QueueUsingArrayAsUnderlyingDS {
    constructor() {
        this.queue = [];
        this.head = -1;
        this.tail = -1;
    }

    enqueue(data) {
        if (this.queue.length === 0) {
            this.head++;
        }

        this.queue[++this.tail] = data;
    }

    dequeue() {
        this.head++;
    }

    toString() {
        return this.queue.slice(this.head, this.tail + 1).join(', ');
    }
}

module.exports = QueueUsingArrayAsUnderlyingDS;