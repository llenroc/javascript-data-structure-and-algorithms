// https://www.youtube.com/watch?v=QyJ8gOss-Y8
// https://www.tutorialspoint.com/Prim-s-algorithm-in-Javascript

/* 

Prim's Algorithm for Minimum Spanning Tree | Graph Theory

=> Prim's algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. It finds a subset of the edges that forms a tree that includes every vertex, where the total weight of all the edges in the tree is minimized.

The algorithm operates by building this tree one vertex at a time, from an arbitrary starting vertex, at each step adding the cheapest possible connection from the tree to another vertex.



Steps - 

1. Remove loops and parallel edges(keep min weight)
2. While adding new edge, select edge with minimum weight out of the edges from already visited vertices. ( no, cycle allowed )
3. Stop at |n-1| edges 


*/ 

