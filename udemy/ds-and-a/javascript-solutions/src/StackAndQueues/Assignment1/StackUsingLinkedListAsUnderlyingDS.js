const DoublyLinkedNode = require("../../LinkedLists/DoublyLinkedNode");

class StackUsingLinkedListAsUnderlyingDS {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(data) {
        let newNode = new DoublyLinkedNode(data);
        newNode.prevNode = this.tail;

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.nextNode = newNode;
        }

        this.tail = newNode;
    }

    pop() {
        const itemToPop = this.tail;

        this.tail.prevNode.nextNode = null;
        this.tail = this.tail.prevNode;

        return itemToPop.data;
    }

    peek() {
        return this.tail.data;
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

module.exports = StackUsingLinkedListAsUnderlyingDS;