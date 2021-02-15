const TreeNode = require("./TreeNode");

class BinaryTree {
    constructor() {
        // this.root = null;

        let tn1 = new TreeNode(52);
        let tn2 = new TreeNode(33);
        let tn3 = new TreeNode(65);
        let tn4 = new TreeNode(25);
        let tn5 = new TreeNode(39);

        this.root = tn1;
        tn1.leftChild = tn2;
        tn1.rigthChild = tn3;
        tn2.leftChild = tn4;
        tn2.rigthChild = tn5;
    }

    insert(data) {
        // let treeNode = new TreeNode(data);

        // if (!this.root) {
        //     this.root = treeNode;

        //     return;
        // }
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