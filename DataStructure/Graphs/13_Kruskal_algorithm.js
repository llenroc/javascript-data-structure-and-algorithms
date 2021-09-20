// [Kruskal's algorithm] (https://www.youtube.com/watch?v=kUMaslI7O3c&list=PLeIMaH7i8JDiRA4fK9QmjvDSZKBJDyxpc&index=16)

// “Kruskal’s algorithm” is an algorithm to construct a “minimum spanning tree” of a “weighted undirected graph”.

/*
Steps - 
1. Ascending Sort all edges by their weight.
2. Add edges in that order into the Minimum spanning tree. Skip the edges that would produce cycles in the minimum spanning tree.
3. Repeat step 2 until [N-1] edges are added.


TC - O(ElogE)
SC - O(V)
*/