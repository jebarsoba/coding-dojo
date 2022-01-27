/**
 * Given the root of a binary search tree and the lowest and highest boundaries as low and high, trim the tree so that all its elements lies in [low, high]. Trimming the tree should not change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a unique answer.
 *
 * Return the root of the trimmed binary search tree. Note that the root may change depending on the given bounds.
 */

test("Example 1", () => {
  // Given
  let n1 = new TreeNode(1);
  let n2 = new TreeNode(0);
  let n3 = new TreeNode(2);
  n1.left = n2;
  n1.right = n3;

  // Expected
  let nn1 = new TreeNode(1);
  let nn2 = new TreeNode(2);
  nn1.right = nn2;
  let expected = [];
  nn1.traversePreOrder(expected);

  // Actual
  let actual = [];
  trimBST(n1, 1, 2).traversePreOrder(actual);

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

function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  if (!root) {
    return root;
  }

  if (root.val >= low && root.val <= high) {
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
  } else {
    if (root.val < low) {
      root = root.right;
    } else if (root.val > high) {
      root = root.left;
    }

    return trimBST(root, low, high);
  }
}
