let x = 10, y = 20;

[ y, x ] = [ x, y ]
console.log(x, y); // 20, 10


const array = [10,20,30,40];
function swap(array, i, j) {
  [ array[i], array[j] ] = [ array[j], array[i] ];
}

swap(array, 0,1)
console.log(array); // [20, 10, 30, 40]