console.log("WeakSet");

// WeakSet - 
// 1. You can add only Object value, You can not add primitive values to WeakSet.
// 2. WeakSet are not iterable object, we can run for-of loop 
// 3  It has only 3 methods - add, delete and has 

let weakSet = new WeakSet();

// weakSet.add(1); // No allowed 
// console.log(weakSet); // Uncaught TypeError: Invalid value used in weak set


let profile = {
  "firstName": "John",
  "lastName": "Doe"
};
weakSet.add(profile);
console.log(weakSet); // WeakSet {{…}}


// Example - 2
const a = "a";
const b = "b";
const weakSet2 = new WeakSet([{a:1}, {b:2}]);
console.log(weakSet2); // WeakSet {{…}, {…}}






