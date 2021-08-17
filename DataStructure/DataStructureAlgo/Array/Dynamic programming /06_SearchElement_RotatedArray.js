
// https://www.youtube.com/watch?v=uufaK2uLnSI&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=4
//Find element in circularly rotating array 


// Approach  - 
//.    - Binary Search only works on disticts value 
//.    - No duplicates 

/*
Case 1 - array[mid] === value return mid;
Case 2 - array[mid] <= array[hi]
          if x > array[mid] && x <= array[high]
              lo = mid+1;
          else hi = mid-1;
Case 3 - array[lo] <= array[mid]
          if x >= array[lo] && x < array[mid]
              hi = mid-1;
          else 
              lo = mid+1;  


*/


function searchElementInRotatedArray(array, value) {
  let lo = 0;
  let hi = array.length - 1;
  while(lo <= hi) {
      const mid = Math.floor((lo+hi)/2);
      if (array[mid] === value) return mid;
      else if (array[mid] <= array[hi]) {
        if(value > array[mid] && value <= array[hi]) lo = mid+1;
        else hi = mid-1; 
      }
      else {
        if(value >= array[lo] && value < array[mid]) hi = mid-1;
        else lo = mid+1; 
      }
  }

  return -1;
}


const testArray = [9,10,11,12,2,3,4,5,6,7,8];
console.log(`Index of 4. is 6 = ${searchElementInRotatedArray(testArray, 4)}`);
console.log(`Index of 9. is 0 = ${searchElementInRotatedArray(testArray, 9)}`);
console.log(`Index of 8. is 10 = ${searchElementInRotatedArray(testArray, 8)}`);
console.log(`Index of 2. is 4 = ${searchElementInRotatedArray(testArray, 2)}`);

