const Node = require('../../LinkedLists/Node');

class QueueUsingLinkedListAsUnderlyingDS {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        this.head = this.head.nextNode;
    }

    toString() {
        let result = [];
        let current = this.head;

        while (current != null) {
            result.push(current.data);

            current = current.nextNode;
        }

        return result.join(', ');
    }
}

module.exports = QueueUsingLinkedListAsUnderlyingDS;