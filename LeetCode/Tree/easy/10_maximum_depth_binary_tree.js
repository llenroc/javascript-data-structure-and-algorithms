// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// 104. Maximum Depth of Binary Tree

/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
Example 3:

Input: root = []
Output: 0
Example 4:

Input: root = [0]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
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

var p = [3,9,20,null,null,15,7];
p = createCompleteBinaryTreeFromArray(p);
console.log(maxDepth(p)); // 3

p = [1,null,2];
p = createCompleteBinaryTreeFromArray(p);
console.log(maxDepth(p)); // 2

p = [];
p = createCompleteBinaryTreeFromArray(p);
console.log(maxDepth(p)); // 0

p = [0];
p = createCompleteBinaryTreeFromArray(p);
console.log(maxDepth(p)); // 1