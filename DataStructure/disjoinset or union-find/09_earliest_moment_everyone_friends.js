// https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3912/
// The Earliest Moment When Everyone Become Friends

/*
There are n people in a social group labeled from 0 to n - 1. You are given an array logs where logs[i] = [timestampi, xi, yi] indicates that xi and yi will be friends at the time timestampi.

Friendship is symmetric. That means if a is friends with b, then b is friends with a. Also, person a is acquainted with a person b if a is friends with b, or a is a friend of someone acquainted with b.

Return the earliest time for which every person became acquainted with every other person. If there is no such earliest time, return -1.

 

Example 1:

Input: logs = [[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]], n = 6
Output: 20190301

Explanation: 
The first event occurs at timestamp = 20190101 and after 0 and 1 become friends we have the following friendship groups [0,1], [2], [3], [4], [5].
The second event occurs at timestamp = 20190104 and after 3 and 4 become friends we have the following friendship groups [0,1], [2], [3,4], [5].
The third event occurs at timestamp = 20190107 and after 2 and 3 become friends we have the following friendship groups [0,1], [2,3,4], [5].
The fourth event occurs at timestamp = 20190211 and after 1 and 5 become friends we have the following friendship groups [0,1,5], [2,3,4].
The fifth event occurs at timestamp = 20190224 and as 2 and 4 are already friends anything happens.
The sixth event occurs at timestamp = 20190301 and after 0 and 3 become friends we have that all become friends.
Example 2:

Input: logs = [[0,2,0],[1,0,1],[3,0,3],[4,1,2],[7,3,1]], n = 4
Output: 3
 

Constraints:

2 <= n <= 100
1 <= logs.length <= 104
logs[i].length == 3
0 <= timestampi <= 109
0 <= xi, yi <= n - 1
xi != yi
All the values timestampi are unique.
All the pairs (xi, yi) occur at most one time in the input.
*/

// Simple UnionFind - quick Union implementation
class UnionFind {
  constructor(size) {
    this.root = new Array(size);
    for(let i = 0; i < size; i++){
      this.root[i] = i;
    }
  }

  find(x) {
    while(x !== this.root[x]){
      x = this.root[x];
    }
    return x;
  }


  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  // The union method, without any optimizations. It returns True if a
  // merge happened, False if otherwise.
  unionSet(x, y) {
    // Find the roots for A and B.
    const rootX = this.find(x);
    const rootY = this.find(y);
    // Check if A and B are already in the same set.
    if(rootX === rootY) {
      return false;
    }
    
    // Merge the sets containing A and B.
    this.root[rootY] = rootX;
    return true;
  }  
}

/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function(logs, n) {
    if(logs.length < n-1) return -1;
    // Sort the logs as per timestamp 
    logs = logs.sort((a,b) => a[0] - b[0]);
    const uf = new UnionFind(n);
    let earliestTime;
    let count = 0;
    for(let log of logs) {
      const [time, A, B] = log;
      if(uf.unionSet(A, B)) {
        count++;
        earliestTime = time;
      }
      if(count == n-1){
        break;
      }
    }

    return count === n-1 ? earliestTime : -1;
};

var logs = [[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]], n = 6
console.log(earliestAcq(logs, n));// 20190301

logs = [[0,2,0],[1,0,1],[3,0,3],[4,1,2],[7,3,1]], n = 4
console.log(earliestAcq(logs, n));// 3

logs = [[9,3,0],[0,2,1],[8,0,1],[1,3,2],[2,2,0],[3,3,1]], n = 4
console.log(earliestAcq(logs, n));// 2

