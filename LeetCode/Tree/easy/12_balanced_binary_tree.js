// https://leetcode.com/problems/balanced-binary-tree/
// 110. Balanced Binary Tree

/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true
 

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104
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
 * @return {number}
 */

var maxDepth = function(root) {
    if(!root) return 0;
    const heights = [];
    const recursive = (root, count) => {
      if(!root) return;
      if(!root.left && !root.right) heights.push(count);
      !!root.left && recursive(root.left, count+1);
      !!root.right && recursive(root.right, count+1);
    }
    recursive(root, 1);
    return Math.max.apply(null, heights);
};

var isBalanced = function(root) {
    if(!root) return true;
    const leftHeight = maxDepth(root.left);
    const rightHeight = maxDepth(root.right);
    return (leftHeight - rightHeight <= 1 && leftHeight - rightHeight >= -1 )&&
           isBalanced(root.left) &&
           isBalanced(root.right);
};

var p = [3,9,20,null,null,15,7];
p = createCompleteBinaryTreeFromArray(p);
console.log(isBalanced(p)); // true

p = [1,2,2,3,3,null,null,4,4];
p = createCompleteBinaryTreeFromArray(p);
console.log(isBalanced(p)); // false

p = [];
p = createCompleteBinaryTreeFromArray(p);
console.log(isBalanced(p)); // true

p = [0];
p = createCompleteBinaryTreeFromArray(p);
console.log(isBalanced(p)); // true

p = [1,null,2,null,3];
p = createCompleteBinaryTreeFromArray(p);
console.log(isBalanced(p)); // false