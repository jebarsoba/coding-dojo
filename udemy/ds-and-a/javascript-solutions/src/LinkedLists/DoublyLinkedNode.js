class DoublyLinkedNode {
    constructor(data) {
        this.data = data;
        this.prevNode = null;
        this.nextNode = null;
    }

    get data() {
        return this._data;
    }

    get prevNode() {
        return this._prevNode;
    }

    get nextNode() {
        return this._nextNode;
    }

    set data(data) {
        this._data = data;
    }

    set prevNode(prevNode) {
        this._prevNode = prevNode;
    }

    set nextNode(nextNode) {
        this._nextNode = nextNode;
    }
}

module.exports = DoublyLinkedNode;