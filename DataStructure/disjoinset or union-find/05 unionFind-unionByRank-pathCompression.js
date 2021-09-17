/**
 * UnionFind - Quick Union - UnionByRank + path compression - Disjoint Set
 * 
 * constructor - O(N)
 * find - O(H)
 * unionSet - O(H)
 * connected - O(H)
 * 
 *  Note: N is the number of vertices in the graph. H is the height of the tree.
 * 
 *  Array Value. -> [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ].  <-- Root Vertex 
 *  Array Index. ->   0. 1. 2. 3. 4. 5. 6. 7. 8. 9.    <-- Vertex 
 * 
 */

class UnionFind {
  constructor(size) {
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
    }
  }  
}

const uf = new UnionFind(10);
console.log(uf); // { root: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] }

// 1-2-5-6-7,  3-8-9,  4
uf.unionSet(1, 2);
uf.unionSet(2, 5);
uf.unionSet(5, 6);
uf.unionSet(6, 7);
uf.unionSet(3, 8);
uf.unionSet(8, 9);

console.log(uf.connected(1,5)); // true
console.log(uf.connected(5,7)); // true
console.log(uf.connected(4,9)); // false

// 1-2-5-6-7 3-8-9-4
uf.unionSet(9, 4);
console.log(uf.connected(4,9)); // true

console.log(uf); // { root: [ 0, 1, 1, 3, 3, 1, 1, 1, 3, 3 ] }


