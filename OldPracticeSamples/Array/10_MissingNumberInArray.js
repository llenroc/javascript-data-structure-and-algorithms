/*

Find the missing number in the array which contains a series of consecutive numbers in range from 1 to n. 
Use summation formula for natural numbers 1 to n. We can also use the XOR operation.

Find missing number in an array(using summation and XOR operation)
Link :- https://www.youtube.com/watch?v=Dq0jQX3YNKg&index=8&list=PLeIMaH7i8JDjd21ZF6jlRKtChLttls7BG


Method 1 :- (sum of numbers from 1 -> n) - (sum of all the numbers in an array)
(sum of numbers from 1 -> n) = (n*(n+1))/2 

Method 2 :- XOR 
(XOR range 1 to n) XOR (XOR range a[0] to a[n]) 

*/



(function() {
    let logs = new ConsoleLog("F_E_M_MissingNumberInArray", false);

    //With no extra space 
    function missingNumberInArray(array) {
        var xorOfElements =  array.reduce((a,b) => a ^ b);

        var xorOfRange ;
        for(var i = 0; i <= array[array.length - 1]; i++) {
            xorOfRange = xorOfRange ^ i;
        }

        return xorOfElements ^ xorOfRange;
    }

    var test = [1,2,3,5];
    logs.push("MissingNumberInArray  4 = ", missingNumberInArray(test));

    var test1 = [1,2,3,4,5,7,8,9];
    logs.push("MissingNumberInArray  6 = ", missingNumberInArray(test1));

    logs.print();
})();