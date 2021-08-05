//Array Join
function myES6Join([head, ...tail], separator = `,`) {
  if(head === undefined && !tail.length) {
    return '';
  }
  return tail.length ? `${head}${separator}${myES6Join(tail, separator)}` : head;
}



(function(){
  const logs = new ConsoleLog("ES6_Join", false);
  const testArray = ['My', 'Test', 'Array'];
  const filterNumbers = [1,2,13,11,10];

  logs.push(`[${filterNumbers}] =>`, myES6Join(filterNumbers, '-'));     // "1-2-13-11-10"
  logs.push(`[${testArray}] =>`, myES6Join(testArray, '_'));     // "1-2-13-11-10"
  logs.print();
})();
