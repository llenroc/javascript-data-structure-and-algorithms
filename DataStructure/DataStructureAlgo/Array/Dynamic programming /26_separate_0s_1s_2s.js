//https://www.youtube.com/watch?v=BOt1DAvR0zI&list=PLeIMaH7i8JDjd21ZF6jlRKtChLttls7BG&index=10&ab_channel=VivekanandKhyade-AlgorithmEveryDay

/** ~~~~~~~ Dutch National Flag problem ~~~~~~~ */
// Separate 0's, 1's and 2's together 

const testArray = [0,1,1,0,1,2,1,2,0,0,0,1];

function swap(list, x, y) {
  [ list[x], list[y] ] = [ list[y], list[x] ];
}
function separate_0_1_2(array) {
  let low = 0;
  let high = array.length - 1;
  let mid = 0;
  while (mid <= high ) {
    switch(array[mid]) {
      case 0:
        swap(array, low, mid);
        low++;
        mid++;
        break;
      case 1: 
        mid++;
        break;
      case 2: 
        swap(array, mid, high);
        high--;
        break;
    }
  }
  console.log(`array = ${array}`);
}

separate_0_1_2(testArray);
