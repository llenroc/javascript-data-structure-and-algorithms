<<<<<<< HEAD
/*

Question 
https://leetcode.com/problems/partition-labels/

Solution 
https://github.com/SameerMakhija/Amazon-Online-Assessment-Questions-LeetCode/blob/master/Partition%20Labels/index.js


// Youtube videos
1. https://www.youtube.com/watch?v=ED4ateJu86I
2. https://www.youtube.com/watch?v=5NCjHqx2v-k


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
    let map = new Array(26).fill(-1);


    //store the last index of each char
    for (let i = 0; i < S.length; i++) {
        let char = S[i].charCodeAt() - 97;
        map[char] = i
    }

    let start = 0;
    let max = -1;
    let result = [];
    for (let i = 0; i < S.length; i++) {
        max = Math.max(max, map[S[i].charCodeAt() - 97]);
        if (i === max) {
           result.push(i-start +1);
           start = i+1
        }
    }

    return result;

}

let S = "ababcbacadefegdehijhklij";
console.log(partitionLabels(S))

console.log("coming");

const myMap = new Map();
myMap.set("Delhi", 0);
myMap.set("Ambala", 2);
myMap.set("Kaithal", 3);
myMap.set("Panipat", 1);

var mapAsc = new Map([...myMap.entries()].sort((a,b) => a[1] - b[1]));
console.log(mapAsc);


var mapAsc1 = [...myMap.entries()].sort((a,b) => a[1] - b[1]);
console.log(mapAsc1);


//Approach
// Create hashMap for number of occurance in the review 
    // Loop through each review and competitors
    // Split each review with space.
    // Increment counter if any competitors name is present in the review
// Need to sort the map in ascending order 
// Collect k number of competitors from the array

var topNumCompetitors = function(numCompetitors, topNCompetitors, competitors, numReviews, numReviews) {
  
}




var numCompetitors = 6;
var topNCompetitors = 2;
var competitors = [newshop, shopnow, afashion, fashionbeats, mymarket, tcellular];
var numReviews = 6;
var reviews = [
"newshop is providing good services in the city; everyone should use newshop",
"best services by newshop",
"fashionbeats has great services in the city",
"I am proud to have fashionbeats",
"mymarket has awesome services",
"Thanks Newshop for the quick delivery"];

console.log(topNumCompetitors(numCompetitors, topNCompetitors, competitors, numReviews, numReviews));

