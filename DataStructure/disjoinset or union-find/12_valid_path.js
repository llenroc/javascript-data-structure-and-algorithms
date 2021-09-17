// https://leetcode.com/explore/learn/card/graph/619/depth-first-search-in-graph/3893/

// Find if Path Exists in Graph

/*
There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex start to vertex end.

Given edges and the integers n, start, and end, return true if there is a valid path from start to end, or false otherwise.

 

Example 1:


Input: n = 3, edges = [[0,1],[1,2],[2,0]], start = 0, end = 2
Output: true
Explanation: There are two paths from vertex 0 to vertex 2:
- 0 → 1 → 2
- 0 → 2
Example 2:


Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], start = 0, end = 5
Output: false
Explanation: There is no path from vertex 0 to vertex 5.
 

Constraints:

1 <= n <= 2 * 105
0 <= edges.length <= 2 * 105
edges[i].length == 2
0 <= ui, vi <= n - 1
ui != vi
0 <= start, end <= n - 1
There are no duplicate edges.
There are no self edges.
*/

class UnionFind {
  constructor(size) {
    // container to hold the group id for each member
    // Note: the index of member starts from 1,
    //   thus we add one more element to the container.
    this.root = new Array(size);
    this.rank = new Array(size);
    for(let i = 0; i < size; i++){
      this.root[i] = i;
      this.rank[i] = 1;
    }
  }

  /**
   * @description find root node for the given vertice 
   * @param {number} x 
   * @returns {number} Parent of the input vertice
   * @timeComplexity <= O(h) (less than or equal, worst case O(n))
   */
  find(x) {
    // Path compression changes
    if(x === this.root[x]) {
      return x;
    }
    return this.root[x] = this.find(this.root[x]);
  }

  /**
   * @description check if two given vertices are connected or not 
   * @param {number} x, {number} y 
   * @returns {boolean} 
   *    true - If vertices x and y are connected 
   *    false - If vertices x and y are not connected
   * @timeComplexity <= O(h) ( less than or equal, worst case O(n))
   */
  connected(x, y) {
    return this.find(x) === this.find(y);
  }


  /**
   * @description connect two vertices by making their root to same vertice 
   * @param {number} x, {number} y 
   * @returns undefined
   * @timeComplexity O(log(N))
   */
  unionSet(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX == rootY) {
        return false;
    }
    if(this.rank[rootX] > this.rank[rootY]) {
      this.root[rootY] = rootX;
    } else if(this.rank[rootX] < this.rank[rootY]) {
      this.root[rootX] = rootY;
    } else {
      // choose any one of them rootX or rootY 
      // We are choosing rootX and assigning to rootY
      this.root[rootY] = rootX;
      this.rank[rootX] += 1;
    }
    return true;
  }  
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function(n, edges, start, end) {
    const uf = new UnionFind(n);
    for(let [A, B] of edges) {
      uf.unionSet(A,B);
    }

    const rootStart = uf.find(start);
    const rootEnd = uf.find(end);

    return rootStart === rootEnd;
};


var n = 3, edges = [[0,1],[1,2],[2,0]], start = 0, end = 2;
console.log(validPath(n, edges, start, end)); // true


n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], start = 0, end = 5;
console.log(validPath(n, edges, start, end)); // false


