/*
Reference link 
1. https://fireship.io/courses/javascript/interview-graphs/
2. https://www.youtube.com/watch?v=cWNEl4HE2OE

Graph data structure and basic traversal algorithms like depth-first search (DFS) and breadth-first search (BFS)

1. A graph can be represented as an adjacency matrix or adjacency list. In most cases, it is more efficient to use the latter because it requires less memory and offers better time-complexity when performing search algorithms.

2. Imagine we have a dataset that contains airports and routes. We can represent the graph as a Map where each key (node) is an airport and the value (edges) is an array airports that it can connect to.


Time Complexity for Bredth first and depth first serach is 

O ( V + E ) ==> nodes + edges 

*/

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];


// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
  adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(adjacencyList);
console.log("\n");

/*

Map {
  'PHX' => [ 'LAX', 'JFK' ],
  'BKK' => [ 'MEX', 'LIM' ],
  'OKC' => [ 'JFK' ],
  'JFK' => [ 'PHX', 'OKC', 'HEL', 'LOS' ],
  'LAX' => [ 'PHX', 'MEX' ],
  'MEX' => [ 'LAX', 'BKK', 'LIM', 'EZE' ],
  'EZE' => [ 'MEX' ],
  'HEL' => [ 'JFK' ],
  'LOS' => [ 'JFK' ],
  'LAP' => [],
  'LIM' => [ 'MEX', 'BKK' ] }

*/


/* Breadth-first Search (BFS) starts by pushing all of the direct children to a queue (first-in, first-out). It then visits each item in queue and adds the next layer of children to the back of the queue. This example uses a Set to keep track of nodes that have already been visited. */

//TC - O ( V + E ) ==> nodes + edges 
function BFS(start) {
  const visited = new Set();
  const queue = [start];
  visited.add(start);

  while(queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);
    console.log(airport);
    
    for(const destination of destinations) {
      // Search logic could be addded here
      if(destination === "BKK") {
        console.log(`BFS found Bangkok!  <--- ${airport}`);
      }

      if(!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}


BFS("PHX");
console.log("\n");

/*
PHX
LAX
JFK
MEX
BFS found Bangkok!  <--- MEX
OKC
HEL
LOS
BKK
LIM
BFS found Bangkok!  <--- LIM
EZE
*/


//TC - O ( V + E ) ==> nodes + edges 
function DFS(start, visited = new Set()) {
  console.log(start);
  visited.add(start);
  const destinations = adjacencyList.get(start);
  for (const destination of destinations) {
    if(destination === "BKK")  {
      console.log(`DFS found Bangkok!  <--- ${start}`);
    }

    if(!visited.has(destination)) {
      DFS(destination, visited);
    }
  }
}

DFS("PHX");
console.log("\n");

/*
PHX
LAX
MEX
DFS found Bangkok!  <--- MEX
BKK
LIM
DFS found Bangkok!  <--- LIM
EZE
JFK
OKC
HEL
LOS

*/




// Does 'PHX' to 'BKK' route exists

let count = 0;
function DFS1(start, visited = new Set()) {
  count++;
  console.log(start);
  visited.add(start);
  const destinations = adjacencyList.get(start);
  for (const destination of destinations) {
    if(destination === "BKK")  {
      console.log(`DFS found Bangkok!  <--- ${start} in ${count} steps`);
      //Return from here if you want to stop after first find.
      return;
    }

    if(!visited.has(destination)) {
      DFS1(destination, visited);
    }
  }
}

DFS1("PHX");
console.log("\n");
