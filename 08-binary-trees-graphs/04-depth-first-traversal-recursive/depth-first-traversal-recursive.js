class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function recDepthFirstTraversal(root) {
  const result = [];

  if (root !== null) {
    result.push(root.data);
    result.push(...recDepthFirstTraversal(root.left));
    result.push(...recDepthFirstTraversal(root.right));
  }

  return result;
}

module.exports = {
  Node,
  recDepthFirstTraversal,
};
