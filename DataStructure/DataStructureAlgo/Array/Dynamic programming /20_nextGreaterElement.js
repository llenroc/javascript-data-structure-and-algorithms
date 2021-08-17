/*

next greater element (use of stack)
-----------------------------------
Find NEXT GREATER ELEMENT for each element in the array by using Stack. 
The time complexity is less than O(n^2).

[5,3,2,10,6,8,1,4,12,7,0]

{    
    0 -> 'No next greater element',
    1 -> 4,
    2 -> 10,
    3 -> 10,
    4 -> 12,
    5 -> 10,
    6 -> 8,
    7 -> 'No next greater element',
    8 -> 12,
    10 -> 12,
    12 -> 'No next greater element'  
}

Reference Link :- https://www.youtube.com/watch?v=uFso48YRRao&list=PLeIMaH7i8JDjd21ZF6jlRKtChLttls7BG&index=19

*/



(function() {
    let logs = new ConsoleLog("F_E_M_NextGreaterElement", false);

    function nextGreaterElement(array) {
        var hashMap = {};
        var stack = [];
        stack.push(array[0]);

        for(var i = 1; i < array.length; i++) {
            var stackTop = stack[stack.length-1];
            if (array[i] < stackTop ) {
                stack.push(array[i]);
            } else {
                stack.pop(); // remove the first element as stackTop has captured the first element
                while(stackTop < array[i]) {
                    hashMap[stackTop] = array[i];
                    stackTop = stack.pop();
                }
                if(stackTop) stack.push(stackTop);
                stack.push(array[i]);
            }
        }

        while(stack.length > 0) {
            var key = stack.pop();
            hashMap[key] = 'No Greater Value';
        }
        return hashMap;
    }

    var captureMap = nextGreaterElement([5,3,2,10,6,8,1,4,12,7,0]);
    logs.push("[5,3,2,10,6,8,1,4,12,7,0] = ", captureMap);
    logs.push("0 ->  No Greater Value = ", captureMap[0]);
    logs.push("1 -> 4 = ", captureMap[1]);
    logs.push("2 -> 10 = ", captureMap[2]);
    logs.push("3 -> 10 = ", captureMap[3]);
    logs.push("4 -> 12 = ", captureMap[4]);
    logs.push("5 -> 10 = ", captureMap[5]);
    logs.push("6 -> 8 = ", captureMap[6]);
    logs.push("7 -> No Greater Value = ", captureMap[7]);
    logs.push("8 -> 12 = ", captureMap[8]);
    logs.push("10 ->12 = ", captureMap[10]);
    logs.push("12 -> No Greater Value = ", captureMap[12]);

    logs.print();
})();