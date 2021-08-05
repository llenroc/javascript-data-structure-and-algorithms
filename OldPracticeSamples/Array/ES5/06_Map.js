//Array - Map
Array.prototype.myMap = function (callback) {
  let arr = [];
  for(let i=0; i<this.length; i++){
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

(function(){
  const logs = new ConsoleLog("ES5_Map", false);

  const testArray = ['My', 'Test', 'Array'];

  const mappedArray = testArray.myMap(function(value, index, arr){
                                  return {
                                    index,
                                    value
                                  };
                                });
  logs.push(`mappedArray for [${testArray}]=`, mappedArray);
  logs.print();
})();
