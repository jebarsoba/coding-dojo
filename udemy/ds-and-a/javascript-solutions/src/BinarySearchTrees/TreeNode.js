class TreeNode {
    constructor(data) {
        this._data = data;
        this.leftChild = null;
        this.rigthChild = null;
    }

    get data() {
        return this._data;
    }

    get leftChild() {
        return this._leftChild;
    }

    get rigthChild() {
        return this._rigthChild;
    }

    set leftChild(node) {
        this._leftChild = node;
    }

    set rigthChild(node) {
        this._rigthChild = node;
    }

    find(data) {
        if (this.data === data) {
            return this;
        }

        if (this.leftChild && data < this.data) {
            return this.leftChild.find(data);
        }

        if (this.rigthChild && data > this.data) {
            return this.rigthChild.find(data);
        }

        return null;
    }
}

module.exports = TreeNode;