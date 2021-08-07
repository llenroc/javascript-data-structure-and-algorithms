/*
    BINARY SEARCH TREES

    Abstract data type
    A binary search tree is a tree with the additional constraints:
    - each node has only two child nodes (node.left and node.right)
    - all the values in the left subtree of a node are less than or equal to the value of the node
    - all the values in the right subtree of a node are greater than the value of the node

    *** Operations:

    bsTree.insert(value)
    => bsTree (return for chaining purposes)
    Insert value into correct position within tree

    bsTree.contains(value)
    => true/false
    Return true if value is in tree, false if not

    bsTree.traverseDepthFirst_inOrder(callback)
    => undefined
    Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
    Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order (hence the name).

    bsTree.traverseDepthFirst_preOrder(callback)
    => undefined
    Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)

    bsTree.traverseDepthFirst_postOrder(callback)
    => undefined
    Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes)

    bsTree.isValid()
    => returns true if BST is a valid BST otherwise returns false. This method is useful for checking your other methods.

    bsTree.removeNode(value)
    => node
    Remove node from tree.

    bsTree.checkIfFull()
    => true/false
    A binary tree is full if every node has either zero or two children (no nodes have only one child)

    bsTree.checkIfBalanced()
    => true/false
    For this exercise, let's say that a tree is balanced if the minimum height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.


    *** Additional Exercises:
    A binary search tree was created by iterating over an array and inserting each element into the tree. Given a binary search tree with no duplicates, how many different arrays would result in the creation of this tree.

*/

class BinarySearchTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    /* bsTree.insert(value)
      => bsTree (return for chaining purposes)
      Insert value into correct position within tree */
    insert(value) {
      if(value < this.value) {
        if(this.left === null) {
          const node = new BinarySearchTree(value);
          this.left = node;
        } else {
          this.left.insert(value);
        }
      } else {
        if(this.right === null) {
          const node = new BinarySearchTree(value);
          this.right = node;
        } else {
          this.right.insert(value);
        }
      }
      return this;
    }

   /*  bsTree.contains(value)
    => true/false
    Return true if value is in tree, false if not */
    contains(value) {
      if(this.value === value) return true;
      if(value < this.value) {
        return !!this.left && this.left.contains(value);
      }
      if(value > this.value) {
        return !!this.right && this.right.contains(value);
      }
      return false;
    }


    /* bsTree.traverseDepthFirst_inOrder(callback)
        => undefined
        Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
        Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order (hence the name). */
    traverseDepthFirst_inOrder(callback) {
      if(this.left) this.left.traverseDepthFirst_inOrder(callback);
      callback(this);
      if(this.right) this.right.traverseDepthFirst_inOrder(callback);
    }

    /* bsTree.traverseDepthFirst_preOrder(callback)
        => undefined
        Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes) */
    traverseDepthFirst_preOrder(callback) {
      callback(this);
      if(this.left) this.left.traverseDepthFirst_preOrder(callback);
      if(this.right) this.right.traverseDepthFirst_preOrder(callback);
    }

    /* bsTree.traverseDepthFirst_postOrder(callback)
    => undefined
    Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes) */
    traverseDepthFirst_postOrder(callback) {
      if(this.left) this.left.traverseDepthFirst_postOrder(callback);
      if(this.right) this.right.traverseDepthFirst_postOrder(callback);
      callback(this);
    }

    traverseBreadthFirst(callback) {
      const queue = [this];
      while(queue.length) {
        const node = queue.shift();
        callback(node);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
      }
    }

    /**
     * Case1 - !left && !right  -> value = null
     * Case2 - !left && right -> make right node left of parent
     * Case3 - left - recursive call 
     */
    deleteMin(parent) {
      if(!this.left && !this.right) {
        if(parent) {
          parent.left = null;
        } else {
          this.value = null;
        }
      } else if(!this.left && this.right) {
        if(parent) {
          parent.left = this.right;
        } else {
          this.value = this.right.value;
          this.left = this.right.left || null;
          this.right = this.right.right || null;
        }
      } else {
        this.left.deleteMin(this);
      }
    }


    /**
     * Case1 - !left && !right  -> value = null
     * Case2 - left && !right -> make left node to right of parent
     * Case3 - right - recursive call 
     */
    deleteMax(parent) {
      if(!this.left && !this.right) {
        console.log("condition 1 ");
        if(parent) {
          parent.right = null;
        } else {
          this.value = null;
        }
      } else if(this.left && !this.right) {
        if(parent) {
          parent.right = this.left;
        } else {
          this.value = this.left.value;
          this.right = this.left.right || null; // Important move right first
          this.left = this.left.left || null;
        }
      } else {
        this.right.deleteMax(this);
      }
    }

    deleteNode() {

    }

    // true/false
    // A binary tree is full if every node has either zero or two children (no nodes have only one child)
    checkIfFull() {
      const queue = [this];
      while(queue.length) {
        const currentNode = queue.shift();
        if((currentNode.left && !currentNode.right) || (!currentNode.left && currentNode.right)) {
            return false;
        }
        currentNode.left && queue.push(currentNode.left);
        currentNode.right && queue.push(currentNode.right);
      }
      return true;
    }


    /* 
      => true/false
      For this exercise, let's say that a tree is balanced if the minimum height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.
    */
    // Calculate height of all leaf nodes and put it in an array
    // Get min value and max value from the array
    // if maxHeight - minHeight <= 1 => return true otherwise false

    // breadthFirst

    checkIfBalanced() {
      // implement me...
        var heights = [];
        var recursive = function(node, height) {
            if(!node.left && !node.right) heights.push(height);
            !!node.left && recursive(node.left, height+1);
            !!node.right && recursive(node.right, height+1);
        }

        // it's 0 if you consider the height as a edge count (so that a single node doesn't have any edge, hence 0)
        // it's 1 if you consider the height as a node count (so that a single node counts as 1)
        recursive(this, 1);
        var max = Math.max.apply(null, heights);
        var min = Math.min.apply(null, heights);
        return max-min <= 1;
    }


    //Given two binary trees. Check whether they are mirror reflections of each other or not.
    isMirror() {

    }


    //Given a binary tree. Print nodes at distance 'k' from root (k th level)
    trace() {

    }

    //Level Order Traversal of a Binary Tree (level by level and as a whole).
    //Explanation in detail for both representations of level order traversal.

    //Level Order Traversal
    printTree() {

    }


    //Given a binary tree. Print all the ancestors of a given node in the Binary Tree.
    printAllAncesstor() {

    }

    //Given two binary trees, write a program to check whether they are identical.
    //Approach 1 :- Recursive 
    //Approach 2 :- Comapre InOrder, PreOrder and PostOrder 
    isIdentical() {

    }

    //Given two binary. Check whether one tree is a subtree of another tree.
    isSubTree() {

    }

    //Calculate sum of all nodes in given Binary Tree.
    sumOfAllNodes() {

    }

    // Given a binary tree , check if it is a sumTree or not.
    isSumTree() {

    }

    //Given a binary tree. Print the number of leaf nodes in the tree.
    //Approach-1:- Using InOrder Traversal
    //Approach-2:- Using recursive 
    printLeafNodes() {

    }

    //Print all ROOT to LEAF paths in a binary tree
    allRootToLeafPath() {

    }

    //Level Order Traversal of a Binary Tree (level by level and as a whole).
    //Explanation in detail for both representations of level order traversal.

    //Level Order Traversal
    levelOrderTraverse() {

    }

    printLevelOrderTraverse() {

    }

    //Traverse through the diagonal elements in a binary tree.
    printDiagonalElements() {

    }

    //write an algorithm to make vertical order traversal of a binary
    verticalOrderTraversal() {

    }

    //Print the top and Bottom view of a Binary Tree. We use level order traversal and vertical order traversal for this.
    printTopView() {

    }

    bottomView() {

    }

    //Side view of binary tree. Left side view and right side view.
    leftSideView() {

    }

    rightSideView(tree) {

    }

    //Print the sum of every diagonal in binary tree.
    digonalSum(tree) {

    }


    // Find All common ancestor of two nodes in a binary tree.
    allCommonAncestor(tree, value1, value2) {

    }

    // Find lowest common ancestor of two nodes in a binary tree. - postOrderTraversal
    lowestCommonAncestor(tree, value1, value2) {

    }

     //Nodes having 'K' leaves in its SubTree Algorithm - postOrderTraversal
    nodeHavingKLeaves(tree, k, count) {

    }


    //Print Root to Leaf Path with Given sum(Print all K-Sum paths) in a given Binary Tree
    //Print all K-sum paths in the given Binary tre
    printRootToLeafPathWithSum() {

    }


    freeNode() {

    }

    deleteBinaryTreeAllNodes() {

    }

    heightOfABinaryTree() {

    }

    isTwoBinaryIsomorphic() {

    }

    diameterOfBinaryTree() {

    }

    AVLTree() {

    }

    binaryTreeToDoublyLinkedList() {
        //Inorder traversal based / Depth first serach
    }

    bstToDoublyLinkedList() {
        //Breadth first search
    } 

    binaryTreeToDoublyLinkedList() {
        //Breadth first search
    }

    threadedBinaryTree() {

    }

    noOfPossibleBinarySearchTreeWith_N_Nodes() {

    }

    inorderSuccessorInBST() {

    }

    inorderPredecessorInBST() {

    }

}

/*
              8
         3         10
      1    6            14
          4  7       13

*/


