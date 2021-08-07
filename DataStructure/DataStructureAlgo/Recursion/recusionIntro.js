
//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

//2. Next, try looping just like above except using recursion

//3. Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse


(function() {
    let logs = new ConsoleLog("F_E_M_Recursion_Intro", false);

    //1
    function whileLoop(n) {
        while(n >= 0) {
            logs.push("whileLoop n= ",n);
            n--;
        }
    }
    whileLoop(4);

    //2
    function recursionLoop(n) {
        if(n < 0){
            return;
        } else {
            logs.push("recursionLoop n= ",n);
            recursionLoop(n-1);
        }
    }
    recursionLoop(4);

    //3
    function whileExponent(base, expo) {
        let result = 1;
        while(expo > 0) {
            result = result * base;
            logs.push(`whileExponent ${expo} = `,result);
            expo--;
        }   
    }
    whileExponent(2,3);

    //4
    function recursiveExponent(base, expo) {
        var result;
        if (expo < 1) {
            return 1;
        } else {
            result =  base * recursiveExponent(base, --expo);    
        }  
        return result;   
    }

    logs.push(`recursiveExponent 2 ^ 3 = `,recursiveExponent(2,3));

    /*
    //5
    pseducode :- 
        return if arr.length == 0
        store past value  = arr.pop()
        make recursivecall with (arr, num)
        push (last * num)
        return arr;
    */
    var recursiveMultiplier = function (arr, num) {
        if(arr.length === 0) {
            return;
        }
        let last = arr.pop();
        recursiveMultiplier(arr,num);
        arr.push(last * num);
        return arr;
    }
    logs.push(`recursiveMultiplier [1,2,3] =`,recursiveMultiplier([1,2,3],3));

    //6
    var recursiveReverse = function(arr) {
        var result = [];
        function recursive(arr) {
            if(arr.length === 0){
                return;
            } else {
                let value = arr.pop();
                result.push(value);
                recursive(arr);
            }
        }
        recursive(arr);
        return result;
    }
    logs.push(`recursiveReverse [1,2,3] =`,recursiveReverse([1,2,3]));

    logs.print();
})();





