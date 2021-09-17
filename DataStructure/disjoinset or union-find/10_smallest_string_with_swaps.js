// https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3913/
// Smallest String With Swaps

/*
You are given a string s, and an array of pairs of indices in the string pairs where pairs[i] = [a, b] indicates 2 indices(0-indexed) of the string.

You can swap the characters at any pair of indices in the given pairs any number of times.

Return the lexicographically smallest string that s can be changed to after using the swaps.

 

Example 1:

Input: s = "dcab", pairs = [[0,3],[1,2]]
Output: "bacd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[1] and s[2], s = "bacd"
Example 2:

Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]
Output: "abcd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[0] and s[2], s = "acbd"
Swap s[1] and s[2], s = "abcd"
Example 3:

Input: s = "cba", pairs = [[0,1],[1,2]]
Output: "abc"
Explaination: 
Swap s[0] and s[1], s = "bca"
Swap s[1] and s[2], s = "bac"
Swap s[0] and s[1], s = "abc"
 

Constraints:

1 <= s.length <= 10^5
0 <= pairs.length <= 10^5
0 <= pairs[i][0], pairs[i][1] < s.length
s only contains lower case English letters.

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
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    //Create unionFind for the given string 
    const n = s.length;
    const uf = new UnionFind(n);
    for(let [A, B] of pairs) {
      uf.unionSet(A, B);
    }

    // Create grouping from unionFind 
    const groups = {};
    for (let i=0; i<n; i++) {
        let k = uf.find(i)
        groups[k] = groups[k] || [];
        groups[k].push(i);
    }

    // Split string to create array
    // Take each grouping one by one 
    // Sort the grouping in lexicographically
    // Replace value in splitted str array with sorted grouping 
    // combine the final result
    let res = s.split('');
    for (let key in groups) {
        let vals = groups[key];
        let sorted = vals.slice();
        sorted.sort((i1, i2) => s[i1].localeCompare(s[i2]));
        for (let i=0; i<vals.length; i++) {
            res[vals[i]] = s[sorted[i]]
        }
    }

    return res.join('');
};

// var s = "dcab", pairs = [[0,3],[1,2]];
// console.log(smallestStringWithSwaps(s, pairs)); // "bacd"

s = "dcab", pairs = [[0,3],[1,2],[0,2]];
console.log(smallestStringWithSwaps(s, pairs)); // "abcd"

// s = "cba", pairs = [[0,1],[1,2]];
// console.log(smallestStringWithSwaps(s, pairs)); // "abc"

