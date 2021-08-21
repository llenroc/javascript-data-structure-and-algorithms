// https://www.youtube.com/watch?v=gf7vdIin0dk&list=PLeIMaH7i8JDjd21ZF6jlRKtChLttls7BG&ab_channel=VivekanandKhyade-AlgorithmEveryDay

const testArray = [1,2,2,3,3,4,4,4,5];

//Approach - 1 -> Using extra space or temp AlgorithmEveryDay
function removeDuplicateFromSortedArray(array) {
  const tempArray = [];
  let counter = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if(array[i] != array[i+1]) {
      tempArray[counter] = array[i];
      counter++;
    }
  }
  tempArray[counter] = array[array.length - 1];

  console.log(tempArray);
}

removeDuplicateFromSortedArray(testArray);



//Approach - 2 -> Using constant space 
function removeDuplicateFromSortedArray2(array) {
  let counter = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if(array[i] != array[i+1]) {
      array[counter] = array[i];
      counter++;
    }
  }
  array[counter] = array[array.length - 1];

  console.log(array.slice(0, counter+1));
}

removeDuplicateFromSortedArray2(testArray);