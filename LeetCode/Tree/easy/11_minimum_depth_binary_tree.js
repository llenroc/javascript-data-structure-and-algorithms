// https://leetcode.com/problems/minimum-depth-of-binary-tree/
// 111. Minimum Depth of Binary Tree

/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 2
Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
 

Constraints:

The number of nodes in the tree is in the range [0, 105].
-1000 <= Node.val <= 1000
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
var minDepth = function(root) {
    if(!root) return 0;
    const heights = [];
    const recursive = (root, count) => {
      if(!root) return;
      if(!root.left && !root.right) heights.push(count);
      !!root.left && recursive(root.left, count+1);
      !!root.right && recursive(root.right, count+1);
    }
    recursive(root, 1);
    return Math.min.apply(null, heights);
};

var p = [3,9,20,null,null,15,7];
p = createCompleteBinaryTreeFromArray(p);
console.log(minDepth(p)); // 2

p = [2,null,3,null,4,null,5,null,6];
p = createCompleteBinaryTreeFromArray(p);
console.log(minDepth(p)); // 5

p = [];
p = createCompleteBinaryTreeFromArray(p);
console.log(minDepth(p)); // 0

p = [0];
p = createCompleteBinaryTreeFromArray(p);
console.log(minDepth(p)); // 1