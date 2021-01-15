// Compare two array values and find missing values

var firstArray = [1,2,3,4,5,6];
var secondArray = [3,4,6];

var result = firstArray.filter(item=>secondArray.indexOf(item)==-1);

console.log(result);