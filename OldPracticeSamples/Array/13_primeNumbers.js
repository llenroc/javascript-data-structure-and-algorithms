/*

Question 1:- How to find the prime numbers from 1-100 using the Sieve of Eratosthenes.

Algorithm for finding out prime Numbers from 1 to n

Sieve-of-eratosthenes :- 
https://mgechev.github.io/javascript-algorithms/primes_sieve-of-eratosthenes.js.html
https://www.youtube.com/watch?v=I6HrVRGGYNI&index=20&list=PLeIMaH7i8JDjd21ZF6jlRKtChLttls7BG


Question 2:- Check if the given number is prime or not 


*/



(function() {
    let logs = new ConsoleLog("F_E_M_PrimeNumbers", false);

    //Question 1
    function primeNumbers(limit) {
        var sieve = [];
        var primes = [];
        var k , l;

        sieve[1] = false;

        for(k = 2; k < limit; k++) {
            sieve[k] = true;
        }

        for(k=2; k * k <= limit; k++) {
            if(sieve[k] !== true) {
                continue;
            }

            for( l = k * k; l <= limit; l = l+k) {
                sieve[l] = false;
            }
        }

        sieve.forEach(function(value, index) {
            if(value) {
                this.push(index);
            }
        }, primes);

        return primes;
    }


    //Question 2
    function test_prime(n) {
      if (n===1) {
        return false;
      } else if (n === 2) {
        return true;
      } else {
        var m = Math.sqrt(n);
        for (var i = 2; i <= m; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
      }
    }

    logs.push(" primeNumbers(50) => ", primeNumbers(50));

    logs.push("Check prime number 17 = true", test_prime(17));
    logs.push("Check prime number 43 = true", test_prime(43));
    logs.push("Check prime number 20 = false", test_prime(20));
    logs.print();
})();