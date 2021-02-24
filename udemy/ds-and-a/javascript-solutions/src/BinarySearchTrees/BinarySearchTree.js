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
        return this.root ? this.root.find(data) : null;
    }

    delete(data) {
        let nodeToBeDeleted = this.find(data);

        if (nodeToBeDeleted) {
            nodeToBeDeleted.delete();
        }

        return;
    }

    min() {
        return this.root ? this.root.min() : null;
    }

    max() {
        return this.root ? this.root.max() : null;
    }

    traverse() {
        let values = [];
        this.root.traverse(values);

        return values;
    }
}

module.exports = BinaryTree;