const BinaryTree = require("../../src/BinarySearchTrees/BinarySearchTree");

test('should find the given number', () => {
    const bst = new BinaryTree();
    bst.insert(52);
    bst.insert(33);
    bst.insert(65);
    bst.insert(25);
    bst.insert(39);

    const foundTreeNode = bst.find(39);

    expect(foundTreeNode.data).toBe(39);
});

test('should insert the given number', () => {
    const bst = new BinaryTree();
    bst.insert(52);
    bst.insert(33);
    bst.insert(65);
    bst.insert(25);
    bst.insert(39);

    let foundTreeNode = bst.find(60);
    expect(foundTreeNode).toBeFalsy();

    bst.insert(60);

    foundTreeNode = bst.find(60);
    expect(foundTreeNode.data).toBe(60);
});

test('given an already existing number, should insert it as a right child', () => {
    const bst = new BinaryTree();
    bst.insert(52);
    bst.insert(33);
    bst.insert(65);
    bst.insert(25);
    bst.insert(39);

    let foundTreeNode = bst.find(65);
    expect(foundTreeNode.data).toBe(65);

    bst.insert(65);

    foundTreeNode = bst.find(65);
    expect(foundTreeNode.data).toBe(65);
});