/**
 * @function Merge two sorted array into third array
 * @input array1 and array2
 * 
 *  ~~~~~~ pseduo code ~~~~~~~
 * Step1 - Loop through array1 with counter i and array2 with counter j
 * Step2 - If array1[i] < array2[j]
 *            push array1[i] to temp array
 *            increment i 
 *         if array2[j] < array1[i]
 *            push array2[j] to temp array
 *            increment j
 * Step3 - Break condition i < array1.length && j < array2.length
 * Step4 - Merge remaining element into temp array  
 *        If (i < array1.length )
 *            Move array1(i, array1.length -1)
 *        If (J < array2.length)
 *            Move array2(j, array2.length -1)
 * Step5 - return temp array 
 */

console.log("~~~~~~~ mergesort.js ~~~~~~~~");

function merge(array1, array2) {
  let i = 0; 
  let j = 0;
  let sorted = [];
  while (i < array1.length && j < array2.length) {
    if(array1[i] < array2[j]) {
      sorted.push(array1[i]);
      i++;
    } else {
      sorted.push(array2[j]);
      j++;
    }
  }
  if(i < array1.length) {
    const remaining  = array1.slice(i);
    sorted =  sorted.concat(remaining);
  }
  if(j < array2.length) {
    const remaining  = array2.slice(j);
    sorted = sorted.concat(remaining);
  }
  return sorted;
}

const testArray1 = [1,3,5,7,9,11];
const testArray2 = [2,4,6,8,10];

console.log(merge(testArray1, testArray2));

const testArray3 = [1];
const testArray4 = [];

console.log(merge(testArray3, testArray4));


function mergeSort(arr) {
  if(arr.length < 2) {
      return arr;
  }
  let left = arr.slice(0,arr.length/2);
  let right = arr.slice(arr.length/2);
  let lSorted = mergeSort(left);
  let rSorted = mergeSort(right);
  arr = merge(lSorted, rSorted);
  return arr;
}

const testArray = [1,3,2,4,6,8,10,5,7,9,11];

console.log(mergeSort(testArray));

