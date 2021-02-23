class TreeNode {
    constructor(data) {
        this._data = data;
        this.leftChild = null;
        this.rigthChild = null;
        this.isDeleted = false;
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

    insert(data) {
        if (data < this.data) {
            if (!this.leftChild) {
                this.leftChild = new TreeNode(data);

                return;
            } else {
                return this.leftChild.insert(data);
            }
        }

        if (data >= this.data) {
            if (!this.rigthChild) {
                this.rigthChild = new TreeNode(data);

                return;
            } else {
                return this.rigthChild.insert(data);
            }
        }
    }

    find(data) {
        if (this.data === data && !this.isDeleted) {
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

    delete() {
        this.isDeleted = true;
    }

    isDeleted() {
        return this.isDeleted;
    }
}

module.exports = TreeNode;