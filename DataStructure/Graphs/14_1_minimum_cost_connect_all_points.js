// LeetCode 1584 - Min Cost to Connect All Points - Prim's Algorithm
// https://leetcode.com/explore/learn/card/graph/621/algorithms-to-construct-minimum-spanning-tree/3861/

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


class Heap{
    constructor(func){
        this.heap = [];
        this.func = func;
    }
    siftDown(idx,end,heap){
        let child1 = idx*2+1;
        while (child1 <= end){
            let child2 = idx*2+2 <= end ? idx*2+2 : -1;
            let swapIdx;
            if (child2 !== -1 && this.shouldSwap(child2,child1)){
                swapIdx = child2;
            } else {
                swapIdx = child1;
            }
            if (this.shouldSwap(swapIdx,idx)){
                this.swap(swapIdx,idx,heap);
                idx = swapIdx;
                child1 = idx*2+1;
            } else return;
        }
    }
    siftUp(idx, heap){
        let parent = Math.floor((idx-1)/2);
        while (idx > 0 && this.shouldSwap(idx,parent)){
            this.swap(idx,parent,heap);
            idx = parent;
            parent = Math.floor((idx-1)/2);
        }
    }
    peek(){
        return this.heap[0];
    }
    poll(){
        this.swap(0, this.heap.length-1, this.heap);
        let valueToReturn = this.heap.pop();
        this.siftDown(0, this.heap.length-1, this.heap);
        return valueToReturn;
    }
    offer(val){
        this.heap.push(val);
        this.siftUp(this.heap.length-1, this.heap);
    }
    isEmpty(){
        return this.heap.length === 0;
    }
    size(){
        return this.heap.length;
    }
    swap(i,j,heap){
        [heap[i],heap[j]] = [heap[j],heap[i]];
    }
    shouldSwap(idx1,idx2){
        return this.func(this.heap[idx1],this.heap[idx2]);
    }
}

const distance = (p1,p2) => {
    return Math.abs(p2[0]-p1[0]) + Math.abs(p2[1]-p1[1]);
}

const createConnectionsToVertex = (vertex, points, n) => {
    let connections = []
    for (let i = 0; i < n; i++){
        if (i === vertex) continue;
        connections.push([vertex,i, distance(points[vertex], points[i])]);
    }
    return connections; 
}

/*
Steps -
1. Remove loops and paralllel edges  ( Keep minimum weight)
2. While adding new edge, select edge with minimum weight out of the edges from already visited vertices. (no cycle allowed)
3. Stop at [n-1] edges 

*/
// https://leetcode.com/problems/min-cost-to-connect-all-points/discuss/1467551/JavaScript-Prim-with-a-Min-Heap-commented
var minCostConnectPoints = function(points) {
  if (points === null || points.length <= 1) return 0;
  const n = points.length, visited = new Set();
  visited.add(0); // start at 0
  const minHeap = new Heap((a,b) => a[2] < b[2]); // define minHeap function
  const connections = createConnectionsToVertex(0, points,n); // Calculate distance from all other points
  connections.forEach(edge => minHeap.offer(edge));
  let minCost = 0;
  while (!minHeap.isEmpty()){
      const [start, next, cost] = minHeap.poll();
      if (!visited.has(next)){
          visited.add(next);
          minCost += cost;
          if (visited.size === n) return minCost; // early return
          const edges = createConnectionsToVertex(next, points, n);
          edges.filter(edge => !visited.has(edge[1])).forEach(edge => minHeap.offer(edge));
      }
  }
  return minCost;
}

var points = [[0,0],[2,2],[3,10],[5,2],[7,0]];
console.log(minCostConnectPoints(points)); // 20


// points = [[3,12],[-2,5],[-4,1]];
// console.log(minCostConnectPoints(points)); // 18

// points = [[0,0],[1,1],[1,0],[-1,1]];
// console.log(minCostConnectPoints(points)); // 4

// points = [[-1000000,-1000000],[1000000,1000000]];
// console.log(minCostConnectPoints(points)); // 4000000

// points = points = [[0,0]];
// console.log(minCostConnectPoints(points)); // 0