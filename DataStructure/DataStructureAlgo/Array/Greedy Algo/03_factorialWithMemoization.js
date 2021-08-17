// Task 1: Without peeking, write your own recursive factorial method
// Task 2: Use your memo function from the previous exercise to memoize your factorial method



function factorial(n) {
  if(n === 1 ) {
    return 1;
  }
  return n * factorial(n-1);
}

// console.log("factorial = ", factorial(5));

function memoize(cb) {
  const cache = {};

  return (...arg) => {
    const hashKey = JSON.stringify(arg);
    if (hashKey in cache) {
      console.log("Getting value from cache", hashKey);
      return cache[hashKey];
    }

    console.log("caculating...", hashKey);
    let result = cb(...arg);
    cache[hashKey] = result;
    return result;
  }
}


// const factorialMemoize = memoize(factorial);
// console.log(factorialMemoize(5));
// console.log(factorialMemoize(5));
// console.log(factorialMemoize(6));


// Correct solution is :- 

const factorialMemoize = memoize((x) => {
  if(x === 0) {
    return 1;
  }
  return x * factorialMemoize(x - 1);
})

factorialMemoize(5);
console.log("~~~~~~~~~~~~~~~~~~~~\n");
factorialMemoize(6);