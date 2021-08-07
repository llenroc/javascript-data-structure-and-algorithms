/*
    Search an element in sorted and rotated Array :- https://www.youtube.com/watch?v=5BI0Rdm9Yhk&index=1&list=PLeIMaH7i8JDjd21ZF6jlRKtChLttls7BG

    [9, 12, 15, 17, 25, 28, 32, 37, 3, 5, 7, 8]
     <--------------------------->  <-------->

     //Binary Search is the most efficient search algorithm , but in this case we have two sorted array section,
     //If we can find out the pivot location from where Array is changing its section, we can apply Binary search for that section


     //1. Find pivot location 
     //2. Find in which section is our element 
     //3. Apply Binary Search for that section 
*/

(function() {
    let logs = new ConsoleLog("F_E_M_SortedAndRotated", false);

    function search(arr, value) {

        function BinarySearch(arr, value) {
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

        
        function findPivotIndex(lo, hi){
            var mid = lo + Math.floor((hi-lo)/2);

            if(arr[mid] > arr[mid+1]) {
                return mid+1;
            }
            if(arr[lo] > arr[mid]) {
                return findPivotIndex(lo, mid-1);
            } else {
                return findPivotIndex(mid+1, hi);
            }
        };

        var lo = 0;
        var hi = arr.length - 1;       
        var pivot = findPivotIndex(lo, hi);
        logs.push('Pivot = ', pivot);

        if(value === arr[pivot]) {
            return pivot;
        } else if(value > arr[pivot] && value < arr[hi]) { // Element is in 2nd section
            return pivot + BinarySearch(arr.slice(pivot), value);  // Index = pivotIndex + Index in Second section
        } else {
            return BinarySearch(arr.slice(0, pivot-1), value);
        }
        return null;
    }

    var array = [9, 12, 15, 17, 25, 28, 32, 37, 3, 5, 7, 8];
    logs.push(`Index of 5 in ${array} should be 9 = `, search(array, 5));
    logs.push(`Index of 15 in ${array} should be 2 = `, search(array, 15));
    logs.print();
})();
