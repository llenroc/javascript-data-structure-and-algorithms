// https://leetcode.com/problems/invert-binary-tree/
// 226. Invert Binary Tree

/*
Given the root of a binary tree, invert the tree, and return its root.

 

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function createCompleteBinaryTreeFromArray(arr) {   // [1,null,2,3]
  let root = null;
  let q = [];
  let i = 0;
  let t = arr[i] == null ? null : new TreeNode(arr[i]);
  root = t;
  q.push(root);
  i++;
  while (q.length && i < arr.length) {
      let t1 = q.shift();
      if (t1 != null) {
          t1.left = arr[i] == null ? null : new TreeNode(arr[i]);
          q.push(t1.left);
          i++;
          if (i >= arr.length) {
              break;
          }
          t1.right = arr[i] == null ? null : new TreeNode(arr[i]);
          q.push(t1.right);
          i++;
      }
  }
  return root;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// Push left nodes to stack till it reaches to null
// Run while loot till empty
// Pop top node 
    // If it has right node, push right node along with all its left node to stack
    // 
var invertTree = function(root) {
    if(!root) return null;
    const pushToStack = (root, stack) => {
      while (root !== null) {
        stack.push(root);
        root = root.left;
      }
    }
    const stack = [];
    pushToStack(root, stack); // stack =  [1,2]
    while(stack.length) {
      const top = stack.pop();
      if(top.right) {
        pushToStack(top.right, stack);
      }
      const temp = top.right;
      top.right = top.left;
      top.left = temp;
    }
    return root;
};

var root = [4,2,7,1,3,6,9];
root = createCompleteBinaryTreeFromArray(root);
console.log(invertTree(root)); // [4,7,2,9,6,3,1]
console.log("\n");

root = [2,1,3];
root = createCompleteBinaryTreeFromArray(root);
console.log(invertTree(root)); // [2,3,1]
console.log("\n");

root = [];
root = createCompleteBinaryTreeFromArray(root);
console.log(invertTree(root)); // []
console.log("\n");

root = [1,2];
root = createCompleteBinaryTreeFromArray(root);
console.log(invertTree(root)); // [1,null,2]
console.log("\n");

