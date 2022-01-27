/*
You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.
*/

test("Example 1", () => {
  // Given
  let n1 = new TreeNode(1);

  let nn1 = new TreeNode(1);
  let nn2 = new TreeNode(2);
  nn1.left = nn2;

  // Expected
  let nnn1 = new TreeNode(2);
  let nnn2 = new TreeNode(2);
  nnn1.left = nnn2;
  let expected = [];
  nnn1.traversePreOrder(expected);

  // Actual
  let actual = [];
  mergeTrees(n1, nn1).traversePreOrder(actual);

  expect(actual).toEqual(expected);
});

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  traversePreOrder(values: number[]) {
    values.push(this.val);

    if (this.left) {
      this.left.traversePreOrder(values);
    }
    if (this.right) {
      this.right.traversePreOrder(values);
    }
  }
}

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1 && !root2) {
    return null;
  }

  let newNode = new TreeNode();
  newNode.val = (root1 ? root1.val : 0) + (root2 ? root2.val : 0);
  newNode.left = mergeTrees(root1?.left, root2?.left);
  newNode.right = mergeTrees(root1?.right, root2?.right);

  return newNode;
}
