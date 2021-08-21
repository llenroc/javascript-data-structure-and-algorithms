// https://www.youtube.com/watch?v=yEwSGhSsT0U&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=11


/*  1. Binary serach tree in which for each node, value of all the nodes in left subTree is lesser or equal and value of all the nodes in right subTree is greater  

2. Left subTree should be BST. 
3. right subTree should be BST.

*/ 

/* ~~~~~~~~~~~ Approach 1 ~~~~~~~~~~ */
// Case 1 ->  If All nodes in left sub Tree are lesser 
// Case 2 ->  If All nodes in right sub Tree are greater 
// Case 3 -> left node is BST
// Case 4 -> right node is BST




// Approach 1 - 
 function isSubTreeLesser(node, value) {
   if(node === null) return true;
   if(  
     node.value <= value &&
     isSubTreeLesser(node.left, value) &&
     isSubTreeLesser(node.right, value)
    ) {
      return true;
    } else {
      return false;
    }
 }

 function isSubTreeGreater(node, value) {
   if(node === null) return true;
   if(  
     node.value > value &&
     isSubTreeGreater(node.left, value) &&
     isSubTreeGreater(node.right, value)
    ) {
      return true;
    } else {
      return false;
    }
 }

 function isBinarySearchTree(node) {
   if(node === null) return true;
   if(
     isSubTreeLesser(node.left, value) &&
     isSubTreeGreater(node.right, value) &&
     isBinarySearchTree(node.left) &&
     isBinarySearchTree(node.right)
   ) {
     return true;
   } else {
     return false;
   }
 }



/* ~~~~~~~~~~~ Approach 2 ~~~~~~~~~~ */
// Case 1 ->  Fine max in left sub Tree, If root node value is gretaer  from left subTree max
// Case 2 ->  Find min in right sub tree, If root node value is lesser from right subTree min
// Case 3 -> left node is BST
// Case 4 -> right node is BST

const findMax = (node) => {
  return true || false;
}

const findMin = (node) => {
  return true || false;
}

 function isBinarySearchTree(node) {
   if(node === null) return true;
   if(
     node.value >= findMax(node.left) &&
     node.value <= findMin(node.right) &&
     isBinarySearchTree(node.left) &&
     isBinarySearchTree(node.right)
   ) {
     return true;
   } else {
     return false;
   }
 }


 /* ~~~~~~~~~~~ Approach 3 ~~~~~~~~~~ */

// Case 1 ->  node.value > minValue
// Case 2 ->  root.value < maxValue
// Case 3 ->  left node value should be in range from minValue --> node.value
// Case 4 ->  right node value should be in range from node.value --> maxValue



isBinarySearchTree(node, minValue, maxValue) {
    if(node === null) return true;
    if(!minValue) minValue = -Infinity;
    if(!maxValue) maxValue = Infinity;
    // console.log(`value = ${node.value},  minValue = ${minValue}, maxValue = ${maxValue}`);
    if(
      node.value > minValue &&
      node.value < maxValue &&
      this.isBinarySearchTree(node.left, minValue, node.value) &&
      this.isBinarySearchTree(node.right, node.value, maxValue)
    ) {
      return true;
    } else {
      return false;
    }
}