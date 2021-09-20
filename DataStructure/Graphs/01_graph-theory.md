```

What is Graph ?

G = (V, E)

V = Set of vertices 
E = Set of edges 



```

##  Adjacency Matrix 

```
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

```



## Adjacency List

```

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
 
```

## Spanning Tree
Youtube - [Spanning Tree](https://www.youtube.com/watch?v=oh3ZOtVix8Y&list=PLeIMaH7i8JDiRA4fK9QmjvDSZKBJDyxpc&index=14)


A spanning tree is a connected subgraph in an undirected graph where all vertices are connected with the minimum number of edges

### Rules
1. A spanning subgraph 
2. A Tree
3. Numbe of edges - n-1


## Minimum Spanning Tree
A minimum spanning tree is a spanning tree with the minimum possible total edge weight in a “weighted undirected graph”.



### Two algorithms to find minimum spanning tree

1. [Prim's algorithm] (https://www.youtube.com/watch?v=QyJ8gOss-Y8&list=PLeIMaH7i8JDiRA4fK9QmjvDSZKBJDyxpc&index=15) 

“Prim’s algorithm” is another algorithm for constructing a “minimum spanning tree” of a “weighted undirected graph”.

### Steps -

1. Remove loops and paralllel edges  ( Keep minimum weight)
2. While adding new Edges, select edge with minimum weight out of the edges from already visited vertices. (no cycle allowed)
3. Stop at [n-1] edges 


2. [Kruskal's algorithm] (https://www.youtube.com/watch?v=kUMaslI7O3c&list=PLeIMaH7i8JDiRA4fK9QmjvDSZKBJDyxpc&index=16)

“Kruskal’s algorithm” is an algorithm to construct a “minimum spanning tree” of a “weighted undirected graph”.

### Steps - 

1. Ascending Sort all edges by their weight.
2. Add edges in that order into the Minimum spanning tree. Skip the edges that would produce cycles in the minimum spanning tree.
3. Repeat step 2 until [N-1] edges are added.


### The difference between the “Kruskal’s algorithm” and the “Prim’s algorithm”:

“Kruskal’s algorithm” expands the “minimum spanning tree” by adding edges. Whereas “Prim’s algorithm” expands the “minimum spanning tree” by adding vertices.


> Kruskal algorithm is much easier. 

> “breadth-first search” algorithm can only solve the “shortest path” problem in “unweighted graphs”

> “shortest path” in a “weighted graph” is solved using "Dijkstra's algorithm" and "Bellman Ford Algorithm"

> `Dijkstra algorithm` can only be used to solve the “single source shortest path” problem in a weighted directed graph with non-negative weights

> `Bellman-Ford algorithm`, on the other hand, can solve the “single-source shortest path” in a weighted directed graph with any weights, including, of course, negative weights.


##  Bellman Ford Algorithm
https://leetcode.com/explore/learn/card/graph/622/single-source-shortest-path-algorithm/3864/

> Theorem 1: In a “graph with no negative-weight cycles” with N vertices, the shortest path between any two vertices has at most N-1 edges.

> Theorem 2: In a “graph with negative weight cycles”, there is no shortest path.


## Kahn's Algorithm

### Limitation of the Algorithm
- “Topological sorting” only works with graphs that are directed and acyclic.

- There is at least one vertex in the “graph” with an “in-degree” of 0. If all vertices in the “graph” have non-zero “in-degree”, then all vertices need at least one vertex as a predecessor. In this case, no vertex can serve as the starting vertex.

TC = O(V+E)
SC = O(V+E)