/*
   
973. K Closest Points to Origin

Question 
https://leetcode.com/problems/k-closest-points-to-origin/

Solution.  https://github.com/SameerMakhija/Amazon-Online-Assessment-Questions-LeetCode/blob/master/%20K%20Closest%20Points%20to%20Origin/index.js


Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
*/



/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

var kClosest = function (points, K) {
    let result = [];

    for (let [a, b] of points) {
        let distance = Math.sqrt(a ** 2 + b ** 2);
        result.push({ 
          points: [a, b],
          distance: distance
        });
    }

    result.sort((a, b) => a.distance - b.distance);

    let index = 0;
    let returnPoints = [];
    while (index < K) {
        returnPoints.push(result[index].points)
        index++
    }

    return returnPoints;
};

// Input: points = [[1,3],[-2,2]], k = 1 
console.log(kClosest([[1,3],[-2,2]], 1)); // [[-2,2]]
// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2)); // [[-2,4],[3,3]]
console.log("\n"); 


/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~` */



// Approach 1 
// Sort through JavaScript sort function and slice it.
var kClosest1 = function(points, k) {
  return points.sort(([a,b], [c,d]) => ((a ** 2 + b ** 2) - ( c ** 2 + d ** 2))).slice(0, k);
}


// Input: points = [[1,3],[-2,2]], k = 1 
console.log(kClosest1([[1,3],[-2,2]], 1)); // [[-2,2]]
// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
console.log(kClosest1([[3,3],[5,-1],[-2,4]], 2)); // [[-2,4],[3,3]]
console.log("\n"); 



/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~` */


//Approach 2- Sameer (Bad time complexity)

// Store distance for each point 
// Sort them 
// Provide 0 to k-1 elements from the sorted array

// {
//   1: [item1, item2],
//   2: [item2]
// }
var kClosest2 = function(points, k) {
  // function to calculate the distance 
  function distanceToOrigin([a,b]) {
    if(a < 0) a = a * -1;
    if(b < 0) b = b * -1;
    // console.log(a, b);
    return Math.sqrt((a*a)  + (b*b));
  }

  // function to provide the results

  const hashMap = {}
  let distanceArray = [];
  points.forEach(item => {
    const distance = distanceToOrigin(item);
    distanceArray.push(distance);
    if(!hashMap[distance]) {
      hashMap[distance] = [];
    }
    hashMap[distance].push(item);
  });

  distanceArray = distanceArray.sort((a,b) => a-b);
  // console.log(hashMap);
  // console.log(distanceArray);
  let count  = 0;
  let results = [];
  for(let i = 0; i < distanceArray.length; i++) {
    const bucket = hashMap[distanceArray[i]];
    const bucketLength = bucket.length;
    if((count + bucketLength) <= k) {
      results = results.concat(bucket);
      count = count + bucketLength;
    } else  {
      results = results.concat(bucket.slice(0, k - count));
      count = count + (k-count);
    }

    if(k === count) {
      break;
    }
   }

  return results;
    
};

// Input: points = [[1,3],[-2,2]], k = 1 
console.log(kClosest2([[1,3],[-2,2]], 1)); // [[-2,2]]

// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
console.log(kClosest2([[3,3],[5,-1],[-2,4]], 2)); // [[-2,4],[3,3]]


