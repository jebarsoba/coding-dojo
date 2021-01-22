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