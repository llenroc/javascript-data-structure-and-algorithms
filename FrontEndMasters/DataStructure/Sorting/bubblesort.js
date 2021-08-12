
function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}


//bubbleSort(list)
//for i, loop through 0 to n-2
  //for j loop i+1 to n-1
    //if A[i] is greater than A[j]
      //swap A[i] with A[j]
function bubblesort1(array) {
  for(let i = 0; i < array.length - 1; i++) {
    for(let j = i+1; j < array.length; j++) {
      if(array[i] > array[j]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}

console.log(bubblesort1([5,1,4,9,7]));

//bubbleSort(list)
//for k, loop through 1 to n-1
  //for i loop 0 to n-2
    //if A[i] is greater than A[i+1]
      //swap A[i] with A[i+1]
function bubblesort2(array) {
  for(let i = 1; i < array.length - 1; i++) {
    for(let j = 0; j < array.length - 2; j++) {
      if(array[j] > array[j+1]) {
        swap(array, j, j+1);
      }
    }
  }
  return array;
}

console.log(bubblesort([5,1,4,9,7]));