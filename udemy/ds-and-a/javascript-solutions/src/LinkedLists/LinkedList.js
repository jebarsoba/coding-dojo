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

    // O(n)
    insertInSorted(data) {
        if (!this.head) {
            return this.insertAtHead(data);
        }

        let newNode = new Node(data);

        if (data <= this.head.data) {
            newNode.nextNode = this.head;
            this.head = newNode;

            return;
        }

        let current = this.head;

        while (current.nextNode != null) {
            if (data <= current.nextNode.data) {
                newNode.nextNode = current.nextNode;
                current.nextNode = newNode;

                return;
            }

            current = current.nextNode;
        }

        return;
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

    appendLastNodesToBeginning(n) {
        const length = this.length();
        let prevNodeOfLastNodes = null;
        let current = this.head;

        // Sample to use as a visual reference:
        // 0 (head) -> 1 -> 2 -> 3 -> 4 -> null

        // Position current pointer at "length - n - 1" element...
        for (let i = 0; i < length - n - 1; i++) {
            current = current.nextNode;
        }

        // Save "length - n - 1" position...
        prevNodeOfLastNodes = current;

        // Position current pointer at last element...
        while (current.nextNode != null) {
            current = current.nextNode;
        }

        // Set last.next to head...
        current.nextNode = this.head;

        // Set head to "length - n - 1".next...
        this.head = prevNodeOfLastNodes.nextNode;

        // Set "length - n - 1".next to null...
        prevNodeOfLastNodes.nextNode = null;
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