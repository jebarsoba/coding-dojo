const BinaryTree = require("../../../src/BinarySearchTrees/BinarySearchTree");

test('should count the number of leaves accordingly', () => {
    const bst = new BinaryTree();
    bst.insert(52);
    bst.insert(33);
    bst.insert(65);

    const leaves = bst.countLeaves();
    expect(leaves).toBe(2);
});