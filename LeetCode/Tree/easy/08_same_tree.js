// https://leetcode.com/problems/same-tree/
// 100. Same Tree

/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false
 

Constraints:

The number of nodes in both trees is in the range [0, 100].
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// If both tree are null => return true
// If one if the tree is null => return false
// If first tree value is equal to second tree value and 
    // left node of p and q are same and
    // right node of p and q are same tree
var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(!p || !q) return false;
    return p.val === q.val &&
           isSameTree(p.left, q.left) &&
           isSameTree(p.right, q.right);

};

var p = [1,2,3], q = [1,2,3];
p = createCompleteBinaryTreeFromArray(p);
q = createCompleteBinaryTreeFromArray(q);
console.log(isSameTree(p,q)); // true

p = [1,2], q = [1,null,2];
p = createCompleteBinaryTreeFromArray(p);
q = createCompleteBinaryTreeFromArray(q);
console.log(isSameTree(p,q)); // false

p = [1,2,1], q = [1,1,2];
p = createCompleteBinaryTreeFromArray(p);
q = createCompleteBinaryTreeFromArray(q);
console.log(isSameTree(p,q)); // false