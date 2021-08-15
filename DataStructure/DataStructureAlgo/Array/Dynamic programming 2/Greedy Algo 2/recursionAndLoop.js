/**
 * Common patter of recursion 
 * 
 * 1. Wrapper function 
 * 2. Accumulators
 * 
 */


// Example 1 - Solution 1 - iterative way 
function computeFactorial(num) {
  var result = 1;

  for(var i = 2; i <= num; i++) {
    console.log(`result = ${result} * ${i} (${result * i})`);
    result *= i;
  }

  return result;
}

console.log(computeFactorial(6));



// Example 1- Solution 2 - Recursive way 

function computeFactorialRecursive(num) {
  if(num === 1) {
    console.log("hitting base code");
    return 1;
  }
  console.log(`returning ${num} * computeFactorialRecursive(${num} - 1)`);
  return num * computeFactorialRecursive(num - 1);
}

console.log(`recursive = ${computeFactorialRecursive(6)}`)


// Example 2 - Solution 1 - iterative way
function logNumbers(start, end) {
  
  console.log(`iteratively looping from ${start} until ${end}`);
  
  for(var i = start; i <= end; i++) {
    console.log('hitting index', i);
  }
}

console.log('~~~ logNumbers ~~~')
logNumbers(1,2);


// Example 2 - Solution 2 - Recursive way 
function logNumbersRecursively(start, end) {
  
  console.log(`recursively looping from ${start} until ${end}`);
  
  function recurse(i) {
    console.log('hitting index', i);

    if(i < end) {
      recurse(i + 1);
    }
  }

  recurse(start);
}

console.log('~~~ logNumbersRecursively ~~~')
logNumbersRecursively(1,3);
