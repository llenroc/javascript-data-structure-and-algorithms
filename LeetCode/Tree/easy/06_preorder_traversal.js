// https://leetcode.com/problems/binary-tree-preorder-traversal/
// 144. Binary Tree Preorder Traversal
/*

Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,2,3]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [1,2]
Example 5:


Input: root = [1,null,2]
Output: [1,2]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up: Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */
// Recursive solution
var preorderTraversal = function(root) {
    root = createCompleteBinaryTreeFromArray(root);
    const results = [];
    const dfs = (root) => {
      if(root !== null) {
        results.push(root.val);
        !!root.left && dfs(root.left);
        !!root.right && dfs(root.right);
      }
    }
    dfs(root);
    return results;
};

console.log(preorderTraversal([1,null,2,3])); // [1,2,3]
console.log(preorderTraversal([])); // []
console.log(preorderTraversal([1])); // [1]
console.log(preorderTraversal([1,2])); // [1,2]
console.log(preorderTraversal([1,null,2])); // [1,2]
console.log("\n");


// Iterative 
// Push first node to stack
// Run loop till stach is not empty
  // Pop top element from the stack
  // Push right child first and then push left child
var preorderTraversal = function(root) {
    root = createCompleteBinaryTreeFromArray(root);
    const results = [];
    const stack = [root];
    while(stack.length) {
      const top = stack.pop();
      if(top !== null){
        results.push(top.val);
        if(!!top.right) stack.push(top.right);
        if(!!top.left) stack.push(top.left);
      }
    }

    return results;
};

console.log(preorderTraversal([1,null,2,3])); // [1,2,3]
console.log(preorderTraversal([])); // []
console.log(preorderTraversal([1])); // [1]
console.log(preorderTraversal([1,2])); // [1,2]
console.log(preorderTraversal([1,null,2])); // [1,2]