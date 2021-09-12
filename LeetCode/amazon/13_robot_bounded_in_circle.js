/*

1041. Robot Bounded In Circle

Question
https://leetcode.com/problems/robot-bounded-in-circle/

Solution
https://www.youtube.com/watch?v=nKv2LnC_g6E
https://www.youtube.com/watch?v=-7UvHgT7u30 


On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degrees to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

 

Example 1:

Input: instructions = "GGLLGG"
Output: true
Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
Example 2:

Input: instructions = "GG"
Output: false
Explanation: The robot moves north indefinitely.
Example 3:

Input: instructions = "GL"
Output: true
Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...

*/

var isRobotBounded = function(instructions) {
    let x = 0;
    let y = 0;
    let dx = 0;
    let dy = 1;

    for (let direction of instructions) {
        if (direction === "R") {
            let temp = dx;
            dx = dy;
            dy = -temp;
        } else if (direction === "L") {
            let temp = dy;
            dy = dx;
            dx = -temp;
        } else {
            x = x + dx;
            y = y + dy;
        }
    }
    return (!x && !y) || dy !== 1;
};

console.log(isRobotBounded("GGLLGG")); // true
console.log(isRobotBounded("GG")); // false
console.log(isRobotBounded("GL")); // true
