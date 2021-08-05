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
