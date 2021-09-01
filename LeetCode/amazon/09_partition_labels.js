/*

Question 
https://leetcode.com/problems/partition-labels/

Solution 
https://github.com/SameerMakhija/Amazon-Online-Assessment-Questions-LeetCode/blob/master/Partition%20Labels/index.js


// Youtube videos
1. https://www.youtube.com/watch?v=5NCjHqx2v-k
2. https://www.youtube.com/watch?v=ED4ateJu86I


You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Return a list of integers representing the size of these parts.

Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

Example 2:

Input: s = "eccbbbbdec"
Output: [10]

Constraints:
1 <= s.length <= 500
s consists of lowercase English letters.
*/

const partitionLabels = function (S) {
    // create array of 26 length and fill with -1
    let map = new Array(26).fill(-1);


    //store the last index of each char
    for (let i = 0; i < S.length; i++) {
        let char = S[i].charCodeAt() - 97;
        map[char] = i;
    }

    let start = 0;
    let max = -1;
    let result = [];
    for (let i = 0; i < S.length; i++) {
        // choose max value from current max and lastIndex of current character 
        max = Math.max(max, map[S[i].charCodeAt() - 97]);
        if (i === max) {
           result.push(i-start +1);
           start = i+1
        }
    }

    return result;

}

let S = "ababcbacadefegdehijhklij";
console.log(partitionLabels(S)); // [ 9, 7, 8 ]


