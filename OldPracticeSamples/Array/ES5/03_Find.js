Array.prototype.myFind = function(callback, context) {
  let result;
  for(let i = 0; i<this.length; i++) {
    if(callback.call(context, this[i], i, this)){
      result =  this[i];
      break;
    }
  }
  return result;
}

function testFun(testArray, n) {

  const result = testArray.myFind(function(value){
    return value > n;
  });
  return result;
}
  
  
  
(function() {
  const logs = new ConsoleLog("ES5_Find", false);

  const testArray=[1,2,4,6];

  logs.push(`Find > 2 in ${testArray} = `, testFun(testArray, 2)); // 4
  logs.push(`Find > 7 in ${testArray} = `, testFun(testArray, 7)); // undefined
  logs.print();
})();
