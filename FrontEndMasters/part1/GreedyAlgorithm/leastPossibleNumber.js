
/**
    Greedy approach -> Always subtract coin possible from the current amount.
 
    Brute Force pproach - Calculate every single combination possible and keep track of the minimum
 */


/**                                             
You are the banker in Monopoly with your family who has lost many of the game pieces so you only have bills in these denominations: 

$5 $10 $25

 
You need only pay out your family in the least number of bills possible so you don't run out before the game is over. Write a function that calculates the least number of bills required for any given dollar amount that is divisible by 5.

 */


//TASK-1 Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.


// coin values: 5, 10, 25

// input amount: 40 , output # of coins: 3 (25, 10, 5)

// input amount: 35, output # of coins: 2 (25, 10) 



/*
Steps
1. base condtion  - number > 0
2. n/25 (quotient)  > 0, increase count by quotient and subtract number by quotient * 25 
3. n/10 (quotient)  > 0, increase count by quotient and subtract number by quotient * 10 
4. n/5 (quotient)  > 0, increase count by quotient and subtract number by quotient * 5 

 */




function leastCount(n) {
  let count = 0;
  const quotient25 = Math.floor(n / 25); 
  if(quotient25 > 0) {
    n = n - (quotient25 * 25);
    count = count + quotient25;
  }

  const quotient10 = Math.floor(n / 10);
  if(quotient10 > 0) {
    n = n - (quotient10 * 10);
    count = count + quotient25;
  }

  const quotient5 = Math.floor(n / 5);
  if(quotient5 > 0) {
    n = n - (quotient5 * 5);
    count = count + quotient5;
  }
  
  return count;
}

console.log(`Number of coins for amount. 40 = ${leastCount(40)}`);
console.log(`Number of coins for amount. 35 = ${leastCount(35)}`);
console.log("~~~~~~~~~~~~~~~~~~~~~~~\n");




// TASK-2 - Create makeChange function which will accept required coin set and amount

// input amount: 40 , output # of coins: 3 (25, 10, 5)
// makeChange([5,10,25], 40) => output 3 coins 

/**
 
 Steps - 
 1. Sort coins set in descending order
 2. Run loop till amount > 0
 3. Run counter for coinList index 
 3. Take coin from the cointList based upon index and check if quotient of amount & coin is greater than 0
 4. Increment count by quotient times 
 5. subtract amount by coin * quotient
 6. repeat till amount > 0
 */



function makeChange(coinList, amount ) {
  coinList.sort((a, b) => (b - a));
  let counter = 0;
  let coinIndex = 0;
  while(amount > 0) {
    console.log(` before amount = ${amount}, counter = ${counter}`);
    const coin = coinList[coinIndex];
    const quotient = Math.floor(amount / coin);
    if (quotient > 0) {
      counter = counter + quotient;
      amount = amount - (quotient * coin);
    }
    console.log(`after amount = ${amount}, counter = ${counter}`);
    coinIndex++;
  }
  return counter;
}


console.log(`[5, 10, 25], 40 = ${makeChange([5, 10, 25], 40)}`); // 3
console.log("~~~~~~~~~~~~~~~~~~~~~~~\n");


console.log(`[5, 10, 25], 35 = ${makeChange([5, 10, 25], 35)}`); // 3 
console.log("~~~~~~~~~~~~~~~~~~~~~~~\n");


// Answer for this not correct 
// Answer should be 6, 6  (2 coins ) 
// instead it results (10,1,1)( 3 coins)
// Gready approach does not work always 
console.log(`[1, 6, 10], 12 = ${makeChange([1, 6, 10], 12)}`); // 3
console.log("~~~~~~~~~~~~~~~~~~~~~~~\n");



//TASK 3-  Write a function, makeChange, that returns an integer that represents the least number of coins that add up to the amount, n.

/**
 
Steps
1. Will use recursion to return count 
 */


let recursionCounter = 0;
const coins = [10, 6, 1];

const makeChangeBrutForce = (value, i) => {
  recursionCounter++;
  console.log(`${recursionCounter}: calling ${value} at ${i}`)
  if (value === 0) return 0;
  let minCoins;
  coins.forEach((coin, i) => {
    if (value - coin >= 0) {
      let currMinCoins = makeChangeBrutForce(value - coin, i);
      if(minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });
  return minCoins + 1;
};

console.log(`Least count = ${makeChangeBrutForce(12)}`);

console.log("~~~~~~~~~~~~~~~~~~~~~~~\n");



//TASK-4  with cache 

const cache = {};

const makeChangeWithCache = (c) => {
  // Return the value if it’s in the cache
  if (cache[c]) return cache[c];

  let minCoins = -1;

  // Find the best coin
  coins.forEach(coin => {
    if (c - coin >= 0) {
      let currMinCoins = makeChangeWithCache(c - coin);
      if (minCoins === -1 || currMinCoins < minCoins) {
        minCoins = currMinCoins
      }
    }
  })

  // Save the value into the cache
  cache[c] = minCoins + 1;
  return cache[c];
}

console.log(`makeChangeWithCache Least count = ${makeChangeWithCache(12)}`);



// Task 5 : convert this top-down recursive solution from a previous exercise to a bottom-up iterative solution

const cache1 = {};

const makeChange = c => {
  // if (cache[c]) return cache[c];

  let minCoins = -1;
  for (let i = 0; i <= c; i++) {
    coins.forEach(coin => {
      if (i - coin >= 0) {
        // console.log(cache[i-coin])
        let currCoins = cache1[i-coin] + 1 || 0;
        if (minCoins === -1 || currCoins < minCoins) {
          minCoins = currCoins;
        }
      }
    });
    cache1[i] = minCoins + 1;
  }
  return cache1[c];
};

console.log(makeChange(10));
// console.log(!!(undefined + 1))