const cache = {};
const coins = [10, 6, 1];

const makeChange = (c) => {
  // Return the value if it’s in the cache
  if (cache[c]) return cache[c];

  let minCoins = -1;

  // Find the best coin
  coins.forEach(coin => {
    if (c - coin >= 0) {
      let currMinCoins = makeChange(c - coin);
      if (minCoins === -1 || currMinCoins < minCoins) {
        minCoins = currMinCoins
      }
    }
  })

  // Save the value into the cache
  cache[c] = minCoins + 1;
  return cache[c];
}

console.log(makeChange(12));



// Task: convert this top-down recursive solution from a previous exercise to a bottom-up iterative solution

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
