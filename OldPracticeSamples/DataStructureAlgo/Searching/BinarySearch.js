/*
BINARY SEARCH ARRAY
*** Description
Given a sorted array and a value, determine if the value is in the array using the binary search (divide and conquer) method.
*** Exercises
Write a function that takes a sorted array and a value and returns the index of the value in the array. Return null if the value is not found in the array. What is the time complexity?
Extra credit: Implement the function both iteratively and recursively.


// Time complexity: O(log(n))

*/


(function() {
    let logs = new ConsoleLog("F_E_M_BinarySearch", false);

    function binarySearchLoop(arr, value) {
        var lo = 0; 
        var hi = arr.length -1;
        while (lo <= hi) {
            var midIndex = lo + Math.floor((hi-lo)/2);
            if (arr[midIndex] === value) {
                return midIndex;
            } else {
                if (value < arr[midIndex]) {
                    hi = midIndex-1;
                } else {
                    lo = midIndex+1;
                }
            }
        }
        return null;
    }


    //take mid (arr[hi-lo/2]) value from the array
    //if mid is equal to value => return index
    //else 
        //if value < mid
            //recursive call (0, mid-1)
        //else value > mid
            //recursive call (mid + 1, n-1)
    function binarySearch(arr, value) {
        var recursive = function(lo, hi) {
            if(lo > hi) return null;
            var midIndex = lo + Math.floor((hi-lo)/2);
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
    logs.push('0 should be = ', binarySearch(arr, 0));
    logs.push('1 should be = ', binarySearch(arr, 1));
    logs.push('2 should be = ', binarySearch(arr, 2));
    logs.push('3 should be = ', binarySearch(arr, 3));
    logs.push('4 should be = ', binarySearch(arr, 4));
    logs.push('5 should be = ', binarySearch(arr, 5));
    logs.push('null should be =', binarySearch(arr, 8));

    logs.push('0 should be = ', binarySearchLoop(arr, 0));
    logs.push('1 should be = ', binarySearchLoop(arr, 1));
    logs.push('2 should be = ', binarySearchLoop(arr, 2));
    logs.push('3 should be = ', binarySearchLoop(arr, 3));
    logs.push('4 should be = ', binarySearchLoop(arr, 4));
    logs.push('5 should be = ', binarySearchLoop(arr, 5));
    logs.push('null should be =', binarySearchLoop(arr, 8));
    logs.print();
})();

