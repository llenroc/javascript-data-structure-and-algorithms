// https://leetcode.com/problems/number-of-provinces/solution/
// Leetcode 547 - Number of provinces
// https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3845/

/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

 

Example 1:


Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
Example 2:


Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
 

Constraints:

1 <= n <= 200
n == isConnected.length
n == isConnected[i].length
isConnected[i][j] is 1 or 0.
isConnected[i][i] == 1
isConnected[i][j] == isConnected[j][i]

*/

//Solution. - Through UnionFind 

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
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    if(!isConnected || !isConnected.length) {
      return 0;
    }

    const n = isConnected.length;
    const uf = new UnionFind(n);
    for(let i = 0; i < n; i ++) {
      for (let j = 0; j < n; j++) {
        if(isConnected[i][j] === 1) {
          uf.unionSet(i,j);
        }
      }
    }

    return uf.getCount();
};

var isConnected = [[1,1,0],[1,1,0],[0,0,1]];
console.log(findCircleNum(isConnected)); // 2

isConnected = [[1,0,0],[0,1,0],[0,0,1]];
console.log(findCircleNum(isConnected)); // 3




