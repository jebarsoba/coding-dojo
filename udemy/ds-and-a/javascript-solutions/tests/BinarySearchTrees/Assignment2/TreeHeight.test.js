const BinaryTree = require("../../../src/BinarySearchTrees/BinarySearchTree");

test('should return the height of a balanced tree accordingly', () => {
    const bst = new BinaryTree();
    bst.insert(52);
    bst.insert(33);
    bst.insert(65);
    bst.insert(40);
    bst.insert(70);

    const height = bst.height();
    expect(height).toBe(3);
});

test('should return the height of an unbalanced tree accordingly', () => {
    const bst = new BinaryTree();
    bst.insert(52);
    bst.insert(33);
    bst.insert(65);
    bst.insert(70);

    const height = bst.height();
    expect(height).toBe(3);
});