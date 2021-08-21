function myES6Reduce([head, ...tail], fn, initialValue){
  if(head === undefined && tail.length === 0){
    return initialValue;
  }
  
  if(!initialValue) {
    const [newHead, ...newTail] = tail;
    return myES6Reduce(newTail, fn, fn(head, newHead));
  }
  
  return tail.length ? myES6Reduce(tail, fn, fn(initialValue, head)) : fn(initialValue, head) ;
}

(function(){
  const logs = new ConsoleLog("ES6_Map", false);
  const allNumberAbove10 = [11,12,25,15];
  const numberArray = [5,7,10,2,25,15];
  const nestedArray = [
      [0, 1],
      [2, 3],
      [4, 5]
  ];
  
  function add(a,b) {
    return a+b;
  }

  const sumAllNumberArrayValues = myES6Reduce(numberArray, add);
  const sumAllNumberAbove10Values = myES6Reduce(allNumberAbove10, add, 10);
  
  const flattened = myES6Reduce(nestedArray, function(a, b) {
      return a.concat(b);
  });

  logs.push(`total sum of ${numberArray} = `, sumAllNumberArrayValues); //64
  logs.push(`total sum of ${allNumberAbove10} = `, sumAllNumberAbove10Values); //73
  logs.push(`flattened = [[0,1],[2,3],[4,5]] = `, flattened); //[ 0, 1, 2, 3, 4, 5 ]
  logs.print();
})();
