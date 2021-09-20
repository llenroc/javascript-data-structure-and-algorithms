// https://leetcode.com/explore/learn/card/graph/621/algorithms-to-construct-minimum-spanning-tree/3857/

// Min Cost to Connect All Points

/*
You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

 

Example 1:



Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20
Explanation:

We can connect the points as shown above to get the minimum cost of 20.
Notice that there is a unique path between every pair of points.
Example 2:

Input: points = [[3,12],[-2,5],[-4,1]]
Output: 18
Example 3:

Input: points = [[0,0],[1,1],[1,0],[-1,1]]
Output: 4
Example 4:

Input: points = [[-1000000,-1000000],[1000000,1000000]]
Output: 4000000
Example 5:

Input: points = [[0,0]]
Output: 0
 

Constraints:

1 <= points.length <= 1000
-106 <= xi, yi <= 106
All pairs (xi, yi) are distinct.

*/


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

  unionSet(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if(rootX === rootY) {
      return false;
    }
    if(rootX !== rootY) {
      this.root[rootY] = rootX;
    }
    return true;
  }  
}
const manhattanDistance = ([x1, y1], [x2, y2]) => {
    let x = x2 - x1;
    let y = y2 - y1;
    x = x < 0 ? -x : x;
    y = y < 0 ? -y : y; 
    return x + y;
}

/**
 * @param {number[][]} points
 * @return {number}
 */

/*
Steps -  Kruskal’s algorithm
1. Ascending Sort all edges by their weight.
2. Add edges in that order into the Minimum spanning tree. Skip the edges that would produce cycles in the minimum spanning tree.
3. Repeat step 2 until [N-1] edges are added.

*/
var minCostConnectPoints = function(points) {
  // Collecting all the edges 
  const edges = [];
  const map = new Set();
  for(let i = 0; i < points.length; i++) {
    for(let j = 0; j < points.length; j++) {
      if(i == j) continue;
      if(!map.has(`${i}-${j}`)) {
        map.add(`${i}-${j}`);
        map.add(`${j}-${i}`);
        edges.push([i, j, manhattanDistance(points[i], points[j])]);
      }
    }
  }

  // Sorting by cost
  edges.sort((a,b) => a[2]-b[2]);

  // Collecting cost by UnionFind
  const uf = new UnionFind(points.length);
  let cost = 0;
  for(let [A, B, costOfAB] of edges) {
    if(uf.unionSet(A,B)) {
      cost += costOfAB;
    }
  }
  return cost;
};

var points = [[0,0],[2,2],[3,10],[5,2],[7,0]];
console.log(minCostConnectPoints(points)); // 20


points = [[3,12],[-2,5],[-4,1]];
console.log(minCostConnectPoints(points)); // 18

points = [[0,0],[1,1],[1,0],[-1,1]];
console.log(minCostConnectPoints(points)); // 4

points = [[-1000000,-1000000],[1000000,1000000]];
console.log(minCostConnectPoints(points)); // 4000000

points = points = [[0,0]];
console.log(minCostConnectPoints(points)); // 0


// console.log(distanceBetweenPoints([-3,-12],[-2,5]));





