/*

Selects the smallest element in an array, pushes it into a new array
[1, 6, 8, 2, 5]
[] 


pseduocode 
    loop for i from 0 -> n-2            => O(n-1)
        min = arr[i], track             => O(1)
        loop from j from i+1 => n-1     => O(n-1)
            min > arr[j]                => O(1)
                min = arr[j]            => O(1)
                track = j               => O(1)
        swap(i, track)                  => O(1)   
    return arr       

    fn = (n-1)*(c+(n-1))*c
         (n-1)*(n-1+c)*c
         (n^2 -n -n +1 +cn -c)*c
         (n^2 -n(1+1-c) -c)*c
    


Properties:
    O(1) extra space
    O(n^2) comparisons (for worst and best)
    O(n) swaps
    not stable
    not adaptive

*/



(function() {
    let logs = new ConsoleLog("F_E_M_SelectionSort", false);

    function swap(arr, i, j) {
        const keep = arr[i];
        arr[i] = arr[j];
        arr[j] = keep;
    }

    function SelectionSort(arr) {
        for(let i = 0; i < (arr.length - 1); i++ ) {
            let min = arr[i], track;
            for(let j = i+1; j < arr.length; j++ ) {
                if (min > arr[j]) {
                    min = arr[j];
                    track = j;
                }
            }
            if(track){
                swap(arr, i, track);
            }
        }
        return arr;
    }

    const inputArray = [10,3,16,6,4];
    const sortedArray = SelectionSort(inputArray);
    logs.push(`[10,3,16,6,4] = `,sortedArray);  //[3,4,6,10,16]
    logs.print();
})();