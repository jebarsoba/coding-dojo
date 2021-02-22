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
            this.root = null;

            return;
        }

        if (isLeftChild) {
            parent.leftChild = null;
        } else {
            parent.rigthChild = null;
        }

        return;
    }
}

module.exports = BinaryTree;