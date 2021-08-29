// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree
// Solution - https://www.youtube.com/watch?v=3sv9yF1xecQ 

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
// Output: [7,4,1]
// Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
   inOrderTraversal() {
        const traverse = (tree) => {
            if (tree == null) {
                return;
            }
            traverse(tree.left);
            console.log(tree.value);
            traverse(tree.right);
        }
        traverse(this);
   }
}

function binarySearch(tree, value) {
  if(!tree) return null;
  if(tree.value === value) return tree;
  if(!!tree.left) return binarySearch(tree.left, value);
  if(!!tree.right) return binarySearch(tree.right, value);
}

function createCompleteBinaryTreeFromArray(array) {  
  const traverseAndReplace = (root, i) => {
    if(i < array.length && array[i] !== null) {
      root = new BinaryTree(array[i]);
      root.left = traverseAndReplace(root.left, (2 * i + 1));
      root.right = traverseAndReplace(root.right, (2 * i + 2));
    }
    return root;
  }
  return traverseAndReplace(null, 0);;
}


/**

//Solution - 1  | Annotate Parent


If we know the parent of every node x, we know all nodes that are distance 1 from x. We can then perform a breadth first search from the target node to find the answer.

Algorithm

We first do a depth first search where we annotate every node with information about it's parent.

After, we do a breadth first search to find all nodes a distance K from the target.

*/

const distanceK1 = function(root, target, k) {
  const hashMap = new Map();
  const dfs = (node, parent = null) => {
    if(!!node) {
      hashMap.set(node, parent);
      dfs(node.left, node);
      dfs(node.right, node);
    }
  }
  dfs(root);

  const queue = [null, target];
  const visited = new Set();
  visited.add(target.value);
  visited.add(null);

  let dist = 0;
  while(queue.length > 0) {
    const node = queue.shift();
    if(node === null) {
      if(dist == k) {
        const result = [];
        for(const item of queue) {
          result.push(item.value);
        }
        return result;
      }
      queue.push(null);
      dist++;
    }
    else {
      if(!!node.left && !visited.has(node.left.value)) {
        visited.add(node.left.value);
        queue.push(node.left);
      }
      if(!!node.right && !visited.has(node.right.value)) {
        visited.add(node.right.value);
        queue.push(node.right);
      }
      const parent = hashMap.get(node);
      if(!!parent && !visited.has(parent.value)) {
        visited.add(parent.value);
        queue.push(parent);
      }
    }
  }
}

const binaryTree = createCompleteBinaryTreeFromArray([3,5,1,6,2,0,8,
null,null,7,4]);
const targetNode = binarySearch(binaryTree, 5);
console.log("Solution 1 = ", distanceK1(binaryTree, targetNode, 2));


/**

//Solution - 2  |  Percolate Distance


From root, say the target node is at depth 3 in the left branch. It means that any nodes that are distance K - 3 in the right branch should be added to the answer.

Algorithm

Traverse every node with a depth first search dfs. We'll add all nodes x to the answer such that node is the node on the path from x to target that is closest to the root.

To help us, dfs(node) will return the distance from node to the target. Then, there are 4 cases:

Case 1 - If node == target, then we should add nodes that are distance K in the subtree rooted at target.

Case 2 - If target is in the left branch of node, say at distance L+1, then we should look for nodes that are distance K - L - 1 in the right branch.

Case 3 - If target is in the right branch of node, the algorithm proceeds similarly.

Case 4 - If target isn't in either branch of node, then we stop.

In the above algorithm, we make use of the auxillary function subtree_add(node, dist) which adds the nodes in the subtree rooted at node that are distance K - dist from the given node.
*/


// Time complexity -> O(N)
const distanceK = function(root, target, k) {
  const binaryTree = createCompleteBinaryTreeFromArray(root);
  const result = [];
  const subtree_add = (node, dist) => {
    if(!node)
      return;
    else if (dist === k) 
      result.push(node.value);
    else {
      subtree_add(node.left, dist + 1);
      subtree_add(node.right, dist + 1);
    }
  }
  const dfs = (node) => {
    if (!node){
      return -1;
    }
    else if (node.value === target) {
      subtree_add(node, 0);
      return 1;
    }
    else {
      const left = dfs(node.left);
      const right = dfs(node.right);
      if (left !== -1) {
        if(left === k) result.push(node.value);
        subtree_add(node.right, left+1);
        return left+1;
      }
      else if (right !== -1) {
        if(right === k) result.push(node.value);
        subtree_add(node.left, right+1);
        return right+1;
      }
      else {
        return -1;
      }
    } 
  }

  dfs(binaryTree);
  return result;
}

console.log("Solution 2 = ", distanceK([3,5,1,6,2,0,8,null,null,7,4], 5, 2));