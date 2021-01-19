console.log("HashMapFirstRepeat")

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// Solution 01 
function firstRecurringCharacter(input) { // O(n)
  const hashMap = {};
  for(let i = 0; i < input.length; i++) {
    const current = input[i];
    if (hashMap[current]) {
      return current;
    }
    hashMap[current] = true;
  }
  return undefined;
}

// Time cpmplexity = O(n)
// Space complexity = O(n) <- we are creating hashMap of n space 

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4])); // 2
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4])); // 1
console.log(firstRecurringCharacter([2,3,4,5])); // undefined
console.log(firstRecurringCharacter([2])); // undefined
console.log(firstRecurringCharacter([])); // undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4])); // 5 ( 5 got repeated first)

console.log("\n");

// Solution 02 [ES6] 
function firstRecurringCharacter1(input) { // O(n)
  const mySet = new Set();
  for (let i = 0; i < input.length; i++) {
    const item = input[i];
    if(mySet.has(item)) {
      return item;
    }
    mySet.add(item);
  }
  return undefined;
}

console.log(firstRecurringCharacter1([2,5,1,2,3,5,1,2,4])); // 2
console.log(firstRecurringCharacter1([2,1,1,2,3,5,1,2,4])); // 1
console.log(firstRecurringCharacter1([2,3,4,5])); // undefined
console.log(firstRecurringCharacter1([2])); // undefined
console.log(firstRecurringCharacter1([])); // undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

console.log(firstRecurringCharacter1([2,5,5,2,3,5,1,2,4]));

/* ************* Solution 03 *************** */
// Nested for loop  // O(n^2)
function firstRecurringCharacter2(input) {
  for(let i = 0; i < input.length - 1; i++ ){
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

// Time cpmplexity = O(n^2)
// Space complexity = O(1) <- we are not creating any new space

console.log("\n");

console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]));  
console.log(firstRecurringCharacter2([2,1,1,2,3,5,1,2,4])); // 2 [ Different ]
console.log(firstRecurringCharacter2([2,3,4,5]));// undefined
console.log(firstRecurringCharacter2([2]));// undefined
console.log(firstRecurringCharacter2([])); // undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

console.log(firstRecurringCharacter2([2,5,5,2,3,5,1,2,4]));  // 2 [ Different ]

/* ************* Solution 03 issue solution *************** */

function firstRecurringCharacter3(input) {
  for(let i = 0; i < input.length - 1; i++ ){
    for (let j = i + 1; j >= 0; j--) {
      if (input[i] === input[j] && i !== j) {
        return input[i];
      }
    }
  }
  return undefined;
}
`
function firstRecurringCharacter3(input) {
  for(let i = 0; i < input.length - 1; i++ ){
    for (let j = i + 1; j >= 0; j--) {
      if (input[i] === input[j] && i !== j) {
        return input[i];
      }
    }
  }
  return undefined;
}
`

// Time cpmplexity = O(n^2)
// Space complexity = O(1) <- we are not creating any new space

console.log("\n");

console.log(firstRecurringCharacter3([2,5,1,2,3,5,1,2,4]));  
console.log(firstRecurringCharacter3([2,1,1,2,3,5,1,2,4])); // 1 [ correct ]
console.log(firstRecurringCharacter3([2,3,4,5]));// undefined
console.log(firstRecurringCharacter3([2]));// undefined
console.log(firstRecurringCharacter3([])); // undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

console.log(firstRecurringCharacter3([2,5,5,2,3,5,1,2,4]));  // 5 [ correct ]
