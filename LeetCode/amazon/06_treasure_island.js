/*
Question 
https://leetcode.com/discuss/interview-question/347457/Amazon-or-OA-2019-or-Treasure-Island

Solution JS 
https://github.com/SameerMakhija/Amazon-Online-Assessment-Questions-LeetCode/blob/master/Treasure%20Island%20II/index.js

Solution viedos - 
1. https://www.youtube.com/watch?v=KiCBXu4P-2Y


Notes
- Breadth First Search
- Shortest Path


You have a map that marks the location of a treasure island. Some of the map area has jagged rocks and dangerous reefs. Other areas are safe to sail in. There are other explorers trying to find the treasure. So you must figure out a shortest route to the treasure island.

Assume the map area is a two dimensional grid, represented by a matrix of characters. You must start from the top-left corner of the map and can move one block up, down, left or right at a time. The treasure island is marked as X in a block of the matrix. X will not be at the top-left corner. Any block with dangerous rocks or reefs will be marked as D. You must not enter dangerous blocks. You cannot leave the map area. Other areas O are safe to sail in. The top-left corner is always safe. Output the minimum number of steps to get to the treasure.


Example:

Input:
[['O', 'O', 'O', 'O'],
 ['D', 'O', 'D', 'O'],
 ['O', 'O', 'O', 'O'],
 ['X', 'D', 'D', 'O']]

Output: 5
Explanation: Route is (0, 0), (0, 1), (1, 1), (2, 1), (2, 0), (3, 0) The minimum route takes 5 steps.

Solution Java 
Java BFS: https://leetcode.com/playground/uQoVfEmr
Time complexity: O(r * c).
Space complexity: O(r * c).


0 - Walkable area
D - Obstacle
X - final destination

*/

const shortestPath = (grid) => {
    // Direction array for a pointer
    let dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    let queue = [];
    
    // Marking entry point in the given matrix
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 'S') queue.push([i, j]); // Pushing starting point to the queue for BFS
        }
    }

    let count = 0;

    while (queue.length) {
        let len = queue.length;
        count++;

        for (let i = 0; i < len; i++) {
            const [x, y] = queue.shift();

            for (let dir of dirs) { // Direction array 
                // This will check point up, down, left right direction 
                const [x1, y1] = [x + dir[0], y + dir[1]]; 

                // If row and cell valid
                if (grid[x1] && grid[x1][y1]) {

                    // If it exit, return count 
                    if (grid[x1][y1] == 'X') {
                        return count;
                    }
                    // If its walkable, Mark as visited and push to queue
                    else if (grid[x1][y1] == 'O') {
                        grid[x1][y1] = "V";
                        queue.push([x1, y1])
                    }
                }
            }
        }

    }

 return -1
}

/* let a = [['S', 'O', 'O', 'S', 'S'],
['D', 'O', 'D', 'O', 'D'],
['O', 'O', 'O', 'O', 'X'],
['X', 'D', 'D', 'O', 'O'],
['X', 'D', 'D', 'D', 'O']]
console.log(shortestPath(a)); */

let a = [['S', 'O', 'O', 'O'],
 ['D', 'O', 'D', 'O'],
 ['O', 'O', 'O', 'O'],
 ['X', 'D', 'D', 'O']];

console.log(shortestPath(a));
