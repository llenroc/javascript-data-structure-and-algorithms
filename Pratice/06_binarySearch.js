// Perform only for sorted array 

function binarySearch(array, value) {

  const recursion = (array, lo, hi) => {
    if(lo > hi) return -1; 
    const mid = Math.floor((lo + hi)/2);
    if(array[mid] === value) return mid;
    if(array[mid] > value)
      return recursion(array, lo, mid-1);
    else 
      return recursion(array, mid+1, hi);
  }

  return recursion(array, 0, array.length -1);
}

const testArray = [0,1,2,3,4,5,6,7,8,9,10];
console.log(`IndexOf 0 = ${binarySearch(testArray, 0)}`);
console.log(`IndexOf 4 = ${binarySearch(testArray, 4)}`);
console.log(`IndexOf 10 = ${binarySearch(testArray, 10)}`);



// https://www.youtube.com/watch?v=OE7wUUpJw6I&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=1&t=15s
function binarySearchFirstOccrance(array, value) {
  let firstOccurance = -1;
  const recursion = (lo, hi) => {
    if(lo > hi) return -1; 
    const mid = Math.floor((lo + hi)/2);
    if(array[mid] === value) {
      firstOccurance = mid;
      return recursion(lo, mid-1);
    }
    
    if(array[mid] > value)
        return recursion(lo, mid-1);
      else
        return recursion(mid+1, hi);
  }

  recursion(0, array.length -1);
  return firstOccurance;
}

const testArray1 = [0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,3,4,5];
console.log(`First Occurance of 1 is 1 = ${binarySearchFirstOccrance(testArray1, 1)}`); // 1
console.log(`First Occurance of 2 is 12 = ${binarySearchFirstOccrance(testArray1, 2)}`); // 12
console.log(`First Occurance of 3 is 15 = ${binarySearchFirstOccrance(testArray1, 3)}`); // 15


function binarySearchLastOccrance(array, value) {
  let lastOccurance = -1;
  const recursion = (lo, hi) => {
    if(lo > hi) return -1; 
    const mid = Math.floor((lo + hi)/2);
    if(array[mid] === value) {
      lastOccurance = mid;
      return recursion(mid+1, hi);
    }
    
    if(array[mid] > value)
        return recursion(lo, mid-1);
      else
        return recursion(mid+1, hi);
  }

  recursion(0, array.length -1);
  return lastOccurance;
}

const testArray2 = [0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,3,4,5];
console.log(`Last Occurance of 1 is 11 = ${binarySearchLastOccrance(testArray2, 1)}`); // 11
console.log(`Last Occurance of 2 is 14 = ${binarySearchLastOccrance(testArray2, 2)}`); // 14
console.log(`Last Occurance of 3 is 17 = ${binarySearchLastOccrance(testArray2, 3)}`); // 17


function binarySearchIterative(array, value) {
    let lo = 0;
    let hi = array.length-1;
    let mid;
    while (lo <= hi) { 
      mid = Math.floor((lo+hi)/2);
      if(array[mid] === value) return mid;
      if(array[mid] > value)
        hi = mid-1; 
      else
        lo = mid+1;
    }
    return -1;
}

console.log("\n");
const testArray4 = [0,1,2,3,4,5,6,7,8,9,10];
console.log(`IndexOf 0 = ${binarySearchIterative(testArray4, 0)}`);
console.log(`IndexOf 4 = ${binarySearchIterative(testArray4, 4)}`);
console.log(`IndexOf 10 = ${binarySearchIterative(testArray4, 10)}`);

function binarySearchIterativeFirstOccurance(array, value) {
    let lo = 0;
    let hi = array.length-1;
    let mid;
    let result = -1;
    while (lo <= hi) { 
      mid = Math.floor((lo+hi)/2);
      if(array[mid] === value) {
        result = mid;
        hi = mid-1;
      } else {
          if(array[mid] > value)
            hi = mid-1; 
          else
            lo = mid+1;
      }
      
    }
    return result;
}

