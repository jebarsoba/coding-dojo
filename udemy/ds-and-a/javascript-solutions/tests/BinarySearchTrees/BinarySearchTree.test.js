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

test('given a leaf, should delete the node', () => {
    const bst = new BinaryTree();
    bst.insert(52);
    bst.insert(33);
    bst.insert(65);
    bst.insert(25);
    bst.insert(39);

    let foundTreeNode = bst.find(65);
    expect(foundTreeNode.data).toBe(65);

    bst.delete(65);

    foundTreeNode = bst.find(65);
    expect(foundTreeNode).toBeFalsy();
});

test('given a node with one child (left), should delete it accordingly', () => {
    const bst = new BinaryTree();
    bst.insert(52);
    bst.insert(33);
    bst.insert(65);
    bst.insert(25);
    bst.insert(39);
    bst.insert(23);

    // Assert if child exists...
    let foundTreeNode = bst.find(23);
    expect(foundTreeNode.data).toBe(23);

    // Delete parent...
    bst.delete(25);

    // Assert if parent was deleted... 
    foundTreeNode = bst.find(25);
    expect(foundTreeNode).toBeFalsy();

    // Assert if child still exists (now is 33's child)...
    foundTreeNode = bst.find(23);
    expect(foundTreeNode.data).toBe(23);
});

test('given a node with one child (right), should delete it accordingly', () => {
    const bst = new BinaryTree();
    bst.insert(52);
    bst.insert(33);
    bst.insert(65);
    bst.insert(25);
    bst.insert(39);
    bst.insert(70);

    // Assert if child exists...
    let foundTreeNode = bst.find(70);
    expect(foundTreeNode.data).toBe(70);

    // Delete parent...
    bst.delete(65);

    // Assert if parent was deleted... 
    foundTreeNode = bst.find(65);
    expect(foundTreeNode).toBeFalsy();

    // Assert if child still exists (now is 52's child)...
    foundTreeNode = bst.find(70);
    expect(foundTreeNode.data).toBe(70);
});

test('given the root with one child (left), should delete it accordingly', () => {
    const bst = new BinaryTree();
    bst.insert(52);
    bst.insert(25);

    // Assert if child exists...
    let foundTreeNode = bst.find(25);
    expect(foundTreeNode.data).toBe(25);

    // Delete parent...
    bst.delete(52);

    // Assert if parent was deleted... 
    foundTreeNode = bst.find(52);
    expect(foundTreeNode).toBeFalsy();

    // Assert if child still exists (now it is the new root)...
    foundTreeNode = bst.find(25);
    expect(foundTreeNode.data).toBe(25);
});

test('given the root with one child (right), should delete it accordingly', () => {
    const bst = new BinaryTree();
    bst.insert(52);
    bst.insert(65);

    // Assert if child exists...
    let foundTreeNode = bst.find(65);
    expect(foundTreeNode.data).toBe(65);

    // Delete parent...
    bst.delete(52);

    // Assert if parent was deleted... 
    foundTreeNode = bst.find(52);
    expect(foundTreeNode).toBeFalsy();

    // Assert if child still exists (now it is the new root)...
    foundTreeNode = bst.find(65);
    expect(foundTreeNode.data).toBe(65);
});

test('should find the smallest value', () => {
    const bst = new BinaryTree();
    bst.insert(52);
    bst.insert(33);
    bst.insert(65);
    bst.insert(25);

    let min = bst.min();
    expect(min.data).toBe(25);
});

test('should find the largest value', () => {
    const bst = new BinaryTree();
    bst.insert(52);
    bst.insert(33);
    bst.insert(65);
    bst.insert(25);

    let max = bst.max();
    expect(max.data).toBe(65);
});

test('should traverse in-order the tree and print its values', () => {
    const bst = new BinaryTree();
    bst.insert(52);
    bst.insert(33);
    bst.insert(65);

    const values = bst.traverse();
    expect(values.join(', ')).toBe('33, 52, 65');
});

test('should traverse in-order the tree and print its values (a more complex example)', () => {
    const bst = new BinaryTree();
    bst.insert(52);
    bst.insert(33);
    bst.insert(65);
    bst.insert(25);
    bst.insert(39);
    bst.insert(60);
    bst.insert(78);
    bst.insert(12);
    bst.insert(27);
    bst.insert(34);
    bst.insert(48);
    bst.insert(72);
    bst.insert(90);

    const values = bst.traverse();
    expect(values.join(', ')).toBe('12, 25, 27, 33, 34, 39, 48, 52, 60, 65, 72, 78, 90');
});