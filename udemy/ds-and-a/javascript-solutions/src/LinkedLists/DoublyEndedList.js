const Node = require("./Node");

class DoublyEndedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // O(1)
    insertAtTail(data) {
        const newNode = new Node(data);

        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return;
        }

        this.tail.nextNode = newNode;
        this.tail = newNode;
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

module.exports = DoublyEndedList;