console.log("\n");
const testArray5 = [0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,3,4,5];
console.log(`First Occurance of 1 is 1 = ${binarySearchIterativeFirstOccurance(testArray5, 1)}`); // 1
console.log(`First Occurance of 2 is 12 = ${binarySearchIterativeFirstOccurance(testArray5, 2)}`); // 12
console.log(`First Occurance of 3 is 15 = ${binarySearchIterativeFirstOccurance(testArray5, 3)}`); // 15


function binarySearchIterativeLastOccurance(array, value) {
    let lo = 0;
    let hi = array.length-1;
    let mid;
    let result = -1;
    while (lo <= hi) { 
      mid = Math.floor((lo+hi)/2);
      if(array[mid] === value) {
        result = mid;
        lo = mid+1;
      } else {
          if(array[mid] > value)
            hi = mid-1; 
          else
            lo = mid+1;
      }
      
    }
    return result;
}

console.log("\n");
const testArray6 = [0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,3,4,5];
console.log(`First Occurance of 1 is 1 = ${binarySearchIterativeLastOccurance(testArray6, 1)}`); // 11
console.log(`First Occurance of 2 is 12 = ${binarySearchIterativeLastOccurance(testArray6, 2)}`); // 14
console.log(`First Occurance of 3 is 15 = ${binarySearchIterativeLastOccurance(testArray6, 3)}`); // 17


// Count number for Occurance in an sorted array
// https://www.youtube.com/watch?v=pLT_9jwaPLs&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=2


// Approach 1 - iterative solution
function findOccurance(array, value, searchFirst) {
    let lo = 0;
    let hi = array.length-1;
    let mid;
    let result = -1;
    while (lo <= hi) { 
      mid = Math.floor((lo+hi)/2);
      if(array[mid] === value) {
        result = mid;
        if(searchFirst) {
          hi = mid-1;
        } else {
          lo = mid+1;
        }
      } else {
          if(array[mid] > value)
            hi = mid-1; 
          else
            lo = mid+1;
      }
      
    }
    return result;
}


function numberOfOccrance(array, value) {
  const first = findOccurance(array, value, true);
  const last = findOccurance(array, value, false);
  // console.log(`firstIndex = ${first}, lastIndex = ${last}`);
  return last - first + 1;
}

const testArray7 = [0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,4,5];
console.log(`\nOccurance of 1 is 11 = ${numberOfOccrance(testArray7, 1)}`, "\n"); // 11
console.log(`Occurance of 2 is 3 = ${numberOfOccrance(testArray7, 2)}`, "\n"); // 3
console.log(`Occurance of 3 is 2 = ${numberOfOccrance(testArray7, 3)}`, "\n"); // 2



//Approach 2 -  Recursive solution
function findOccuranceRecursive(array, value, searchFirst) {
    let occurance = -1;
    const recursion = (lo, hi) => {
      if(lo > hi) return -1; 
      const mid = Math.floor((lo + hi)/2);
      if(array[mid] === value) {
        occurance = mid;
        if(searchFirst) {
          return recursion(lo, mid-1);
        } else {
          return recursion(mid+1, hi);
        }
      }
      
      if(array[mid] > value)
          return recursion(lo, mid-1);
        else
          return recursion(mid+1, hi);
    }

    recursion(0, array.length -1);
    return occurance;
}


function numberOfOccranceRecursive(array, value) {
  const first = findOccuranceRecursive(array, value, true);
  const last = findOccuranceRecursive(array, value, false);
  // console.log(`firstIndex = ${first}, lastIndex = ${last}`);
  return last - first + 1;
}

const testArray8 = [0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,4,5];
console.log(`\nOccurance of 1 is 11 = ${numberOfOccranceRecursive(testArray8, 1)}`, "\n"); // 11
console.log(`Occurance of 2 is 3 = ${numberOfOccranceRecursive(testArray8, 2)}`, "\n"); // 3
console.log(`Occurance of 3 is 2 = ${numberOfOccrance(testArray8, 3)}`, "\n"); // 2
