
/* ~~~~~~~~~~~~~~~ Adjacency Matrix ~~~~~~~~~~~~~~ 

  [1]---[2]--[3]
   |  /  |  /
   | /   | /
  [5]---[4]

 |  ---- Vertices --- 
 V  
 e      1  2  3  4  5
 r   1 [0, 1, 0, 0, 1]
 t   2 [1, 0, 1, 1, 1]
 i   3 [0, 1, 0, 1, 0]
 c   4 [0, 1, 1, 0, 1]
 e   5 [1, 1, 0, 1, 0]
 s
 |   ---^ Edges ^ ---
*/


function addEdge(v1, v2) {
  adjMatrix[v1][v2] = 1;
  adjMatrix[v2][v1] = 1;
}

// addEdge(v1, v2); 

function removeEdge(v1, v2) {
  adjMatrix[v1][v2] = 0;
  adjMatrix[v2][v1] = 0;
}

// removeEdge(v1, v2);



/* ~~~~~~~~~~~~~~~ Adjacency List ~~~~~~~~~~~~~~ 

  [1]---[2]--[3]
   |  /  |  /
   | /   | /
  [5]---[4]

 |  ---- Vertices --- 
 V  
 e  
 r   [1] -> 2 -> 5 
 t   [2] -> 1 -> 5 -> 4 -> 3
 i   [3] -> 2 -> 4
 c   [4] -> 2 -> 3 -> 5
 e   [5] -> 1 -> 2 -> 4
 s
 |   ---^ Edges ^ ---
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 4, 5],
  3: [2, 4],
  4: [2, 5, 3],
  5: [1, 2, 4]
}

function addEdge(v1, v2) {
  adjList[v1].push(v2);
  adjList[v2].push(v1);
}

// addEdge(v1, v2);

function removeEdge(v1, v2) {
  const indexV1 = adjList[v2].indexOf(v1);
  const indexV2 = adjList[v1].indexOf(v2);
  if (indexV1 > -1) {
    adjList[v2].splice(indexV1, 1);
  }
  if (indexV2 > -1) {
    adjList[v1].splice(indexV2, 1);
  }
}


/**
 
 adjList = {
   1: {
     node,
     edges: []
   },
   2: {
     node,
     edges: []
   }
 }
 */


class Graph {
  constructor() {
    this.adjList = {};
  }

  addNode(node) {
    this.adjList[node.value] = {
      node,
      edges: []
    }
  }

  addEdge(node1, node2) {
    this.adjList[node1.value].edges.push(node2);
    this.adjList[node2.value].edges.push(node1);
  }

  removeNode(node) {
    delete this.adjList[node.value];
    const nodesValues = Object.keys(this.adjList);
    nodesValues.forEach(currentNodeValue => {
      const edges = this.adjList[currentNodeValue].edges;
      const index = edges.indexOf(node);
      if (index > -1) {
        edges.splice(index, 1);
      }
    });
  }

  removeEdge(node1, node2) {
    const node1Edges = this.adjList[node1.value].edges;
    const node2Edges = this.adjList[node2.value].edges;
    const node2Index = node1Edges.indexOf(node2);
    node1Edges.splice(node2Index, 1);

    const node1Index = node2Edges.indexOf(node1);
    node2Edges.splice(node1Index, 1);
  }

  /*
  const adjList = {
    1: [2, 5],
    2: [1, 3, 4, 5],
    3: [2, 4],
    4: [2, 5, 3],
    5: [1, 2, 4]
  }

  1. Add unvisted vertex to stack
  2. Mark vertex as visted 
  3. If vertex has unvisted childeren 
    - repeat 1-2 for child 
  4. If vertex has no childeren 
    - pop from stack
  5. Repeat untill stack is empty

  Note - DFS uses STACK
  */

  depthFirstTraversal(startingNode, func = console.log) {
    const stack = [];
    const visted = {};
    stack.push(startingNode);
    visted[startingNode.value] = true;

    while (stack.length > 0) {
      const currentNode = stack.pop();
      func(currentNode);
      this.adjList[currentNode.value].edges.forEach(edge => {
        if (!visted[edge.value]) {
          stack.push(edge);
          visted[edge.value] = true;
        }
      })
    }
  }

  /* 
    - Good for shortest path algorithms
    - Note - BFS uses Queue

   const BFS = graph => {
    set start vertex to visited

    load it into queue
    
    while queue not empty
    
       for each edge incident to vertex
    
            if its not visited
    
                load into queue
    
                mark vertex
    } 


    const BFS = graph => {
      initialize unexplored list

      for the first vertex
        add to the unexplored list
        optional: store pointer to parent vertex to null
        mark as visited
      while unexplored list is not empty
        remove next vertex from unexplored list
        optional: process vertex
        for each edge
            if un-visited
                optional: process edge
                add all un-visited/explored vertices to list
                optional: store pointer to parent vertex
                mark as visited
        mark vertex as explored
    }
  */
  breadthFirstTraversal(startingNode, func = console.log) {
    const queue = [];
    const visited = {};
    queue.push(startingNode);
    visited[startingNode.value] = true;
    while (queue.length > 0) {
      const currentNode = queue.shift();
      func(currentNode);
      const neighbors = this.adjList[currentNode.value].edges;
      neighbors.forEach(neighbor => {
        if(!visited[neighbor.value]) {
          queue.push(neighbor);
          visited[neighbor.value] = true;
        }
      })
    }
  }
}

const myGraph = new Graph();
const node1 = { value: 1 };
const node2 = { value: 2 };
const node3 = { value: 3 };
const node4 = { value: 4 };
const node5 = { value: 5 };

myGraph.addNode(node1);
myGraph.addNode(node2);
myGraph.addNode(node3);

// console.log(JSON.stringify(myGraph));

myGraph.addEdge(node1, node2);
myGraph.addEdge(node2, node3);
myGraph.addEdge(node3, node1);

// console.log("\n", JSON.stringify(myGraph));

myGraph.removeNode(node3);
// console.log("\n", JSON.stringify(myGraph));

myGraph.addNode(node3);
myGraph.addEdge(node3, node1);
myGraph.addEdge(node2, node3);

console.log("\n", JSON.stringify(myGraph));

myGraph.removeEdge(node1, node2);

console.log("\n", JSON.stringify(myGraph));


/**
 *        1
 *      2     5
 *    3   4
 */

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

console.log("\n", JSON.stringify(myGraphDFS), "\n");

console.log("****** depthFirstTraversal ********");
myGraphDFS.depthFirstTraversal(node1, console.log);

console.log("\n");


console.log("****** breadthFirstTraversal ********");
myGraphDFS.breadthFirstTraversal(node1, console.log); // 1,2, 5, 3, 4 

console.log("\n");

