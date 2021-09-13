// https://leetcode.com/problems/binary-tree-paths/
// 257. Binary Tree Paths

/*
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

 

Example 1:


Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]
Example 2:

Input: root = [1]
Output: ["1"]
 

Constraints:

The number of nodes in the tree is in the range [1, 100].
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
 * @param {number} targetSum
 * @return {boolean}
 */
var binaryTreePaths = function(root) {
    const pathArray = [];

    const recursive = (root, str) => {
      if(!root) return 0;
      
      str += root.val;
      if(!root.left && !root.right) {
        pathArray.push(str);
      }
      !!root.left && recursive(root.left, `${str}->`);
      !!root.right && recursive(root.right, `${str}->`);
    }
    recursive(root, "");
    console.log(`pathArray = ${pathArray}`);
    return pathArray;
};

var root = [1,2,3,null,5];
root = createCompleteBinaryTreeFromArray(root);
console.log(binaryTreePaths(root)); // [ '1->2->5', '1->3' ]

root = [1];
root = createCompleteBinaryTreeFromArray(root);
console.log(binaryTreePaths(root)); // [ '1' ]
