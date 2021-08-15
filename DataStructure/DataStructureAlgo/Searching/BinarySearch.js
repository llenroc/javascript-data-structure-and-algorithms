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

