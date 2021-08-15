// Task: Implement bubbleSort

function bubbleSort(list) {
  for(let index = 0; index < list.length - 1; index++ ) {
    for(let count = index + 1; count < list.length; count++) {
      if(list[count] < list[index] ) {
         const temp = list[index];
         list[index] = list[count];
         list[count] = temp;
      }
    }
  }
  return list;
}


console.log(`Bubble sort for [1,7,3,10] = ${bubbleSort([1,7,3,10])}`);
console.log("~~~~~~~~~~~~~~~~~~~\n\n\n\n");


console.log(`Bubble sort for [1,7,3,10,4] = ${bubbleSort([1,7,3,10,4])}`);