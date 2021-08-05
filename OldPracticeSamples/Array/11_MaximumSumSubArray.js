/*

Get Minimum from Stack in O(1) -> constant time complexity

*/
/*
Maximum Sum SubArray (Kadane's algorithm)
-----------------------------------------
Find the subarray with the maximum sum in an array. The solution is given by the Kadane's algorithm.



*/


(function() {
    let logs = new ConsoleLog("F_E_M_MaximumSumSubArray", false);

    function MaximumSumSubArray(array) {
        var max_so_far = array[0];
        var max_end_here = 0;
        var start = 0;
        var end = 0;
        var s = 0;

        for(var i = 0; i < array.length; i++) {
            max_end_here = max_end_here + array[i];

            if(max_so_far < max_end_here) {
                max_so_far = max_end_here;
                start = s;
                end = i;
            }
            if(max_end_here < 0 ) {
                max_end_here = 0;
                s = i+1;
            }
        }

        logs.push("Maximum sum of sub array => 7 =  ", max_so_far);
        logs.push("start index :- 3 = ", start);
        logs.push("end index :- 9 = ", end);
    }

    MaximumSumSubArray([4,-3,-2,2,3,1,-2,-3,4,2,-6,-3,-1,3,1,2]);
    logs.print();
})();