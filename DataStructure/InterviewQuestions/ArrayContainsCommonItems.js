// 2 parameters - arrays - no size limit
// return true or false

const array1 = ['a', 'b', 'c', 'd', 'x'];
const array2 = ['z', 'y', 'l'];

/*******. Solution 1 ****** */

function containsCommonItems(array1, array2) {
  for(let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if(array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
}


console.log(containsCommonItems(array1, array2));
// Time complexity (Big O) = O(a * b);
// Space complexity(Big O) = O(1);  <- not creating any new array or space ( ignore i and J as those are constant space)


/*******. Solution 2 ****** */

function containsCommonItems2(array1, array2) {
  const map = {};
  for (let i = 0; i < array1.length; i++ ){
    if(!map[array1[i]]) {
      map[array1[i]] = true;
    }
  }
  // console.log(map);

  for (let j = 0; j < array2.length; j++) {
    if(map[array2[j]]) return true;
  }
  return false;
}


console.log(containsCommonItems2(array1, array2));
// Time complexity (Big O) = O(a + b);
// Space complexity (Big O) = O(a) <-- creating new array with space of first array length




/*******. Solution 3 ****** */
function containsCommonItems3(array1, array2) {
  return array1.some(item => array2.includes(item));
}
console.log(containsCommonItems3(array1, array2));


/*

1. Think about time and space complexity
2. Think about how can you brealk the code
  - Can arrugments time be different type
      - Number, null, [], undefined 
  - Can argument be missing 
  
3- Break the code in smaller part 

*/