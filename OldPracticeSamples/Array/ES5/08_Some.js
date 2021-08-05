//Array - some
Array.prototype.mySome = function (callback, context){
  for(let i = 0; i < this.length; i++) {
    if(callback.call(context, this[i], i, this)){
      return true;
    }
  }
  return false;
};

(function(){
  const logs = new ConsoleLog("ES5_Some", false);
  const allNumberAbove10 = [11,12,25,15];
  const numberArray = [5,7,10,2,25,15];

  const numberArrayResult = numberArray.mySome(function(value){
    return value > 10;
  });
  const resultAbove10 = allNumberAbove10.mySome(function(value){
    return value > 10;
  });
  logs.push(`[${allNumberAbove10}] = All values > 10 = `, resultAbove10);
  logs.push(`[${numberArray}] = All values > 10 = `, numberArrayResult);
  logs.print();
})();
