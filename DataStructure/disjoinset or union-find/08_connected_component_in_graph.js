// https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3911/
// Number of Connected Components in an Undirected Graph

/*
You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.

 

Example 1:


Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2
Example 2:


Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1
 

Constraints:

1 <= n <= 2000
1 <= edges.length <= 5000
edges[i].length == 2
0 <= ai <= bi < n
ai != bi
There are no repeated edges.
*/


class UnionFind {
  constructor(size) {
    this.root = new Array(size);
    this.rank = new Array(size);
    this.count = size;
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
    if(rootX !== rootY) {
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

      // Number for provinces will decrease for every union
      this.count--;
    }
  }  

  getCount() {
    return this.count;
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    if(edges.length === 0) return n;
    const uf = new UnionFind(n);
    for(let edge of edges) {
      const [A, B] = edge;
      uf.unionSet(A,B);
    }
    return uf.getCount();
};


var n = 5, edges = [[0,1],[1,2],[3,4]];
console.log(countComponents(n, edges)); // 2 


n = 5, edges = [[0,1],[1,2],[2,3],[3,4]];
console.log(countComponents(n, edges)); // 1
