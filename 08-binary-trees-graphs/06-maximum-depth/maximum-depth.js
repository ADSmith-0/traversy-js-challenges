class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  if (!root) {
    return 0;
  }

  let leftTree = 1;
  let rightTree = 1;

  if (root.left) {
    leftTree = 1 + maxDepth(root.left);
  }

  if (root.right) {
    rightTree = 1 + maxDepth(root.right);
  }

  return Math.max(leftTree, rightTree);
}

module.exports = {
  maxDepth,
  Node,
};
