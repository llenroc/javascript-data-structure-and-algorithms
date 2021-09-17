// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
// 863. All Nodes Distance K in Binary Tree

/*
Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

You can return the answer in any order.

 

Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
Output: [7,4,1]
Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.
Example 2:

Input: root = [1], target = 1, k = 3
Output: []
 

Constraints:

The number of nodes in the tree is in the range [1, 500].
0 <= Node.val <= 500
All the values Node.val are unique.
target is the value of one of the nodes in the tree.
0 <= k <= 1000

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
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const result = [];
    const recursive = (root,  count) => {
       if(!root) return;
       if(count > k) return;
       if(root.val === target && count === k) result.push(root.value);
       if(!!root.left) recursive(root.left, count+1);
       if(!!root.right) recursive(root.right, count+1);
    }
    
    recursive(root, 0) ;
    return result;
};


var root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2;
root = createCompleteBinaryTreeFromArray(root);
target = createCompleteBinaryTreeFromArray(target);
console.log(distanceK(root, target, k)); // [7,4]



var root = [1], target = 1, k = 3;
root = createCompleteBinaryTreeFromArray(root);
target = createCompleteBinaryTreeFromArray(target);
console.log(distanceK(root, target, k)); // [7,4]