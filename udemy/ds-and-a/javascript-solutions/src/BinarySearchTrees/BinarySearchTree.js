const TreeNode = require("./TreeNode");

class BinaryTree {
    insert(data) {
        if (!this.root) {
            this.root = new TreeNode(data);

            return;
        }

        return this.root.insert(data);
    }

    find(data) {
        if (!this.root) {
            return null;
        }

        return this.root.find(data);
    }

    delete(data) {
        if (!this.root) {
            return;
        }

        let parent = null;
        let isLeftChild = false;
        let current = this.root;

        while (current.data !== data) {
            parent = current;

            if (data < parent.data) {
                isLeftChild = true;
                current = parent.leftChild;
            } else {
                isLeftChild = false;
                current = parent.rigthChild;
            }
        }

        if (!parent) {
            this.root = this.root.leftChild ? this.root.leftChild : this.root.rigthChild ? this.root.rigthChild : null;

            return;
        }

        if (isLeftChild) {
            parent.leftChild = parent.leftChild.leftChild ? parent.leftChild.leftChild : null;
        } else {
            parent.rigthChild = parent.rigthChild.rigthChild ? parent.rigthChild.rigthChild : null;
        }

        return;
    }
}

module.exports = BinaryTree;