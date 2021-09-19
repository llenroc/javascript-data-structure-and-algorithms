/*


{
  0: [1,3,4],
  1: [2,0,3],
  2: [0,1],
  3: []
}


*/

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addNode(node) {
    this.adjList.set(node, []);
  }

  addEdge(node1, node2) {
    this.adjList.get(node1).push(node2);
    this.adjList.get(node2).push(node1);
  }

  removeNode(node) {
    delete this.adjList.delete(node);
    for (let [currentNode, edges] of this.adjList) {
      const nodeIndex = edges.indexOf(node);
      if (nodeIndex > -1) {
        edges.splice(nodeIndex, 1);
      }
    }
  }

  removeEdge(node1, node2) {
    const node1Edges = this.adjList.get(node1);
    const node2Edges = this.adjList.get(node2);

    const node2Index = node1Edges.indexOf(node2);
    node1Edges.splice(node2Index, 1);

    const node1Index = node2Edges.indexOf(node1);
    node2Edges.splice(node1Index, 1);
  }


  DFS_Recursive(startingNode, func = console.log, visited = new Set()) {
    visited.add(startingNode);
    func(startingNode);
    for (let node of this.adjList.get(startingNode)) {
      if (!visited.has(node)) {
        this.DFS_Recursive(node, func, visited);
      }
    }
  }

  // This logic need to check, does not seems to work as expected 
  // https://www.techiedelight.com/depth-first-search/
  DFS_Iterative(startingNode, func = console.log) {
    const stack = [startingNode];
    const visited = new Set();

    // loop till stack is empty
    while (stack.length) {
      // Pop a vertex from the stack
      const top = stack.pop();

      // if the vertex is already discovered yet,
      // ignore it
      if (visited.has(top)) {
        continue;
      }

      // we will reach here if the popped vertex `v`
      // is not discovered yet; print it and process
      // its undiscovered adjacent nodes into the stack
      visited.add(top);
      func(top);

      const neighbors = this.adjList.get(top);
      /*
      // This is correct logic but will print from right to left
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }*/
      
      // Use reverse iteraor to print from left to right 
      for(let i = neighbors.length - 1; i > -1; i--) {
          if (!visited.has(neighbors[i])) {
            stack.push(neighbors[i]);
          }
      }
    }
  }


  BFS(startingNode, func = console.log) {
    const queue = [startingNode];
    const visited = new Set();
    visited.add(startingNode);
    while (queue.length) {
      const top = queue.shift();
      func(top);
      const neighbors = this.adjList.get(top);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }
}


const myGraph = new Graph();
const node0 = { val: 0 };
const node1 = { val: 1 };
const node2 = { val: 2 };
const node3 = { val: 3 };
const node4 = { val: 4 };
const node5 = { val: 5 };
const node6 = { val: 6 };
const node7 = { val: 7 };
const node8 = { val: 8 };
const node9 = { val: 9 };
const node10 = { val: 10 };
const node11 = { val: 11 };
const node12 = { val: 12 };

myGraph.addNode(node1);
myGraph.addNode(node2);
myGraph.addNode(node3);

// console.log(myGraph);

myGraph.addEdge(node1, node2);
myGraph.addEdge(node2, node3);
myGraph.addEdge(node3, node1);

// console.log("\n", myGraph, "\n\n");

myGraph.removeNode(node3);
console.log("\n", myGraph);

myGraph.addNode(node3);
myGraph.addEdge(node3, node1);
myGraph.addEdge(node2, node3);
// console.log("\n", myGraph, "\n");

myGraph.removeEdge(node1, node2);
// console.log("\n", myGraph, "\n");

myGraph.addEdge(node1, node2);
console.log("\n", myGraph, "\n");

myGraph.DFS_Recursive(node1);




const myGraphDFS = new Graph();
myGraphDFS.addNode(node1);
myGraphDFS.addNode(node2);
myGraphDFS.addNode(node3);
myGraphDFS.addNode(node4);
myGraphDFS.addNode(node5);

myGraphDFS.addEdge(node1, node2);
myGraphDFS.addEdge(node1, node5);
myGraphDFS.addEdge(node2, node3);
myGraphDFS.addEdge(node2, node4);
// myGraphDFS.addEdge(node2, node5);
// myGraphDFS.addEdge(node3, node4);
// myGraphDFS.addEdge(node4, node5);

console.log("\n", myGraphDFS, "\n");

console.log("****** DFS_Recursive ********");
myGraphDFS.DFS_Recursive(node1, console.log);

console.log("\n****** DFS_Iterative ********");
myGraphDFS.DFS_Iterative(node1, console.log);

/*
****** depthFirstTraversal ********
{ value: 1 }
{ value: 5 }
{ value: 2 }
{ value: 4 }
{ value: 3 }
*/

console.log("\n");


console.log("****** breadthFirstTraversal ********");
myGraphDFS.BFS(node1, console.log); // 1,2, 5, 3, 4 
/**
 ****** breadthFirstTraversal ********
{ value: 1 }
{ value: 2 }
{ value: 5 }
{ value: 3 }
{ value: 4 }
 */
console.log("\n");

// ----------------------------------------------------------


/*               0
                 1
        2        7            8
    3.    6.              9.      12
  4   5.              10.   11

*/
const myGraphDFS1 = new Graph();
myGraphDFS1.addNode(node0);
myGraphDFS1.addNode(node1);
myGraphDFS1.addNode(node2);
myGraphDFS1.addNode(node3);
myGraphDFS1.addNode(node4);
myGraphDFS1.addNode(node5);
myGraphDFS1.addNode(node6);
myGraphDFS1.addNode(node7);
myGraphDFS1.addNode(node8);
myGraphDFS1.addNode(node9);
myGraphDFS1.addNode(node10);
myGraphDFS1.addNode(node11);
myGraphDFS1.addNode(node12);

myGraphDFS1.addEdge(node1, node2);
myGraphDFS1.addEdge(node1, node7);
myGraphDFS1.addEdge(node1, node8);
myGraphDFS1.addEdge(node2, node3);
myGraphDFS1.addEdge(node2, node6);
myGraphDFS1.addEdge(node3, node4);
myGraphDFS1.addEdge(node3, node5);
myGraphDFS1.addEdge(node8, node9);
myGraphDFS1.addEdge(node8, node12);
myGraphDFS1.addEdge(node9, node10);
myGraphDFS1.addEdge(node9, node11);

console.log("\n****** DFS_Iterative ********");
myGraphDFS1.DFS_Iterative(node1, console.log); // 1,2,3,4,5,6,7,8,9,10,11,12

console.log("\n****** DFS_Recursive ********");
myGraphDFS1.DFS_Recursive(node1, console.log); // 1,2,3,4,5,6,7,8,9,10,11,12

console.log("\n****** breadthFirstTraversal ********");
myGraphDFS1.BFS(node1, console.log); // 1,2,7,8,3,6,9,12,4,5,10,11



