// https://leetcode.com/problems/binary-tree-inorder-traversal/
// 94. Binary Tree Inorder Traversal

/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [2,1]
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
 * @param {TreeNode} root
 * @return {number[]}
 */
// Recursive solution 
var inorderTraversal = function(root) {
    root = createCompleteBinaryTreeFromArray(root);
    const results = [];
    const dfs = (root) => {
      if(root !== null) {
        if(!!root.left) dfs(root.left);
        results.push(root.val);
        if(!!root.right) dfs(root.right);
      }
    }
    dfs(root);
    return results;
};

console.log(JSON.stringify(createCompleteBinaryTreeFromArray([1,null,2,3]))); // [ 1, 3, 2 ]
console.log(inorderTraversal([1,null,2,3])); // [1,3,2]
console.log(inorderTraversal([])); // []
console.log(inorderTraversal([1])); // [1]
console.log(inorderTraversal([1,2])); // [2,1]
console.log(inorderTraversal([1,null,2])); // [1,2]
console.log("\n");


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Iterative solution 
// Push all the left nodes to stack through pushLeftToStack
// Pop one by one each node and print 
// IF right node exist, push right node to  pushLeftToStack
var inorderTraversal1 = function(root) {
    root = createCompleteBinaryTreeFromArray(root);
    const pushLeftToStack = (tree, stack) => {
      let current = tree;
      while(current !== null) {
        stack.push(current);
        current = current.left;
      }
    }
    
    const results = [];
    const stack = [];
    pushLeftToStack(root, stack);
    while(stack.length) {
      let top = stack.pop();
      results.push(top.val);
      // If right exist,  Push to stacks
      if(top.right) {
        pushLeftToStack(top.right, stack);
      }
    }
    
    return results;
};

console.log(inorderTraversal1([1,null,2,3])); // [1,3,2]
console.log(inorderTraversal1([])); // []
console.log(inorderTraversal1([1])); // [1]
console.log(inorderTraversal1([1,2])); // [2,1]
console.log(inorderTraversal1([1,null,2])); // [1,2]