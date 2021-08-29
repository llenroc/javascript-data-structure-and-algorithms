// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], k = 3
// Output: [7,4]
// Explanation: The nodes that are a distance 3 from the root node (with value 3) have values 7, 4

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
    if(i < array.length && array[i] !== null) {
      root = new BinaryTree(array[i]);
      root.left = traverseAndReplace(root.left, (2 * i + 1));
      root.right = traverseAndReplace(root.right, (2 * i + 2));
    }
    return root;
  }
  return traverseAndReplace(null, 0);;
}

const distanceK = function(root, k) {
    const binaryTree = createCompleteBinaryTreeFromArray(root);
    const result = [];
    
    const recursive = (tree,  count) => {
       if(!tree) return;
       if(count > k) return;
       if(!tree.left && !tree.right && count === k) result.push(tree.value);
       if(!!tree.left) recursive(tree.left, count+1);
       if(!!tree.right) recursive(tree.right, count+1);
    }
    
    recursive(binaryTree, 0) ;
    return result;
};

console.log(distanceK([3,5,1,6,2,0,8,null,null,7,4], 3)); // [7,4]