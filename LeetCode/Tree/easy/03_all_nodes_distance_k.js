// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree
// Solution - https://www.youtube.com/watch?v=3sv9yF1xecQ 

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
// Output: [7,4,1]
// Explanation: The nodes that are a distance 2 from the target node (with val 5) have vals 7, 4, and 1.

class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
   inOrderTraversal() {
        const traverse = (tree) => {
            if (tree == null) {
                return;
            }
            traverse(tree.left);
            console.log(tree.val);
            traverse(tree.right);
        }
        traverse(this);
   }
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

//inorder dfs
var convertToGraph = function(node, adjList) {
    if (!node) return;
    convertToGraph(node.left, adjList);
    
    let neighbors = [];
    
    // If node already exist in adjList, get the list of neighbors
    if (adjList.has(node.val)) {
        neighbors = adjList.get(node.val);   
    }
    
    if (node.left) {
        neighbors.push(node.left.val);
        let leftNeighbors = adjList.get(node.left.val) || [];
        leftNeighbors.push(node.val);
        adjList.set(node.left.val, leftNeighbors);
    }

    if (node.right) {
        neighbors.push(node.right.val);
        let rightNeighbors = adjList.get(node.right.val) || [];
        rightNeighbors.push(node.val);
        adjList.set(node.right.val, rightNeighbors);
    }
        
    
    adjList.set(node.val, neighbors);
    
    convertToGraph(node.right, adjList);
}

var distanceK = function(root, target, k) {
    root = createCompleteBinaryTreeFromArray(root);
     
    let adjList = new Map();
    
    //O(n) to traverse
    convertToGraph(root, adjList);
    
    //bfs
    let queue = [[target, 0]];
    let result = [];
    let visited = new Set();
    
    while (queue.length > 0) {
        let [node, level] = queue.shift();
  
        if (!visited.has(node)) {
            if (level === k) {
                result.push(node);
            }

            let neighbors = adjList.get(node);

            for (const neighbor of neighbors) {
                queue.push([neighbor, level+1]);
            } 
            
            visited.add(node);
        }
    }
    
    return result;
};

const inputArray = [3,5,1,6,2,0,8,null,null,7,4];
console.log("Solution 3 = ", distanceK(inputArray, 5, 2));
