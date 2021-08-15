/**
 * 
 * Binary search - Search for a value in a "Sorted" array by cutting the 
 * side of the search area in half.
 * 
 * 
 * Sorted array - Binary serach is best option 
 * 
 * 
 */

function binarySearch(list, item) {
  let min = 0;
  let max = list.length - 1;
  while(min <= max) {
    const guess = Math.floor((min + max) / 2);
    const current = list[guess];
    if(list[guess] == item){
      return guess;
    }

    if(current < item) {
      min = guess + 1; 
    } else {
      max = guess - 1;
    }
  }
  return -1; // Do not forgot this condition
}

console.log(`Index of 90 in [2,6,7,90,103] is ${binarySearch([2,6,7,90,103], 90)}`);
console.log(`Index of 6 in [2,6,7,90,103] is ${binarySearch([2,6,7,90,103], 6)}`);
console.log(`Index of 13 in [2,6,7,90,103] is ${binarySearch([2,6,7,90,103], 13)}`);

// Time complexity - O(log(n))