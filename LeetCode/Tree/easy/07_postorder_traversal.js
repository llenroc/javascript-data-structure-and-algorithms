// https://leetcode.com/problems/binary-tree-postorder-traversal/
// 145. Binary Tree Postorder Traversal

/*
Given the root of a binary tree, return the postorder traversal of its nodes' values.


Example 1:

Input: root = [1,null,2,3]
Output: [3,2,1]

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
Output: [2,1]
 

Constraints:

The number of the nodes in the tree is in the range [0, 100].
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
// recursive solution
var postorderTraversal = function(root) {
    root = createCompleteBinaryTreeFromArray(root);
    const results = [];
    const dfs = (root) => {
      if(root !== null) {
        !!root.left && dfs(root.left);
        !!root.right && dfs(root.right);
        results.push(root.val);
      }
    }
    dfs(root);
    return results;
};

console.log(postorderTraversal([1,null,2,3])); // [3,2,1]
console.log(postorderTraversal([])); // []
console.log(postorderTraversal([1])); // [1]
console.log(postorderTraversal([1,2])); // [2,1]
console.log(postorderTraversal([1,null,2])); // [2,1]
console.log("\n");


// iterative solution
// Push root node, root.right node and root.left node to stack if not null.
// Mark node as visited if we have pushed rigth and left node of any given node to stack.
// Run wihle loop till stack is not empty
  // Pop node from the stack 
  // if node is not visited, push node, node.left and node.right to stack
  // if node is visited, push value to results
var postorderTraversal = function(root) {
    root = createCompleteBinaryTreeFromArray(root);
    const addNodesToStack = (root, stack, visited) => {
      if(root !== null) {
        stack.push(root);
        !!root.right && stack.push(root.right);
        !!root.left && stack.push(root.left);
        visited.add(root);
      }
    }
    const results = [];
    const stack = [];
    const visited = new Set();
    addNodesToStack(root, stack, visited);
    
    while(stack.length) {
      const top = stack.pop();
      if(!visited.has(top)) {
          addNodesToStack(top, stack, visited);
      } else {
        results.push(top.val);
      }
    }
    
    return results;
};

console.log(postorderTraversal([1,null,2,3])); // [3,2,1]
console.log(postorderTraversal([])); // []
console.log(postorderTraversal([1])); // [1]
console.log(postorderTraversal([1,2])); // [2,1]
console.log(postorderTraversal([1,null,2])); // [2,1]
console.log("\n");