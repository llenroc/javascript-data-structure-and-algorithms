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

