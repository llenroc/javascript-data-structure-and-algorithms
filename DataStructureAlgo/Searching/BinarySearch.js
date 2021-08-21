/*
BINARY SEARCH ARRAY
  *** Description
  Given a sorted array and a value, determine if the value is in the array using the binary search (divide and conquer) method.

  *** Exercises
  Write a function that takes a sorted array and a value and returns the index of the value in the array. Return null if the value is not found in the array. What is the time complexity?
  Extra credit: Implement the function both iteratively and recursively.


// Time complexity: O(log(n))

*/


function binarySearchLoop(list, item) {
  let min = 0;
  let max = list.length - 1;
  while(min <= max) {
    const guess = Math.floor((min + max) / 2);
    const current = list[guess];
    if(list[guess] == item){
      return guess;
    }

    if(current < item) {
      min = guess + 1; 
    } else {
      max = guess - 1;
    }
  }
  return -1; // Do not forgot this condition
}


//take mid (arr[hi-lo/2]) value from the array
//if mid is equal to value => return index
//else 
    //if value < mid
        //recursive call (0, mid-1)
    //else value > mid
        //recursive call (mid + 1, n-1)
function binarySearch(arr, value) {
    const recursive = function(lo, hi) {
        if(lo > hi) return -1;
        const midIndex = lo + Math.floor((hi-lo)/2);
        if (arr[midIndex] === value) {
            return midIndex;
        } else {
            if (value < arr[midIndex]) {
                return recursive(lo, midIndex-1);
            } else {
                return recursive( midIndex+1, hi);
            }
        }
    }
    return recursive(0, arr.length-1);
}

var arr = [0,1,2,3,4,5];
console.log('0 should be = ', binarySearch(arr, 0));
console.log('1 should be = ', binarySearch(arr, 1));
console.log('2 should be = ', binarySearch(arr, 2));
console.log('3 should be = ', binarySearch(arr, 3));
console.log('4 should be = ', binarySearch(arr, 4));
console.log('5 should be = ', binarySearch(arr, 5));
console.log('-1 should be =', binarySearch(arr, 8));

console.log('0 should be = ', binarySearchLoop(arr, 0));
console.log('1 should be = ', binarySearchLoop(arr, 1));
console.log('2 should be = ', binarySearchLoop(arr, 2));
console.log('3 should be = ', binarySearchLoop(arr, 3));
console.log('4 should be = ', binarySearchLoop(arr, 4));
console.log('5 should be = ', binarySearchLoop(arr, 5));
console.log('-1 should be =', binarySearchLoop(arr, 8));

console.log(`Index of 90 in [2,6,7,90,103] is ${binarySearch([2,6,7,90,103], 90)}`);
console.log(`Index of 6 in [2,6,7,90,103] is ${binarySearch([2,6,7,90,103], 6)}`);
console.log(`Index of 13 in [2,6,7,90,103] is ${binarySearch([2,6,7,90,103], 13)}`);




/* Using Binary serach -  Find last occurance of an element in sorted array */
// https://www.youtube.com/watch?v=OE7wUUpJw6I&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=1&t=15s

// Approach 1 -  recursive 
function binarySearchFirstOccrance(array, value) {
  let firstOccurance = -1;
  const recursion = (lo, hi) => {
    if(lo > hi) return -1; 
    const mid = Math.floor((lo + hi)/2);
    if(array[mid] === value) {
      firstOccurance = mid;
      return recursion(lo, mid-1);
    }
    
    if(array[mid] > value)
        return recursion(lo, mid-1);
      else
        return recursion(mid+1, hi);
  }

  recursion(0, array.length -1);
  return firstOccurance;
}

const testArray1 = [0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,3,4,5];
console.log(`First Occurance of 1 is 1 = ${binarySearchFirstOccrance(testArray1, 1)}`); // 1
console.log(`First Occurance of 2 is 12 = ${binarySearchFirstOccrance(testArray1, 2)}`); // 12
console.log(`First Occurance of 3 is 15 = ${binarySearchFirstOccrance(testArray1, 3)}`); // 15


function binarySearchLastOccrance(array, value) {
  let lastOccurance = -1;
  const recursion = (lo, hi) => {
    if(lo > hi) return -1; 
    const mid = Math.floor((lo + hi)/2);
    if(array[mid] === value) {
      lastOccurance = mid;
      return recursion(mid+1, hi);
    }
    
    if(array[mid] > value)
        return recursion(lo, mid-1);
      else
        return recursion(mid+1, hi);
  }

  recursion(0, array.length -1);
  return lastOccurance;
}

const testArray2 = [0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,3,4,5];
console.log(`Last Occurance of 1 is 11 = ${binarySearchLastOccrance(testArray2, 1)}`); // 11
console.log(`Last Occurance of 2 is 14 = ${binarySearchLastOccrance(testArray2, 2)}`); // 14
console.log(`Last Occurance of 3 is 17 = ${binarySearchLastOccrance(testArray2, 3)}`); // 17


