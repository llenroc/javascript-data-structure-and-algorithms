// https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3916/
// Optimize Water Distribution in a Village
// LeetCode 1168. Optimize Water Distribution in a Village Explanation and Solution

/*
There are n houses in a village. We want to supply water for all the houses by building wells and laying pipes.

For each house i, we can either build a well inside it directly with cost wells[i - 1] (note the -1 due to 0-indexing), or pipe in water from another well to it. The costs to lay pipes between houses are given by the array pipes, where each pipes[j] = [house1j, house2j, costj] represents the cost to connect house1j and house2j together using a pipe. Connections are bidirectional.

Return the minimum total cost to supply water to all houses.

 

Example 1:

Input: n = 3, wells = [1,2,2], pipes = [[1,2,1],[2,3,1]]
Output: 3
Explanation: 
The image shows the costs of connecting houses using pipes.
The best strategy is to build a well in the first house with cost 1 and connect the other houses to it with cost 2 so the total cost is 3.


Example 2:

Input: n = 2, wells = [1,1], pipes = [[1,2,1]]
Output: 2
 

Constraints:

2 <= n <= 104
wells.length == n
0 <= wells[i] <= 105
1 <= pipes.length <= 104
pipes[j].length == 3
1 <= house1j, house2j <= n
0 <= costj <= 105
house1j != house2j
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
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
// Sort the wells based on cost 
// Create UnionFind for n size
// Create grouping 
var minCostToSupplyWater = function(n, wells, pipes) {
    // In place of well cost, Lets assume there is an aribitary node 0 
    const uf = new UnionFind(n+1);

    // Create edges from the from this aribitary node  
    for(let i = 0; i < wells.length; i++) {
      pipes.push([0, i+1, wells[i]]);
    }

    pipes = pipes.sort((a,b) => a[2]-b[2]);
    let totalCost = 0;
    for (let [A, B, cost] of pipes) {
      const rootA = uf.find(A);
      const rootB = uf.find(B);
      // determine if we should add the new edge to the final MST
      if (uf.unionSet(A, B)) {
          totalCost += cost;
      }
    }
    return totalCost;
};


var n = 3, wells = [1,2,2], pipes = [[1,2,1],[2,3,1]]
console.log(minCostToSupplyWater(n, wells, pipes)); // 3

n = 2, wells = [1,1], pipes = [[1,2,1]];
console.log(minCostToSupplyWater(n, wells, pipes)); // 2

