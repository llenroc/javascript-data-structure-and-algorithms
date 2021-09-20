//. Dijkstra algorithm
// https://leetcode.com/problems/network-delay-time/
// 743. Network Delay Time

/*
You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

 

Example 1:


Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2
Example 2:

Input: times = [[1,2,1]], n = 2, k = 1
Output: 1
Example 3:

Input: times = [[1,2,1]], n = 2, k = 2
Output: -1
 

Constraints:

1 <= k <= n <= 100
1 <= times.length <= 6000
times[i].length == 3
1 <= ui, vi <= n
ui != vi
0 <= wi <= 100
All the pairs (ui, vi) are unique. (i.e., no multiple edges.)

*/

class QElement { 
    constructor(element, priority) 
    { 
        this.element = element; 
        this.priority = priority; 
    } 
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(element, priority) {
        var qElement = new QElement(element, priority); 
        var contain = false; 
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
        if (!contain) {
            this.items.push(qElement);
        }
    }
    dequeue() {
        if (this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    }
    isEmpty() {
        return this.items.length == 0;
    }
}
    

class Graph {
    constructor(N) {
        this.num_vertices = N;
        this.AdjList = new Map();
    }
    addVertex(v) {
        this.AdjList.set(v, []);
    }
    addEdge(x, y, wt) {
        this.AdjList.get(x).push({node: y, wt: wt}); 
    }
};

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// Based on Dijikstra Algorithm (using Priority Queue). Finding distance from source node K
var networkDelayTime = function(times, n, k) {
    let graph = new Graph(n);
    let distance = {};
    let pq = new PriorityQueue();
    for (var i = 1; i <= n; i++) {
        graph.addVertex(i);
        distance[i] = Infinity;
    }
    times.forEach(function(time){
        graph.addEdge(time[0], time[1], time[2]);
    });
    distance[k] = 0;
    pq.enqueue(k, 0);
    while (!pq.isEmpty()) {
        let minNode = pq.dequeue();
        let currNode = minNode.element;
        let weight = minNode.priority;
        let adjVertexes = graph.AdjList.get(currNode);
        adjVertexes.forEach(function(neigh){
            let temp = distance[currNode] + neigh.wt;
            if (temp < distance[neigh.node]) {
                distance[neigh.node] = temp;
                pq.enqueue(neigh.node, distance[neigh.node]);
            }
        })    
    }
    let time = 0;
    Object.keys(distance).forEach(function(node) {
       if (distance[node] > time) {
           time = distance[node];
       } 
    });
    return time == Infinity ? -1 : time;
};

var times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2;
console.log(networkDelayTime(times, n, k)); // 2


times = [[1,2,1]], n = 2, k = 1;
console.log(networkDelayTime(times, n, k)); // 1


times = [[1,2,1]], n = 2, k = 2;
console.log(networkDelayTime(times, n, k)); // -1