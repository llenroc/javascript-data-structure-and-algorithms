// https://leetcode.com/explore/learn/card/graph/619/depth-first-search-in-graph/3850/
// LeetCode 797 - All Paths From Source to Target - DFS
/*
Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

 

Example 1:


Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
Example 2:


Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
Example 3:

Input: graph = [[1],[]]
Output: [[0,1]]
Example 4:

Input: graph = [[1,2,3],[2],[3],[]]
Output: [[0,1,2,3],[0,2,3],[0,3]]
Example 5:

Input: graph = [[1,3],[2],[3],[]]
Output: [[0,1,2,3],[0,3]]
 

Constraints:

n == graph.length
2 <= n <= 15
0 <= graph[i][j] < n
graph[i][j] != i (i.e., there will be no self-loops).
All the elements of graph[i] are unique.
The input graph is guaranteed to be a DAG.
*/



/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const path = [0];
  const results = [];
  const target = graph.length - 1;
  const DFS_backtrack = (currNode, path)  => {
    if (currNode === target) {
        // Note: one should make a deep copy of the path
        const pathDeepCopy = [...path];
        results.push(pathDeepCopy);
        return;
    }
    // explore the neighbor nodes one after another.
    for (let nextNode of graph[currNode]) {
        // mark the choice, before backtracking.
        path.push(nextNode);
        DFS_backtrack(nextNode, path);
        // remove the previous choice, to try the next choice
        path.pop();
    }
  }

  DFS_backtrack(0, path);
  return results;
};

var graph = [[1,2],[3],[3],[]]
console.log(allPathsSourceTarget(graph));
//. [[0,1,3],[0,2,3]]


graph = [[4,3,1],[3,2,4],[3],[4],[]]
console.log("\n", allPathsSourceTarget(graph));
// //. [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]


graph = [[1],[]]
console.log("\n", allPathsSourceTarget(graph));
// //. [[0,1]]


graph = [[1,2,3],[2],[3],[]]
console.log("\n", allPathsSourceTarget(graph));
// //. [[0,1,2,3],[0,2,3],[0,3]]


graph = [[1,3],[2],[3],[]]
console.log("\n", allPathsSourceTarget(graph));
// //. [[0,1,2,3],[0,3]]


