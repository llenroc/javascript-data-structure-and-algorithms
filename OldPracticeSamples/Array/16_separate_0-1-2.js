/*

Segregate 0's, 1's and 2's together in an array[O(n)](Dutch National Flag Problem)
-----------------------------------------------------------------------------------
Segregate 0's, 1's and 2's together in an array[O(n)](Dutch National Flag Problem). 
Most efficient solution for 3 way partitioning.

Array :- 0 1 0 1 0 1 2 1 2 0 2 -> 0 0 0 0 1 1 1 1 2 2 2

*/



(function() {
    let logs = new ConsoleLog("F_E_M_Separate_0-1-2", false);

    function Separate_012(array) {
        var low = 0, high = array.length-1, mid=0;

        function swap(i,j) {
            var keep = array[i];
            array[i] = array[j];
            array[j] = keep;
        }

        while(mid <= high) {
            switch(array[mid]) {
                case 0:
                    swap(low,mid);
                    low++;
                    mid++;
                    break;
                case 1:
                    mid++;
                    break;
                case 2:
                    swap(mid, high);
                    high--;
                    break;
            }
        }
        return array;
    }

    logs.push("[0 1 0 1 0 1 2 1 2 0 2] => [0 0 0 0 1 1 1 1 2 2 2]", Separate_012([0, 1, 0, 1, 0, 1, 2, 1, 2, 0, 2]));
    logs.print();
})();