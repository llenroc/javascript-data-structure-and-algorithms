function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}


function insertionsort(arr) {
    for( let index = 1; index < arr.length; index++) {
        let compareIndex = index-1;
        while(arr[compareIndex] > arr[index] && compareIndex > -1) {
            swap(arr, compareIndex, index);
            index = compareIndex;
            compareIndex--;
        }
    }
    return arr;
}

console.log(insertionsort([5,1,4,9,7]));

