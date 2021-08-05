/*


Properties:
O(1) extra space
Time complexity:
- worst: O(n^2) comparisons and swaps
- best: O(n) when nearly sorted
stable
adaptive - O(n) time when nearly sorted


pseduocode
==========

loop for i from 0 -> n-2   
    loop for j from i+1 -> n-1
        counter = j
        while(arr[counter] < arr[counter-1] && counter >= 1)
            swap(arr, counter, (counter-1))
            counter--
return arr

*/




(function() {
    let logs = new ConsoleLog("F_E_M_InsertionSort", false);

    function swap(arr, i, j) {
        const keep = arr[i];
        arr[i] = arr[j];
        arr[j] = keep;
    }

    //Sameer first time coded 
    function insertionSort(arr) {
        for(let i = 0; i < (arr.length - 1); i++ ) {
            for (let j = i+1; j < arr.length; j++) {
                let counter = j;
                while(arr[counter] < arr[counter-1] && counter >=1 ) {
                    swap(arr, counter, counter-1);
                    counter--;
                }
            }
        }
        return arr;
    }


    // Efficient Way
    function insertionSort2(arr) {
        for( let index = 1; index < arr.length; index++) {
            let compareIndex = index-1;
            while(arr[compareIndex] > arr[index] && compareIndex > -1) {
                swap(arr, compareIndex, index);
                index = compareIndex;
                compareIndex--;
            }
        }
        return arr;
    }


    const inputArray = [10,3,16,6,4];
    const sortedArray = insertionSort(inputArray);
    logs.push(`[10,3,16,6,4] = `,sortedArray);  //[3,4,6,10,16]
    const inputArray2 = [10,3,16,6,4];
    const sortedArray2 = insertionSort2(inputArray2);
    logs.push(`[10,3,16,6,4] = `,sortedArray2);  //[3,4,6,10,16]
    logs.print();
})();