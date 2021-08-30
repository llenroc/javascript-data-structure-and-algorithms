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