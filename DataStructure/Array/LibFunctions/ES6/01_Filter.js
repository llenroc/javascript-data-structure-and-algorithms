// ES5
Array.prototype.myFilter = function (callback, context) {
  let result = [];
  for(let i = 0; i<this.length; i++) {
    if(callback.call(context, this[i], i, this)){
      result.push(this[i]);
    }
  }
  return result;
};


//Array filter
function myES6Filter([head, ...tail], fn) {
  const newHead = fn(head) ? [head] : [];
  return tail.length ? [...newHead, ...myES6Filter(tail, fn)] :  newHead;
}

(function(){
  const logs = new ConsoleLog("ES6_Filter", false);
  const filterNumbers = [1,2,13,11,10];
  function greater10(n) {
    return n > 10
  }

  logs.push(`Items > 10 in [${filterNumbers}]` , myES6Filter(filterNumbers, greater10));     // "[13,11]"
  logs.print();
})();
