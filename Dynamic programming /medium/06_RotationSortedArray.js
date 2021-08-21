// https://www.youtube.com/watch?v=4qjprDkJrjY&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=3&t=227s

// How many times is a sorted array is rotated 

// Approach 1 
//     - Brute force | Linear search -> Find index of minimum element in the array
//     - return minimum element index

// Approach 2  - 
//.    - No duplicates 
//     - use binary serach algo
//     Case1 - array[lo] <= array[hi]  return lo;
//     Case2 - array[mid-1] >= array[mid] && array[mid+1] >= array[mid] return mid;
//     Case3 - array[mid] >= array[lo] => lo = mid+1 ( search in right side)
//     Case4 - array[mid] <= array[hi] => hi = mid-1 ( search in left side)


const testArray = [9,10,11,12,2,3,4,5,6,7,8];

// Approach 1 - Linear search 
function findNumberOfRotation(array) {
  let min = array[0];
  let minIndex = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  return minIndex;
}

console.log(`Number of Rotation = ${findNumberOfRotation(testArray)}`);

// Approach 2 - Binary search 
function findNumberOfRotationBinarySearch(array) {
  let lo = 0;
  let hi = array.length - 1;
  while(lo <= hi) {
    if(array[lo] <= array[hi]) return lo;
    const mid = Math.floor((lo+hi)/2);
    if(array[mid-1] >= array[mid] && array[mid+1] >= array[mid]) return mid;
    else if(array[mid] >= array[lo]) lo = mid+1;
    else if(array[mid] <= array[hi]) hi = mid-1;
  }
}

console.log(`Number of Rotation = ${findNumberOfRotationBinarySearch(testArray)}`);
