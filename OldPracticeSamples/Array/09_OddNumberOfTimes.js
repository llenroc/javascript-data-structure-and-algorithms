/*

Find the number which occurs odd number of times in an Array

Method 1:- XOR  ( We can use this method when there is ONLY one )
Method 2:- HashTable (Inefficient as has high space complexity ( need to create extra space for HashTable))
    a. Using Array
    b. Using Object

XOR function :- http://www.howtocreate.co.uk/xor.html
XOR solution :- https://rohan-paul.github.io/javascript/2017/01/28/Bitwise_XOR_Operators_in_JavaScript/

----------
a - b
----------
0 - 0 -> 0
1 - 1 -> 0
0 - 1 -> 1
1 - 0 -> 1

*/



(function() {
    let logs = new ConsoleLog("F_E_M_OddNumberOfTimes", false);

    function XOR(a, b) {
        return !a != !b;
    }

    //With no extra space 
    function findNumberOfOddTimes(array) {
        return array.reduce((a,b) => a ^ b);
    }

    function findNumberOfOddTimes2(array) {
        //return array.reduce((a,b) => a ^ b);
        return array.reduce(function(a,b) {
            var str = "a = " + a.toString() + " b = "+ b.toString() + " , a^b = " + (a^b).toString();
            console.log(str);
            return a^b;
        }, []);
    }
    // a =   b = 1 , a^b = 1
    // a = 1 b = 2 , a^b = 3
    // a = 3 b = 3 , a^b = 0
    // a = 0 b = 4 , a^b = 4
    // a = 4 b = 1 , a^b = 5
    // a = 5 b = 2 , a^b = 7
    // a = 7 b = 3 , a^b = 4

    //With high space complexity | Using Array
    function findNumberUsingArray(array) {
        var output = [];
        array.forEach(function(element) {
            var index = output.indexOf(element);
            if(index > -1) {
                output.splice(index,1);
            } else {
                output.push(element);
            }
        }, this);
        return output;
    }

    //With high space complexity | Using Object
    function findNumberUsingObject(array) {
        var output = {};
        array.forEach(function(element) {
            var key = JSON.stringify(element);
            output[key] = output[key] ? output[key] + 1 : Number(1);
        }, this);

        for(key in output) {
            if(output[key] % 2 !== 0) {
                return JSON.parse(key);
            }
        }

        return 'Number does not exist';
    }
  
    var test = [1,2,3,4,1,2,3];
    var test2 = [1,2,3,4,1,2,3,5];
    var test3 = [{'key': 'value'}, {'key1': 'value'}, {'key': 'value'}]


    logs.push("Odd Number  = ", findNumberOfOddTimes(test));
    logs.push("Odd Number [1,2,3,4,1,2,3,5] => 4, 5 = ", findNumberOfOddTimes(test2)); // output -> 1  X wrong output ( multiple number of odd items)
    
    logs.push("Odd Number [1,2,3,4,1,2,3] => 4 = ", findNumberUsingArray(test));
    logs.push("Odd Number [1,2,3,4,1,2,3,5] => 4, 5 = ", findNumberUsingArray(test2));
    
    logs.push("Odd Number [1,2,3,4,1,2,3] => 4 = ", findNumberUsingObject(test));
    logs.push("Odd Number [1,2,3,4,1,2,3,5] => 4, 5 = ", findNumberUsingObject(test2)); // 4 -> currently wrote to return one item only
    logs.push(`Odd Number [{'key': 'value'}, {'key1': 'value'}, {'key': 'value'}] => {key1: "value"} = `, findNumberUsingObject(test3));

    logs.print();
})();