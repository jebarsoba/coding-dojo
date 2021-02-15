const BinaryTree = require("../../src/BinarySearchTrees/BinarySearchTree");

test('should find the given number', () => {
    const bst = new BinaryTree();
    // bst.insert(52);
    // bst.insert(33);
    // bst.insert(65);
    // bst.insert(25);
    // bst.insert(39);

    const foundTreeNode = bst.find(39);

    expect(foundTreeNode.data).toBe(39);
});