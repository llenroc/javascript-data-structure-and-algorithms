// https://www.youtube.com/watch?v=W-090WziKAs&list=PLeIMaH7i8JDjd21ZF6jlRKtChLttls7BG&index=11&ab_channel=VivekanandKhyade-AlgorithmEveryDay

/*
  Reverse an array without using external array.
*/


const testArray1 = [1,2,3,4,5,6,7,8];
const testArray2 = ['a','b','c','d','e','f'];

function swap(array, x, y) {
  [ array[x], array[y] ] = [ array[y], array[x] ];
}

function reverseArray(array) {
  let low = 0;
  let high = array.length - 1;
  while(low < high) {
    swap(array, low, high);
    low++;
    high--;
  }
  return array;
}

console.log(`Reverse of array = ${reverseArray(testArray1)}`);
console.log(`Reverse of array = ${reverseArray(testArray2)}`);