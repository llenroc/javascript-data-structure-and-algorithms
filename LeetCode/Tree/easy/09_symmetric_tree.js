// https://leetcode.com/problems/symmetric-tree/
// 101. Symmetric Tree

/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 

Follow up: Could you solve it both recursively and iteratively?

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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// recursive
var isSymmetric = function(root) {
    const isMirror = (p,q) => {
      if(!p && !q) return true;
      if(!p || !q) return false;
      return p.val === q.val &&
            isMirror(p.left, q.right) &&
            isMirror(p.right, q.left);
    }
    if(!root) return true;
    if((root.left && !root.right) || (!root.left && root.right)) return false;
    return isMirror(root.left, root.right);      
};

var p = [1,2,2,3,4,4,3];
p = createCompleteBinaryTreeFromArray(p);
console.log(isSymmetric(p)); // true

var p = [1,2,2,null,3,null,3];
p = createCompleteBinaryTreeFromArray(p);
console.log(isSymmetric(p)); // false

var p = [1];
p = createCompleteBinaryTreeFromArray(p);
console.log(isSymmetric(p)); // true