const myBST = new BinarySearchTree(8);
myBST.insert(3);
myBST.insert(1);
myBST.insert(6);
myBST.insert(4);
myBST.insert(7);
myBST.insert(10);
myBST.insert(14);
myBST.insert(13);

console.log("myBST = ", JSON.stringify(myBST));

console.log(`myBST.contains(4) = ${myBST.contains(4)}`);
console.log(`myBST.contains(9) = ${myBST.contains(9)}`);
console.log(`myBST.contains(15) = ${myBST.contains(15)}`);

const inOrder = [];
myBST.traverseDepthFirst_inOrder((node) => inOrder.push(node.value));
console.log(`inOrder [1,3,4,6,7,8,10,13,14] `, inOrder);

const preOrder = [];
myBST.traverseDepthFirst_preOrder((node) => preOrder.push(node.value));
console.log(`preOrder [8,3,1,6,4,7,10,14,13] `, preOrder);

const postOrder = [];
myBST.traverseDepthFirst_postOrder((node) => postOrder.push(node.value));
console.log(`postOrder [1,4,7,6,3,13,14,10,8] `, postOrder);

const breadthFirst = [];
myBST.traverseBreadthFirst((node) => breadthFirst.push(node.value));
console.log(`breadthFirst [8,3,10,1,6,14,4,7,13] `, breadthFirst);


myBST.deleteMin(); // [ 3, 4, 6, 7, 8, 10, 13, 14 ]
// myBST.deleteMin(); // [ 4, 6, 7, 8, 10, 13, 14 ]
// myBST.deleteMin(); // [ 6, 7, 8, 10, 13, 14 ]
// myBST.deleteMin(); // [ 7, 8, 10, 13, 14 ]
// myBST.deleteMin(); // [ 8, 10, 13, 14 ]
// myBST.deleteMin(); // [ 10, 13, 14 ]
// myBST.deleteMin(); // [ 13, 14 ]
// myBST.deleteMin(); // [ 14 ]
const inOrder1 = [];
myBST.traverseDepthFirst_inOrder((node) => inOrder1.push(node.value));
console.log(`inOrder1 [3,4,6,7,8,10,13,14] `, inOrder1);

myBST.insert(1);   // [ 1, 3, 4, 6, 7, 8, 10, 13, 14 ]
myBST.deleteMax(); // [ 1, 3, 4, 6, 7, 8, 10, 13 ]
myBST.deleteMax(); // [ 1, 3, 4, 6, 7, 8, 10 ]
// myBST.deleteMax(); // [ 1, 3, 4, 6, 7, 8 ]
// myBST.deleteMax(); // [ 1, 3, 4, 6, 7 ]

const inOrder2 = [];
myBST.traverseDepthFirst_inOrder((node) => inOrder2.push(node.value));
console.log(`\n\n myBST.deleteMax() [ 1, 3, 4, 6, 7, 8, 10 ] \n`, inOrder2);


console.log(`myBST.checkIfFull() = ${myBST.checkIfFull()} \n`); // True

myBST.insert(9); // [ 1, 3, 4, 6, 7, 8, 9, 10 ]

console.log(`myBST.checkIfFull() = ${myBST.checkIfFull()} \n`); // false

console.log(`myBST.checkIfBalanced() = ${myBST.checkIfBalanced()} \n`); // true

myBST.deleteMax(); // [ 1, 3, 4, 6, 7, 8, 9 ]

console.log(`myBST.checkIfBalanced() = ${myBST.checkIfBalanced()} \n`); // false





const BST1 = new BinarySearchTree(50); 
  BST1.left = new BinarySearchTree(17);
  BST1.left.left = new BinarySearchTree(12);
  BST1.left.right = new BinarySearchTree(23);
  BST1.left.left.left = new BinarySearchTree(9);
  BST1.left.left.right = new BinarySearchTree(14);
  BST1.left.right.left = new BinarySearchTree(19);
  
  BST1.right = new BinarySearchTree(72);
  BST1.right.left = new BinarySearchTree(54);
  BST1.right.right = new BinarySearchTree(76);
  BST1.right.left.right = new BinarySearchTree(67);

console.log(`BST1.checkIfBalanced() = ${BST1.checkIfBalanced()} \n`); // true

  const BST2 = new BinarySearchTree(1);
    BST2.right = new BinarySearchTree(2);
    BST2.right.right = new BinarySearchTree(3);
    BST2.right.right.right = new BinarySearchTree(4);
    BST2.right.right.right.right = new BinarySearchTree(6);
    BST2.right.right.right.right.left = new BinarySearchTree(5);
    BST2.right.right.right.right.right = new BinarySearchTree(7);
    BST2.right.right.right.right.right.right = new BinarySearchTree(8);

console.log(`BST1.checkIfBalanced() = ${BST2.checkIfBalanced()} \n`); // true