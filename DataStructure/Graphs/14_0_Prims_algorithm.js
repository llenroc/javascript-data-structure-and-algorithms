// [Prim's algorithm] (https://www.youtube.com/watch?v=QyJ8gOss-Y8&list=PLeIMaH7i8JDiRA4fK9QmjvDSZKBJDyxpc&index=15)

/*
Steps - 

1. Remove loops and paralllel edges  ( Keep minimum weight)
2. While adding new edge, select edge with minimum weight out of the edges from already visited vertices. (no cycle allowed)
3. Stop at [n-1] edges 

---- TC ----
Binary heap: O(ElogV).
Fibonacci heap: O(E+VlogV).
V represents the number of vertices, and E represents the number of edges.


---- SC ----
O(V)
V represents the number of vertices.


*/

