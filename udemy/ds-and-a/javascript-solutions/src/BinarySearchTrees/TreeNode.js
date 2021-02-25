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

    min() {
        return this.leftChild ? this.leftChild.min() : this;
    }

    max() {
        return this.rigthChild ? this.rigthChild.max() : this;
    }

    traverse(values) {
        if (this.leftChild) {
            this.leftChild.traverse(values);
        }

        values.push(this.data);

        if (this.rigthChild) {
            this.rigthChild.traverse(values);
        }
    }

    countLeaves() {
        if (this.isLeaf()) {
            return 1;
        }

        let leaves = 0;

        if (this.leftChild) {
            leaves += this.leftChild.countLeaves();
        }

        if (this.rigthChild) {
            leaves += this.rigthChild.countLeaves();
        }

        return leaves;
    }

    isLeaf() {
        return !this.leftChild && !this.rigthChild;
    }

    height() {
        if (this.isLeaf()) {
            return 1;
        }

        const left = this.leftChild ? this.leftChild.height() : 0;
        const right = this.rigthChild ? this.rigthChild.height() : 0;

        return 1 + (left >= right ? left : right);
    }
}

module.exports = TreeNode;