/*

mergeSortedArrays([0,3,4,31], [3,4,6,30]);

expected output - [0, 3, 3, 4, 4, 6, 30, 31]

*/

function mergeSortedArrays(array1, array2) {
  let array1Counter = 0;
  let array2Counter = 0;
  const mergedArray = [];
  if ( !array1 || !array2 ){
    return [];
  }
  if (array1.length === 0) {
    return array2;
  }
  if ( array2.length === 0) {
    return array1;
  }
  while (array1[array1Counter] || array2[array2Counter]) {
    console.log(`1= ${array1[array1Counter]}, 2= ${array2[array2Counter]}`)
    // Important check - if array2[array2Counter] === undefined not added it will become infinite loop
    if (array2[array2Counter] === undefined ||  array1[array1Counter] < array2[array2Counter]) {
      mergedArray.push(array1[array1Counter]);
      array1Counter++;
    } else {
      mergedArray.push(array2[array2Counter]);
      array2Counter++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));
console.log(mergeSortedArrays([], [3,4,6,30]));
console.log(mergeSortedArrays([1], [3,4,6,30]));

// console.log(1 < undefined);