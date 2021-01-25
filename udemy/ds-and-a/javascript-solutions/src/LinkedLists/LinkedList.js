const Node = require("./Node");

class LinkedList {
    constructor() {
        this.head = null;
    }

    // O(1)
    insertAtHead(data) {
        let newNode = new Node(data);
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    // O(1)
    deleteFromHead() {
        this.head = this.head.nextNode;
    }

    length() {
        let result = 0;
        let current = this.head;

        while (current != null) {
            result++;

            current = current.nextNode;
        }

        return result;
    }

    // O(n)
    find(data) {
        let current = this.head;

        while (current != null) {
            if (current.data === data) {
                return current;
            }

            current = current.nextNode;
        }

        return null;
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

module.exports = LinkedList;