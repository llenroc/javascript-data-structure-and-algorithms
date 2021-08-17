/*

Segregate 0's and 1's in an array(collect 0 and 1 together respectively)
-------------------------------------------------------------------------
Given an array of 0's and 1's. Segregate the 0's and 1's in the array. 
Collect 0 and 1 together respectively.

Method 1 :-  Same as 16_separate_0-1-2.js logic
Method 2 :-  count Number of 0's or 1 and rewrite the array

*/



(function() {
    let logs = new ConsoleLog("F_E_M_Separate_0-1", false);

    function separate_01(array) {
        var counter = 0;
        for(var i = 0; i < array.length; i++) {
            if(array[i] === 0) {
                counter++;
            }
        }

        for(var i = 0; i < array.length; i++) {
            if(counter > 0) {
                array[i] = 0;
                counter--;
            } else {
                array[i] = 1;
            }
        }

        return array;
    }

    logs.push("[0,1,0,1,0,1,0,1] => [0,0,0,0,1,1,1,1] = ", separate_01([0,1,0,1,0,1,0,1]));
    logs.print();
})();