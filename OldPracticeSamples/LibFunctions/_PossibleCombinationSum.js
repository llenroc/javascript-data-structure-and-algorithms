/*
Reference => https://gist.github.com/samerbuna/aa1f011a6e42d6deba46
*/

var possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) { return true; }
  if (arr[0] > n) { return false; }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length, combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount ; i++ ) {
    var combinationSum = 0;
    for (var j=0 ; j < listSize ; j++) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
};

(function(){
  const logs = new ConsoleLog("PossibleCombinationSum", false);
  logs.push(`possible combination of 8 in [2,3,4,6] =`, possibleCombinationSum([2,3,4,6], 8));
  logs.print()
})();
