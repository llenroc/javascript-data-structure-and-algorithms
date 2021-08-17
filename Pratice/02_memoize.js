function memoize(fn) {
  const cache = {};
  return (...args) => {
    const hash = JSON.stringify(args);
    if(cache[hash]) {
      console.log(`chached args = ${args}`);
      return cache[hash];
    } else {
      console.log(`calculating args = ${args}`);
      const newValue = fn.apply(this, args);
      cache[hash] = newValue;
      return newValue;
    }
  }
}

function factorial(n) {
  if(n <= 1) return 1;
  return n * factorial(n-1);
}

//6 = 6 * 5 * 4 * 3 * 2 * 1

const factorialWithMemoize = memoize((n) => {
  if(n <= 1) return 1;
  return n * factorialWithMemoize(n-1);
})

console.log(factorial(6));
console.log(factorialWithMemoize(6));
console.log(factorialWithMemoize(5));