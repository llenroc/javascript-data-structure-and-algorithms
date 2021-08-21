/**
 * Linear search - Serach for a value in an array by checking each value in order
 */


// TASK: Implement linear search.
function linearSearch(list, item) {
  let index = -1;
  list.forEach((listItem, i) => {
    if (listItem === item) {
      index = i;
    }
  });
  return index;
}

console.log(linearSearch([2,6,7,90,103], 90));
// Time complexity - O(n) | linear

// Other condition to be considered are
// 1. Do we need to return first match index
// 2. Do we need to return to last match index