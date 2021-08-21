/* 
Time complexity analysis 

Youtube - https://www.youtube.com/watch?v=g1AwUYauqgg
Youtube - https://www.youtube.com/watch?v=0nlPxaC2lTw

TC of mergesort - nlog(n)

~~~~~~~~~~~Divide & Conquer ~~~~~~~~~~~~
Recursive calls to a subset of the problem

Steps for Divide & Conquer:
0. Recognize base case
1. Divide: break problem down during each call
2. Conquer: do work on each subset
3. Combine: solutions



Properties:
not In-place
O(n) extra space for iterative solution
O(n·log(n)) time (for worst and best)
stable - the only stable O(n·log(n)) sorting algorithm
not adaptive



Fastest :- 
    Merge Sort is the fastest stable sorting algorithm with worst-case complexity of O(nlogn), 
    but it requires extra space. Although, if memory constraints are very tight you can use Quick Sort, 
    whose worst-time compelxity is O(n2) but average case complexity is O(nlogn).


//pseducode
----------- 

mergeSort :- 
    if arr.length < 2 return arr;
    left  from 0 to length/2
    right  from length/2  to length
    lSorted = mergeSort(left);
    rSorted = mergeSort(right);
    merge(lSorted,rSorted);
    return arr;


merge :- 
    lArray, rArray, left = 0, right= 0, restult = []

    loop -> length of result not equal to (lArray.length + rArray.length)
        1. If leftCounter value is equal to leftArray length,     
            append remaining rightArray items to result
        2. If rightCounter value is equal to rightArray length,
            append remaining leftArray items to result
        3. if leftArray value is smaller , pop leftArray value and push to result, increment leftCounter
        4. else pop rightArray value and push to result and increment rightCounter.
*/

(function() {
    let logs = new ConsoleLog("F_E_M_MergeSort", false);

    function merge(lSorted, rSorted) {
        let result = [],
            leftCounter = 0, 
            rightCounter = 0;
        while (result.length != (lSorted.length + rSorted.length)) {
            if(leftCounter === lSorted.length)  {
                result = result.concat(rSorted.slice(rightCounter));
            } 
            else if(rightCounter === rSorted.length) {
                result = result.concat(lSorted.slice(leftCounter));
            } 
            else if(lSorted[leftCounter] < rSorted[rightCounter]) {
                result.push(lSorted[leftCounter]);
                leftCounter++;
            } 
            else {
                result.push(rSorted[rightCounter]);
                rightCounter++
            }
        }
        return result;
    }

    function mergeSort(arr) {
        if(arr.length < 2) {
            return arr;
        }
        let left = arr.slice(0,arr.length/2);
        let right = arr.slice(arr.length/2);
        let lSorted = mergeSort(left);
        let rSorted = mergeSort(right);
        arr = merge(lSorted, rSorted);
        return arr;
    }

    const inputArray = [10,3,16,6,4];
    const sortedArray = mergeSort(inputArray);  
    logs.push(`[10,3,16,6,4] = `,sortedArray);  //[3,4,6,10,16]
    logs.print();
})();

