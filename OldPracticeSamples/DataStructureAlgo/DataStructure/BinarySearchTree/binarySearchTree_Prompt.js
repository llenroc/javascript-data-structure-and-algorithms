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
    constructor() {
    }

    /* bsTree.insert(value)
    => bsTree (return for chaining purposes)
    Insert value into correct position within tree */
    insert() {

    }

   /*  bsTree.contains(value)
    => true/false
    Return true if value is in tree, false if not */
    contains() {

    }


    /* bsTree.traverseDepthFirst_inOrder(callback)
        => undefined
        Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
        Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order (hence the name). */
    traverseDepthFirst_inOrder() {

    }

    /* bsTree.traverseDepthFirst_preOrder(callback)
        => undefined
        Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes) */
    traverseDepthFirst_preOrder() {

    }

    /* bsTree.traverseDepthFirst_postOrder(callback)
    => undefined
    Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes) */
    traverseDepthFirst_postOrder() {

    }

    traverseBreadthFirst() {

    }

    deleteMin() {

    }

    deleteMax() {

    }

    deleteNode() {

    }

    // true/false
    // A binary tree is full if every node has either zero or two children (no nodes have only one child)
    checkIfFull() {

    }

    checkIfBalanced() {

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