const { maxDepth } = require("../06-maximum-depth/maximum-depth");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;

      while (current) {
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            return this;
          }
          current = current.left;
        }

        if (value > current.value) {
          if (!current.right) {
            current.right = node;
            return this;
          }
          current = current.right;
        }

        if (current.value === value) {
          return null;
        }
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;

    if (!currentNode) {
      return null;
    }

    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  remove(value) {
    const removeNode = (node, value) => {
      if (node === null) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      }
    }

    this.root = removeNode(this.root, value);
  }

  printTree() {
    const print = (node) => {
      if (node === null) {
        return;
      }
      print(node.left);
      console.log(node.value);
      print(node.right);
    }

    print(this.root);
  }
}

module.exports = { Node, BinarySearchTree };
