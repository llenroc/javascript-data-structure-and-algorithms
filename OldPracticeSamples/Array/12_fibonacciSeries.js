/*

Question - 1. Fibonacci series with given number of elements n
Question - 2. 
    Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.
        Fibonnaci's sequence:
        input    0 1 2 3 4 5 6  7  8  9 ...
        output   0 1 1 2 3 5 8 13 21 34 ...
    What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)


Reference Link :- 
https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
https://www.youtube.com/watch?v=0FqLNPt9plg&index=18&list=PLeIMaH7i8JDjd21ZF6jlRKtChLttls7BG


*/



(function () {
    let logs = new ConsoleLog("F_E_M_FibonacciSeries", false);

    // O(n) implementation using dynamic programming
    function fibonacciSeries(n) {
        var memo = {
            0: 0,
            1: 1
        };

        function recurse(m) {
            if (memo[m] === undefined) {
                memo[m] = recurse(m - 1) + recurse(m - 2);
            }
            return memo[m];
        }
        recurse(n);
        return memo;
    }

    // Question - 1 => Using Array  
    // Time complexity :- O(n) - linear
    function fibonacciSeries2(n) {
        var result = [];
        result[0] = 0;
        result[1] = 1;
        for (var i = 2; i <= n; i++) {
            result[i] = result[i - 1] + result[i - 2];
        }
        return result.splice(1);
    }

    //Question - 2 | nth Fibonnaci number

    // O(n) implementation using dynamic programming
    function fibonacciNumber(n) {
        var memo = {
            0: 0,
            1: 1
        };

        function recurse(m) {
            if (memo[m] === undefined) {
                memo[m] = recurse(m - 1) + recurse(m - 2);
            }
            return memo[m];
        }
        return recurse(n);
    }

    // O(2^n) implementation
    function fibonacciNumber2(n) {
        if (n === 0 || n === 1) return n;
        return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
    }

    function fib(n, a, b) {
        a = a === undefined ? 0 : a;
        b = b === undefined ? 1 : b;
        if (n) return fib(n-1, b, a + b);
        else return a;
    }

    logs.push("fibonacciSeries(6) => 1,1,2,3,5,8 = ", fibonacciSeries(6));

    logs.push("fibonacciSeries2(4) => 1,1,2,3 = ", fibonacciSeries2(4));
    logs.push("fibonacciSeries2(5) => 1,1,2,3,5 = ", fibonacciSeries2(5));
    logs.push("fibonacciSeries2(6) => 1,1,2,3,5,8 = ", fibonacciSeries2(6));

    logs.push("fibonacciNumber(6) => 8 = ", fibonacciNumber(6));

    logs.push("fibonacciNumber2(6) => 8 = ", fibonacciNumber2(6));

    logs.push("fib(0,1,6) => 6 = ", fib(6));
    logs.print();
})();