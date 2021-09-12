//https://leetcode.com/problems/diameter-of-binary-tree/
/*

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

*/



class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
   inOrderTraversal() {
        const traverse = (tree) => {
            if (tree == null) {
                return;
            }
            traverse(tree.left);
            console.log(tree.value);
            traverse(tree.right);
        }
        traverse(this);
   }
}

function createCompleteBinaryTreeFromArray(array) {  
  const traverseAndReplace = (root, i) => {
    if(i < array.length && array[i] !== null) { // compare with null other 0 will not come 
      root = new BinaryTree(array[i]);
      root.left = traverseAndReplace(root.left, (2 * i + 1));
      root.right = traverseAndReplace(root.right, (2 * i + 2));
    }
    return root;
  }
  return traverseAndReplace(null, 0);;
}

const result = createCompleteBinaryTreeFromArray([1,2,3]);




// Approach 2 -sameer ( bad complexity )
function heightOfABinaryTree(tree) {
  const stack = [];
  const recursive = (tree, count) => {
      if(!tree) return null;
      if(!tree.left && !tree.right) {
        stack.push(count);
      }
      !!tree.left && recursive(tree.left, count+1);
      !!tree.right && recursive(tree.right, count+1);
  }
  recursive(tree, 0);
  return Math.max.apply(null, stack);
}

// https://www.youtube.com/watch?v=ey7DYc9OANo 

function diameterOfBinaryTree(tree) {
  if(!tree) return 0;
  let leftHeight = this.heightOfABinaryTree(tree.left);
  let rightHeight = this.heightOfABinaryTree(tree.right);
  const leftDiameter = this.diameterOfBinaryTree(tree.left);
  const rightDiameter = this.diameterOfBinaryTree(tree.right);
  leftHeight = leftHeight >=0 ? leftHeight+1 : 0;
  rightHeight = rightHeight >=0 ? rightHeight+1 : 0;
  const rootNodeDiameter = leftHeight + rightHeight;
  const subTreeDiameter = Math.max(leftDiameter, rightDiameter);
  const finalDiameter = Math.max(rootNodeDiameter, subTreeDiameter);
  return finalDiameter;
}

console.log(JSON.stringify(result));
console.log(`height = ${heightOfABinaryTree(result)}`);
console.log(`height left = ${heightOfABinaryTree(result.left)}`);
console.log(`height right = ${heightOfABinaryTree(result.right)}`);
console.log(diameterOfBinaryTree(result));
