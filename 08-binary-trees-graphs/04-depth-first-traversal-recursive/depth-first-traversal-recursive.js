class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function recDepthFirstTraversal(root) {
  if (!root) {
    return;
  }

  const result = [];

  result.push(root.data);

  if (root.left) {
    result.push(...recDepthFirstTraversal(root.left));
  }

  if (root.right) {
    result.push(...recDepthFirstTraversal(root.right));
  }

  return result;
}

module.exports = {
  Node,
  recDepthFirstTraversal,
};
