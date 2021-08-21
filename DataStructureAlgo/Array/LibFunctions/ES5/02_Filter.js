//Array - Filter

Array.prototype.myFilter = function (callback, context) {
  let result = [];
  for(let i = 0; i<this.length; i++) {
    if(callback.call(context, this[i], i, this)){
      result.push(this[i]);
    }
  }
  return result;
};

(function() {
  const logs = new ConsoleLog("ES5_Filter", false);

  const numberArray = [5,7,10,2,25,15];

  const filteredArray = numberArray.myFilter(function(value){
    return value > 10;
  });
  logs.push(`Filtered Array > 10 in ${numberArray}`, filteredArray);
  logs.print();
})();


/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// _.filter always return a new array 

// Create a new array name storage 
// loop through given array 
    // check if callback return true for given iterative value 
    // If return true push to storage 
// return storage

_.filter = function(array, callback) {
  const storage = [];
  // _.each is going to take care of Object list and array
  _.each(array, (item, index, list) => {
      if(callback(item, index, list) === true) {
        storage.push(item);
      }
  });
  return storage;
}