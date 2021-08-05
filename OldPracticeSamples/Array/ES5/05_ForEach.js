//Array - ForEach 
Array.prototype.myForEach = function(callback) {
  for(let i=0; i<this.length; i++){
    callback(this[i], i, this);
  }
};

(function(){
  const logs = new ConsoleLog("ES5_ForEach", false);

  const testArray = ['My', 'Test', 'Array'];

  testArray.myForEach(function(value, index, arr){
    logs.push(`index = ${index}, value =`,value);
  });
  logs.print();
})();
