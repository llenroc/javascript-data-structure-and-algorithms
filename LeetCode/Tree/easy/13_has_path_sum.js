// https://leetcode.com/problems/path-sum/
// 112. Path Sum

/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

 

Example 1:


Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Example 2:


Input: root = [1,2,3], targetSum = 5
Output: false
Example 3:

Input: root = [1,2], targetSum = 0
Output: false
 

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    const sumArray = [];

    const recursive = (root, sum) => {
      if(!root) return 0;
      
      sum += root.val;
      if(!root.left && !root.right) {
        sumArray.push(sum);
      }
      !!root.left && recursive(root.left, sum);
      !!root.right && recursive(root.right, sum);
    }
    recursive(root, 0);
    console.log(`sumArray = ${sumArray}`);
    return sumArray.indexOf(targetSum) !== -1;
};

var root = [5,4,8,11,null,13,4,7,2,null,null,null,1],  targetSum = 22;
root = createCompleteBinaryTreeFromArray(root);
console.log(hasPathSum(root, targetSum)); // true

root = [1,2,3],  targetSum = 5;
root = createCompleteBinaryTreeFromArray(root);
console.log(hasPathSum(root, targetSum)); // false

root = [1,2],  targetSum = 0;
root = createCompleteBinaryTreeFromArray(root);
console.log(hasPathSum(root, targetSum)); // false