function binarySearchIterative(array, value) {
    let lo = 0;
    let hi = array.length-1;
    let mid;
    while (lo <= hi) { 
      mid = Math.floor((lo+hi)/2);
      if(array[mid] === value) return mid;
      if(array[mid] > value)
        hi = mid-1; 
      else
        lo = mid+1;
    }
    return -1;
}

console.log("\n");
const testArray4 = [0,1,2,3,4,5,6,7,8,9,10];
console.log(`IndexOf 0 = ${binarySearchIterative(testArray4, 0)}`);
console.log(`IndexOf 4 = ${binarySearchIterative(testArray4, 4)}`);
console.log(`IndexOf 10 = ${binarySearchIterative(testArray4, 10)}`);

function binarySearchIterativeFirstOccurance(array, value) {
    let lo = 0;
    let hi = array.length-1;
    let mid;
    let result = -1;
    while (lo <= hi) { 
      mid = Math.floor((lo+hi)/2);
      if(array[mid] === value) {
        result = mid;
        hi = mid-1;
      } else {
          if(array[mid] > value)
            hi = mid-1; 
          else
            lo = mid+1;
      }
      
    }
    return result;
}

console.log("\n");
const testArray5 = [0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,3,4,5];
console.log(`First Occurance of 1 is 1 = ${binarySearchIterativeFirstOccurance(testArray5, 1)}`); // 1
console.log(`First Occurance of 2 is 12 = ${binarySearchIterativeFirstOccurance(testArray5, 2)}`); // 12
console.log(`First Occurance of 3 is 15 = ${binarySearchIterativeFirstOccurance(testArray5, 3)}`); // 15


function binarySearchIterativeLastOccurance(array, value) {
    let lo = 0;
    let hi = array.length-1;
    let mid;
    let result = -1;
    while (lo <= hi) { 
      mid = Math.floor((lo+hi)/2);
      if(array[mid] === value) {
        result = mid;
        lo = mid+1;
      } else {
          if(array[mid] > value)
            hi = mid-1; 
          else
            lo = mid+1;
      }
      
    }
    return result;
}

console.log("\n");
const testArray6 = [0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,3,4,5];
console.log(`First Occurance of 1 is 1 = ${binarySearchIterativeLastOccurance(testArray6, 1)}`); // 11
console.log(`First Occurance of 2 is 12 = ${binarySearchIterativeLastOccurance(testArray6, 2)}`); // 14
console.log(`First Occurance of 3 is 15 = ${binarySearchIterativeLastOccurance(testArray6, 3)}`); // 17


// Count number for Occurance in an sorted array
// https://www.youtube.com/watch?v=pLT_9jwaPLs&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=2


// Approach 1 - iterative solution
function findOccurance(array, value, searchFirst) {
    let lo = 0;
    let hi = array.length-1;
    let mid;
    let result = -1;
    while (lo <= hi) { 
      mid = Math.floor((lo+hi)/2);
      if(array[mid] === value) {
        result = mid;
        if(searchFirst) {
          hi = mid-1;
        } else {
          lo = mid+1;
        }
      } else {
          if(array[mid] > value)
            hi = mid-1; 
          else
            lo = mid+1;
      }
      
    }
    return result;
}


function numberOfOccrance(array, value) {
  const first = findOccurance(array, value, true);
  const last = findOccurance(array, value, false);
  // console.log(`firstIndex = ${first}, lastIndex = ${last}`);
  return last - first + 1;
}

const testArray7 = [0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,4,5];
console.log(`\nOccurance of 1 is 11 = ${numberOfOccrance(testArray7, 1)}`, "\n"); // 11
console.log(`Occurance of 2 is 3 = ${numberOfOccrance(testArray7, 2)}`, "\n"); // 3
console.log(`Occurance of 3 is 2 = ${numberOfOccrance(testArray7, 3)}`, "\n"); // 2



//Approach 2 -  Recursive solution
function findOccuranceRecursive(array, value, searchFirst) {
    let occurance = -1;
    const recursion = (lo, hi) => {
      if(lo > hi) return -1; 
      const mid = Math.floor((lo + hi)/2);
      if(array[mid] === value) {
        occurance = mid;
        if(searchFirst) {
          return recursion(lo, mid-1);
        } else {
          return recursion(mid+1, hi);
        }
      }
      
      if(array[mid] > value)
          return recursion(lo, mid-1);
        else
          return recursion(mid+1, hi);
    }

    recursion(0, array.length -1);
    return occurance;
}


function numberOfOccranceRecursive(array, value) {
  const first = findOccuranceRecursive(array, value, true);
  const last = findOccuranceRecursive(array, value, false);
  // console.log(`firstIndex = ${first}, lastIndex = ${last}`);
  return last - first + 1;
}

const testArray8 = [0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,4,5];
console.log(`\nOccurance of 1 is 11 = ${numberOfOccranceRecursive(testArray8, 1)}`, "\n"); // 11
console.log(`Occurance of 2 is 3 = ${numberOfOccranceRecursive(testArray8, 2)}`, "\n"); // 3
console.log(`Occurance of 3 is 2 = ${numberOfOccrance(testArray8, 3)}`, "\n"); // 2