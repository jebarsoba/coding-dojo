const BinaryTree = require("../../../src/BinarySearchTrees/BinarySearchTree");

test('given a sorted array, should build a tree with least height', () => {
    const bst = new BinaryTree();
    bst.build([1, 2, 3]);

    expect(bst.height()).toBe(2);
    expect(bst.traverse().join(', ')).toBe('1, 2, 3');
});

test('given a sorted array, should build a tree with least height (another example)', () => {
    const bst = new BinaryTree();
    bst.build([1, 2, 3, 4, 5]);

    expect(bst.height()).toBe(3);
    expect(bst.traverse().join(', ')).toBe('1, 2, 3, 4, 5');
});

test('given a sorted array, should build a tree with least height (a more complex example)', () => {
    const bst = new BinaryTree();
    bst.build([1, 2, 3, 4, 5, 6, 7]);

    expect(bst.height()).toBe(3);
    expect(bst.traverse().join(', ')).toBe('1, 2, 3, 4, 5, 6, 7');
});