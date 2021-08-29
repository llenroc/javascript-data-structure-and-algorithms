// https://www.youtube.com/watch?v=k14dvCPsn3Q
// https://www.geeksforgeeks.org/construct-complete-binary-tree-given-array/

/**
 * 

 Construct a complete binary tree from given array in level order fashion | GeeksforGeeks

 Example1 -
 Input = [3,5,1,6,2,0,8,null,null,7,4]
 Output - 
            3
      5           1
  6      2      0   8
      7   4

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

const result = createCompleteBinaryTreeFromArray([1, 2, 3, 4, 5, 6, 6, 6, 6]);
result.inOrderTraversal();

console.log("\n")

const result1 = createCompleteBinaryTreeFromArray([3,5,1,6,2,0,8,null,null,7,4]);
result1.inOrderTraversal();

