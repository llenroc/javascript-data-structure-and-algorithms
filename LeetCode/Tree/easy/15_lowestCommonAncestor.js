// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// 235. Lowest Common Ancestor of a Binary Search Tree


// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/submissions/
// 236. Lowest Common Ancestor of a Binary Tree
/*

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

Example 1:


Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
Example 2:


Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
Example 3:

Input: root = [2,1], p = 2, q = 1
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the BST.

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// Search P in left subTree
// Search q in right subTree

var lowestCommonAncestor = function(root, p, q) {
    if(!root) return;
    if(root.val === p.val || root.val === q.val) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if(left && right) return root;
    return !!left ? left : right;
};

var root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8;
root = createCompleteBinaryTreeFromArray(root);
p = new TreeNode(2);
q = new TreeNode(8);
console.log(lowestCommonAncestor(root, p, q)); // 6
console.log("\n");

root = [6,2,8,0,4,7,9,null,null,3,5];
p = new TreeNode(2);
q = new TreeNode(4);
root = createCompleteBinaryTreeFromArray(root);
console.log(lowestCommonAncestor(root, p, q)); // 2
console.log("\n");

root = [2,1];
p = new TreeNode(2);
q = new TreeNode(1);
root = createCompleteBinaryTreeFromArray(root);
console.log(lowestCommonAncestor(root, p, q)); // 2
console.log("\n");
