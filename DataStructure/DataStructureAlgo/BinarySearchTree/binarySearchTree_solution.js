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
    isMirror(tree1, tree2) {
        if(!tree1 && !tree2) return true;
        if((tree1 && !tree2) || (!tree1 && tree2)) return false;
        if(tree1.value !== tree2.value) return false;
        
        return (
          tree1.value === tree2.value &&
          this.isMirror(tree1.left, tree2.right) &&
          this.isMirror(tree1.right, tree2.left)
        ) 
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
    isIdentical(tree1, tree2) {
      if(!tree1 && !tree2) return true;
      if((tree1 && !tree2) || (!tree1 && tree2)) return false;
      return (
        tree1.value === tree2.value &&
        this.isIdentical(tree1.left, tree2.left) &&
        this.isIdentical(tree1.right, tree2.right)
      )
    }


    //Given two binary tree. Check whether one tree is a subtree of another tree.
    isSubTree(tree1, tree2) {
      if(!tree1 && !tree2) return true;
      if(!tree1 || !tree2) return false;
      if(tree1.value === tree2.value) {
          return this.isIdentical(tree1, tree2);
      };
      return (!!tree1.left && this.isSubTree(tree1.left, tree2)) || 
             (!!tree1.right && this.isSubTree(tree1.right, tree2));
    }
 
    // Part of below problem -  isSubTreeTwoBST ( for TWO BINARY SEARCH TREE )
    search(tree, value) {
      let currentTree = tree;
      while(currentTree) {
        if(currentTree.value === value) {
          return currentTree;
        }

        if(currentTree.value > value ) {
          currentTree = currentTree.left;
        } else {
          currentTree = currentTree.right;
        }
      }
      return -1;
    }

    //Given TWO BINARY SEARCH TREE. Check whether one tree is a subtree of another tree.
    // Step1 - If both are null return true 
    // Step2 - Search Tree2 in Tree1 
    // Step3 - If found check identical 
    isSubTreeTwoBST(tree1, tree2) {
      if(!tree1 && !tree2) return true;
      if(!tree1 || !tree2) return false;
      const foundNode = this.search(tree1, tree2.value);
      if (foundNode !== -1) {
        return this.isIdentical(foundNode, tree2);
      }
      return false;
    }

    //Calculate sum of all nodes in given Binary Tree.
    sumOfAllNodes() {
      let sum = 0;
      this.traverseBreadthFirst((node) => {
        sum += node.value;
      });
      return sum;
    }

    // Given a binary tree , check if it is a sumTree or not.
    isSumTree() {
      if(!this) return true;
      if(!this.left && !this.right) return true;
      return (this.value === (this.left.sumOfAllNodes() + this.right.sumOfAllNodes())) &&
       !!this.left && this.left.isSumTree() &&
       !!this.right && this.right.isSumTree();
    }

    //Given a binary tree. Print the number of leaf nodes in the tree.
    //Approach-1:- Using InOrder Traversal
    //Approach-2:- Using recursive 
    printLeafNodesTraversal() {
      const nodeList = [];
      this.traverseDepthFirst_inOrder((node) => {
        if(!node.left && !node.right) {
            nodeList.push(node.value);
        }
      });
      return nodeList;
    }

    //Given a binary tree. Print the number of leaf nodes in the tree.
    //Approach-2:- Using recursive 
    printLeafNodesRecursive() {
      const nodeList = [];
      const recursive = (tree) => {
        if(!tree) return;
        if(!tree.left && !tree.right) nodeList.push(tree.value);
        !!tree.left && recursive(tree.left);
        !!tree.right && recursive(tree.right);
      }
      recursive(this);
      return nodeList;
    }

   
 
    allRootToLeafPath() {
      const printTreeArray = (array) => {
        const printArray = [];
        array.forEach(item => printArray.push(item.value));
        console.log(printArray);
      }
    
      const stack = [];
      const inOrder = (tree) => {
        if(!tree) return null;
        stack.push(tree);

        !!tree.left && inOrder(tree.left);

        if(!tree.left && !tree.right) {
          printTreeArray(stack);
        }

        !!tree.right && inOrder(tree.right);

        stack.pop();

      }
      
      inOrder(this);      
    }

    
    // Find All common ancestor of two nodes in a binary tree.
    // Youtube - https://www.youtube.com/watch?v=qjD-CmuC0MQ
    /**
     * Step1- Traverse In order 
     * Step2- Search value1 and Value2 in the tree
     * Step3 - If value1 and value2 found in sub tree of any node.. Push that node in the stack 
     */
    allCommonAncestor(tree, value1, value2) {
      const stack = [];
      const checkValueInTree = (tree, value) => {
        if(!tree) return null;
        if(tree.value === value) return true;
        return (!!tree.left && checkValueInTree(tree.left, value)) ||
               (!!tree.right && checkValueInTree(tree.right, value));
      }

      const recursive = (tree, value1, value2) => {
        if(!tree) return null;
        !!tree.left && recursive(tree.left, value1, value2);
        !!tree.right && recursive(tree.right, value1, value2);

        if(checkValueInTree(tree, value1) && checkValueInTree(tree, value2)) {
          stack.push(tree.value);
        }
      }
      recursive(tree, value1, value2);
      return stack;
    }

    // Find lowest common ancestor of two nodes in a binary tree. - postOrderTraversal
    //Youtube -  https://www.youtube.com/watch?v=F-_1sbnPbWQ

    // Step1 - Search two node in Binary tree
    // Step2 - If (node found) 
    //              return node;
    //         else 
    //              return null
    // Step3 - IF - When some node receives both left and right as not null  
    //.         then it is the LCA
    //         else - return what it receives

    lowestCommonAncestor(tree, value1, value2) {
      if(!tree) return null;
      if(tree.value === value1 || tree.value === value2) {
        return tree;
      }
      const left = this.lowestCommonAncestor(tree.left, value1, value2);
      const right = this.lowestCommonAncestor(tree.right, value1, value2);

      if(left && right) {
        return tree;
      }
      return !!left ? left : right;
    }

     //Nodes having 'K' leaves in its SubTree Algorithm - postOrderTraversal
     // https://www.youtube.com/watch?v=u2O11mengx8
    nodeHavingKLeaves(tree, k, count) {
      if(!tree) return 0;
      if (!tree.left && !tree.right) {
        return !!count ? ++count : 1;
      }
      const left =  this.nodeHavingKLeaves(tree.left, k, count) || 0;
      const right = this.nodeHavingKLeaves(tree.right, k, count) || 0;
      if (left + right === k) {
        console.log(tree.value);
      }
      return left + right;
    }

    heightOfABinaryTree(tree) {
      const stack = [];
      const recursive = (tree, count) => {
          if(!tree) return null;
          if(!tree.left && !tree.right) {
            stack.push(count);
          }
          !!tree.left && recursive(tree.left, count+1);
          !!tree.right && recursive(tree.right, count+1);
      }
      recursive(tree, 1);
      return Math.max.apply(null, stack);
    }

    // https://www.youtube.com/watch?v=ey7DYc9OANo 

    diameterOfBinaryTree(tree) {
      if(!tree) return 0;
      const leftHeight = this.heightOfABinaryTree(tree.left);
      const rightHeight = this.heightOfABinaryTree(tree.right);
      const leftDiameter = this.diameterOfBinaryTree(tree.left);
      const rightDiameter = this.diameterOfBinaryTree(tree.right);

      const rootNodeDiameter = leftHeight + rightHeight + 1;
      const subTreeDiameter = Math.max(leftDiameter, rightDiameter);
      const finalDiameter = Math.max(rootNodeDiameter, subTreeDiameter);
      return finalDiameter;
    }


    //Print Root to Leaf Path with Given sum(Print all K-Sum paths) in a given Binary Tree
    //Print all K-sum paths in the given Binary tre
    printRootToLeafPathWithSum() {

    }

    //Level Order Traversal of a Binary Tree (level by level and as a whole).
    //Explanation in detail for both representations of level order traversal.

    //Level Order Traversal
    levelOrderTraverse(tree) {
      const queue = [tree, null];
      let level = [];
      while(queue.length) {
        let currentNode = queue.shift();
        if(currentNode === null) {
          console.log(level);
          level = [];
          queue.push(null);
          if(queue[0] === null) {
            break;
          }
        } else {
          level.push(currentNode.value);
          !!currentNode.left && queue.push(currentNode.left);
          !!currentNode.right && queue.push(currentNode.right);
        }
      }
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


    freeNode() {

    }

    deleteBinaryTreeAllNodes() {

    }


    isTwoBinaryIsomorphic() {

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


var tree1 = new BinarySearchTree('a');
tree1.left = new BinarySearchTree('b');
tree1.right = new BinarySearchTree('c');

var tree2 = new BinarySearchTree('a');
tree2.left = new BinarySearchTree('c');
tree2.right = new BinarySearchTree('b');

var tree3 = new BinarySearchTree('a');
tree3.left = new BinarySearchTree('c');
tree3.right = new BinarySearchTree('b');



console.log("Tree.isMirror() => ", myBST.isMirror(tree1, tree2));
console.log("Tree.isMirror() => ", myBST.isMirror(tree2, tree3));
console.log("Tree.isIdentical() => ", myBST.isIdentical(tree2, tree3));
console.log("Tree.isIdentical() => ", myBST.isIdentical(tree1, tree2));


var tree4 = new BinarySearchTree('c');
tree4.left = new BinarySearchTree('f');
tree4.right = new BinarySearchTree('g');

tree1.left.left = new BinarySearchTree('d');
tree1.left.right = new BinarySearchTree('e');

tree1.right.left = new BinarySearchTree('f');
tree1.right.right = new BinarySearchTree('g');

console.log(" \n Tree2 is subTree of Tree1 =>  false = ", myBST.isSubTree(tree1, tree2));
console.log("Tree3 is subTree of Tree1 =>  false = ", myBST.isSubTree(tree1, tree3));
console.log("Tree2 is subTree of Tree3 =>  true = ", myBST.isSubTree(tree2, tree3));
console.log("Tree4 is subTree of Tree1 =>  true = ", myBST.isSubTree(tree1, tree4));

console.log(`\n\n Example 1 BST1 is isSubTreeTwoBST of BST2 =>  false = `, myBST.isSubTreeTwoBST(BST1, BST2));
console.log(`\n Example 2 ${BST1.left.left.value} is isSubTreeTwoBST of BST1 =>  true = `, myBST.isSubTreeTwoBST(BST1, BST1.left.left));
console.log(`\n Example 3 ${BST1.right.value} is isSubTreeTwoBST of BST1 =>  true = `, myBST.isSubTreeTwoBST(BST1, BST1.right));


console.log(`\n BST1.sumOfAllNodes() = ${BST1.sumOfAllNodes()} \n`);

console.log(`\n BST1.isSumTree() false = ${BST1.isSumTree()} \n`);


var sumTree = new BinarySearchTree(56);
    sumTree.left = new BinarySearchTree(13);
    sumTree.right = new BinarySearchTree(15);

    sumTree.left.left = new BinarySearchTree(5);
    sumTree.left.right = new BinarySearchTree(3);

    sumTree.left.left.left = new BinarySearchTree(3);
    sumTree.left.left.right = new BinarySearchTree(2);

    sumTree.right.left = new BinarySearchTree(9);
    sumTree.right.right = new BinarySearchTree(3);
    sumTree.right.right.left = new BinarySearchTree(2);
    sumTree.right.right.right = new BinarySearchTree(1);

console.log(`\n sumTree.isSumTree() true = ${sumTree.isSumTree()} \n`);

console.log(`\n myBST.printLeafNodesTraversal() [ 1,4,7,9 ] = ${myBST.printLeafNodesTraversal()} \n`);
console.log(`\n sumTree.printLeafNodesTraversal() [ 3,2,3,9,2,1 ] = ${sumTree.printLeafNodesTraversal()} \n`);
console.log(`\n BST1.printLeafNodesTraversal() [ 9,14,19,67,76 ] = ${BST1.printLeafNodesTraversal()} \n`);


console.log(`\n myBST.printLeafNodesRecursive() [ 1,4,7,9 ] = ${myBST.printLeafNodesRecursive()} \n`);
console.log(`\n sumTree.printLeafNodesRecursive() [ 3,2,3,9,2,1 ] = ${sumTree.printLeafNodesRecursive()} \n`);
console.log(`\n BST1.printLeafNodesRecursive() [ 9,14,19,67,76 ] = ${BST1.printLeafNodesRecursive()} \n`);


BST1.allRootToLeafPath();


console.log(`\n LCA (12, 23) --> 17 = ${BST1.lowestCommonAncestor(BST1, 12, 23).value} \n`);
console.log(`\n LCA (12, 9) --> 12 = ${BST1.lowestCommonAncestor(BST1, 12, 9).value} \n`);
console.log(`\n LCA (9, 67) --> 50 = ${BST1.lowestCommonAncestor(BST1, 9, 67).value} \n`);


console.log(`\n ACA (17, 72) --> 50 = ${BST1.allCommonAncestor(BST1, 17, 72)} \n`);
console.log(`\n ACA (9, 14) --> 12, 17, 50 = ${BST1.allCommonAncestor(BST1, 9, 14)} \n`);
console.log(`\n ACA (9, 19) --> 17, 50 = ${BST1.allCommonAncestor(BST1, 9, 19)} \n`);

BST1.nodeHavingKLeaves(BST1, 1); // 23, 54
console.log("\n");
BST1.nodeHavingKLeaves(BST1, 2); // 12, 72
console.log("\n");
BST1.nodeHavingKLeaves(BST1, 3); // 17
console.log("\n");

BST1.nodeHavingKLeaves(BST1, 4); // No node
console.log("\n");


console.log(`\n heightOfABinaryTree = 4 = ${BST1.heightOfABinaryTree(BST1)} \n`);
console.log(`\n heightOfABinaryTree = 7 = ${BST2.heightOfABinaryTree(BST2)} \n`);


BST1.levelOrderTraverse(BST1);
console.log("\n");

console.log(`\n diameterOfBinaryTree = 7 = ${BST1.diameterOfBinaryTree(BST1)} \n`);



