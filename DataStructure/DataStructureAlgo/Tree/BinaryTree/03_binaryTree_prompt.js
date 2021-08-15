/**
 * Fixed operation - contains(val), size(tree), traverse(tree)
 * 
 * Dynamic Operations - insert(x, y), remove(node), reOrder(x, y)
 */


class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
   * Explores all the nodes in the tree
   */
  traverse(value) {

  }

  /**
   * Return true if value is found
   */
  contains(value) {

  }

  insertChild(value) {
  }

  // left, root, right
  inOrderTraversal(func = console.log) {
    if(node.left) {
      return node.left.inOrderTraversal(func);
    }
    func(node);
    if (node.right) {
      return node.right.inOrderTraversal(func);
    }
  }

  // root, left, right
  preOrderTraversal(func = console.log) {
    func(node);
    if(node.left) {
      return node.left.preOrderTraversal(func);
    }
    if (node.right) {
      return node.right.preOrderTraversal(func);
    }
  }

  // left, right, root
  postOrderTraversal(func = console.log) {
    if(node.left) {
      return node.left.postOrderTraversal(func);
    }
    if (node.right) {
      return node.right.postOrderTraversal(func);
    }
    func(node);
  }
}

export default BinaryTree;