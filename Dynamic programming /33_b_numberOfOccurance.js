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
console.log(`Occurance of 3 is 2 = ${numberOfOccrance(testArray8, 3)}`, "\n"); // 2// 2