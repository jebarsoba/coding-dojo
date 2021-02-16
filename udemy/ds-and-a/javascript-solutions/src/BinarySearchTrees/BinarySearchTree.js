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

    }
}

module.exports = BinaryTree;