class Graph {
  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjList[node] = [];
  }

  addEdge(node1, node2) {
    this.adjList[node1].push(node2);
    this.adjList[node2].push(node1);
  }

  removeNode(node) {
    // Remove the node from all edge lists
    Object.values(this.adjList).forEach(edgeList => {
      const edgeListIndex = edgeList.indexOf(node);
      if (edgeListIndex > -1) {
        edgeList.splice(edgeListIndex, 1);
      }
    });

    // Remove the node from the node list
    const nodeListIndex = this.nodes.indexOf(node);
    if (nodeListIndex > -1) {
      delete this.adjList[node];
      return this.nodes.splice(nodeListIndex, 1);
    }

    return false;
  }

  removeEdge(node1, node2) {
    const indexOfNode2 = this.adjList[node1] && this.adjList[node1].indexOf(node2);
    const indexOfNode1 = this.adjList[node2] && this.adjList[node2].indexOf(node1);

    const badIndices = this.adjList[node1] === undefined || this.adjList[node2] === undefined;

    if (badIndices) {
      return 'Please pass in valid indices';
    } else {
      this.adjList[node1].splice(indexOfNode2, 1);
      this.adjList[node2].splice(indexOfNode1, 1);
    }
  }

  // This logic need to check, does not seems to work as expected 
  depthFirstTraversal(startingNode, func = console.log) {
    const stack = [startingNode];
    const visited = new Set();

    while (stack.length) {
      const top = stack.pop();

      if (visited.has(top)) {
        continue;
      }

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

  breadthFirstTraversal(startingNode, func = console.log) {
    if (startingNode === undefined) {
      return 'No starting node was provided';
    }

    let nodeStack = [];
    let visitedArr = [];

    nodeStack.push(startingNode);
    visitedArr[startingNode] = true;

    while (nodeStack.length) {
      const current = nodeStack.shift();
      const neighbors = this.adjList[current];
      func(current);

      neighbors.forEach(neighbor => {
        if (!visitedArr[neighbor]) {
          nodeStack.push(neighbor);
          visitedArr[neighbor] = true;
        }
      });
    }
  }
}

export default Graph;