console.log("I am in BigO");

/*
Cheatsheet - https://www.bigocheatsheet.com/

 BigO rule 
 Rule 1. Worst case 
 Rule 2. Remove constants 
 Rule 3. Different terms for inputs
     + for in order
     * for nested steps
 Rule 4. Drop Non Dominants


 - O(1)  Constant - no loop 
 - O(n)  Linear - for loops , while loops 
 - O(n^2) Quadratic - every element in a collection needs to be compared to every other elemnet, Two nested loops

 - O(n!) Factorail - Adding a loop for every element - costliest operation

 - O(log N ) Logrithmic - usally searcing algorithms have log(n) if they are sorted (Binary search) (not on hash maps though)
 - O(n*log(n)) Log linear  - Sorting oeartions usually 
 - O(2^N) Exponential - recursive algorithms that solve a problem of size N 

 - Iterating through half a collection is still O(n)
 - Two separate collections: O(a * b)

 What can cause time in a function?-
 Operations ( +, -, *, /)
 Comparisons ( <, >, ==)
 Loopong ( for, while )
 Outside function call (function())

*/


const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill"];
const large = new Array(10000).fill("nemo");
function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Forunt Nemo");
    }
  }
  let t1 = performance.now();
  console.log(`Call to find nemo took ${t1 - t0} milliseconds`);
}
findNemo(nemo); // O(n)  ---> Linear Time
console.log("findNemo = O(n) Linear time");


/**************************/
// ES5
function compressAllBoxes(boxes) {
  boxes.forEach(function(box) {
    console.log("box = ", box);
  })
}

// ES6 
const compressAllBoxesES6 = () => {
  boxes.forEach((box) => console.log(`box = ${box}`));
}

compressAllBoxes(["box1", "box2", "box3"]); // O(n)
console.log("compressAllBoxes = O(n) Linear time");

/**************************/

const compressFirstBox = (boxes) => {
  console.log(`First box = ${boxes[0]}`); //O(1)
}

compressFirstBox(["box1", "box2", "box3"]); // O(1) constant time
console.log("compressFirstBox = O(1) constant time");


/**************************/

const compressFewBox = (boxes) => {
  console.log(`First box = ${boxes[0]}`); //O(1)
  console.log(`Second box = ${boxes[1]}`); //O(1)
}

compressFewBox(["box1", "box2", "box3"]); // O(2) constant time
console.log("compressFirstBox = O(2) constant time");



/************ Exercise 1 **************/

// What is the Big O of the below function? (Hint, you may want to go line by line)
const anotherFunction = () => {};
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; //O(1)
}

// 1 + 1 + n + n + n + n + 1
// 3 + 4n
// O(3+4n)
//O(n)

console.log("funChallenge = O(n) linear time");


/************ Exercise 2 **************/

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// O( 4 + 4n + 3n)
// O( 4 + 7n )
// O(n)

console.log("anotherFunChallenge = O(n) linear time");

/************ Exercise 3 **************/

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2); // O(1)
    var index = 0; // O(1)

    while (index < middleIndex) { // O(n/2)
        console.log(items[index]); // O(n/2)
        index++; // O(n/2)
    }

    for (var i = 0; i < 100; i++) { //O(100)
        console.log('hi'); // O(100)
    }
}

// printFirstItemThenFirstHalfThenSayHi100Times([0,1,2,3,4,6])

// O( 3 + 3n/2 + 200)
// O (203 + 3n/2)
// O(3n/2)
// O (n)  //( Ignore all the constants)

console.log("anotherFunChallenge = O(n) linear time");

/************ Exercise 4 **************/

function compressAllBoxes(boxes) {
  boxes.forEach(function(box) {
    console.log("box = ", box); // O(n)
  });

  boxes.forEach(function(box) {
    console.log("box = ", box); // O(n)
  });
}

// O(2n)
// O(n) <-- Ignore constants 


/****** Different terms for inputs Examples******** */

// What if we have two input params to above function

function compressAllBoxes1(boxes, boxes2) {
  boxes.forEach(function(box) {
    console.log("box = ", box);
  });

  boxes2.forEach(function(box) {
    console.log("box = ", box);
  });
}

// We don't know the length of each array ( boxes, boxes2 )
// It mabe be 1 or it may be n 

// Big O == O(a+b)



/****** Log all pairs of array******** */
const boxes = ["a", "b", "c", "d"];

function logAllOairsOfArray(array) {
  for( let i = 0; i < array.length; i++) {
    for( let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}
  
logAllOairsOfArray(boxes);
// BigO = O( n * n ) => O(n^2) [ Quadratic Time]


/****** Log apairs of boxes ******** */
function logAllPairsOfBoxes(boxes) {
  boxes.forEach(function(firstBox) {
      boxes.forEach(function(secondBox) {
        console.log(firstBox, secondBox);
      });
  });
}

// BogO = O(n2)


/************* Drop non Dominants **************** */

function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5])

//BigO = O(n + n^2)
//BigO => O(n^2)   <--- Drop non dominants 


/************* SPACE Complexity 01 **************** */

function boooo(n) {
  for(let i = 0; i < n.length; i++) {
    console.log("booooo!");
  }
}

boooo([1,2,3,4,5]); 
// Space complexity = O(1)  -> There is only one extra space is created by this fucntion ( at i = 0 )

/************* SPACE Complexity 02 **************** */

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6);
// Space complexity  = O(n). -> new array will be created of length n 