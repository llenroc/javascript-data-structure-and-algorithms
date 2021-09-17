/**
 * UnionFind - Quick Find - Disjoint Set
 * 
 * constructor - O(n)
 * find - O(1)
 * unionSet - O(n)
 * connected - O(1)
 * 
 * Note: N is the number of vertices in the graph.
 * 
 *  Array Value. -> [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ].  <-- Parent Vertex 
 *  Array Index. ->   0. 1. 2. 3. 4. 5. 6. 7. 8. 9.    <-- Vertex 
 * 
 */

class UnionFind {
  constructor(size) {
    this.root = new Array(size);
    for(let i = 0; i < size; i++){
      this.root[i] = i;
    }
  }

  /**
   * @description find root node for the given vertice 
   * @param {number} x 
   * @returns {number} Parent of the input vertice
   * @timeComplexity O(1)
   */
  find(x) {
    return this.root[x];
  }

  /**
   * @description check if two given vertices are connected or not 
   * @param {number} x, {number} y 
   * @returns {boolean} 
   *    true - If vertices x and y are connected 
   *    false - If vertices x and y are not connected
   * @timeComplexity O(1)
   */
  connected(x, y) {
    return this.find(x) === this.find(y);
  }


  /**
   * @description connect two vertices by making their root to same vertice 
   * @param {number} x, {number} y 
   * @returns undefined
   * @timeComplexity O(n)
   */
  unionSet(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if(rootX !== rootY) {
      for (let i = 0; i < this.root.length; i++) {
        if(this.root[i] === rootY){
          this.root[i] = rootX;
        }
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


