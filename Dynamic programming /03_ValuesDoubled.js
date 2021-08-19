

function double([number, ...rest]){
  if(!number){
    return [];
  } else {
    return rest.length ? [2*number, ...(double(rest))] : [2*number];
  }
};

(function(){
  const logs = new ConsoleLog("Double", false);
  const numbers = [1,2,3];

  logs.push(`[${numbers}] = `, double(numbers)); //[2,4,6]
  logs.print();
})();
