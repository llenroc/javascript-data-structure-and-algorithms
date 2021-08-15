/**
 * Naive Sorts - Keep looping and comparing values until the list is sorted
 * 
 * 1. Bubble sort - Loop through an array, comparing adjacent indices 
 *    and swapping the greater value to the end. TC-> O(n^2)
 * 
 * 2. Insertion sort - TC -> O(n^2)
 * 3. Selection sort - TC  -> O(n^2)
 *  
 * 
 * Divide & conquer Sorts - Recursively divide lists and sort 
 * smaller parts of list until entire list is sorted
 * 
 * 1. MergeSort - Most favourable -> TC = n(log(n))
 * 2. QuickSort -> TC = n(log(n))
 * 
 */

// Merge sort - Recursively merge sorted sub-lists.


/**
 * PseudoCode : Merge Routine 
 *
 *     merge(L, R)
 *     [3,27]  // [9,10]
 *     Initiate empty array
 *     Compare the first index of the left array to the first index of the right array
 *     Push the lower value to empty aarray
 *     Shilft the array with the lower value.
 *     repeat untill both arrays are empty 
 *
 */

// TASK - implement mergeSort
// protip - Split the array into halves and merge them Recursively
// protip - return once we hit an array with a single item. That is sorted array of size 1.
// protip - compare the arrays item by item and return the convatenated result


function merge(leftArray, rightArray) {
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [];
  while(leftArray.length > 0 || rightArray.length > 0) {
    if (leftArray.length === 0) {
      result = result.concat(rightArray);
      break;
    } else if (rightArray.length === 0) {
      result = result.concat(leftArray);
      break;
    }

    if(leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftArray.shift();
    } else {
      result.push(rightArray[rightIndex]);
      rightArray.shift();
    }    
  }
  return result;
}

console.log(`Merged array for [1,7] & [3,10] = ${merge([1,7 ], [3,10])}`);
console.log("~~~~~~~~~~~~~~~~~~~\n\n\n\n");
console.log(`Merged array for [1,7] & [3,10,5] = ${merge([1,7 ], [3,10,15])}`);
console.log("~~~~~~~~~~~~~~~~~~~\n\n\n\n");
console.log(`Merged array for [10] & [4] = ${merge([10 ], [4])}`);
console.log("~~~~~~~~~~~~~~~~~~~\n\n\n\n");

/**
 * PseudoCode: MergeSort
 * 
 * mergeSort(list)
 *    base case: if list.length < 2, return
 *    break the list into two halves L & R
 *    LSorted = mergeSort(L);
 *    RSorted = mergeSort(R);
 *    return merge(LSorted, RSorted);
 */

function mergeSort(list) {
  if (list.length < 2) {
    return list;
  }
  const leftList = list.slice(0, (list.length / 2));
  const rightList = list.slice((list.length / 2), list.length);
  console.log(`leftList = ${leftList},  rightList = ${rightList}`);
  const LSorted = mergeSort(leftList);
  const RSorted = mergeSort(rightList);
  console.log(`LSorted = ${LSorted},  RSorted = ${RSorted} `);
  return merge(LSorted, RSorted);
}

console.log(`Merge sort for [1,7,3,10] = ${mergeSort([1,7,3,10])}`);
console.log("~~~~~~~~~~~~~~~~~~~\n\n\n\n");


console.log(`Merge sort for [1,7,3,10,4] = ${mergeSort([1,7,3,10,4])}`);
console.log("~~~~~~~~~~~~~~~~~~~\n\n\n\n");

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
