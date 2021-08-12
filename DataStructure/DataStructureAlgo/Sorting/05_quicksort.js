/* 

Properties:
O(log(n)) extra space
    - The space used by quicksort depends on the version used. The in-place version of quicksort has a 
        space complexity of O(log n), even in the worst case, when it is carefully implemented using the 
        following strategies: in-place partitioning is used. This unstable partition requires O(1) space.

    - There is a more complex version which uses an in-place partition algorithm and can achieve the complete 
        sort using O(log n) space (not counting the input) on average (for the call stack).

O(n^2) time (for few unique keys), but typically O(n·log(n)) if recursion is balanced
not stable
not adaptive


Fastest :- 
    Merge Sort is the fastest stable sorting algorithm with worst-case complexity of O(nlogn), 
    but it requires extra space. Although, if memory constraints are very tight you can use Quick Sort, 
    whose worst-time compelxity is O(n2) but average case complexity is O(nlogn).

//pseducode
----------- 

//quickSort 
    attributes => arr, lo ,hi
    1. First case consider => arr last item as pivot , lo =0, and hi = array.length-1
    2. Find pivot location by passing arr, lo, hi to partition fn 
    3. Repeat same process for left array items  from pivotLocation (arr, 0, pivotLoc-1)
    4. Repeat same process for right array items from pivotLocation (arr, pivotLoc+1, arr.length-1)
    5. return arr

partition :- 
    attributes => arr, lo ,hi
    1. pivot = arr[hi], pivotLoc = lo
    2. loop i from lo -> less than hi
        (Move all the lower values compare to pivot to left of pivot location)
        3. if arr[i] value less that pivot value 
            swap(pivotLoc, i)
            pivotLoc++

    (Now we have pivot location where all left values are less than pivot values)
    4. swap(pivotLoc, hi)
    5. return pivotLocation

*/

(function() {
    let logs = new ConsoleLog("F_E_M_QuickSort", false);

    function swap(arr, i, j) {
        const keep = arr[i];
        arr[i] = arr[j];
        arr[j] = keep;
    }

    function quickSort(arr, lo, hi) {
        if (lo === undefined) lo = 0;
        if (hi === undefined) hi = arr.length - 1 ;

        if(lo < hi){
            let pivotLoc = partition(arr, lo, hi);
            quickSort(arr, lo, pivotLoc-1);
            quickSort(arr, pivotLoc+1, hi);
        }
        if(hi-lo === arr.length - 1) {
            return arr;
        }
    }

    function partition(arr, lo, hi) {
        let pivot = arr[hi];
        let pivotLoc = lo;
        for(let i=lo; i< hi; i++) {
            if(arr[i] <= pivot){
                swap(arr, pivotLoc, i);
                pivotLoc++;
            }
        }
        swap(arr, pivotLoc, hi);
        return pivotLoc;
    }

    const inputArray = [10,3,16,6,4];
    const sortedArray = quickSort(inputArray);  
    logs.push(`[10,3,16,6,4] = `,sortedArray);  //[3,4,6,10,16]
    logs.print();
})();