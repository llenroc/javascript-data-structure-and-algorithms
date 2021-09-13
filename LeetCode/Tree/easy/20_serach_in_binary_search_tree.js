// https://leetcode.com/problems/search-in-a-binary-search-tree/
// 700. Search in a Binary Search Tree
/*
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

 

Example 1:


Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
Example 2:


Input: root = [4,2,7,1,3], val = 5
Output: []
 

Constraints:

The number of nodes in the tree is in the range [1, 5000].
1 <= Node.val <= 107
root is a binary search tree.
1 <= val <= 107
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(!root) return null;
    if(root.val === val) return root;
    if(root.val > val) return  searchBST(root.left, val);
    if(root.val <= val) return  searchBST(root.right, val);
};

var root = [4,2,7,1,3], val = 2;
root = createCompleteBinaryTreeFromArray(root);
console.log(searchBST(root,val)); // [2,1,3]
console.log("\n");

root = [4,2,7,1,3], val = 5;
root = createCompleteBinaryTreeFromArray(root);
console.log(searchBST(root,val)); // []
console.log("\n");

root = [18,2,22,null,null,null,63,null,84,null,null], val = 63;
root = createCompleteBinaryTreeFromArray(root);
console.log(searchBST(root,val)); // [63,null,84]