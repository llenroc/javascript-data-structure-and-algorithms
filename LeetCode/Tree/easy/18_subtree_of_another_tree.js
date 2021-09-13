// https://leetcode.com/problems/subtree-of-another-tree/
// 572. Subtree of Another Tree

/*
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

 

Example 1:


Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
Example 2:


Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
 

Constraints:

The number of nodes in the root tree is in the range [1, 2000].
The number of nodes in the subRoot tree is in the range [1, 1000].
-104 <= root.val <= 104
-104 <= subRoot.val <= 104
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// Find subRoot in Root tree
// If exists 
    // Return true - if subTree is same 
    // Else return false;
// Eles false

var isSubtree = function(root, subRoot) {
  // Important  -> Nodes can be duplicated in Root node
    const matchingNode = [];
    if(!root && !subRoot)  return true;
    const findNodeInRoot = (root, subRoot) => {
      if(!root) return null;
      if(root.val === subRoot.val) matchingNode.push(root);
      if(!!root.left) findNodeInRoot(root.left, subRoot);
      if(!!root.right) findNodeInRoot(root.right, subRoot);
    }

    const isIdentical = (p, q) => {
      if(!p && !q) return true;
      if((p && !q) || (!p && q)) return false;
      return (p.val === q.val) &&
             isIdentical(p.left, q.left) &&
             isIdentical(p.right, q.right); 
    }

    findNodeInRoot(root, subRoot);
    return matchingNode.some(node => isIdentical(node, subRoot));

};


var root = [3,4,5,1,2], subRoot = [4,1,2];
root = createCompleteBinaryTreeFromArray(root);
subRoot = createCompleteBinaryTreeFromArray(subRoot);
console.log(isSubtree(root, subRoot)); // true
console.log("\n");


root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2];
root = createCompleteBinaryTreeFromArray(root);
subRoot = createCompleteBinaryTreeFromArray(subRoot);
console.log(isSubtree(root, subRoot)); // false

root = [1,1], subRoot = [1];
root = createCompleteBinaryTreeFromArray(root);
subRoot = createCompleteBinaryTreeFromArray(subRoot);
console.log(isSubtree(root, subRoot)); // true

