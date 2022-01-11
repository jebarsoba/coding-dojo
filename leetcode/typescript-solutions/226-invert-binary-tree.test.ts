test("given the root of a binary tree, should invert the tree and return its root (Example 1)", () => {
  // given
  let n1 = new TreeNode(4);
  let n2 = new TreeNode(2);
  let n3 = new TreeNode(7);
  let n4 = new TreeNode(1);
  let n5 = new TreeNode(3);
  let n6 = new TreeNode(6);
  let n7 = new TreeNode(9);

  n1.left = n2;
  n1.right = n3;
  n2.left = n4;
  n2.right = n5;
  n3.left = n6;
  n3.right = n7;

  // expected
  let nn1 = new TreeNode(4);
  let nn2 = new TreeNode(7);
  let nn3 = new TreeNode(2);
  let nn4 = new TreeNode(9);
  let nn5 = new TreeNode(6);
  let nn6 = new TreeNode(3);
  let nn7 = new TreeNode(1);

  nn1.left = nn2;
  nn1.right = nn3;
  nn2.left = nn4;
  nn2.right = nn5;
  nn3.left = nn6;
  nn3.right = nn7;

  let expected = [];
  nn1.traversePreOrder(expected);

  let actual = [];
  invertTree(n1).traversePreOrder(actual);

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

function addNode(node: TreeNode): TreeNode {
  let newNode = new TreeNode(
    node.val,
    node.right ? addNode(node.right) : null,
    node.left ? addNode(node.left) : null
  );
  return newNode;
}

function invertTree(root: TreeNode | null): TreeNode | null {
  return root ? addNode(root) : null;
}
