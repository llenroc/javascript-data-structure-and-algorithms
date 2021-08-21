/*

Majority Element in an array (Algorithm)
----------------------------------------
Find the majority element in an array. Number of occurrences of that element must be greater than half of the 
size of the array. There can be atmost one majority element in the array. 

MajorityElement => ( No. of occurance > (n/2) )


*/



(function() {
    let logs = new ConsoleLog("F_E_M_MajorityElement", false);
    
    function majorityElements(array) {
        var hashMap = {};

        array.forEach(function(element) {
            this[element] = this[element] ? (this[element] + 1) : 1;
        }, hashMap);

        for(key in hashMap){
            if(hashMap[key] > (array.length/2)) {
                return key;
            }
        }
        return "No Majority Element";
    }
    
    logs.push("[1,2,4,2,2,4,3,2,3,2,2] => 2 = ", majorityElements([1,2,4,2,2,4,3,2,3,2,2]));
    logs.push("[1,2,4,2,2,4,3,2,3,2] => 'No Majority Element' = ", majorityElements([1,2,4,2,2,4,3,2,3,2]));
    logs.print();
})();