// https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3910/
// https://leetcode.com/problems/graph-valid-tree/solution/
// https://leetcode.com/problems/graph-valid-tree/
// 261 Graph valid tree

/*
You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

Return true if the edges of the given graph make up a valid tree, and false otherwise.

Example 1:


Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true
Example 2:


Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
Output: false
 

Constraints:

1 <= 2000 <= n
0 <= edges.length <= 5000
edges[i].length == 2
0 <= ai, bi < n
ai != bi
There are no self-loops or repeated edges.
*/


// Tree definition - “a tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.”


// Simple UnionFind - quick Union implementation
class UnionFind {
  constructor(size) {
    this.root = new Array(size);
    for(let i = 0; i < size; i++){
      this.root[i] = i;
    }
  }

  find(x) {
    while(x !== this.root[x]){
      x = this.root[x];
    }
    return x;
  }


  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  // The union method, without any optimizations. It returns True if a
  // merge happened, False if otherwise.
  unionSet(x, y) {
    // Find the roots for A and B.
    const rootX = this.find(x);
    const rootY = this.find(y);
    // Check if A and B are already in the same set.
    if(rootX === rootY) {
      return false;
    }
    
    // Merge the sets containing A and B.
    this.root[rootY] = rootX;
    return true;
  }  
}



/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    // Condition 1: The graph must contain n - 1 edges.
    if (edges.length != n - 1) return false;
    
    // Condition 2: The graph must contain a single connected component.
    // Create a new UnionFind object with n nodes. 
    const unionFind = new UnionFind(n);
    // Add each edge. Check if a merge happened, because if it 
    // didn't, there must be a cycle.
    for (let edge of edges) {
        const A = edge[0];
        const B = edge[1];
        if (!unionFind.unionSet(A, B)) {
            return false;
        }
    }
    
    // If we got this far, there's no cycles!
    return true;
};

var n = 5, edges = [[0,1],[0,2],[0,3],[1,4]];
console.log(validTree(n, edges)); // true

n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]];
console.log(validTree(n, edges)); // false

n = 5, edges = [[0,1],[0,4],[1,4],[2,3]];
console.log(validTree(n, edges)); // false

