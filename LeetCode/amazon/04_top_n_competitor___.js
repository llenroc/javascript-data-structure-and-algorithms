// Top N competitor
// https://leetcode.com/discuss/interview-question/846585/Amazon-Online-Assessment-Question-1
/*
Input
The input to the function/method consists of five arguments - numCompetitors, an integer representing the number of competitors for the Echo device;
topNCompetitors, is an integer representing the maximum number of competitors that Amazon wants to identify;
competitors, a list of strings representing the competitors;
numReviews, an integer representing the number of reviews from different websites that are identified by the automated webcrawler;
reviews, a list of string where each element is a string that consists of space-separated words representing user reviews.

Output
Return a list of strings representing Amazon's top N competitors in order of most frequently mentioned to least frequent.

Note
The comparison of strings is case-insensitive. If the value of topNCompetitors is more than the number of competitors discussed in the reviews then output the names of only the competitors mention.
If competitors have the same count (e.g. newshop=2, shopnow=2, mymarket=4), sort alphabetically. topNCompetitors=2, Output=[mymarket, newshop]

Example
Input:
numCompetitors=6
topNCompetitors = 2
competitors = [newshop, shopnow, afashion, fashionbeats, mymarket, tcellular]
numReviews = 6
reviews = [
"newshop is providing good services in the city; everyone should use newshop",
"best services by newshop",
"fashionbeats has great services in the city",
"I am proud to have fashionbeats",
"mymarket has awesome services",
"Thanks Newshop for the quick delivery"]

Output
["newshop", "fashionbeats"]


Explanation
"newshop" is occurring in 3 different reviews. "fashionbeats" is occuring in 2 different user reviews and "mymarket" is occurring in only 1 review.

*/

// Create has map of totalCompetitor with number of numReviews
// Sort from Maximum to minmum order 
// Share upto metioned topNCompetitors


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




const myMap = new Map();
myMap.set("Delhi", 0);
myMap.set("Ambala", 2);
myMap.set("Kaithal", 3);
myMap.set("Panipat", 1);

var mapAsc = new Map([...myMap.entries()].sort((a,b) => a[1] - b[1]));
console.log(mapAsc);


var mapAsc1 = [...myMap.entries()].sort((a,b) => a[1] - b[1]);
console.log(mapAsc1);


