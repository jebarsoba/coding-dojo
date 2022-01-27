test("given the roots of two binary trees root and subRoot, should return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise (Example 1)", () => {
  let n1 = new TreeNode(3);
  let n2 = new TreeNode(4);
  let n3 = new TreeNode(5);
  let n4 = new TreeNode(1);
  let n5 = new TreeNode(2);
  n1.left = n2;
  n1.right = n3;
  n2.left = n4;
  n2.right = n5;

  let nn1 = new TreeNode(4);
  let nn2 = new TreeNode(1);
  let nn3 = new TreeNode(2);
  nn1.left = nn2;
  nn1.right = nn3;

  expect(isSubtree(n1, nn2)).toBeTruthy();
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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const isIdentical: (
    treeOneRoot: TreeNode | null,
    treeTwoRoot: TreeNode | null
  ) => boolean = (
    treeOneRoot: TreeNode | null,
    treeTwoRoot: TreeNode | null
  ) => {
    if (!treeOneRoot && !treeTwoRoot) {
      return true;
    }
    if (!treeOneRoot || !treeTwoRoot) {
      return false;
    }
    if (treeOneRoot.val !== treeTwoRoot.val) {
      return false;
    }

    return (
      isIdentical(treeOneRoot.left, treeTwoRoot.left) &&
      isIdentical(treeOneRoot.right, treeTwoRoot.right)
    );
  };

  if (!root) {
    return false;
  }

  return (
    isIdentical(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
}
