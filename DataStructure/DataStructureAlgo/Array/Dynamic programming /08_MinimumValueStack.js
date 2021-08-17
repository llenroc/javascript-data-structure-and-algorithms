/*

Get Minimum from Stack in O(1) -> constant time complexity

*/



(function() {
    let logs = new ConsoleLog("F_E_M_MinimumValueStack", false);

    function miniStack(size) {
        size = size || 5;
        var array = new Array(size);
        var supportingStack = new Array(size);
        var count = -1;
        var index = -1;

        return {
            push: function(value) {
                if (count === size) {
                    return 'Stack is full';
                }
                array[++count] = value;
                if(index === -1) {
                    supportingStack[++index] = value;
                } else if(array[count] < supportingStack[index]) {
                    supportingStack[++index] = value;
                } 
                return array;
            },
            pop: function() {
                if(count < 0) {
                    return 'Nothing to pop';
                } 
                var value = array[count];
                if(supportingStack[index] === value) {
                    supportingStack[index--] = null;
                }
                array[count--] = null;
                return value;
            },
            getMinimum: function() {
                return supportingStack[index] || null;
            }
        }
    }

    var myStack = miniStack(5);
    logs.push("myStack.push(10) = ", myStack.push(10));
    logs.push("myStack.push(30) = ", myStack.push(30));
    logs.push("myStack.push(9) = ", myStack.push(9));
    logs.push("myStack.push(8) = ", myStack.push(8));
    logs.push("Minimum  8 = ", myStack.getMinimum());
    logs.push("myStack.pop(8) = ", myStack.pop());
    logs.push("Minimum  9 = ", myStack.getMinimum());
    logs.push("myStack.pop(9) = ", myStack.pop());
    logs.push("myStack.pop(30) = ", myStack.pop());
    logs.push("myStack.pop(10) = ", myStack.pop());
    logs.push("Minimum  = ", myStack.getMinimum());

    logs.print();
})();