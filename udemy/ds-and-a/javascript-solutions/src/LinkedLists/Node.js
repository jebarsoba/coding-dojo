class Node {
    constructor(data) {
        this.data = data;
        this.nextNode = null;
    }

    get data() {
        return this._data;
    }

    get nextNode() {
        return this._nextNode;
    }

    set data(data) {
        this._data = data;
    }

    set nextNode(nextNode) {
        this._nextNode = nextNode;
    }
}

module.exports = Node;