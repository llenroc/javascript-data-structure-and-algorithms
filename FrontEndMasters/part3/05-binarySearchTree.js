/*

~~~~~~~~~~ Searching ~~~~~~~~~~~~~ 

Linear search -> O(n)
Binary search -> O(Log(n))
  - Always for sorted list ( TC for sorting nlog(n))
  - Psudo code 
      firstIndex = 0;
      lastIndex = 5;
      mid = Math.floor((lastIndex - firstIndex) / 2 ) = 2 




~~~~~~~~~~ Binary Search tree  ~~~~~~~~~~~~~ 

            19
    11               35  
  7     16        23
      13   17


const BST = {
  root: {
    value: 19,
    left: {
      value: 11,
      left: {7},
      right: {16}
    }
    right: {
      value: 35,
      left: {23},
      right: null
    }
  }
}



Linear search on an array - O(n)
Binary serach on an Array - O(log(n))
TC of BST search - O(h)

BST insert or delete -> O(h)
Array Insert + Delete --> O(n)


 */

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
  }

  contains(value) {
  }

  min(node = null) {
  }

  max(node) {
  }

  remove(value) {
  }

  // left, root, right
  inOrderTraversal(node, func = console.log) {
  }

  // root, left, right
  preOrderTraversal(node, func = console.log) {
  }

  // left, right, root
  postOrderTraversal(node, func = console.log) {
  }
}

export { BinarySearchTree, Node };
