/*

Zig Zag Array (spiral order array)
-----------------------------------
Zig Zag array is an array in which every element is less than and greater than the next element alternatively. 
Every element is either greater than or less than its neighbours.


flag = 0  i < i+1
flag = 1  i > i+1

*/



(function() {
    let logs = new ConsoleLog("F_E_M_ZigZagArray", false);

    function zigZag(array) {
        var flag = 0;
        var i = 0;

        function swap(i,j) {
            var keep = array[i];
            array[i] = array[j];
            array[j] = keep;
        }

        while(i < array.length-1) {
            if(flag == 0) {
                if ( !(array[i] < array[i+1]) )  {
                    swap(i, i+1);
                }
            } else {
                if ( !(array[i] > array[i+1]) )  {
                    swap(i, i+1);
                }
            }
            flag = !flag;
            i++;
        }

        return array;
    }
    
    logs.push("[3,4,6,2,1,8,9] => [3, 6, 2, 4, 1, 9, 8] = ", zigZag([3,4,6,2,1,8,9]));
    logs.push("[5,10,8,12,6,9,4] => [5, 10, 8, 12, 6, 9, 4] = ", zigZag([5,10,8,12,6,9,4]));
    logs.print();
})();