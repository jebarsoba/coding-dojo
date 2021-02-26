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

    countLeaves() {
        return this.root.countLeaves();
    }

    height() {
        return this.root.height();
    }

    build(values) {
        const mid = Math.trunc(values.length / 2);

        const root = values[mid];
        this.insert(root);

        if (mid === 0) {
            return;
        }

        const leftChildren = values.slice(0, mid);
        this.build(leftChildren);

        const rigthChildren = values.slice(mid + 1, values.length);
        this.build(rigthChildren);
    }
}

module.exports = BinaryTree;