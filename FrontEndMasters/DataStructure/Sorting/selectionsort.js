function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function selectionsort(arr) {
  for(let i = 0; i < (arr.length - 1); i++ ) {
      let min = arr[i], track;
      for(let j = i+1; j < arr.length; j++ ) {
          if (min > arr[j]) {
              min = arr[j];
              track = j;
          }
      }
      if(track){
          swap(arr, i, track);
      }
  }
  return arr;
} 


console.log(selectionsort([5,1,4,9,7]));