/*
pseudocode 
===============
    loop for i form 0 to length-2    => O(n-1)
        loop for j from i+1 to length-1  => O(n-1)
            a[i] > a[j]                 => O(1)
            swap(a[i], a[j])            => O(1)

Complexity:- O(n^2)
==================
    O(n-1) * O(n-1) * (O(1)+O(1))
    n-1 ~= n, (O(1)+O(1)) = c (constant)

    O(n)*O(n)*C
    O(n^2)


Properties:
    Space Complexity :- 
        - O(1) extra space
    Time complexity:
        - worst: O(n2) comparisons and swaps
        - best: O(n) when nearly sorted
    not stable
    adaptive - O(n) time when nearly sorted

*/

(function() {
    let logs = new ConsoleLog("F_E_M_BubbleSort", false);
    function swap(arr, i, j) {
        const keep = arr[i];
        arr[i] = arr[j];
        arr[j] = keep;
    }

    function BubbleSort(arr) {
        for (let i = 0; i < (arr.length -1); i++) {
            for (let j = i+1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    swap(arr, i, j);
                }
            }
        }
        return arr;
    }

    const inputArray = [10,3,16,6,4];
    const sortedArray = BubbleSort(inputArray);  
    logs.push(`[10,3,16,6,4] = `,sortedArray);  //[3,4,6,10,16]
    logs.print();
})();