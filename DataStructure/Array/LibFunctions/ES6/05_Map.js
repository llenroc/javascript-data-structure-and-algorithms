//Array - Map - ES5
Array.prototype.myMap = function (callback) {
  let arr = [];
  for(let i=0; i<this.length; i++){
    arr.push(callback(this[i], i, this));
  }
  return arr;
};


// Array.map
function myES6Map([head, ...tail], fn) {
  if(head === undefined && !tail.length) {
    return [];
  }

  return tail.length ? [fn(head), ...myES6Map(tail, fn)] : [fn(head)];
}


function myES6Map2([head, ...tail], fn) {
  if(head === undefined && !tail.length) {
    return [];
  }
  
  if(tail.length === 0) {
    retrun [fn(head)]
  } else {
    return [fn(head)].concat(myES6Map(tail, fn));
  }
}

(function(){
  const logs = new ConsoleLog("ES6_Map", false);
  const testNumbers = [1,2,3];
  function multiply(n) {
    return n*2;
  }

  logs.push(`Double valiues in ${testNumbers}`, myES6Map(testNumbers, multiply));     // "[2,4,6]"
  logs.push(`Double valiues in ${testNumbers}`, myES6Map2(testNumbers, multiply));    // "[2,4,6]"
  logs.print();
})();
